from company_agents.hr_agent import hr_agent
from company_agents.finance_agent import finance_agent
from company_agents.marketing_agent import marketing_agent


def get_agent(department: str):
    department = department.lower()

    if department == "hr":
        return hr_agent

    elif department == "finance":
        return finance_agent

    elif department == "marketing":
        return marketing_agent

    return None