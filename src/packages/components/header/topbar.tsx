import { FC, PropsWithChildren } from "react"


export const HeaderTopbar: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="header__topbar bg__primary">
            <div className="container">
                <div className="header__topbar--inner style6 d-flex align-items-center justify-content-between">
                    {children ? children : (
                        <ul className="header__topbar--info d-none d-lg-flex">
                            <li className="header__info--text text-white">
                                Enjoy your shopping
                            </li>
                            <li className="header__info--text text-white">
                                <span className="text__secondary">Call us</span>
                                <a href="tel:+1234567898">: 9381433360</a>
                            </li>
                        </ul>)}
                </div>
            </div>
        </div>
    )
}