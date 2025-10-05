import { fetchReportsForUser, type Report } from '@/lib/api/reports'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports'
};

export default async function ReportsPage() {
  const reports: Report[] = await fetchReportsForUser()

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
    <>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight border-b border-slate-700 pb-2">
          List of Reports
        </h1>
      </header>

      <div className="mt-10 space-y-8">
        <section className="overflow-y-auto max-h-[65vh] rounded-lg border border-slate-700">
          <table className="min-w-full border-collapse border border-slate-700 rounded-lg shadow-inner">
            <thead>
              <tr className="bg-slate-900/50 text-gray-200 text-left">
                <th className="px-4 py-3 border-b border-slate-700">Source</th>
                <th className="px-4 py-3 border-b border-slate-700">Amount</th>
                <th className="px-4 py-3 border-b border-slate-700">Type</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-slate-700/40 duration-300 ease-in-out"
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

        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4 text-center">
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
    </>
  )
}
