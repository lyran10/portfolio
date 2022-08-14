import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import {Experience} from "./experience.js"
import "./css/education.css"

export const Education = () => {
  return(
        <section id="education">
          <div className="container4 d-flex align-items-center justify-content-center flex-column" style={{minWidth:"100vw"}}>
            <div className="educationHead" style={{minWidth:"50%"}}>
          <h2 className="border-bottom p-2">EDUCATION</h2>
          </div>
          <div className="container education d-flex justify-content-center align-items-center mt-3">
              <div className="educationList">
                <ul>
                  <li>
                    <div className="bba content">
                      <span className="date">2010 - 2013</span>
                        <h4>University of Nagpur, India</h4>
                        <span>Bachelors of Business Administration</span>
                    </div>
                  </li>
                  <li>
                      <div className="developers content">
                      <span className="date">2022 - 2022</span>
                        <h4>Developers Institute, Tel Aviv, Israel</h4>
                        <span>Full Stack Development (JavaScript)</span>
                    </div>
                  </li>
                </ul>
                
              </div>
              </div>
          </div>
            

          <Experience/>
        </section>
  )
}