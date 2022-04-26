import React from 'react'
import MortgageCalculator from "mortgage-calculator-react";
import "./Calculator.css"
const Calculator = () => {
  return (
    <div className='Bgimg'>
    <div className='container'>
    <div className='title'>
    <h1>Calculate mortgage</h1>
    </div>
    <div className='sub-container'>
    <MortgageCalculator/>
    </div>  
    </div>
    </div>
  )
}

export default Calculator
