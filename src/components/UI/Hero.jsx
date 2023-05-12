import React from "react";
import meImg from '../../assets/images/me-01.JPG'
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========= hero left content ========= */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 "
            >
              I'm Roy John Lee <br />
              Full-Stack Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line"></i> Contact me
                </button>
              </a>
              <a
                // href="src/assets/res/res.pdf"
                href="https://docs.google.com/document/d/e/2PACX-1vSbnjpG7E04oK5fc2yrpRUSBe6YjCnsXRiFD7enRhlDixUZP_iHyhgoP9ixTmbQUg/pub"
                download
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See resume <i class="ri-file-line"></i>
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[16px] leading-7 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              A dynamic and collaborative Full-Stack Developer with a unique background in sales, business, and education. As a team player, I thrive in environments that value open communication, creativity, and innovation. With my effective communication skills, I am able to bridge the gap between technical and non-technical stakeholders, ensuring that everyone is aligned and working towards the same goals.
              <br />
              <br />
              Based in Orange County, California 📍
            </p>

            <div className="flex items-center gap-5 mt-14">
              <span className="text-smallTextColor text-[16px] font-[600] sm:pl-6">
                Follow me:
              </span>
              {/* <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span> */}
              <span>
                <a
                  href="https://github.com/royjohnlee"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/roy-john-lee/"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/Ro.joh.lee"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ========= hero left end ========= */}
          {/* ========= hero img ===========*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={meImg} alt="" className='rounded-full' />
            </figure>
          </div>
          {/* ========= hero img  end ===========*/}
          {/* ========= hero content  right ===========*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            {/* <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div> */}
            {/* <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div> */}
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={4} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/* =========  hero content  right end ===========*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
