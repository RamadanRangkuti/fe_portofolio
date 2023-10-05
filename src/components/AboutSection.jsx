"use client"
import React, {useTransition, useState, useEffect} from 'react'
import TabButton from './TabButton'
import Image from 'next/image'
import axios from 'axios' // Import Axios library

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [skillsData, setSkillsData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch skills data from the API
    axios.get('http://localhost:5000/api/v1/skill')
      .then((response) => {
        setSkillsData(response.data.data); // Update skillsData state with API response
      })
      .catch((error) => {
        console.error('Error fetching skills data:', error)
      })

    // Fetch education data from the API
    axios.get('http://localhost:5000/api/v1/school')
      .then((response) => {
        setEducationData(response.data.data) // Update educationData state with API response
      })
      .catch((error) => {
        console.error('Error fetching education data:', error)
      });
  }, []); // Run this effect only once when the component mounts

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderTabContent = () => {
    switch (tab) {
      case 'skills':
        return (
          <ul className="list-disc pl-2">
            {skillsData.map((skill) => (
              <li key={skill.id_skill}>{skill.skill_name}</li>
            ))}
          </ul>
        );
      case 'education':
        return (
          <ul className="list-disc pl-2">
            {educationData.map((school) => (
              <li key={school.id_school}>{school.school_name}</li>
            ))}
          </ul>
        );
      case 'certifications':
        return (
          <ul className="list-disc pl-2">
            <li>JavaScript by Dicoding</li>
            <li>Memulai pemrograman dengan Kotlin by Dicoding</li>
            <li>Android dasar by dicoding</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-white">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" alt='about' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>     
          <p className='text-base lg:text-lg'> Im a Fullstack Web Developer who loves to learn any of things, especially technology and programming languages. Able to use various Javascript frameworks and libraries such as React.JS, Redux, ExpressJS. Experienced using PostgreSQL for the database. Fast learner, adaptable, and a professional person in a work environment.</p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> Certifications </TabButton>
          </div>
          <div className='mt-8'>{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection



// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>PostgreSQL</li>
//         <li>Sequelize</li>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>NextJS</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Fullstack Academy of Code</li>
//         <li>Mikroskil University</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];
// const AboutSection = () => {
//   const [tab, setTab] = useState("skills")
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(()=>{
//       setTab(id)
//     })
//   }
//   return (
//     <section className='text-white'>
//       <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
//         <Image src="/images/about-image.png" alt='about' width={500} height={500} />
//         <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
//           <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>     
//           <p className='text-base lg:text-lg'>Im a Fullstack Web Developer who loves to learn any of things, especially technology and programming languages. Able to use various Javascript frameworks and libraries such as React.JS, Redux, ExpressJS. Experienced using PostgreSQL for the database. Fast learner, adaptable, and a professional person in a work environment.</p>
//           <div className='flex flex-row mt-8'>
//             <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
//             <TabButton selectTab={()=>handleTabChange("education")} active={tab === "education"}> Education </TabButton>
//             <TabButton selectTab={()=>handleTabChange("certifications")} active={tab === "certifications"}> Certifications </TabButton>
//           </div>
//           <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutSection