import { Metadata } from "next";
import SideNav from "../ui/dashboard/sidenav";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <aside className="w-full md:w-64 flex-none border-b md:border-b-0 md:border-r border-slate-700 bg-slate-800/80 backdrop-blur-sm shadow-lg">
        <SideNav />
      </aside>

      <main className="flex flex-col flex-grow overflow-y-auto p-6 md:p-8 bg-slate-900/60 backdrop-blur-sm">
        {children}
      </main>
    </div>
  );
}

