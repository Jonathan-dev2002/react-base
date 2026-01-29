import { useState } from "react";

interface Employee {
    id: number,
    name: string,
    salary: number
}

function ObjState() {
    const [person, setPerson] = useState<Employee>({
        id: 1,
        name: "joey",
        salary: 100000
    })
    return (
        <>
            <div>
                <h2>รหัส : {person.id}</h2>
                <h2>ชื่อพนักงาน1 : {person.name}</h2>
                <h2>เงินเดือน : {person.salary}</h2>
            </div>
            <button onClick={()=>setPerson(data=>({
                ...data,
                name:"jack"
            }
            ))}>edit</button>
        </>
    )
}

export default ObjState;