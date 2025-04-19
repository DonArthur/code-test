import Image from 'next/image'
import styles from './ProfileCard.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const ProfileCard = ({ profile }) => {
  const formatShortNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    return num.toString()
  }

  const totalAmount = profile.deals.reduce((sum, deal) =>
    deal.status === 'Closed Won' ? sum + deal.value : sum, 0
  )

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span><FaMapMarkerAlt /> {profile.region}</span>
        <Image className={styles.roundImg} src={profile.imgUrl} width={80} height={80} alt={profile.name} />
        <h3>{profile.name}</h3>
        <p>{profile.role}</p>
        <h4>${formatShortNumber(totalAmount)}</h4>
      </div>
    </div>
  )
}

export default ProfileCard
