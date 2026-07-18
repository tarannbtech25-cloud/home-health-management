from agents import function_tool
import pandas as pd


@function_tool
def get_company_report() -> str:
    finance = pd.read_csv("data/finance.csv").iloc[-1]
    employees = pd.read_csv("data/employees.csv")
    marketing = pd.read_csv("data/marketing.csv").iloc[-1]

    present = len(employees[employees["attendance"] == "Present"])
    absent = len(employees[employees["attendance"] == "Absent"])

    recommendation = []

    if finance["profit"] > 150000:
        recommendation.append("✅ Company profit is healthy.")

    if absent > 2:
        recommendation.append("⚠️ Employee absenteeism is high.")

    if marketing["sales"] > 20:
        recommendation.append("📈 Marketing campaign is performing well.")

    return f"""
🏥 HOME HEALTH DAILY REPORT

━━━━━━━━━━━━━━━━━━

💰 FINANCE

Revenue : ₹{finance['revenue']}
Expenses: ₹{finance['expenses']}
Profit  : ₹{finance['profit']}

━━━━━━━━━━━━━━━━━━

👥 HR

Present : {present}
Absent  : {absent}

━━━━━━━━━━━━━━━━━━

📈 MARKETING

Leads        : {marketing['leads']}
Sales        : {marketing['sales']}
Best Campaign: {marketing['campaign']}

━━━━━━━━━━━━━━━━━━

🤖 AI RECOMMENDATION

{chr(10).join(recommendation)}
"""