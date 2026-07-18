from agents import Agent

from company_agents.hr_agent import hr_agent
from company_agents.finance_agent import finance_agent
from company_agents.marketing_agent import marketing_agent

from tools.report_tools import get_company_report

main_agent = Agent(
    name="Main Agent",
    instructions="""
YYou are the CEO Assistant of Home Health Care.

Your responsibilities:

1. Decide which specialist should answer.
2. Use HR Agent for employee questions.
3. Use Finance Agent for finance questions.
4. Use Marketing Agent for sales questions.
5. If the user asks for:
   - company report
   - business report
   - daily report
   - today's report

Always use the get_company_report tool.

Never invent company data.
Always use available tools.
""",
    handoffs=[
        hr_agent,
        finance_agent,
        marketing_agent,
    ],
    tools=[
        get_company_report,
    ],
)