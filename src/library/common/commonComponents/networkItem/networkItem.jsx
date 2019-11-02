import React from 'react'
import styles from './networkItemStyles.module.scss'
const NetworkItem = ({
    network,
    activeNetwork,
    getStations
}) => {

    let activeStyle = { color: 'red' }
    let inActiveStyle = { color: 'black' }

    return (
        <div className={styles.networkItemWrapper}
            style={activeNetwork && (activeNetwork.id === network.id ? activeStyle : inActiveStyle)}>
            <div onClick={() => getStations(network)}>
                <div className={styles.networkItemName}>
                    {network.company}
                </div>
                <div className={styles.networkItemId}>
                    {`(${network.id.replace(/-/g, ' ')})`}
                </div>
            </div>
        </div>
    )
}

export default NetworkItem