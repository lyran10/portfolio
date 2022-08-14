import "bootstrap/dist/css/bootstrap.min.css"
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub} from "react-icons/fa"
import { useState } from "react"
import "./css/footer.css"

export const Footer = () => {
  const [fb,setfb] = useState()
  const [insta,setinsta] = useState()
  const [link,setlink] = useState()
  const [git,setgit] = useState()
  
  return(
        <section id="contact">
          <div className="footer" style={{minWidth:"110%",minHeight:"400px",backgroundColor:"#D2042D"}}>
            <div className="d-flex justify-content-center align-items-center flex-column gap-3">
              <h2 style={{marginTop:"150px"}} className="name text-light fw-bolder">Liran Ramekar</h2>
              <h5 className="contact text-light fw-bolder">+972 53-665-2453 | liranramekar7@gmail.com</h5>
            </div>
             <div className="icons d-flex gap-5 justify-content-center align-items-start p-1 pt-4 mt-3">
                 <a href="https://www.facebook.com/liran.immanuel" target="_blank"><FaFacebookF onMouseLeave={() => setfb("white")} onMouseEnter={() => setfb("black")} style={{color : fb}} className="icon" size={20}/></a> 

                  <a href="https://www.instagram.com/liranimmanuel/" target="_blank" ><FaInstagram className="icon" onMouseLeave={() => setinsta("white")} onMouseEnter={() => setinsta("black")} style={{color : insta}} size={20}/></a>

                 <a href="https://www.linkedin.com/in/liran-ramekar-398163217/" target="_blank"><FaLinkedinIn className="icon" onMouseLeave={() => setlink("white")} onMouseEnter={() => setlink("black")} style={{color : link}} size={20}/></a>

                  <a href="https://github.com/" target="_blank"><FaGithub className="icon" onMouseLeave={() => setgit("white")} onMouseEnter={() => setgit("black")} style={{color : git}} size={20}/></a>
              </div>
          </div>
        </section>
  )
}