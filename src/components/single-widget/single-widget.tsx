import { Link } from 'react-router'
import styles from './single-widget.module.scss'


export const SingleWidget = () => {
    return (
        <div className={`${styles['shop__sidebar--widget']}`}>
            <div className={styles['offcanvas__filter--sidebar__inner']}>
                <div className={`${styles['single__widget']} ${styles['widget__bg']}`}>
                    <h2 className={`${styles['widget__title']} ${styles.h3}`}>Categories</h2>
                    <ul className={styles['widget__categories--menu']}>
                        <li className={styles['widget__categories--menu__list']}>
                            <label className={`${styles['widget__categories--menu__label']} d-flex align-items-center`}>
                                <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                <span className={styles['widget__categories--menu__text']}>Haram</span>
                            </label>
                            {/* <ul className={styles['widget__categories--sub__menu']}>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--sub__menu--img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--sub__menu--text']}>Long Haram</span>
                                    </Link>
                                </li>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Short Haram</span>
                                    </Link>
                                </li>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Bamboo Scrub </span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                        <li className={styles['widget__categories--menu__list']}>
                        <label className={`${styles['widget__categories--menu__label']} d-flex align-items-center`}>
                                <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                <span className={styles['widget__categories--menu__text']}>Earrings</span>
                            </label>
                            {/* <ul className="widget__categories--sub__menu">
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Silver</span>
                                    </Link>
                                </li>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Gold</span>
                                    </Link>
                                </li>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Layers earchains</span>
                                    </Link>
                                </li>
                                <li className={styles['widget__categories--sub__menu--list']}>
                                    <Link to='/'>
                                        <img className={styles['widget__categories--menu__img']} src='/favicon.webp' alt="CI" />
                                        <span className={styles['widget__categories--menu__text']}>Buttalu</span>
                                    </Link>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
                <div className={`${styles['single__widget']} ${styles.price__filter} ${styles['widget__bg']} mt-3`}>
                    <h2 className={`${styles['widget__title']} ${styles.h3}`}>Filter By Price</h2>
                    <form className={styles['price__filter--form']} action="#">
                        <div className={`${styles['price__filter--form__inner']} mb-15 d-flex align-items-center`}>
                            <div className={styles['price__filter--group']}>
                                <label className={styles['price__filter--label']} htmlFor="Filter-Price-GTE1">From</label>
                                <div className={`${styles['price__filter--input border-radius-5']} d-flex align-items-center`}>
                                    <span className={styles['price__filter--currency']}>Rs</span>
                                    <input className={`${styles['price__filter--input__field']}  border-0`} maxLength={4} name="filter.v.price.gte" id="Filter-Price-GTE1" type="number" placeholder="0" min="0" max="250.00" />
                                </div>
                            </div>
                            <div className={styles['price__divider']}>
                                <span>-</span>
                            </div>
                            <div className={styles['price__filter--group']}>
                                <label className={styles['price__filter--label']} htmlFor="Filter-Price-LTE1">To</label>
                                <div className={`${styles['price__filter--input border-radius-5']} d-flex align-items-center`}>
                                    <span className={styles['price__filter--currency']}>Rs</span>
                                    <input className={`${styles['price__filter--input__field']}  border-0`}  maxLength={4} name="filter.v.price.lte" id="Filter-Price-LTE1" type="number" min="0" placeholder="250.00" max="250.00" />
                                </div>
                            </div>
                        </div>
                        <button className={styles['primary__btn price__filter--btn']} type="submit">Filter</button>
                    </form>
                </div>
                <div className={`${styles['single__widget']} ${styles['widget__bg']} mt-3`}>
                    <h2 className={`mt-5 ${styles['widget__title']} ${styles.h3}`}>Brands</h2>
                    <ul className={styles['widget__tagcloud']}>
                        <li className={styles['widget__tagcloud--list']}><Link to='/' className={styles['widget__tagcloud--link']}> Earrings
                        </Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Haram</Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Necklace</Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Real manulu chains </Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Diamind pendant </Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Black beads</Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']} >Choral victoria chain </Link></li>
                        <li className={styles['widget__tagcloud--list']}>  <Link to='/' className={styles['widget__tagcloud--link']}>Earchains </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}