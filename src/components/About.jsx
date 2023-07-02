import React from 'react';

const About = () => {
 return (
  <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
   <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
     <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
    </div>

    <p className="text-xl mt-20 text-justify">
     I am currently an undergraduate Data Science student at Institut Teknologi Sumatera with a focus on studying data science, data analysis, and artificial intelligence. I have a strong passion for leveraging data-driven insights to solve
     complex problems and drive meaningful impact.
    </p>

    <br />

    <p className="text-xl text-justify">
     In addition to my academic activities, I am also very interested in web development, which includes both back-end and front-end aspects. I enjoy creating dynamic and user-friendly websites that provide a seamless experience for users.
     My goal is to combine my data science skills with web development to build interactive and data-driven applications.
    </p>
    <br />

    <p className="text-xl text-justify">
     I am highly motivated to continually enhance my knowledge and skills in line with the latest technological developments and trends. I actively seek out opportunities to expand my expertise and stay updated with the advancements in the
     field of data science, web development, and artificial intelligence.
    </p>
   </div>
  </div>
 );
};

export default About;
