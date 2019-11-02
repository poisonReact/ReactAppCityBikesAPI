import React from 'react'
import styles from 'library/common/commonComponents/inFavorite/inFavoriteStyles.module.scss'
import heartDislike from 'resources/images/inFavorites/heartDislike.png'
import heartLike from 'resources/images/inFavorites/heartLike.png'
const InFavorite = ({ callback, inFavoriteArr, argument }) => {
    return (
        <div className={styles.inFavoriteWrapper}>
            <div
                onClick={() => callback(argument)}>
                {inFavoriteArr.indexOf(argument) !== -1
                    ? <img src={heartDislike} width='15px' alt='Remove from favorites' />
                    : <img src={heartLike} width='15px' alt='Add to favorites' />}
            </div>
        </div>
    )
}


export default InFavorite