import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Card from '@/components/card/Card'

export default function Home() {
  const [data, setData] = useState({
      storeSales: [
        {
          id: 0,
          period: 1,
          year: 2025,
          amount: 1000,
        },
        {
          id: 1,
          period: 2,
          year: 2025,
          amount: 1500,
        },
        {
          id: 2,
          period: 3,
          year: 2025,
          amount: 900,
        },
        {
          id: 0,
          period: 4,
          year: 2025,
          amount: 1000,
        },
      ],
      adCosts: [
        {
          id: 0,
          period: 1,
          year: 2025,
          amount: 1000,
        },
        {
          id: 1,
          period: 2,
          year: 2025,
          amount: 1500,
        },
        {
          id: 2,
          period: 3,
          year: 2025,
          amount: 900,
        },
        {
          id: 0,
          period: 4,
          year: 2025,
          amount: 1000,
        },
      ],
      orders: [
        {
          id: 0,
          period: 1,
          year: 2025,
          amount: 1000,
        },
        {
          id: 1,
          period: 2,
          year: 2025,
          amount: 1500,
        },
        {
          id: 2,
          period: 3,
          year: 2025,
          amount: 900,
        },
        {
          id: 0,
          period: 4,
          year: 2025,
          amount: 1000,
        },
      ],
    })

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <h2>Overview</h2>
        <div className={styles.center}>
          <Card title='TOTAL STORE SALES' chartType='line' data={data.storeSales} />
          <Card title='TOTAL ADVERTISING COST' chartType='line' data={data.adCosts} />
          <Card title='ORDERS' chartType='line' data={data.orders} />
        </div>
      </div>
    </div>
  )
}
