function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="container text-center">
          <div className="row g-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="box">
                <h3 >LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-solid fa-earth-americas"></i></a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap 
                </p>
                <p>
                    theme created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-author">
            <p>Copyright © Your Website 2025</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
