import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import {Skills} from "./skills.js"
import logo from "./Liran.jpg"

export const About = () => {
  return(
        <section id="about">
          <div className="about d-flex justify-content-center align-items-center gap-5" style={{width:"110%",color:"black"}}>
            <div className="aboutMe ms-5">
            <h2 className="aboutHead border-bottom p-2">ABOUT ME</h2>
            <p className="aboutPara">My journey of becoming a web developer started during the lockdown when a thought came in my mind to start coding. So I started coding without any training. In the start it was quite easy to type Hello World. Slowely as I kept on learning it became so difficult which I never thought of. But I was eager to learn more about it, then decided to do a course in Full Stack Development. Coding excites me because in every project there is something new to learn and I am a kind of a person who likes to keep on experimenting and learn new things.</p>
            </div>
            <div>
            <img src={logo} className="image me-3 img-fluid"/>
            </div>
          </div>
          <Skills/>
        </section>
  )
}