import React from 'react'
import styles from 'library/common/commonComponents/inFavorite/inFavoriteStyles.module.scss'
import heartDislike from 'resources/images/inFavorites/heartDislike.png'
import heartLike from 'resources/images/inFavorites/heartLike.png'
import { INetwork } from 'components/networks/networksTypes'

interface InputProps {
    argument: INetwork;
    inFavoriteArr: INetwork[];
    callback: (value: INetwork) => void
}

const InFavoriteNetwork = ({ callback, inFavoriteArr, argument }: InputProps) => {
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

export default InFavoriteNetwork