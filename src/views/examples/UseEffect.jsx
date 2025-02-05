import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = Number.parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFactorial(n - 1) * n
}

const UseEffect = (_) => {
    // Ex #01
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

    // Ex #02
    const [evenOrOdd, setEvenOrOdd] = useState(" ")

    useEffect(_ => {
        setEvenOrOdd(number % 2 === 0 ? "Par" : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicío #01"/>
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
            <SectionTitle title="Exercicío #02"/>
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{evenOrOdd}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
