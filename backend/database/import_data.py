import sqlite3
import pandas as pd

conn = sqlite3.connect("database/home_health.db")
cursor = conn.cursor()

# Clear existing data
cursor.execute("DELETE FROM employees")
cursor.execute("DELETE FROM finance")
cursor.execute("DELETE FROM marketing")

# Read CSVs
employees = pd.read_csv("data/employees.csv")
finance = pd.read_csv("data/finance.csv")
marketing = pd.read_csv("data/marketing.csv")

# Import
employees.to_sql("employees", conn, if_exists="append", index=False)
finance.to_sql("finance", conn, if_exists="append", index=False)
marketing.to_sql("marketing", conn, if_exists="append", index=False)

conn.commit()
conn.close()

print("✅ Database refreshed successfully!")