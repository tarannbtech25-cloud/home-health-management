from agents import function_tool
from tools.db import get_connection


@function_tool
def get_latest_profit() -> str:
    """
    Returns the latest profit from the database.
    """
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT profit
        FROM finance
        ORDER BY id DESC
        LIMIT 1
    """)

    profit = cursor.fetchone()[0]

    conn.close()

    return f"Today's profit is ₹{profit}"


@function_tool
def get_attendance() -> str:
    """
    Returns today's attendance from the database.
    """
    conn = get_connection()
    cursor = conn.cursor()

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

    conn.close()

    return f"Present: {present}, Absent: {absent}"


@function_tool
def get_sales_data() -> str:
    """
    Returns the latest marketing data from the database.
    """
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT leads, sales, campaign
        FROM marketing
        ORDER BY id DESC
        LIMIT 1
    """)

    leads, sales, campaign = cursor.fetchone()

    conn.close()

    return (
        f"Today's Leads: {leads}, "
        f"Sales: {sales}, "
        f"Best Campaign: {campaign}"
    )
@function_tool
def add_employee(
    name: str,
    department: str,
    attendance: str,
    performance: str,
) -> str:
    """
    Adds a new employee to the database.
    """

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO employees
        (name, department, attendance, performance)
        VALUES (?, ?, ?, ?)
        """,
        (name, department, attendance, performance),
    )

    conn.commit()
    conn.close()

    return f"{name} added successfully."