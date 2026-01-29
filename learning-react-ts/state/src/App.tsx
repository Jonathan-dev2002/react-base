import { useState } from "react";
import ObjState from "./compoents/ObjState";
import ArrState from "./compoents/ArrState";
import Header from "./compoents/Header";
import EmployeeList from "./compoents/EmployeeList";
import DeleteBtn from "./compoents/DeleteBtn";

function App() {
  const [name, setName] = useState<string>("jonathan");
  const [salary, setSalary] = useState<number>(20000);
  const [isVisiable, setIsvisble] = useState<boolean>(true);
  const [count, setCount] = useState<number>(10);
  
  const handleDelete = () => {
    setCount(0);
    alert("Delete succes");
  };

  return (
    <>
      <Header title="webapp for learning" />
      <hr />
      {isVisiable && (
        <div>
          <h1>พนักงาน : {name}</h1>
          <h2>เงินเดือน : {salary} บาท</h2>
        </div>
      )}

      <hr />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setSalary(salary + 1000)}>+</button>
      <button onClick={() => setSalary(salary - 1000)}>-</button>
      <button onClick={() => setIsvisble(!isVisiable)}>
        {isVisiable ? "ซ่อน" : "แสดง"}
      </button>
      <hr />
      <ObjState />

      <hr />
      <ArrState />
      <hr />
      <EmployeeList />

      <hr />
      <div>
        <h3>คะแนน: {count}</h3>
        <DeleteBtn onClickDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
