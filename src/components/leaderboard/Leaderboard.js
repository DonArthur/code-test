import { useEffect, useState } from "react"

const Leaderboard = ({ data }) => {
  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    const reps = data.map((item) => ({
      name: item.name,
      amount: item.deals.reduce((sum, deal) => deal.status === 'Closed Won' ? sum + deal.value : sum, 0)
    }))
    setLeaders(reps.sort((a, b) => b.amount - a.amount))
  }, [])

  return (
    <div>
      <h3>Leaderboard this year</h3>
    </div>
  )
}

export default Leaderboard