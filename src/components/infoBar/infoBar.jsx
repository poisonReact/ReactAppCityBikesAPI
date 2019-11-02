import React from 'react'
import styles from 'components/infoBar/infoBarStyles.module.scss'

const InfoBar = ({ activeNetwork, freeBikes }) => {
  return (
    <div className={styles.infoBarWrapper} >
      <div>
        Selected Network: {activeNetwork
          ? (activeNetwork.company
            ? `${activeNetwork.company[0]} (${activeNetwork.id.replace(/-/g, ' ')})`
            : `No Data (${activeNetwork.id.replace(/-/g, ' ')})`)
          : `Loading...`}
      </div>
      <div>
        Total Free Bikes:  {activeNetwork
          ? freeBikes
          : `Loading...`}
      </div>
    </div>
  )
}

export default InfoBar