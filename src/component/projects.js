import "bootstrap/dist/css/bootstrap.min.css"
import "./css/projects.css"
import {Footer} from "./footer.js"

export const Projects = () => {
  return(
      <section id="projects">
        <div className="container5" style={{minWidth:"110%",minHeight:"700px"}}>
            <div className="Projects d-flex align-items-center justify-content-center flex-column" style={{minWidth:"100vw",minHeight:"600px"}}>
            <div className="projectsHead" style={{minWidth:"50%"}}>
                  <h2 className="border-bottom p-2">PROJECTS</h2>
            </div>
            <div className="cards d-flex gap-5 flex-wrap justify-content-center p-3 mt-2" >

            <div className="card procard borderLeft borderTop">
              <div className="card-body d-flex flex-column gap-3">
                <h5 className="texthead card-title">To Do List Application</h5>
                <span className="text card-text wordSpace">This app is used to track day to day tasks. Also can put a description for the task. A Database
                is used to store the data. Also can delete or edit the task.</span>
                <div style={{marginTop:"30px"}}>
                <a href="https://create-weather-application.herokuapp.com" target="_blank"><button style={{width:"100%",border:"solid 2px #D2042D"}} className="btn button text-dark">Trial</button></a>
                </div>
              </div>
            </div>

            <div className="card procard borderLeft borderTop" style={{width: "18rem"}}>
              <div className="card-body d-flex flex-column gap-3">
                <h5 className="texthead card-title">Weather Application</h5>
                <span className="text card-text wordSpace">This app gives information to the user about the current weather and five days forecast of any city around the world in Fahrenheit and Celsius temperature.</span>
                <div style={{width:"100%"}} className="weatherBtn">
                <a href="https://app-two-do-list.herokuapp.com" target="_blank"><button style={{width:"100%",border:"solid 2px #D2042D"}} className="btn button text-dark">Trial</button></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
      </section>
  )
}