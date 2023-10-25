"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import AuthContext from '@/context/AuthContext'

const Update = ({params}) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    project_name:"",
    project_description:"",
    star:"",
    end_date:"",
    link_deploy:"",
    link_repo:"",
    image:null
  })
  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/experience/${params.experienceId}`)
        const experienceData = response.data.data
        setFormData({
          project_name:experienceData.project_name,
          project_description:experienceData.project_description,
          star:experienceData.star,
          end_date:experienceData.end_date,
          link_deploy:experienceData.link_deploy,
          link_repo:experienceData.link_repo,
          image:experienceData.image
        })
        // console.log(formData)
      } catch (error) {
        console.error('Error fetching profile data:', error)
      }
    }

    fetchExperienceData()
  }, [formData, params.experienceId])
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      // [e.target.name]:e.target.value
      [name]: value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Mendapatkan nama file dari objek File dan menyimpannya ke dalam inputData
      setFormData({ ...formData, image: file })
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:5000/api/v1/experience/${params.experienceId}`, formData, {headers:{
        'Content-Type': 'multipart/form-data'}
      });
      // console.log('Experience updated:', response.data)
      router.push('/admin')
    } catch (error) {
      console.error('Error adding experience:', error)
    }
  }

  return (
    <div className="pt-20">
    <h1 className="mb-6">Update Experience</h1>
    <form onSubmit={handleSubmit}>
    <div>
      <label className="block text-white text-sm font-bold mb-2">project name</label>
      <input 
      type="text" 
      name="project_name" 
      className="text-black"
      value={formData.project_name} 
      placeholder="skill name" 
      onChange={handleInput}/>
    </div>
    <div>
      <label className="block text-white text-sm font-bold mb-2">project description</label>
        <input
        type="text" 
        name="project_description" 
        className="text-black" 
        placeholder="project description"
        value={formData.project_description}
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
        value={formData.star} 
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
        value={formData.end_date}
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
        value={formData.link_deploy}
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
        value={formData.link_repo}
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

export default AuthContext(Update)
// export default Update