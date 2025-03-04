// components/NavBar.jsx
"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-5 left-0 right-0 z-50 ">
      <div className="mx-auto flex h-16 max-w-screen-xl mt-12 items-center justify-between px-4">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          {/* Replace /logo.png with your own logo path or remove <Image> and use text */}
          <div className="h-40 w-40 relative">
            <Image
              src="/brand/logo.webp"
              alt="Tribeca Date Club Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center space-x-6 text-sm font-light text-white md:flex">
          <Link href="#">HOME</Link>
          <Link href="#">ABOUT</Link>
          <Link href="#">TESTIMONIALS</Link>
          <Link href="#">MEMBERSHIP</Link>
          <Link href="#">CELEBRITY SERVICES</Link>
          <Link href="#">EVENTS</Link>
        </nav>

        {/* Desktop "JOIN THE WAITLIST" Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            className=" bg-white px-6 py-4 text-xs tracking-wide font-light text-black transition-colors duration-200 hover:bg-gray-200"
          >
            JOIN THE WAITLIST
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="bg-black/90 px-4 pb-4 md:hidden">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-white">
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                CELEBRITY SERVICES
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setIsOpen(false)}>
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="mt-2 inline-block w-full rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-black transition hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                JOIN THE WAITLIST
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
