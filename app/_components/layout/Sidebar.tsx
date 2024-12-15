"use client";

import NavLogo from "@/app/_assets/NavLogo";
import BagIcon from "@/app/_assets/sidebar-icons/BagIcon";
import HomeIcon from "@/app/_assets/sidebar-icons/HomeIcon";
import HotelIcon from "@/app/_assets/sidebar-icons/HotelIcon";
import PersonIcon from "@/app/_assets/sidebar-icons/PersonIcon";
import PlaneIcon from "@/app/_assets/sidebar-icons/PlaneIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <HomeIcon />,
    activeIcon: <HomeIcon active={true} />,
  },
  {
    name: "Users & Admins",
    link: "/dashboard/users",
    icon: <PersonIcon />,
    activeIcon: <PersonIcon active={true} />,
  },
  {
    name: "Founds",
    link: "/dashboard/founds",
    icon: <BagIcon />,
    activeIcon: <BagIcon active={true} />,
  },
  {
    name: "Reports",
    link: "/dashboard/reports",
    icon: <BagIcon />,
    activeIcon: <BagIcon active={true} />,
  },
  {
    name: "Airports",
    link: "/dashboard/airports",
    icon: <PlaneIcon />,
    activeIcon: <PlaneIcon active={true} />,
  },
  {
    name: "Airlines",
    link: "/dashboard/airlines",
    icon: <PlaneIcon />,
    activeIcon: <PlaneIcon active={true} />,
  },
  {
    name: "Hotels",
    link: "/dashboard/hotels",
    icon: <HotelIcon />,
    activeIcon: <HotelIcon active={true} />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white pt-14 flex flex-col justify-start items-center min-h-screen">
      <NavLogo extraStyle="w-44 h-14" />
      <div className="flex flex-col gap-2 w-full pt-10">
        {navItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.name}
              href={item.link}
              className={clsx(
                "flex items-center gap-2 p-3 ps-5 transition-all duration-300 hover:bg-primaryLight ",
                isActive ? "bg-primaryLight text-navActive border-s-4 border-primary" : "text-navItem"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? item.activeIcon : item.icon}
              <span className="text-sm ">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
