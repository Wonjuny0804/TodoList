import React from 'react'
import styles from './Signature.module.scss'

export type SignatureProps = {
    first_name: string;
    last_name: string;
    occupation: string;
    description: Array<string>;
  }

function Signature({ first_name, last_name, occupation, description}: SignatureProps) {

    return (<div className={styles.signatureWrapper}>
        <h1 className={styles.name}>{first_name}, {last_name}</h1>
        <h2 className={styles.occupation}>{occupation}</h2>
        {description.map((des, index) => (<p className={styles[`description-${index}`]}key={`${des}`}>{des}</p>))}
    </div>)
}


export default Signature