// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-3xl mb-4'>Tailwind Testing</h1>  
      <Card 
      username = "Umar, The builder"
      someObj = {{
        channel: "Chai aur Code",
        instructor: "Hitesh Ch"
      }}
      age = {20}
      />
      <Card
      username = "Hitesh, The builder"
      someObj = {{
        channel: "Coffe aur Code",
        instructor: "Unkown"
      }}
      />
    </>
  )
}

export default App
