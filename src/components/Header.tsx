'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavigationStore } from '@/stores/navigationStore';
import { useEffect } from 'react';

/**
 * Header component - Single Responsibility: render navigation header
 * Following KISS principle - simple and straightforward implementation
 */
export default function Header() {
  const pathname = usePathname();
  const { isMenuOpen, navigationItems, toggleMenu, closeMenu, setCurrentPath } = 
    useNavigationStore();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname, setCurrentPath]);

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" href="/">
            <span>IBPR</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              {navigationItems.map((item) => (
                <li
                  key={item.href}
                  className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                >
                  <Link
                    className="nav-link"
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="sr-only">(current)</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
