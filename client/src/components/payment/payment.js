import React from 'react'
import styles from './payment.module.css'


const paymentform = (props) => {
    return (

        <div>
            <article className={styles.Post} onClick={props.click}>
                <h2>{props.title}</h2>
                <div className="Info">
                    <div className="Author">Author</div>
                </div>
            </article>



        </div>

    )
}

export default paymentform