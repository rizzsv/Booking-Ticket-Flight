import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav id="Navbar" className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px]"> 
    <Link href="index.html" className="flex items-center shrink-0">
        <Image width={120} height={60} src="/assets/images/logos/logo.svg" alt="logo" />
    </Link>
    <ul className="nav-menus flex gap-[30px] items-center w-fit">
        <li>
            <Link href="" className="font-medium">Flash Sale</Link>
        </li>
        <li>
            <Link href="" className="font-medium">Discover</Link>
        </li>
        <li>
            <Link href="" className="font-medium">Packages</Link>
        </li>
        <li>
            <Link href="" className="font-medium">Stories</Link>
        </li>
        <li>
            <Link href="" className="font-medium">About</Link>
        </li>
        <Link href="signin.html" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Sign In</Link>
    </ul>
</nav>
  )
}
