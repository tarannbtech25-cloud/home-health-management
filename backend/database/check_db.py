import sqlite3

conn = sqlite3.connect("database/home_health.db")
cursor = conn.cursor()

print("Employees:", cursor.execute("SELECT COUNT(*) FROM employees").fetchone()[0])
print("Finance:", cursor.execute("SELECT COUNT(*) FROM finance").fetchone()[0])
print("Marketing:", cursor.execute("SELECT COUNT(*) FROM marketing").fetchone()[0])

conn.close()