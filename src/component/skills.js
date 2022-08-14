import "bootstrap/dist/css/bootstrap.min.css"
import {Education} from "./education.js"
import "./css/skills.css"
import {FaLaptopCode,FaDatabase,FaCogs,FaIdCard} from "react-icons/fa"

export const Skills = () => {
  return(
        <section id="skills">
          <div className="container3 d-flex justify-content-center align-items-center" style={{minHeight:"600px"}}>
          <div className="skills" style={{marginTop:"100px"}}>
            <h2 className="skillsHead border-bottom p-2 text-light">SKILLS</h2>

            <div className="container skillList d-flex flex-column gap-3 mt-3">
                <div className="row d-flex gap-3">
                    <div className="basics hover col d-flex gap-3 align-items-center mt-2">

                      <div className="d-flex justify-content-center align-items-center" style={{height:"150px",width:"150px",border : "white solid 1px"}}>
                            <FaLaptopCode className="icons" size={90} style={{color :"white"}}/>
                      </div>
                      
                        <div className="basicDetails">
                          <h3 className="text-light">Basics</h3>
                          <div className="d-flex flex-column text-light fs-5">
                              <span>JavaScript</span>
                              <span>HTML</span>
                              <span>CSS</span>
                          </div>
                        </div>
                      
                    </div>

                  <div className="framework hover col d-flex gap-3 align-items-center mt-2">

                      <div className="frameworkDetails d-flex align-items-center justify-content-center" style={{height:"150px",width:"150px",border : "white solid 1px"}}>
                            <FaIdCard className="icons" size={90} style={{color :"white"}}/>
                      </div>
                      
                        <div className="">
                          <h3 className="text-light">Framework</h3>
                          <div className="d-flex flex-column text-light fs-5">
                              <span>React</span>
                              <span>React Redux</span>
                              <span>Bootstrap</span>
                          </div>
                        </div>
                    
                    </div>
                </div>
                <div className="row d-flex gap-3">
                    <div className="database hover col d-flex gap-3 align-items-center">

                      <div className="d-flex align-items-center justify-content-center mb-2" style={{height:"150px",width:"150px",border : "white solid 1px"}}>
                            <FaDatabase className="icons" size={80} style={{color :"white"}}/>
                      </div>
                      
                        <div className="">
                          <h3 className="text-light">Database</h3>
                          <div className="d-flex flex-column text-light fs-5">
                              <span>PostgreSQL</span>
                              <span>Node.js</span>
                              <span>API's</span>
                              <span>Knex</span>
                          </div>
                        </div>
                    
                    </div>

                  <div className="extra hover col d-flex gap-3 align-items-center">

                      <div className="d-flex align-items-center justify-content-center mb-1" style={{height:"150px",width:"150px",border : "white solid 1px"}}>
                            <FaCogs className="icons" size={90} style={{color :"white"}}/>
                      </div>
                      
                        <div className="extraDetails">
                          <h3 className="text-light">Extra</h3>
                          <div className="d-flex flex-column text-light fs-5">
                              <span>Github</span>
                              <span>MediaQuery</span>
                          </div>
                        </div>
            
                    </div>
                </div>
            </div>
            </div>
          </div>
          <Education/>
        </section>
  )
}