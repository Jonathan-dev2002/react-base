import { useState, useEffect } from 'react'

interface User{
    id:number,
    name:string;
}

export default function EmployeeList() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>กำลังโหลด ....</p>;

    return (
        <ul>
            {users.map(u =>
                <li key={u.id}>
                    {u.name}
                </li>
            )}
        </ul>
    );

}