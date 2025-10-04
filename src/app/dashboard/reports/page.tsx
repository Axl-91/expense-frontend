function ReportsPage() {
  const reports = [
    { id: 1, source: "Salary", amount: 2500, type: "income" },
    { id: 2, source: "Groceries", amount: 120, type: "expense" },
    { id: 3, source: "Electricity Bill", amount: 80, type: "expense" },
    { id: 4, source: "Freelance Work", amount: 600, type: "income" },
    { id: 5, source: "Restaurant", amount: 75, type: "expense" },
    { id: 6, source: "Car Maintenance", amount: 300, type: "expense" },
    { id: 7, source: "Stock Dividend", amount: 200, type: "income" },
    { id: 8, source: "Internet Bill", amount: 50, type: "expense" },
    { id: 9, source: "Bonus", amount: 900, type: "income" },
    { id: 10, source: "Gas", amount: 90, type: "expense" },
    { id: 36, source: "Crypto Profit", amount: 1000, type: "income" },
    { id: 37, source: "Repairs", amount: 200, type: "expense" },
    { id: 38, source: "Lottery Win", amount: 500, type: "income" },
    { id: 39, source: "Charity Donation", amount: 60, type: "expense" },
    { id: 40, source: "Freelance Editing", amount: 300, type: "income" },
    { id: 41, source: "Movie Night", amount: 30, type: "expense" },
    { id: 42, source: "Interest on Savings", amount: 40, type: "income" },
    { id: 43, source: "Car Payment", amount: 250, type: "expense" },
    { id: 44, source: "App Royalties", amount: 350, type: "income" },
    { id: 45, source: "House Cleaning", amount: 90, type: "expense" },
    { id: 46, source: "Second Job", amount: 800, type: "income" },
    { id: 47, source: "Home Decor", amount: 150, type: "expense" },
    { id: 48, source: "Rent from Property", amount: 1200, type: "income" },
    { id: 49, source: "Travel", amount: 400, type: "expense" },
    { id: 50, source: "Affiliate Earnings", amount: 280, type: "income" },
  ];

  const incomes = reports.filter((r) => r.type === "income");
  const expenses = reports.filter((r) => r.type === "expense");

  const totalIncome = incomes.reduce((sum, r) => sum + r.amount, 0);
  const totalExpense = expenses.reduce((sum, r) => sum + r.amount, 0);
  const netBalance = totalIncome - totalExpense;

  const avgIncome = incomes.length
    ? (totalIncome / incomes.length).toFixed(2)
    : 0;
  const avgExpense = expenses.length
    ? (totalExpense / expenses.length).toFixed(2)
    : 0;

  return (
    <div className="p-6 bg-white/5 border border-slate-700 rounded-xl shadow-md text-gray-100 h-full">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight border-b border-slate-700 pb-2">
          List of Reports
        </h1>
      </header>

      <div className="mt-10 space-y-8">
        <section className="overflow-y-auto max-h-[65vh] rounded-lg border border-slate-700">
          <table className="min-w-full border-collapse border border-slate-700 rounded-lg shadow-inner">
            <thead>
              <tr className="bg-slate-800/50 text-gray-200 text-left">
                <th className="px-4 py-3 border-b border-slate-700">Source</th>
                <th className="px-4 py-3 border-b border-slate-700">Amount</th>
                <th className="px-4 py-3 border-b border-slate-700">Type</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-slate-500/40 transition-colors"
                >
                  <td className="px-4 py-2 border-b border-slate-700">
                    {report.source}
                  </td>
                  <td className="px-4 py-2 border-b border-slate-700 text-green-300">
                    ${report.amount.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-2 border-b border-slate-700 font-medium ${report.type === "income"
                      ? "text-emerald-400"
                      : "text-rose-400"
                      }`}
                  >
                    {report.type.charAt(0).toUpperCase() + report.type.slice(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 shadow-inner">
            <p className="text-sm text-gray-400">Total Income</p>
            <p className="text-emerald-400 text-xl font-bold">
              ${totalIncome.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 shadow-inner">
            <p className="text-sm text-gray-400">Total Expense</p>
            <p className="text-rose-400 text-xl font-bold">
              ${totalExpense.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 shadow-inner">
            <p className="text-sm text-gray-400">Avg. Income</p>
            <p className="text-emerald-400 text-xl font-bold">${avgIncome}</p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-700 shadow-inner">
            <p className="text-sm text-gray-400">Avg. Expense</p>
            <p className="text-rose-400 text-xl font-bold">${avgExpense}</p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-50 shadow-inner">
            <p className="text-sm text-gray-400">Net Balance</p>
            <p
              className={`text-xl font-bold ${netBalance >= 0 ? "text-emerald-400" : "text-rose-400"
                }`}
            >
              ${netBalance.toLocaleString()}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReportsPage;

