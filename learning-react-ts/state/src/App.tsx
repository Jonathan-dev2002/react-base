import { useState } from "react";
import ObjState from "./compoents/ObjState";
import ArrState from "./compoents/ArrState";
import Header from "./compoents/Header";
import EmployeeList from "./compoents/EmployeeList";
import DeleteBtn from "./compoents/DeleteBtn";
import UserCard from "./compoents/UserCard";
import SearchBar from "./compoents/SearchBar";
import LoginForm from "./compoents/LoginForm";

function App() {
  const [name, setName] = useState<string>("jonathan");
  const [salary, setSalary] = useState<number>(20000);
  const [isVisiable, setIsvisble] = useState<boolean>(true);
  const [count, setCount] = useState<number>(10);
  const [users, setUsers] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "joey" },
  ]);
  const [keyword, setKeyword] = useState("");
  const handleDelete = () => {
    setCount(0);
    alert("Delete succes");
  };

  const removeUser = (idToDelete: number) => {
    setUsers(users.filter((u) => u.id !== idToDelete));
    console.log("already delete this user : ", idToDelete);
  };
  const handleSearch = (text: string) => {
    setKeyword(text);
  };
  const handleLogin = (formData: { username: string; pass: string }) => {
    alert(`กำลังล็อคอิน: ${formData.username}`);
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
      <hr />

      <div>
        {users.map((u) => (
          <UserCard key={u.id} id={u.id} name={u.name} onDelete={removeUser} />
        ))}
      </div>
      <hr />
      <div>
        <SearchBar onSearchChange={handleSearch} />
        <p>You are searching the word : {keyword}</p>
      </div>

      <hr />
      <div>
        <h1>Sign in</h1>
        <LoginForm onLoginSubmit={handleLogin} />
      </div>
    </>
  );
}

export default App;
