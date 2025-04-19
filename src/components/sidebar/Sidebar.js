'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import { useEffect, useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { LuPanelLeftOpen, LuPanelLeftClose }  from 'react-icons/lu'
import useSidebarStore from '@/store/SidebarStore'

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = useSidebarStore()
  // const [open, setOpen] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  return (
    <>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
        <button onClick={() => toggleSidebar()} className={styles.toggleBtn}>
          {isSidebarOpen ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
        </button>
        {isSidebarOpen && <h2>Sales Dash</h2>}
        <nav>
          <Link href="/">{isSidebarOpen ? <span>Dashboard</span> : <AiFillAppstore /> }</Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar