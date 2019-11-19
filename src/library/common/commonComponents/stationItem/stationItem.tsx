import React from 'react'
import styles from 'library/common/commonComponents/stationItem/stationItemStyles.module.scss'

interface InputProps {
    name: string;
    freeBikes: string;
    emptySlots: string;
}

const StationItem = ({ 
    name = 'No Data', 
    freeBikes = 'No Data', 
    emptySlots = 'No Data' 
}: InputProps) => {
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