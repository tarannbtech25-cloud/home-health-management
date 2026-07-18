from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI(title="Home Health AI Backend")

# Allow React frontend to access this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "database/home_health.db"


@app.get("/")
def home():
    return {
        "message": "🏥 Home Health AI Backend Running"
    }


@app.get("/dashboard")
def dashboard():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Finance
    cursor.execute("""
        SELECT revenue, expenses, profit
        FROM finance
        ORDER BY date DESC
        LIMIT 1
    """)

    finance = cursor.fetchone()

    if finance:
        revenue, expenses, profit = finance
    else:
        revenue = expenses = profit = 0

    # Employees
    cursor.execute("""
        SELECT COUNT(*)
        FROM employees
        WHERE attendance='Present'
    """)
    present = cursor.fetchone()[0]

    cursor.execute("""
        SELECT COUNT(*)
        FROM employees
        WHERE attendance='Absent'
    """)
    absent = cursor.fetchone()[0]

    # Marketing
    cursor.execute("""
        SELECT leads, sales, campaign
        FROM marketing
        ORDER BY date DESC
        LIMIT 1
    """)

    marketing = cursor.fetchone()

    if marketing:
        leads, sales, campaign = marketing
    else:
        leads = sales = 0
        campaign = "N/A"

    conn.close()

    return {
        "finance": {
            "revenue": revenue,
            "expenses": expenses,
            "profit": profit
        },
        "employees": {
            "present": present,
            "absent": absent
        },
        "marketing": {
            "leads": leads,
            "sales": sales,
            "campaign": campaign
        }
    }