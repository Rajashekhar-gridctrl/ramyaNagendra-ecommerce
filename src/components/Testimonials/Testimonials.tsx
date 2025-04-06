import { Testimonial } from "../../packages"
import styles from './Testimonial.module.scss';

export const Testimonials = () => {
    return (
        <article className={`container-fluid ${styles.testimonial__section} ${styles.testimonial__bg} section--padding`}>
            <div className="section__heading text-center mb-40">
                <h2 className={`${styles['section__heading--maintitle']} text-white`}>What Clients Are Saying</h2>
            </div>
            <div className="container d-flex">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </article>
    )
}