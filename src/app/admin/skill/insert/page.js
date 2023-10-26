"use client"
import React, { useState } from "react"
import axios from "axios"
import AuthContext from "@/context/AuthContext"
import { useRouter } from 'next/navigation'

const Insert = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    skill_name:"",
    skill_level:""
  })

  const handleInput = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post('https://api-ramadanrangkuti.vercel.app/api/v1/skill', form)
      // 'Content-Type': 'multipart/form-data'
      console.log('Skill added:', response.data);
      router.push('/admin')
    } catch (error) {
      console.error('Error adding skill:', error);
    }
  }
  return (
    <div className="pt-20">
    <h1>Insert Skill</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <input type="text" name="skill_name" className="text-black" placeholder="skill name" onChange={handleInput}/>
    </div>
    <div>
      <input type="number" name="skill_level" className="text-black" placeholder="skill level" onChange={handleInput}/>
    </div>
    <div>
      <button type="btn">Submit</button>
    </div>
    </form>
    </div>
  )
}

export default AuthContext(Insert)
// export default Insert