import styles from "./action.module.scss"

export const ProductCardAction = () => {
    return (
        <ul className={`action`}>
        <li className={styles.action__list}>
        <a
            className={styles.action__btn}
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#examplemodal"
            href="javascript:void(0)"
        >
            <svg
                className={styles.action__svg}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.6952 14.4991L11.7663 10.5588C12.7765..."
                    fill="currentColor"
                ></path>
            </svg>
            <span className="visually-hidden">Quick View</span>
        </a>
    </li>
    </ul>
    )
}