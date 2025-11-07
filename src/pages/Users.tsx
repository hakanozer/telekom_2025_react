import React, { useEffect, useMemo, useState } from 'react'
import { allUser } from '../services/usersService'
import { SingleUser } from '../models/iAllUser'

function Users() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  const call = (num: number) => {
    console.log("⚙️ Ağır işlem çalıştı")
    let total = 0
    for (let i = 0; i < 1_000; i++) { // Simülasyon
      total += i
    }
    return num * 10 + total
  }
  const result = useMemo(() => call(count), [count])
  console.log("🌀 Component render oldu")

  const [users, setUsers] = useState<SingleUser[]>([])
  useEffect(() => {
    allUser().then(res => {
      const dt = res.data
      setUsers(dt.data)
    })
  }, [])
  

  return (
    <>
      <button onClick={() => setCount(count + 1)} className='btn btn-danger btn-sm'>
        Count Artır
      </button>
      <button onClick={() => setOther(other + 1)} className='btn btn-info btn-sm'>
        Other Artır
      </button>
      <p>Sonuç: {result}</p>
      <p>Other: {other}</p>
      <hr />
      <h2>Users</h2>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>

          {users.map((item, index) => 
            <tr role='button' key={index}>
              <th scope="row">{item.id}</th>
              <td>
                <img style={{width: 88,}} src={item.profile} className='img-thumbnail rounded-circle' />
              </td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          )}
          
        </tbody>
      </table>
    </>
  )
}

export default Users
