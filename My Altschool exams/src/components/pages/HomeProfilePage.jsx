import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

function HomeProfilePage() {
  const { data } = useUserContext();
  const about = data?.bio?.split(/\r?\n/);
  return (
    <div className="border-b-2 border-mainBlack mb-16 ">
      <section className="hero flex flex-col xl:flex-row  mb-35 justify-center xl:justify-between items-center xl:items-end ">
        <div className="hero-text w-[100%] xl:w-[55%] flex flex-col items-center xl:items-start">
          <p className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[60%] xl:w-[100%] text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center xl:text-left font-semibold mb-8 xl:mb-16">
            I'm {data?.name || "Kechi Kenneth"}, a Front-End Engineer
          </p>
          {about?.length > 0 ? (
            about.map((desc) => (
              <p
                key={desc}
                className="hero-text w-[100%] sm:w-[70%] xl:w-[100%] text-mainGray text-sm sm:text-lg md:text-2xl lg:text-2xl text-center xl:text-left mb-4 xl:mb-10 "
              >
                {desc}
              </p>
            ))
          ) : (
            <p className="hero-text text-mainGray md:text-2xl text-3xl mb-10 ">
            This my Altschool Second Semester Exams with React and tailwind 
            </p>
          )}
        </div>

        <div className="hero-img w-[43%] flex justify-end pt-10 xl:pt-0 ">
          <img
            src={data?.avatar_url || "../src/"}
            alt="user's profile picture"
            className="rounded-2xl xl:rounded-none"
          />
        </div>
      </section>

      <section className="skills w-[100%] flex flex-col xl:pt-24 pb-24">
        <div className="main-software flex items-center text-mainBlack pb-3">
          <p className="main-SW sm:text-2xl md:text-3xl underline font-bold">Company: </p>
          <div className="desc pl-5">
            <p className="main-SW-desc text-sm sm:text-lg md:text-2xl text-mainGray">
              {data.company}
            </p>

           
          </div>
        </div>
        <div className="main-skills flex items-center text-mainBlack pb-3 ">
          <p className="main-SW sm:text-2xl md:text-3xl underline font-bold">Location:</p>
          <div className="desc pl-5">
            <p className="main-SK-desc text-sm sm:text-lg md:text-2xl text-mainGray ">
              {data.location}
            </p>
          </div>
        </div>
        <div className="main-skills flex items-center text-mainBlack pb-3 ">
          <p className="main-SW sm:text-2xl md:text-3xl underline  font-bold">
            GitHub:
          </p>
          <div className="desc pl-5 cursor-pointer">
            <p className="main-SK-desc text-sm sm:text-lg md:text-2xl text-mainGray ">
              {data.html_url}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeProfilePage;
