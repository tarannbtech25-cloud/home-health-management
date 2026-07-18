import sqlite3

conn = sqlite3.connect("database/home_health.db")
cursor = conn.cursor()

# Employees
cursor.execute("""
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    department TEXT,
    attendance TEXT,
    performance TEXT
)
""")

# Finance
cursor.execute("""
CREATE TABLE IF NOT EXISTS finance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    revenue INTEGER,
    expenses INTEGER,
    profit INTEGER
)
""")

# Marketing
cursor.execute("""
CREATE TABLE IF NOT EXISTS marketing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    leads INTEGER,
    sales INTEGER,
    campaign TEXT
)
""")

conn.commit()
conn.close()

print("✅ Database created successfully!")