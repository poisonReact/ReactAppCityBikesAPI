import React from 'react'
import styles from 'library/common/commonComponents/inFavorite/inFavoriteStyles.module.scss'
import heartDislike from 'resources/images/inFavorites/heartDislike.png'
import heartLike from 'resources/images/inFavorites/heartLike.png'
import { IStation } from 'components/stations/stationsTypes'

interface InputProps {
    argument: IStation;
    inFavoriteArr: IStation[];
    callback: (value: IStation) => void
}

const InFavoriteStation = ({ callback, inFavoriteArr, argument }: InputProps) => {
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

export default InFavoriteStation