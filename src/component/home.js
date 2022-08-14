import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import {About} from "./about.js"
import {NavBar} from "./navbar"
import logo from "./Liran.jpg"
export const Home = () => {

  return(
    <section id="home">
       <NavBar/>
        <div className="home d-flex justify-content-center flex-column align-items-center position-relative">
        
          <div className="d-flex justify-content-center flex-column" style={{marginTop:"100px"}}>
                <span className="header fw-bolder text-light p-1">I AM</span>
                <span className="header fw-bolder text-light border-bottom p-1">LIRAN RAMEKAR</span>
                <span className="mini-header text-light p-2" style={{wordSpacing:"3px"}}>Graduated in Bachelors of Business Administraion.</span>
              <a href={logo} download="CV"><button className="btn mt-3 btn1">Download CV</button></a>
          </div>
        </div>
        <About/>
    </section>
  )
}