
import React from "react"
import { useState } from "react"
import { evaluate, sqrt, square  } from "mathjs"
import "./App.css"
// const math = create(all, {})

const App = () => {
  const [buttons] = useState(["clear", "back", "square", "sqrt", 9, 8, 7, 6, 5, 4, 3, 2, 1,0, "-", "*", "+", ".", "/", "="])
  const [output, setOutput] = useState([0])
  const [sum, setSum] = useState([])

  

  const clickHandler = (index, e) => {
    
    if (e.target.innerHTML === "=" && output) {
      equalsHandler() }
    else if ( e.target.innerHTML === "square" ){
      squareHandler()
    } else if (e.target.innerHTML === "sqrt"){
      sqrtHandler()
    } else if ( e.target.innerHTML === "clear"){
      screenClear()
    } else if (e.target.innerHTML === "back"){
      const storedOutput = [...output]
      storedOutput.pop()
      setOutput(storedOutput)
      const storedSum = [...sum]
      storedSum.pop()
      setSum(storedSum)
    } else if (output === "error") {
      setOutput("error")
    }
    else {
      
      const storedOutput = [...output]
      storedOutput.push(buttons[index])
      setOutput(storedOutput)

      const storedSum = [...sum]
      storedSum.push(buttons[index])
      setSum(storedSum)
    }
  }
  const squareHandler = () => {
    if (output.length >0) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = square(joinedOutput)
      const strans = answer.toString()
      const splitans = strans.split("")
      
      setOutput(splitans)
    }
    
  }
  const sqrtHandler = () => {
    if (output.length >0) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = sqrt(joinedOutput)
      const strans = answer.toString()
      const splitans = strans.split("")
      setOutput(splitans)
    }
  }
  const screenClear = () => {
    setOutput("")
    setSum("")
  }
  
  const equalsHandler = () => {
    if (output.length > 1) {
      const storedOutput = [...output]
      const joinedOutput = storedOutput.join("")
      const answer = evaluate(joinedOutput)
      const strans = answer.toString()
      const splitans = strans.split("")
      setOutput(splitans)

      const storedSum = [...sum]
      storedSum.push(")")
      storedSum.unshift("(")
      setSum(storedSum)
    }
  }

  return (
    <div className="calculator">
      <div className="screen"> {output} <div className="sum"> {sum}</div> </div>
      
      <div className="container">

        {buttons.map((button, index) => {
          return <button className="btn" key={index} onClick={(e) => clickHandler(index, e)}>{button}</button>

        })}
        
      </div>
      </div>
   
  )}

  export default App;