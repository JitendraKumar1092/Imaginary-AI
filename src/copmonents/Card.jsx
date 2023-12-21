import React from "react";
import { Download } from "lucide-react";
import { download } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card transition duration-200 ease-in-out transform hover:-translate-y-1 **hover:border-4 hover:border-pink-500**">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className=" bg-white bg-opacity-0 p-8 rounded-2xl backdrop-blur-md group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0  m-2">
        <p className="text-black text-sm overflow-y-auto border-spacing-3">
          Prompt : {prompt}
        </p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-black text-sm">{name}</p>
          </div>
          <button
            className="outline-none bg-black border-none"
            type="button "
            onClick={() => downloadImage(_id, photo)}
          >
            <Download size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
