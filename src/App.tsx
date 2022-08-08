import React from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./State"
import { State } from "./State/reducers"

function App() {
  const dispatch = useDispatch()

  const { depositMoney, withDrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  )
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <h1>{amount ?? 0}</h1>
      <button onClick={() => depositMoney(20)}>Deposit</button>
      <button onClick={() => withDrawMoney(20)}>WithDraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  )
}

export default App
