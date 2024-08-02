import hand from "../assets/hand_icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImg from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div>
      <div className="container-fluid col-xxl-12 px-5 py-2" style={{background: "linear-gradient(to bottom, rgb(251,227,255), white)"}}>
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6" style={{width: "30%"}} id="heroImg">
            <img
              src={heroImg}
              className="d-block mx-lg-auto img-fluid"
              style={{width: "100%"}}
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" style={{width: "42%"}} id="heroRight">
            <p className="lead fw-bold fs-6">NEW ARRIVALS ONLY</p>
            <h1
              style={{ fontWeight: "500" }}
              className="display-2 text-dark lh-1 mb-3"
            >
              <span>
                new <img src={hand} style={{ width: "10%" }} alt="" />
              </span>{" "}
              <br />
              collections <br />
              for everyone
            </h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-danger py-2 btn-sm rounded-5 px-4 me-md-2"
              >
                Latest Collection <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
