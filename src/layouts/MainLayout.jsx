import { Outlet, NavLink } from "react-router-dom";

function MainLayout() {
  const navLinkStyles = ({ isActive }) =>
    `rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-[#0f172a] text-white"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-green-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f172a] text-lg font-bold text-white">
              CBS
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Core Banking System
              </h1>

              <p className="text-xs text-slate-500 sm:text-sm">
                Secure banking management dashboard
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
            <NavLink to="/customers" className={navLinkStyles}>
              Customers
            </NavLink>

            <NavLink
              to="/customers/create"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-slate-700 text-white"
                    : "bg-[#0f172a] text-white hover:bg-slate-800"
                }`
              }
            >
              Add Customer
            </NavLink>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;