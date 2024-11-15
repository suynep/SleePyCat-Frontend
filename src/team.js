import React from "react";

function Card({ member: { name, img, link, role } }) {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={img}
          alt={name + "image"}
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{role}</span>
        <div class="flex mt-4 md:mt-6">
          <a
            href={link}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const members = [
    {
      name: "Suyash Nepal",
      img: "https://avatars.githubusercontent.com/u/105336284?v=4",
      role: "Programmer",
      link: "https://github.com/suynep",
    },
    {
      name: "Parash Pokharel",
      img: "",
      role: "Programmer",
      link: "",
    },
    {
      name: "Prajwal Khadka",
      img: "",
      role: "Programmer",
      link: "",
    },
    {
      name: "Bikesh Shrestha",
      img: "",
      role: "Programmer",
      link: "",
    },
  ];

  return (
    <div className="md:flex m-6 gap-4 grid grid-cols-2 w-full" id="team">
      {members.map((member, index) => (
        <Card member={member} className="flex-auto items-stretch" />
      ))}
    </div>
  );
}

export default Team;
