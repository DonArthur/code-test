import Image from 'next/image'
import styles from './Profiles.module.css'

const Profiles = ({ data }) => {
  const formatShortNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return num.toString()
  }

  return (
    <div>
        Profiles
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Image className={styles.roundImg} src={item.imgUrl} width={100} height={100} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.role}</p>
              <span>{item.region}</span>
              <h2>{item.deals.reduce((sum, deal) => {
                const amount = (deal.status === 'Closed Won' ? sum + deal.value : sum)
                return formatShortNumber(amount)
              }, 0)}</h2>
            </div>
          )
        })}
    </div>
  )
}

export default Profiles