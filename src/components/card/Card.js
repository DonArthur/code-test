'use client'
import React, { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'
import styles from '@/components/card/Card.module.css'

const Card = ({ title, chartType, data }) => {
    const chartRef = useRef(null)
    const chartInstanceRef = useRef(null)
    const [amount, setAmount] = useState(0)
    const config = {
        type: chartType,
        data: {
            datasets: [
                {
                    data: data.map(row => row.amount)
                }
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    }
    
    useEffect(() => {
        const total = data.reduce((sum, row) => sum + row.amount, 0)
        setAmount(total)

        const ctx = chartRef.current?.getContext('2d')
        if (!ctx) return
    
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy()
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: chartType,
            data: {
              labels: data.map((_, idx) => `Item ${idx + 1}`),
              datasets: [
                {
                  data: data.map(row => row.amount),
                //   backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
                },
              ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                    display: false, // ⛔ hide bottom text/labels
                    },
                    y: {
                    display: false, // ⛔ hide left numbers
                    },
                }
            },
          })
      
          return () => {
            chartInstanceRef.current?.destroy()
          }
    }, [data, chartType])

    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <span>{amount}</span>
            <canvas ref={chartRef} width={300}></canvas>
        </div>
    )
}

export default Card