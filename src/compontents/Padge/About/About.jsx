import Content from "../Footer/Footer";

function About() {
    return (
        <>
            <div className="about">
<div className="container">
    <div className="text">
        <h1>about component</h1>
      <div className="star-icon">
 <i className="fa-solid fa-star"></i>
              </div>
        <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2 ">
            <div className="col ">
<p>Freelancer is a free bootstrap theme created by Route.
     The download includes the complete source files including
      HTML, CSS, and JavaScript as well as
     optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col ">
               <p>
 Freelancer is a free bootstrap theme created by Route. The download includes
 the complete source files including HTML, CSS,
 and JavaScript as well as optional SASS stylesheets for easy customization.
               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                   <Content/>

        </>
        
    )
}
export default About;