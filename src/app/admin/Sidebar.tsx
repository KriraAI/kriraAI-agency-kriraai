'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';


const menuItems = [
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'eCommerce', href: '/admin/ecommerce' },
  { name: 'AnalyticsPro', href: '/admin/analyticspro' },
  { name: 'MarketingPro', href: '/admin/marketingpro' },
  { name: 'CRMPro', href: '/admin/crmpro' },
  { name: 'StocksPro', href: '/admin/stockspro' },
  { name: 'Calendar', href: '/admin/calendar' },
  { name: 'Profile', href: '/admin/profile' },
  { name: 'Tasks', href: '/admin/tasks' },
  { name: 'Forms', href: '/admin/forms' },
  { name: 'Tables', href: '/admin/tables' },
  { name: 'Pages', href: '/admin/pages' },
  { name: 'Support', href: '/admin/support' },
  { name: 'Messages', href: '/admin/messages' },
  { name: 'Inbox', href: '/admin/inbox' },
  { name: 'Invoice', href: '/admin/invoice' },
  { name: 'Charts', href: '/admin/charts' },
  { name: 'UI Elements', href: '/admin/ui-elements' },
  { name: 'Authentication', href: '/admin/authentication' },
  { name: 'Blog', href: '/admin/blog/create' }, 
];

export default function Sidebar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <div className="text-3xl font-bold">Admin Panel</div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul>
          {menuItems.map(({ name, href }) => (
            <li
              key={href}
              className={`mb-2 rounded hover:bg-gray-700 ${
                pathname === href ? 'bg-gray-700' : ''
              }`}
            >
              <Link href={href} className="block px-3 py-2">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
