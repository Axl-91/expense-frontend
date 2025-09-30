import { Metadata } from "next";
import SideNav from "../ui/dashboard/sidenav";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gray-800 h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col flex-grow p-4">
        {children}
      </div>
    </div>
  );
}

