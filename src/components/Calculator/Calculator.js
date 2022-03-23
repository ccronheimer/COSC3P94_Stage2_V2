import React from 'react'
import MortgageCalculator from "mortgage-calculator-react";
import "./Calculator.css"
const Calculator = () => {
  return (
    <div className='container'> <h1>Calculate mortgage</h1><div className='sub-container'><MortgageCalculator/></div>  </div>
  )
}

export default Calculator