'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UpdatePage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: '123', firstName, lastName, email, address, age })
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const updatedUser = await response.json()
      console.log('Updated user:', updatedUser)
      router.push('/') // Redirect to the home page after successful update
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <h1>Update User</h1>
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}
