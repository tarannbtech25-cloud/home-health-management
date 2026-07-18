from agents import Agent
from tools.database import get_attendance, add_employee

hr_agent = Agent(
    name="HR Agent",
    instructions="""
You are the HR Manager.

You can:
- Check attendance
- Add employees
- Manage employee records

Always use your available tools.
""",
    tools=[
        get_attendance,
        add_employee
    ]
)