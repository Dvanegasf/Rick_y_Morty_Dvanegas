import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import "./styles/ResidentC.css"

const ResidentC = ({info}) => {

    const [resident, getResident] = useFetch()

    useEffect(() => {
        getResident(info)

    }, [])
    
     
  return (
    <article className='resident'>
        <figure className='resident__img'>
            <img src={resident?.image} alt="character image" />
            <figcaption className='resident__status'>
                <div className={`resident__circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2 className='resident__name'>{resident?.name}</h2>
        <hr className='resident__line' />
        <ul className='resident__list'>
            <li className='resident__item'><span>Specie</span><span>{resident?.species}</span></li>
            <li className='resident__item' ><span>Origin</span><span>{resident?.origin.name}</span></li>
            <li className='resident__item'><span>Episode where appear</span>{resident?.episode.length}<span></span></li>    
        </ul> 
    </article>
  )
}

export default ResidentC