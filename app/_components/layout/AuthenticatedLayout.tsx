import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AuthenticatedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex w-full">
      <aside className="w-1/6">
        <Sidebar />
      </aside>

      <section className="w-5/6">
        <div className="flex-shrink-0 overflow-hidden pt-0 block min-h-26">
          <TopBar />
        </div>

        <div className="flex flex-col gap-4">{children}</div>
      </section>
    </main>
  );
}
