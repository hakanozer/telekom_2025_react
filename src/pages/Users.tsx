import React, { useMemo, useState } from 'react'

function Users() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  const call = (num: number) => {
    console.log("⚙️ Ağır işlem çalıştı")
    let total = 0
    for (let i = 0; i < 1_000_000_000; i++) { // Simülasyon
      total += i
    }
    return num * 10 + total
  }

  const result = useMemo(() => call(count), [count])

  console.log("🌀 Component render oldu")

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
    </>
  )
}

export default Users
