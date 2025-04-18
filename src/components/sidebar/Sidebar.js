import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <h2>Sales Dash</h2>
        <div>
            <span>Menu</span>
            <Link href='/'>Dashboard</Link>
        </div>
    </div>
  )
}

export default Sidebar