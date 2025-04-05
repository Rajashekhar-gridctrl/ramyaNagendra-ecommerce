import { FC } from 'react'
import styles from './layout-loader.module.scss'

const loadingTitle = 'BEST - JEWELLERY - ITEMS - ARE - LOADING'.split('')

export const LayoutLoader: FC = () => {
    return (
        <div id="preloader">
            <div id="ctn-preloader" className={styles['ctn-preloader']}>
                <div className={styles["animation-preloader"]}>
                    <div className={styles.spinner}></div>
                    <div className={styles["txt-loading"]}>
                        {loadingTitle.map((character: string) => {
                            return (<span data-text-preloader={character} className={styles["letters-loading"]}>
                                {character}
                            </span>)
                        })}
                    </div>
                </div>

                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </div>
    )
}