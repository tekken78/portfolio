'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoLink}>
        <div className={styles.avatarWrapper}>
          <Image
            src="/profile.jpg"
            alt="Sahil Kumar"
            width={40}
            height={40}
            className={styles.avatar}
          />
        </div>
        <span>Sahil Kumar</span>
      </Link>

      {/* Desktop Links */}
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={pathname === link.path ? styles.active : ''}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
  className={styles.mobileMenuButton}
  onClick={() => setMobileOpen(!mobileOpen)}
>
  {mobileOpen ? (
    <XMarkIcon className={styles.hamburgerIcon} />
  ) : (
    <Bars3Icon className={styles.hamburgerIcon} />
  )}
</button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={pathname === link.path ? styles.active : ''}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
