"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
// import AuthContext from '@/context/AuthContext'
import AuthContext from '@/context/AuthContext'

const Admin = () => {
  const [profile, setProfile] = useState([])
  const [skill, setSkill] = useState([])
  const [experience, setExperience] = useState([])
  
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
    const fetchSkillData = async () => {
      try {
        const skillResponse = await axios.get('http://localhost:5000/api/v1/skill');
        console.log(skillResponse.data.data);
        setSkill(skillResponse.data.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
    const fetchExperienceData = async () => {
      try {
        const experienceResponse = await axios.get('http://localhost:5000/api/v1/experience');
        console.log(experienceResponse.data.data);
        setExperience(experienceResponse.data.data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    }
    fetchData()
    fetchSkillData()
    fetchExperienceData()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/skill/${id}`);
      setSkill(skill.filter((item) => item.id_skill !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  }
  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/experience/${id}`);
      setExperience(experience.filter((item) => item.id_experience !== id));
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  }

  return (
    <>
    <div className='pt-20'>
      <h1>Bagian Profil</h1>
      <hr></hr>
      {profile.length > 0 ? (
        <>
          <h1>Nama: {profile[0].name}</h1>
          <h1>Email: {profile[0].email}</h1>
          <h1>Deskripsi: {profile[0].description}</h1>
          <div className='inline'>
            Gambar : 
            <Image 
              src={`http://localhost:5000/uploads/images/${profile[0].picture}`}
              alt='ramadan rangkuti'
              className='rounded-full border-4 border-white mb-4'
              width={100}
              height={250}
            />
            <Link className='bg-white text-black py-3 px-6 rounded-xl' href={`/admin/profile/${profile[0].id_profile}`}>Update</Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
    <div className='pt-20'>
        <h1>Bagian Skill</h1>
        <hr />
        {skill.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Skill Name</th>
                <th className='px-4'>Skill Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {skill.map((item) => (
                <tr key={item.id_skill}>
                  <td className='text-center'>{item.skill_name}</td>
                  <td className='text-center'>{item.skill_level}</td>
                  <td>
                  <div>
                    {/* <button className='bg-sky-300 mr-2 rounded px-2 py-2'>Update</button> */}
                    <Link className='bg-sky-300 mr-2 rounded px-2 py-2' href={`admin/skill/${item.id_skill}`}>Update</Link>
                    <button className='bg-red-500 rounded px-2 py-2' onClick={() => handleDelete(item.id_skill)}>Delete</button>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading skills...</p>
        )}
        <br />
        <Link className='bg-white text-black py-3 px-6 rounded-xl' href={`/admin/skill/insert`}>
          Add Skill
        </Link>
      </div>


      <div className='pt-20'>
        <h1>Bagian Experience</h1>
        <hr />
        {experience.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th className='text-center px-4'>Project Name</th>
                <th className='text-center'>Project Description</th>
                <th className='text-center px-4'>Start Date</th>
                <th className='text-center'>End Date</th>
                <th className='text-center px-4'>Link Deploy</th>
                <th className='text-center'>Link Repo</th>
                <th className='text-center px-4'>Image</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((item) => (
                <tr key={item.id_experience}>
                  <td className='text-center px-4'>{item.project_name}</td>
                  <td className='text-center'>{item.project_description}</td>
                  <td className='text-center px-4'>{item.star}</td>
                  <td className='text-center'>{item.end_date}</td>
                  <td className='text-center px-4'>
                    {item.link_deploy === '-' ? (
                      'N/A'
                    ) : (
                      <a href={item.link_deploy} target="_blank" rel="noopener noreferrer">
                        Deploy Link
                      </a>
                    )}
                  </td>
                  <td>
                    <a href={item.link_repo} target="_blank" rel="noopener noreferrer">
                      Repository Link
                    </a>
                  </td>
                  <td className='flex justify-center text-center px-6 py-4 whitespace-nowrap'>
                    <Image
                      src={`http://localhost:5000/uploads/images/${item.image}`}
                      alt={item.project_name}
                      className='center'
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>
                  <div>
                    <Link className='bg-sky-300 mr-2 rounded px-2 py-2' href={`admin/experience/${item.id_experience}`}>Update</Link>
                    <button className='bg-red-500 rounded px-2 py-2' onClick={() => handleDeleteExperience(item.id_experience)}>Delete</button>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading experiences...</p>
        )}
        <br/>
        <Link className='bg-white text-black py-3 px-6 rounded-xl' href={`/admin/experience/insert`}>
          Add Experience
        </Link>
      </div>
    </>
  )
}


export default AuthContext(Admin)