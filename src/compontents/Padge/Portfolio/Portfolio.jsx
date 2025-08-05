import img1 from "../../../assets/poert1.png";
import img2 from "../../../assets/port2.png";
import img3 from "../../../assets/port3.png";
import Content from "../Footer/Footer";

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="conatiner">
          <div className="title-gallery">
            <div className="info-title text-center">
              <h1>portfolio component</h1>
              <div className="star-icon">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="gallery-parent container">
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img1} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img2} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img3} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img1} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img2} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="gallery">
                  <div className="img">
                    <img src={img3} alt="" />
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </>
  );
}
export default Portfolio;
