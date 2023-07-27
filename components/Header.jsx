import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href='/' >Litty Dev</Link>
            </div>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Team</Link>
                <Link href='/code/repos'>Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header;