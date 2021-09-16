import React, { useState } from "react";
import "../styles/UserDashboard.css";
import Navbar from "./Navbar";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CompanyDashboard() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Social Media Marketing",
        duration: 5,
        stipended: "Paid",
      },
      {
        id: 2,
        title: "Web Devloper",
        duration: 3,
        stipended: "Paid",
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Ui / Ux Developer",
        duration: 29,
        stipended: "Paid",
      },
      {
        id: 2,
        title: "Cyber Security",
        duration: 24,
        stipended: "Paid",
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Data Scientist",
        duration: 9,
        stipended: "Paid",
      },
      {
        id: 2,
        title: "Full Stack Developer",
        duration: 1,
        stipended: "Paid",
      },
    ],
  });
  return (
    <div className="userdashboard-container">
      <Navbar />

      <div className="mt-24 md:flex md:justify-between md:items-start md:mt-0 w-screen">
        {/* dashboard-left */}

        <div className="bg-white bg-opacity-75 shadow-lg p-4 mx-4 my-4 rounded-md grid place-items-center backdrop-blur">
          <h1 className="text-3xl font-bold text-blue-700">Internship Stats</h1>
          <p className="text-2xl my-4">
            <span className="font-bold">Number of applicants: </span>
            <span>100</span>
          </p>
          <p className="text-2xl my-2">
            <span className="font-bold">Number of vacancies: </span>
            <span>50</span>
          </p>
        </div>
        {/* dashboard-middle */}
        <div>
          <div className="bg-white p-2 w-61 rounded-sm cursor-pointer m-4">
            <div className="flex items-center justify-center">
              <i class="far fa-plus-square mx-2 text-3xl"></i>
              <h1 className="font-bold text-xl mx-2 sm:text-2xl">
                Add Company Credentials
              </h1>
            </div>
          </div>

          {/* dashboard middle bottom */}
          <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-2.5 leading-5 font-bold text-2xl text-white shadow-lg rounded-lg",
                        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-700 ring-white ring-opacity-60",
                        selected
                          ? "bg-blue-700"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      "bg-white rounded-xl p-3",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative p-3 rounded-md hover:bg-coolGray-100"
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {post.title}
                          </h3>
                          <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                            {/* <li>{post.date}</li>
                            <li>&middot;</li> */}
                            <li>{post.duration} months</li>
                            <li>&middot;</li>
                            <li>{post.stipended}</li>
                          </ul>
                          <a
                            href="#"
                            className={classNames(
                              "absolute inset-0 rounded-md",
                              "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        {/* dashbord-right */}
        <div className="bg-black p-4 bg-opacity-50 rounded-md mx-4 my-4">
          <h1 className="font-bold text-3xl my-2 text-white text-center mb-4">
            Our Innovation
          </h1>
          <div className="flex justify-center items-center gap-8">
            <img
              className="w-20 sm:w-28"
              src="https://picsum.photos/200"
              alt=""
            />
            <div className="text-white">
              <h3 className="font-bold text-2xl my-2">Tflx</h3>
              <p className="max-w-xs" style={{ maxWidth: "10em" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                impedit dolores libero alias quia in quidem. In doloremque quam
                temporibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
