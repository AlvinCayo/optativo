import { useState } from 'react'
import { Button } from './components/button'
import { Tittle } from './components/tittle'
import { Tittle2 } from './components/tittle2'
import { Image } from './components/image'
import './App.css'

function App() {

  return (
    <>
      <div className='rectangulo'>
        <Image></Image>
        <Button></Button>
        <Tittle2></Tittle2>
        <Tittle></Tittle>
        
      </div>
    </>
  )
}

export default App
