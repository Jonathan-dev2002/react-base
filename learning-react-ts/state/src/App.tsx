import { useState } from 'react'
import ObjState from './compoents/ObjState'
import ArrState from './compoents/ArrState'
import Header from './compoents/Header'
function App() {
  const [name, setName] = useState<string>('jonathan')
  const [salary, setSalary] = useState<number>(20000)
  const [isVisiable, setIsvisble] = useState<boolean>(true)
  return (
    <>
      <Header title="webapp for learning"/>
      <hr />
      {isVisiable &&
        (<div>
          <h1>พนักงาน : {name}</h1>
          <h2>เงินเดือน : {salary} บาท</h2>
        </div>)
      }

      <hr />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setSalary(salary + 1000)}>+</button>
      <button onClick={() => setSalary(salary - 1000)}>-</button>
      <button onClick={() => setIsvisble(!isVisiable)}>{isVisiable ? "ซ่อน" : "แสดง"}</button>
      <hr />
      <ObjState />

      <hr />
      <ArrState />
    </>
  )
}

export default App
