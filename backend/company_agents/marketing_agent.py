from agents import Agent
from tools.database import get_sales_data

marketing_agent = Agent(
    name="Marketing Agent",
    instructions="""
You are the Marketing Manager.

Always use your tools when answering questions about:
- sales
- leads
- campaigns
- marketing performance
""",
    tools=[get_sales_data]
)