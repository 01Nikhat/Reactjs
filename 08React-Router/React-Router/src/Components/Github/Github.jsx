import React, { useEffect, useState } from 'react'
//import { useParams } from 'react-router-dom'


function Github() {
    const [data,setData] = useState([])
    useEffect (()=>{
        fetch('https://api.github.com/users/01Nikhat').
        then(response =>response.json())
        .then(data=>{
            console.log(data);
            setData(data)

        })
    },[])
   // const {githubid} = useParams()
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
