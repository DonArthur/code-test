'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import { useEffect, useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { LuPanelLeftOpen, LuPanelLeftClose, LuSearch }  from 'react-icons/lu'
import useSidebarStore from '@/store/sidebarStore'
import Modal from '../modal/Modal'

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = useSidebarStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (window.innerWidth < 768) setSidebarOpen(false);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    const dummyData = ['Alice', 'Bob', 'Charlie', 'David']
    const filtered = dummyData.filter(name => name.toLowerCase().includes(value.toLowerCase()))
    setResults(filtered)
  }

  return (
    <>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
        <button onClick={() => toggleSidebar()} className={styles.toggleBtn}>
          {isSidebarOpen ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
        </button>
        {isSidebarOpen && <h2>Sales Dash</h2>}
        <nav>
          <Link href="/">{isSidebarOpen ? <span>Dashboard</span> : <AiFillAppstore /> }</Link>
          <button onClick={() => setIsModalOpen(true)} className={styles.button}>{isSidebarOpen ? <span>Search</span> : <LuSearch />}</button>
        </nav>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.searchContainer}>
          <h2>Search</h2>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Type a name..."
            className={styles.searchInput}
          />
          <div className={styles.resultContainer}>
            {results.map((item, index) => (
              <div key={index} className={styles.resultItem}>
                🔍 {item}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Sidebar