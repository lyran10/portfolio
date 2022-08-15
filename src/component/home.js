import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import {About} from "./about.js"
import {NavBar} from "./navbar"
import logo from "./Liran.jpg"
import PDF from "./Liran_CV.pdf"
export const Home = () => {

  return(
    <section id="home">
       <NavBar/>
        <div className="home d-flex justify-content-center flex-column align-items-center position-relative">
        
          <div className="container d-flex justify-content-center flex-column" style={{marginTop:""}}>
                <span className="header fw-bolder text-light p-1">I AM,</span>
                <span className="header fw-bolder text-light border-bottom p-1">LIRAN RAMEKAR</span>
                <span className="mini-header text-light p-2" style={{wordSpacing:"3px"}}>Graduated in Bachelors of Business Administraion.</span>
              <a href={PDF} download="CV"><button style={{border:"solid 2px #D2042D", backgroundColor:"black",color:"white"}} className="btn mt-3 btn1">Download CV</button></a>
          </div>
        </div>
        <About/>
    </section>
  )
}