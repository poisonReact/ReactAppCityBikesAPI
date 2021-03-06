import React from 'react'
import styles from 'library/common/commonComponents/networkItem/networkItemStyles.module.scss'
const NetworkItem = ({
    network = {company: ['No Data'], id: 'No-Data'},
    networkCompany = 'No Data',
    networkId ='No-Data',
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
                    {networkCompany}
                </div>
                <div className={styles.networkItemId}>
                    {`(${networkId.replace(/-/g, ' ')})`}
                </div>
            </div>
        </div>
    )
}

export default NetworkItem