import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
        <h2 className='text-2xl font-bold text-center'>
          GloryBoard
        </h2>
      </div>
    </>
  )
}

export default App
