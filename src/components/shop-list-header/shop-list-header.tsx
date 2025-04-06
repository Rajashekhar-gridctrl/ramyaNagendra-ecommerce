import { ResultsSummary } from "../../packages"
import styles from "./shop-list-header.module.scss"

export const ShopListHeader = () => {
    return (

        <div className= {`${styles.shop__header}  d-flex align-items-center justify-content-between mb-30`}>
                                <div className={`${styles['product__view--mode']} d-flex align-items-center`}>
                                    
                                    <button className={`${styles['widget__filter--btn']} d-flex d-lg-none align-items-center`}data-offcanvas>
                                        <svg  className={styles['widget__filter--btn__icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"/><circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/><circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"/></svg> 
                                        <span className={styles['widget__filter--btn__text']}>Filter</span>
                                    </button>
                                    
                                    <div className={`${styles['product__view--mode__list']} ${styles['product__short--by']} align-items-center d-flex`}>
                                        <label className={styles['product__view--label']}>Prev Page :</label>
                                        <div className={`select ${styles['shop__header--select']}`}>
                                            <select className={styles['product__view--select']}>
                                                <option selected value="1">65</option>
                                                <option value="2">40</option>
                                                <option value="3">42</option>
                                                <option value="4">57 </option>
                                                <option value="5">60 </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles['product__view--mode__list']} ${styles['product__short--by']} align-items-center d-flex`}>
                                        <label className={styles['product__view--label']}>Sort By :</label>
                                        <div className={`select ${styles['shop__header--select']}`}>
                                            <select  className={styles['product__view--select']}>
                                                <option selected value="1">Sort by latest</option>
                                                <option value="2">Sort by popularity</option>
                                                <option value="3">Sort by newness</option>
                                                <option value="4">Sort by  rating </option>
                                            </select>
                                        </div>
                                         
                                    </div>
                                </div>
                                <ResultsSummary first={1} last={10} total={108} />
                            </div >
    )
}