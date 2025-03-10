import React, { useEffect, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = (s1, s2) => {
    const size = Math.max(s1.length, s2.length)
    let result = ''
    for(let i = 0; i < size; i++) {
        result += `${s1[i] || ''}${s2[i] || ''}`
    } 
    return result
}

const UseRef = (props) => {
    const [value1, setValue1] = React.useState('')
    const [value2, setValue2] = React.useState('')
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    
    useEffect(() => {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [])

    useEffect(() => {
        count.current++
        myInput1.current.focus()
    }, [])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className='input' 
                value={value1} onChange={e => setValue1(e.target.value)}
                ref={myInput1}
                />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" 
                value={value2} onChange={e => setValue2(e.target.value)} 
                ref={myInput2}/>
            </div>

        </div>
    )
}

export default UseRef
