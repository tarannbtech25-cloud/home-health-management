from agents import Agent

from tools.database import get_latest_profit

finance_agent = Agent(
    name="Finance Agent",
    instructions="""
You are the Finance Manager.

Whenever the user asks about:
- profit
- revenue
- expenses

Always use the available tools instead of making up data.
""",
    tools=[get_latest_profit],
)