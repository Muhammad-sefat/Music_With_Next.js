import { Meteors } from "@/Components/ui/meteors";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-800 py-6 pt-36 text-white">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Contact Us
      </h1>
      <h3 className="p-5 md:w-[50%] mx-auto text-center">
        We are here to help with your any qusetion about our courese , program
        and events . Reach out and let us know how we can assist to improve your
        musician journey.
      </h3>
      <form className="flex flex-col justify-center items-center">
        <input
          className="w-[40%] p-3 rounded-md mb-5"
          type="text"
          placeholder="Your Name"
        />
        <textarea
          className=" w-[40%] py-5 rounded-md pl-2"
          name=""
          id=""
          placeholder="Right Something"
        ></textarea>
        <p className="mt-4">
          <button className="border bg-green-500 font-medium p-2 rounded-lg">
            Send Message
          </button>
        </p>
      </form>
      <Meteors number={20} />
    </div>
  );
};

export default page;
