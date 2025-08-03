"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const NavBar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img src="/images/eventlogo.png" alt="Your Company" className="h-8 w-auto" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/home" ? "bg-gray-700 text-white" : ''}`}>Dashboard</Link>
                                <Link href="/events" className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/events" ? "bg-gray-700 text-white" : ''}`}>Events</Link>
                                <Link href="/aboutus" className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/aboutus" ? "bg-gray-700 text-white" : ''}`}>About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:ml-6 sm:block">
                        <SignedOut>
                            <SignUpButton  mode="modal" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></SignUpButton>
                            <SignInButton mode="modal" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton></UserButton>
                        </SignedIn>
                    </div>
                </div>
            </div>

            <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link href="/" className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/home" ? "bg-gray-700 text-white" : ''}`}>Dashboard</Link>
                                <Link href="/events" className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/events" ? "bg-gray-700 text-white" : ''}`}>Events</Link>
                                <Link href="/aboutus" className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${pathname == "/aboutus" ? "bg-gray-700 text-white" : ''}`}>About Us</Link>
                                <SignedOut>
                            <SignUpButton  mode="modal" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></SignUpButton>
                            <SignInButton mode="modal" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton></UserButton>
                        </SignedIn>
                   </div>
            </el-disclosure>
        </nav>
    )
}

export default NavBar