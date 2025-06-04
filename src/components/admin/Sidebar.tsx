"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "eCommerce", href: "/admin/ecommerce" },
  { name: "AnalyticsPro", href: "/admin/analyticspro" },
  { name: "MarketingPro", href: "/admin/marketingpro" },
  { name: "CRMPro", href: "/admin/crmpro" },
  { name: "StocksPro", href: "/admin/stockspro" },
  { name: "Calendar", href: "/admin/calendar" },
  { name: "Profile", href: "/admin/profile" },
  { name: "Tasks", href: "/admin/tasks" },
  { name: "Forms", href: "/admin/forms" },
  { name: "Tables", href: "/admin/tables" },
  { name: "Pages", href: "/admin/pages" },
  { name: "Support", href: "/admin/support" },
  { name: "Messages", href: "/admin/messages" },
  { name: "Inbox", href: "/admin/inbox" },
  { name: "Invoice", href: "/admin/invoice" },
  { name: "Charts", href: "/admin/charts" },
  { name: "UI Elements", href: "/admin/ui-elements" },
  { name: "Authentication", href: "/admin/authentication" },
  { name: "blog", href: "blog"}
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-6 text-3xl font-bold">Admin Panal</div>
      <nav>
        <ul>
          {menuItems.map(({ name, href }) => (
            <li
              key={href}
              className={`mb-2 rounded hover:bg-gray-700 ${
                pathname === href ? "bg-gray-700" : ""
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
