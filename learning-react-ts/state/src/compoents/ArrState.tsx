import { useState } from "react";

interface Employee {
    id: number,
    name: string,
    salary: number
}

function ArrState() {
    const [data, setData] = useState<Employee[]>([
        { id: 1, name: "jj", salary: 1000 },
        { id: 2, name: "j2", salary: 1 },
        { id: 3, name: "j32", salary: 22 }
    ])
    function deleteData(id: number) {
        setData(data.filter(person => person.id !== id))
    }
    return (
        <>
            <ul>
                {
                    data.map((person) => (
                        <li key={person.id}>
                            ชื่อพนักงาน {person.name} , salary {person.salary}
                            <button onClick={() => deleteData(person.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ArrState;