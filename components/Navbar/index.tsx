import React, { useEffect, useState } from "react";

export interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  sticky?: boolean;
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  sticky,
  justify,
  className,
  bordered,
}) => {
  const _ = [
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
  ];
  return (
    <nav
      className={
        `md:px-[20vw] p-5 flex items-center justify-${justify} ${sticky && "sticky"} ${bordered && "border-b-2"} ` +
        className
      }
    >
      {children}
    </nav>
  );
};

export interface NavbarHeaderProps {
  children: React.ReactNode;
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ children }) => {
  return (
    <div className="text-3xl hover:cursor-default">
      <a href="/" className="hover:cursor-default">
        {children}
      </a>
    </div>
  );
};

export interface NavbarItemProps {
  children: React.ReactNode;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ children }) => {
  return (
    <div className="hover:cursor-default sm:hover:px-2 transition-all duration-300">
      {children}
    </div>
  );
};

export interface NavbarOptionsProps {
  children: React.ReactNode;
  className?: string;
}

export const NavbarOptions: React.FC<NavbarOptionsProps> = ({
  children,
  className,
}) => {
  return <div className={`flex gap-4 ` + className}>{children}</div>;
};

export const NavbarMenuToggle: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <button
      className="flex flex-col gap-1 sm:hidden"
      onClick={() => {
        document.dispatchEvent(new Event("ToggleMenu"));
        setOpened((prev) => !prev);
      }}
    >
      <>
        <div
          className={`w-5 h-[1px] bg-white transition-all duration-300 ${opened ? "rotate-45 translate-y-[2px]" : ""}`}
        />
        <div
          className={`w-5 h-[1px] bg-white transition-all duration-300 ${opened ? "hidden" : ""}`}
        />
        <div
          className={`w-5 h-[1px] bg-white transition-all duration-300 ${opened ? "-rotate-45 -translate-y-[3px]" : ""}`}
        />
      </>
    </button>
  );
};

export interface NavbarSideBarProps {
  children: React.ReactNode;
  className?: string;
}

export const NavbarSideBar: React.FC<NavbarSideBarProps> = ({
  children,
  className,
}) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const toggleMenuHandler = () => {
      setOpened((prev) => !prev);
    };

    document.addEventListener("ToggleMenu", toggleMenuHandler);

    return () => {
      document.removeEventListener("ToggleMenu", toggleMenuHandler);
    };
  }, []);

  return (
    <div
      className={
        `fixed inset-y-0 shadow-white left-0 bg-black bg-opacity-75 backdrop-blur-lg z-50 w-64 shadow-sm transform transition-transform duration-300 ease-in-out ${opened ? "translate-x-0" : "-translate-x-full"} ` +
        className
      }
    >
      <div className="px-6 py-4">
        {/* Your sidebar content goes here */}
        {children}
      </div>
    </div>
  );
};
