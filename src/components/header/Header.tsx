import Link from 'next/link';
import React from 'react'

export interface HeaderProps {
}

const Header = ({}: HeaderProps) => {
  return (
    <header className="bg-blue-500 mb-10">
      <nav className="flex items-center justify-between max-w-4xl p-4 mx-auto">
        <div className="text-white">
          <Link href="/" className="text-xl font-bold">
            JobFinder
          </Link>
        </div>
        <div className="flex gap-8">
        <Link href='/jobs' className="hover:text-gray-300">
          Jobs
        </Link>

        <Link href="/create-profile" className="hover:text-gray-300" >
          My Profile
        </Link>

        <Link href="/liked" className="hover:text-gray-300">
          Liked Jobs
        </Link>
        </div>
      </nav>
    </header>
  )
};

export default Header