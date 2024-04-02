import Link from 'next/link';
import React from 'react'

export interface HeaderProps {
}

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <nav>
        <Link href="/">
          JobFinder
        </Link>

        <Link href='/jobs'>
          Jobs
        </Link>

        <Link href="/create-profile">
          My Profile
        </Link>

        {/* TODO: hide for non user */}
        <Link href="/liked">
          Liked Jobs
        </Link>

      </nav>
    </header>
  )
}

export default Header