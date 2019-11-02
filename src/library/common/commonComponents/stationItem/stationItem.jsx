import React from 'react'
import styles from 'library/common/commonComponents/stationItem/stationItemStyles.module.scss'

const StationItem = ({ name, freeBikes, emptySlots }) => {
    return (
        <div className={styles.stationItemWrapper}>
            <div className={styles.stationItemName}>
                {name}
            </div>
            <div className={styles.stationItemBikesInfo}>
                {freeBikes}
            </div>
            <div className={styles.stationItemBikesInfo}>
                {emptySlots}
            </div>
        </div>
    )
}

export default StationItem