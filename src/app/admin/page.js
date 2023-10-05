"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const Admin = () => {
  const [profile, setProfile] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/profile')
        console.log(response.data.data)
        setProfile(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='pt-20'>
      <h1>Bagian Profil</h1>
      <hr></hr>
      {profile.length > 0 ? (
        <>
          <h1>Nama: {profile[0].name}</h1>
          <h1>Email: {profile[0].email}</h1>
          <h1>Deskripsi: {profile[0].description}</h1>
          <h1 className='inline'>
            Gambar : 
            <Image 
              src={`http://localhost:5000/uploads/images/${profile[0].picture}`}
              alt='ramadan rangkuti'
              className='rounded-full border-4 border-white mb-4'
              width={100}
              height={250}
            />
            <Link href={`/admin/${profile[0].id_profile}`}>Detail</Link>
          </h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Admin
