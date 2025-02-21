'use client'

import { useState, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';


const links = [
  {
    label: 'Solutions',
    href: '',
    dropdown: [
      ['Event Planners', '/solutions/event-planners'],
      ['Sports Tourism', '/solutions/sports-tourism'],
      ['DMO/CVB', '/solutions/dmo-cvb'],
      ['Venues', '/solutions/venues'],
    ],
  },
  {
    label: 'Partnerships',
    href: '/partnerships',
    dropdown: [], // No dropdown for Partnerships
  },
  {
    label: 'Company',
    href: '/company',
  },
  {
    label: 'Contact',
    href: '/contact',
    dropdown: [], // No dropdown for Contact
  },
];

export function NavLinks() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open
  const timeoutRef = useRef(null);

  return (
    <nav className="flex space-x-4">
      {links.map(({ label, href, dropdown }, index) => (
        <div
          key={label}
          className="relative"
          onMouseEnter={() => {
            if (dropdown.length) {
              setOpenDropdownIndex(index);
            }
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => {
              setOpenDropdownIndex(null);
            }, 200);
          }}
        >
          <Link
            href={href}
            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
          >
            <span className="relative z-10">{label}</span>
          </Link>

          {openDropdownIndex === index && dropdown.length > 0 && (
            <motion.div
              className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {dropdown.map(([itemLabel, itemHref]) => (
                <Link
                  key={itemLabel}
                  href={itemHref}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {itemLabel}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </nav>
  );
}
