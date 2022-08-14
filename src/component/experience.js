import "bootstrap/dist/css/bootstrap.min.css"
import {Projects} from "./projects.js"
import "./css/experience.css"
import {AiOutlineArrowRight} from "react-icons/ai"

export const Experience = () => {
  return(
        <section id="experience">
          <div className="experience text-light d-flex align-items-center justify-content-center flex-column" style={{width:"100%",minHeight:"600px"}}>
          <div className="experienceHead" style={{minWidth:"50%"}}>
          <h2 className="border-bottom p-2">EXPERIENCE</h2>
          </div>
          <div className="card expcard mt-3" style={{minWidth:"50%",backgroundColor:"#D2042D",padding:"20px"}}>
              <h4 className="pb-3 border-bottom">Gallagher Service Center LLP, Pune, India (2017 - 2021)</h4>
              <h5 className="card-title border-bottom pb-3">Designation - Process Analyst</h5>
              <div className="card-body ps-5 pe-5 d-flex flex-column">
              <h5 className="card-text fw-bolder">Responsibilities :</h5>
              <div className="d-flex mb-2">
              <span><AiOutlineArrowRight className="mt-1 me-2" size={15}/></span>
              <span className="mt-1 resStyle">Document verification - Verify documents of clients if the claim is valid and also renew policy.</span>
              </div>
              <div className="d-flex mb-2">
              <span><AiOutlineArrowRight className="mt-1 me-2" size={15}/></span>
              <span className="mt-1 resStyle">Team Work - Maintaining and communicating all the updates with the team.</span>
              </div>
              <div className="d-flex mb-2">
              <span><AiOutlineArrowRight className="mt-1 me-2" size={15}/></span>
              <span className="mt-1 resStyle">Data entry - Collect and arrange financial information such as premium and tax, etc.</span>
              </div>
              <div className="d-flex mb-2">
              <span><AiOutlineArrowRight className="mt-1 me-2" size={15}/></span>
              <span className="mt-1 resStyle">Communicating  -  Answering client emails & calls within stipulated time.</span>
              </div>
              <div className="d-flex">
              <span><AiOutlineArrowRight className="mt-1 me-2" size={15}/></span>
              <span className="mt-1 resStyle">Multi tasking - Flexibility in managing multiple processes.</span>
              </div>
              </div>
            </div>
          </div>
          <Projects/>
        </section>
  )
}