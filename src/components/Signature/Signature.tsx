import React from 'react'

export type SignatureProps = {
    first_name: string;
    last_name: string;
    occupation: string;
    description: Array<string>;
  }

function Signature({ first_name, last_name, occupation, description}: SignatureProps) {

    return (<div>
        <h1>{first_name}, {last_name}</h1>
        <h2>{occupation}</h2>
        {description.map((des) => (<p key={`${des}`}>{des}</p>))}
    </div>)
}


export default Signature