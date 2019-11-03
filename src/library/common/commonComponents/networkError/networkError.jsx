import React from 'react'
import styles from 'library/common/commonComponents/networkError/networkErrorStyles.module.scss'

const NetworkError = () => {

    return (
        <div className={styles.networkErrorWrapper}>
            Some network error, please try again later
        </div>
    )
}

export default NetworkError