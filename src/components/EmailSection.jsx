"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg"

const EmailSection = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    
  }

  const handleEmail = () =>{
    setEmail()
  }
  return (
    <section className="grid px-4 xl:px-16 md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let`&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e)=> setEmail(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              onChange={(e)=> setSubject(e.target.value)}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={(e)=> setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Message..."
            />
          </div>
          <button
            type="submit"
            onSubmit={() => {window.location = `mailto:${email}?subject=${subject}&body=${message}`}}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {/* <a href="mailto:ramadanrangkuti17@gmail.com" className='bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Mail</a> */}
        </form>
      </div>
    </section>
  )
}

export default EmailSection