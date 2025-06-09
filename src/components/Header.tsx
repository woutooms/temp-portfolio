import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationItem } from "../types";
import { useLocation } from "react-router-dom";

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState<string>("");

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-gray-200/50">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <h1 className="text-2xl font-bold text-gradient">
                Wout Ooms
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentRoute === item.href
                      ? "bg-primary-100 text-primary-700 shadow-sm"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Transition show={mobileMenuOpen}>
        <Dialog onClose={setMobileMenuOpen} className="relative z-50 md:hidden">
          {/* Backdrop */}
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600/75" />
          </Transition.Child>

          {/* Menu panel */}
          <div className="fixed inset-0 flex">
            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex min-h-0 flex-1 flex-col bg-white">
                  <div className="flex h-16 flex-shrink-0 items-center justify-between px-4 border-b border-gray-200">
                    <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-80 transition-opacity duration-200">
                      <h1 className="text-xl font-bold text-gradient">
                        Wout Ooms
                      </h1>
                    </a>
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto px-4 py-6">
                    <nav className="space-y-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                            currentRoute === item.href
                              ? "bg-primary-100 text-primary-700"
                              : "text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                          }`}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
