import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [invalidValue, setInvalidValue] = useState(" ")

    useEffect(_ => {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(_ => {
        if(factorial > 1000000) {
            setInvalidValue("Valor do fatorial muito alto")
        } else {
            setInvalidValue(" ")
        }
    }, [factorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{factorial < 0 ? "Não Existe" : factorial}</span>
                </div>
                <input type="number" className="input" value={number} 
                onChange={e => setNumber(e.target.value)}
                />
                                    <span className="red"> {invalidValue}</span>

            </div>
        </div>
    )
}

export default UseEffect
