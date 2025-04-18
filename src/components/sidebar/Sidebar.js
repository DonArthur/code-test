'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import { useEffect, useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { LuPanelLeftOpen, LuPanelLeftClose }  from 'react-icons/lu'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 768) setOpen(false);
  }, []);

  return (
    <>
      <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
        <button onClick={() => setOpen(!open)} className={styles.toggleBtn}>
          {open ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
        </button>
        {open && <h2>Sales Dash</h2>}
        <nav>
          <Link href="/">{open ? <span>Dashboard</span> : <AiFillAppstore /> }</Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar