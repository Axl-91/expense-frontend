import { Metadata } from "next";
import SideNav from "../ui/dashboard/sidenav";

export const metadata: Metadata = {
  title: {
    template: "%s | Expense App",
    default: "Home"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <aside className="w-full md:w-64 flex-none border-b md:border-b-0 md:border-r border-slate-700 bg-slate-800/80 backdrop-blur-sm shadow-lg">
        <SideNav />
      </aside>

      <main className="flex flex-col flex-1 min-h-0 overflow-hidden px-6 py-3 bg-slate-900/60 backdrop-blur-sm">
        <div className="flex-1 min-h-[30vh] overflow-y-auto p-6 bg-white/5 border border-slate-700 rounded-xl shadow-md text-gray-100">
          {children}
        </div>
      </main>
    </div>
  );
}
