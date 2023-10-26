"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AuthContext from '@/context/AuthContext'

const UpdateProfile = ({ params }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    picture: '', 
  })

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`https://api-ramadanrangkuti.vercel.app/api/v1/profile/${params.profileId}`)
        const profileData = response.data.data
        // console.log('Profile Picture URL:', profileData.picture)
        setFormData({
          name: profileData.name,
          email: profileData.email,
          description: profileData.description,
          picture: profileData.picture, 
        })
        // console.log(formData)
      } catch (error) {
        console.error('Error fetching profile data:', error)
      }
    }

    fetchProfileData()
  }, [params.profileId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Lakukan permintaan HTTP PUT ke API dengan data formData
      const response = await axios.patch(`https://api-ramadanrangkuti.vercel.app/api/v1/profile/${params.profileId}`, formData)
      // console.log('Profil berhasil diperbarui', response.data.data)
      // Setelah berhasil memperbarui, Anda dapat mengarahkan pengguna ke halaman lain
      // menggunakan router Next.js atau mengatur pesan sukses.
      router.push('/admin')
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <div className=''>
      <h1 className="mt-20 text-white">Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="name">Name:</label>
          <input
            className='border shadow ml-10 text-black'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className='border shadow ml-10 text-black'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className='border shadow ml-10 text-black'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <Image
            src={formData.picture}
            alt="Profile Picture"
            className="rounded-full border-4 border-white mb-4"
            width={100}
            height={100}
          />
        </div>
        <button className='bg-white text-black rounded px-2 py-4 mt-4' type="submit">Update Profile</button>
      </form>
    </div>
  )
}

export default AuthContext(UpdateProfile)
// export default UpdateProfile
