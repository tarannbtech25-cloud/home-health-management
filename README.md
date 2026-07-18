# Home Health AI Dashboard

An enterprise-grade, premium management console for modern home healthcare agencies. This dashboard provides complete visibility over daily patient care visits, staff rosters, company performance tracking, financials, marketing channels, and includes an AI business assistant.

---

## 🚀 How to Run the Application

Since script execution policies might restrict raw `npm` commands on some Windows systems, use one of the commands below to launch the development server safely:

### 1. Standard Start
```bash
npm run dev
```

### 2. Bypass Execution Policies (Recommended on Windows if standard start fails)
Run this command from your command prompt (CMD) or terminal:
```bash
cmd /c "npx vite --host"
```

Once started, open your browser and navigate to the address shown (usually `http://localhost:5173`).

---

## 📋 Module-by-Module Guide

Use the responsive sidebar to navigate between these modules:

### 1. 📊 Dashboard (Overview)
* **What it shows:** High-level metrics for patient visits, active employee ratios, monthly margins, and dynamic trend charts.
* **Key Features:**
  * Interactive charts showing **Revenue Trends** and **Revenue vs Expenses**.
  * Dynamic visual grids for **Staff Attendance** and product **Marketing Channels**.
  * **Recent Activity Roster:** A live log showing actions such as new admissions, patient warnings, payroll records, and marketing updates.
  * **Quick Actions:** Instant shortcuts to add employees, record payments, and schedule new patient visits.

### 2. 👥 HR Management
* **What it shows:** A complete employee database containing names, roles, departments, active status, attendance rates, and performance stars.
* **Key Features:**
  * **Search & Filters:** Search by employee name, role, or filter details by department.
  * **Employee Modals:** Complete forms to add new employees, edit existing staff, or safely view rich profiles.

### 3. 💰 Finance
* **What it shows:** An interactive ledger tracking total incoming capital vs. outgoing overhead costs.
* **Key Features:**
  * **Financial Metrics:** Instant snapshots of revenue, expenses, net profits, margins, and outstanding collections.
  * **Comparison Charts:** Graph comparisons of revenue vs. operational costs.
  * **Dynamic Ledger Tabs:** Toggle tables for Revenue records (Medicare, Medicaid, Private) and Expenses (Payroll, Supplies, Utilities). Click **"Add Revenue"** or **"Add Expense"** to post new records dynamically.

### 4. 📣 Marketing
* **What it shows:** Tracking active marketing channels (Google Ads, Social Media, Referrals) and active budgets.
* **Key Features:**
  * **Summary KPI Cards:** Instantly view Lead Conversions, Conversion Rates, and Campaign Average ROIs.
  * **Campaign Manager Table:** Manage active marketing campaigns, budgets, and actual spends with interactive visual gauges representing budget usage.

### 5. 🤖 AI Assistant (HealthAI)
* **What it shows:** An AI-powered virtual assistant offering analytics and operational insights.
* **Key Features:**
  * **Suggestion Chips:** Quick-click queries to analyze marketing ROI, trace attendance rates, or fetch financial summaries.
  * **Interactive Chat:** Ask complex questions about the healthcare business and receive detailed, structured markdown responses, complete with data tables.

### 6. 📄 Reports (Daily, Weekly, Monthly)
* **What it shows:** Aggregated reporting packages generated at different schedules.
* **Key Features:**
  * **Interval Tabs:** Easily toggle between **Daily**, **Weekly**, and **Monthly** intervals.
  * **Export Framework:** Simulate exports using the **PDF**, **Excel**, or **CSV** export options.
  * **Detailed Report Cards:** Explore operational, staff attendance, performance, and EBITDA reports in card containers.

### 7. ⚙️ Settings
* **What it shows:** Complete application and user settings panels.
* **Key Features:**
  * **Company Profile:** Update active organization names, addresses, contacts, and websites.
  * **Appearance:** Toggle themes (Light, Dark, System) and set customized branding accent colors.
  * **Notifications:** Manage toggles for SMS, push protocols, and specific digests.
  * **User Profile:** Manage Super Admin credential templates.
  * **API Keys Configuration:** Secure key panels for integrating models (e.g., GPT-4, Claude) and webhooks.

---

## 🛠️ API & Future Backend Integration

The project contains pre-configured API endpoints located in:
📂 `src/api/endpoints.js`

These functions are setup to interact with modern APIs. To hook this app up to a real backend database or LLM service:
1. Replace the mock return values in the endpoints with the respective domain addresses.
2. Integrate a production server (Node.js, Express, Python FastAPI, or Firebase) to handle persistent SQL transactions.
