import imgLanding from '../../../assets/avataaars.svg'
import Content from '../Footer/Footer';


function Landing() {

    return (
        <>
       <div className="landing">
        <div className="container">
            <div className="content-landing ">
                <img  src={imgLanding} alt="Photo-Men" />
                <div className="text">
               <h1 className=' text-uppercase fw-bold m-4 text-white'>start Framework</h1>
              <div className="star-icon">
                 <i className="fa-solid fa-star"></i>
              </div>
               <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
       </div>
       <Content/>
        </>
    )
}
export default Landing;