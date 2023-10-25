"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import AuthContext from '@/context/AuthContext'

const Update = ({params}) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    skill_name: '',
    skill_level: '',
  })

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/skill/${params.skillId}`)
        const skillData = response.data.data
        setFormData({
          skill_name: skillData.skill_name,
          skill_level: skillData.skill_level,
        })
        // console.log(formData)
      } catch (error) {
        console.error('Error fetching profile data:', error)
      }
    }

    fetchSkillData()
  }, [params.skillId, formData])

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:5000/api/v1/skill/${params.skillId}`, formData);
      console.log('Skill added:', response.data);
      router.push('/admin')
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  }

  return (
    <>
    <div className='pt-16'>Update Skill</div>
    <form onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="name">Skill Name</label>
          <input
            className='border shadow ml-10 text-black'
            type="text"
            id="skill_name"
            name="skill_name"
            value={formData.skill_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skill_level">Skill Level</label>
          <input
            className='border shadow ml-10 text-black'
            type="number"
            id="skill_level"
            name="skill_level"
            value={formData.skill_level}
            onChange={handleChange}
          />
        </div>
        <button className='bg-white text-black px-2 py-4 rounded-xl mt-4' type="submit">Update Profile</button>
      </form>
    </>
  )
}

export default AuthContext(Update)
// export default Update