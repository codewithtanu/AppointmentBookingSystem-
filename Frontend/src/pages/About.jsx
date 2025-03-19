import React from "react";
import { assets } from "../assets/assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipspum dolor sit amet consectetur, adipisicing elit. Libero
            neque necessitatibus dicta ipsam cupiditate vitae tempore, saepe
            ipsum nostrum aperiam aliquam delectus quibusdam temporibus
            reprehenderit accusantium. Non, voluptatum quod? Amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            explicabo! Ea sapiente quam incidunt temporibus fuga consequatur
            aspernatur. Dolorem neque nulla praesentium quidem est. Est quasi
            vel ea illum reprehenderit.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            quibusdam ipsa delectus, fuga, at sapiente eaque animi, ipsam
            tempore praesentium iusto? Architecto libero assumenda possimus
            totam deserunt aperiam amet culpa.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 s:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlized appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 s:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 s:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  );
};

export default About;
