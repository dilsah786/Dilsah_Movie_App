import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const links = [{title:"Home",path:"/"},
  {title:"Login",path:"/login"},
  {title:"Signup",path:"/signup"},
  {title:"MovieDetails",path:"/moviedetails"},
  

]
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
    {links.map((elem)=>{
    return  <Link key={elem.path} to={elem.path}><h1>{elem.title}</h1></Link>
    })}
    </div>
  )
}

export default Navbar