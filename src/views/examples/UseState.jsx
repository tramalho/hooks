import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(-1)
    const [name, setName] = useState("Inicial...")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button type="button" className="btn" onClick={()=> setCount(count -1)}>-1</button>
                <button type="button" className="btn" onClick={()=> setCount(count + 1)}>+1</button>
                <button type="button" className="btn" onClick={()=> setCount(actual => actual + 1000)}>+1000</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" value={name} onChange={ e => setName(e.target.value)} />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
