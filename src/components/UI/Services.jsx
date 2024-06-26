import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
// import appsImg from "../../assets/images/apps.png";
import htmlImg from "../../assets/images/html.png";
import cssImg from "../../assets/images/css-3.png";
import jsImg from "../../assets/images/js.png";
import reactImg from "../../assets/images/react.png";
import pythonImg from "../../assets/images/python.png";
import bootstrapImg from "../../assets/images/bootstrap.png";
import nodejsImg from "../../assets/images/nodejs.png";
import mongodbImg from "../../assets/images/mongodb.png";
import postgreSQLImg from "../../assets/images/postgres.png";
import expressjsImg from "../../assets/images/expressJS.png";
import trelloImg from "../../assets/images/trello.png";
import slackImg from "../../assets/images/slack.png";
import herokuImg from "../../assets/images/heroku.png";



const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            How I can help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 ">
          I can help solve company problems by leveraging my technical skills to create custom web-based solutions that address the specific needs of the organization.
          <br />

           Here are some technologies I've learned:
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =========== vertical line running through the middle ============ */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* =========== left card ================= */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>

                        <p className="flex items-center justify-evenly text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">

                        <img src={htmlImg} alt="" className="flex w-[30px] border-none"/>
                        <img src={cssImg} alt="" className="flex w-[30px]"/>
                        <img src={jsImg} alt="" className="flex w-[30px]"/>
                        <img src={reactImg} alt="" className="flex w-[30px]"/>
                        <img src={bootstrapImg} alt="" className="flex w-[30px]"/>

                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ======= right card ================ */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>

                        <p className="flex items-center justify-evenly text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">

                        <img src={nodejsImg} alt="" className="flex w-[40px]"/>
                        <img src={pythonImg} alt="" className="flex w-[40px]"/>
                        <img src={mongodbImg} alt="" className="flex w-[40px]"/>
                        <img src={postgreSQLImg} alt="" className="flex w-[35px]"/>
                        <img src={expressjsImg} alt="" className="flex w-[35px]"/>

                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* =========== left card ================= */}
               <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Other Skills
                        </h3>

                        <p className="flex items-center justify-evenly text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">

                        <img src={trelloImg} alt="" className="flex w-[30px]"/>
                        <img src={slackImg} alt="" className="flex w-[30px]"/>
                        <img src={herokuImg} alt="" className="flex w-[30px]"/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ======= right card ================ */}
              {/* <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Apps Development
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Soluta eligendi suscipit ipsum.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
