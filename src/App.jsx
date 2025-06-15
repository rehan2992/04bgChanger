import { useState } from "react"

function App() {
  const [color, setColor]= useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{
        backgroundColor: color
      }}
      >

        <div className="fixed flex flex-wrap justify-center left-40 top-1/2 -translate-y-1/2 px-">
         <div className="flex flex-col justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button 
          onClick={() => setColor("red")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

            <button 
            onClick={() => setColor("blue")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

            <button 
            onClick={() => setColor("green")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>


            <button 
            onClick={() => setColor("orange")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>

          <button 
            onClick={() => setColor("violet")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button>

          <button 
            onClick={() => setColor("tan")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "tan"}}
          >Tan</button>

          <button 
            onClick={() => setColor("cyan")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>

          <button 
            onClick={() => setColor("grey")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>

          <button 
            onClick={() => setColor("black")}
          className="Outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>

          <button 
            onClick={() => setColor("white")}
          className="Outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button>

          <button 
            onClick={() => setColor("yellow")}
          className="Outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

         </div>
        </div>

      </div>
    </>
  )
}

export default App
