import sqlite3

DB_PATH = "database/home_health.db"

def get_connection():
    return sqlite3.connect(DB_PATH)