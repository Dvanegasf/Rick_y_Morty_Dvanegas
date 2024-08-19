import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentC from './components/ResidentC'

function App() {

  const randomId = Math.floor(Math.random() *  126) + 1 
  const [inpuValue, setInpuValue] = useState(randomId)
  const [location, getLocation, isLoading, hasError] = useFetch()


useEffect(() => {
  const url = `https://rickandmortyapi.com/api/location/${inpuValue}`
  getLocation(url)

}, [inpuValue])

const textinput = useRef()

const handleSubmit = () => {
  event.preventDefault()
  setInpuValue(textinput.current.value.trim().toLowerCase())
  textinput.current.value = ""
}

console.log(inpuValue)

  return(
    <div className='app'>
      {
        isLoading ? 
          <h2 className='app__loading'>loading...</h2>
          :
          <>     
            <section className='app__header'>
             <h1 className='app__title'>Rick and Morty</h1>
              <form className='app__form' onSubmit={handleSubmit}>
              <input className='app__form-input' ref = {textinput} type="number" />
              <button className='app__form-btn'>Search</button>
            </form>
            </section> 

            {
              hasError  ?
                <h2 className='app__error'>❌ Hey! you must provide an id from 1 to 126</h2>
                :
                <>
                  <LocationCard
                    info = {location}
                  />
                  <div className='app__container'>
                    {
                      location?.residents.map((character) => (
                        <ResidentC 
                          key = {character}
                          info = {character}
                        />
                      )) 
                    }
                  </div>
                </>
            }
            
          </>
      }

    </div>
  )
}

export default App
