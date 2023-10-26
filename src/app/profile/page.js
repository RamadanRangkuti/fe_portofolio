import axios from "axios"
const getDataProfile = async()=>{
  try {
    const response = await axios.get('https://api-ramadanrangkuti.vercel.app/api/v1/profile')
    // console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
}

const Profile = async() => {
  const profile = await getDataProfile()
  return (
    <div>
      <h1 className="text-white mt-8">Page Profile</h1>
      {profile.map((item, i)=>(
        <div key={i}>
          {item.name}
          {item.email}
        </div>
      ))}
    </div>
  )
}

export default Profile