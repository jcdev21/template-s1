import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useTheme } from '@/hooks/useTheme';
import { CalendarCheck, ChevronDown, CircleUserRound, Kanban, LayoutDashboard, SquareMenu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MouseEvent } from 'react';
import Dot from '@/components/dot';

export default function DashboardLayout() {
  console.log('Dashboard Layout');

  const { setTheme, toggleCollapse, setNavigate } = useTheme();
  const location = useLocation();

  function onMenuHandle(e: MouseEvent<HTMLElement>) {
    if (e.currentTarget.hasAttribute('href') && e.currentTarget.getAttribute('href') === location.pathname) return;
    setNavigate(e.currentTarget);
  }

  return (
    <main className="flex bg-secondary/75">
      {/* sidebar */}
      <div className="sidebar">
        <div className="flex items-center justify-between w-full h-16 px-4 md:justify-center md:px-0">
          <h1 className="text-3xl font-poppins font-bold text-third">LOGO</h1>
          <button className="md:hidden" onClick={toggleCollapse}>
            <X className="w-6 h-6 text-secondary" />
          </button>
        </div>
        <nav role="navigation" className="max-h-screen px-4 font-montserrat-alternates text-secondary">
          <div className="mt-8 -mx-4 relative overflow-y-auto overflow-x-hidden h-[82vh]">
            <span className="px-4 text-[.75rem] font-bold text-nowrap flex items-center">Utilities</span>
            <ul className="px-4 mt-4 mb-6 space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  onClick={onMenuHandle}
                  className={cn('nav-item', location.pathname === '/dashboard' && 'active')}
                >
                  <LayoutDashboard className="w-6 nav-icon" />
                  <span className="w-full">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/user"
                  onClick={onMenuHandle}
                  className={cn('nav-item', location.pathname === '/dashboard/user' && 'active')}
                >
                  <CircleUserRound className="w-6 nav-icon" />
                  <span className="w-full">User</span>
                </Link>
              </li>
              <li>
                <div className="nav-item" role="presentation" onClick={onMenuHandle}>
                  <div>
                    <SquareMenu className="w-6 nav-icon" />
                    <span className="w-full text-left">Menus</span>
                  </div>
                  <ChevronDown className="-mr-1 carret" />
                </div>
                <ul className="submenu">
                  <li>
                    <Link
                      to="/dashboard/menu"
                      className={cn('submenu-nav-item', location.pathname === '/dashboard/menu' && 'active')}
                    >
                      <Dot />
                      <span className="w-full">List</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://google.com"
                      className={cn('submenu-nav-item', location.pathname === 'https://google.com' && 'active')}
                    >
                      <Dot />
                      <span className="w-full">Google</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="nav-item" role="presentation" onClick={onMenuHandle}>
                  <div>
                    <CalendarCheck className="w-6 nav-icon" />
                    <span className="w-full text-left">Events</span>
                  </div>
                  <ChevronDown className="-mr-1 carret" />
                </div>
                <ul className="submenu">
                  <li>
                    <Link
                      to="https://google.com"
                      className={cn('submenu-nav-item', location.pathname === 'https://google.com' && 'active')}
                    >
                      <Dot />
                      <span className="w-full">List</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/menu/access"
                      className={cn('submenu-nav-item', location.pathname === '/dashboard/menu/access' && 'active')}
                    >
                      <Dot />
                      <span className="w-full">Management Access</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* <span className="px-4 text-[.75rem] font-bold text-nowrap flex items-center">Components</span>
            <ul className="px-4 mt-4 mb-6 space-y-2">
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Alert</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
              <li>
                <Link to="https://google.com" className="nav-item">
                  <SquareMenu className="w-6 nav-icon" />
                  <span className="w-full">Button</span>
                </Link>
              </li>
            </ul> */}
          </div>
        </nav>
      </div>
      {/* main content */}
      <div className="main-content">
        {/* topbar */}
        <div className="sticky top-0 flex items-center justify-between w-full h-16 px-4 bg-white">
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="relative z-20 p-2 rounded-full size-8"
              onClick={toggleCollapse}
            >
              <Kanban className="-rotate-90" />
            </Button>
          </div>
          <div className="flex items-center ml-auto">
            <div className="flex gap-2">
              <Button onClick={() => setTheme('')} size="icon" className="bg-black rounded-full size-5"></Button>
              <Button
                onClick={() => setTheme('orange')}
                size="icon"
                className="bg-orange-400 rounded-full size-5"
              ></Button>
              <Button
                onClick={() => setTheme('violet')}
                size="icon"
                className="rounded-full size-5 bg-violet-400"
              ></Button>
            </div>
            <div className="flex items-center ml-5 cursor-pointer">
              <img src="/avatar.png" alt="avatar" className="object-cover mr-2 rounded-full size-6" />
              <span className="text-sm">John Doe</span>
              <ChevronDown className="w-5 h-5 ml-2" />
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-full p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
      {/* Backdrop */}
      <div className="layout-backdrop" onClick={toggleCollapse} role="presentation"></div>
    </main>
  );
}
