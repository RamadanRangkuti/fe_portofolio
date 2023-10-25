"use client"
import React, {useState, useEffect} from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image';
import axios from 'axios';

// const projectsData = [
//   {
//     id: 1,
//     title: "Inventory Management System",
//     description: "Manage stock and record stock",
//     image: "/images/projects/inventory.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Coffeshop",
//     description: "Website application for ordering coffee and food.",
//     image: "/images/projects/coffeshop.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];
const ProjectsSection = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/experience')
    .then((response)=>{
      setExperience(response.data.data)
      // console.log(response.data)
    })
    .catch((error)=>{
      console.error('Error fetching skills data:', error)
    })
  }, []);
  return (
    <>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
      My Projects
    </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{experience.map((item) => 
      <ProjectCard 
      key={item.id_experience}
      title={item.project_name}
      description={item.project_description}
      imgUrl={`http://localhost:5000/uploads/images/${item.image}`}
      gitUrl={item.link_repo}
      deployUrl={item.link_deploy}/>
      )}
    </div>
    </>
  )
}

export default ProjectsSection