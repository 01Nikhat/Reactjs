import { useState } from 'react'

//The on click method in React expects a function reference
//You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
function App() {
  const [Color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center rounded-3xl px-3 py-3  gap-3 bg-white  shadow-lg'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' 
          onClick={()=>setColor("red")}
          style={{backgroundColor:"red"}}>
            Red</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' 
             onClick={()=>setColor("green")}
          style={{backgroundColor:"green"}}>
            Green</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' 
             onClick={()=>setColor("yellow")}
          style={{backgroundColor:"yellow"}}>
            Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white ' 
             onClick={()=>setColor("blue")}
          style={{backgroundColor:"blue"}}>
            Blue</button>
        </div>
      </div>
    </>

  )
}

export default App
