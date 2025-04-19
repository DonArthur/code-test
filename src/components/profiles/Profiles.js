import Image from 'next/image'
import styles from './Profiles.module.css'
import ProfileCard from '../profile-card/ProfileCard'

const Profiles = ({ data }) => {
  const formatShortNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return num.toString()
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Profiles</h2>
      <div className={styles.grid}>
        {data.map((item) => (
          <ProfileCard key={item.id} profile={item} />
        ))}
      </div>
    </div>
  )
}

export default Profiles