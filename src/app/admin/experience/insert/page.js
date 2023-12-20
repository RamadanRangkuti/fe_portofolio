"use client"
import React, { useState } from "react"
import axios from "axios"
// import { headers } from "../../../../../next.config"
import AuthContext from "@/context/AuthContext"

const Insert = () => {
  const [form, setForm] = useState({
    project_name:"",
    project_description:"",
    star:"",
    end_date:"",
    link_deploy:"",
    link_repo:"",
    image:null
  })

  const handleInput = (e) =>{
    const { name, value } = e.target;
    setForm({
      ...form,
      // [e.target.name]:e.target.value
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setForm({ ...form, image: file })
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/experience`, form, {headers:{
        'Content-Type': 'multipart/form-data'}
      });
      console.log('Experience added:', response.data);
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  }
  return (
    <div className="pt-20">
    <h1 className="mb-6">Insert Experience</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <label className="block text-white text-sm font-bold mb-2">project name</label>
      <input 
      type="text" 
      name="project_name" 
      className="text-black" 
      placeholder="skill name" 
      onChange={handleInput}/>
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">project_name</label>
        <input
        type="text" 
        name="project_description" 
        className="text-black" 
        placeholder="project description" 
        onChange={handleInput}
        />
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">start</label>
        <input
        type="text" 
        name="star" 
        className="text-black" 
        placeholder="start" 
        onChange={handleInput}
        />
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">end_date</label>
        <input
        type="text" 
        name="end_date" 
        className="text-black" 
        placeholder="end date" 
        onChange={handleInput}
        />
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">link_deploy</label>
        <input
        type="text" 
        name="link_deploy" 
        className="text-black" 
        placeholder="link_deploy" 
        onChange={handleInput}
        />
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">link_repo</label>
        <input
        type="text" 
        name="link_repo" 
        className="text-black" 
        placeholder="link_repo" 
        onChange={handleInput}
        />
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">image</label>
        <input
        type="file" 
        name="image" 
        className="text-black" 
        placeholder="image" 
        onChange={handleFileChange}
        />
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
