import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { preview, dummy } from "../assets";
import { getRandomPrompts } from "../utils";
import { FormField, Loader } from "../copmonents";

const Createpost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setgeneratingImg(true);
        const response = await fetch(
          "https://server-imaginary.vercel.app/api/v1/imaginary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );
        const data = await response.json();
        const imgUrl = data.photo[0];
        console.log(data.photo[0]);
        setform({ ...form, photo: data.photo[0] });
      } catch (error) {
        alert(error);
      } finally {
        setgeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.prompt && form.photo) {
      setloading(true);
      try {
        const response = await fetch(
          "https://server-imaginary.vercel.app/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        await response.json();
        navigate("/");
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        setloading(false);
      }
    } else {
      alert("Please enter a prompt and generate an image first");
    }
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = (e) => {
    const randomPrompt = getRandomPrompts(form.prompt);
    setform({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto p-8 bg-[#14141r] border border-solid-white shadow-xl rounded-xl">
      <div className="text-center mb-10">
        <h1 className="mt-4 font-heading text-4xl font-bold animate-in slide-in-from-bottom-1/2 zoom-in-50 text-center  bg-gradient-to-br from-neutral-200 to-neutral-800 bg-clip-text  dark:text-transparent dark:[text-shadow:none] md:text-5xl lg:text-6xl xl:text-7xl duration-500 fade-in-25">
          Create
        </h1>
        <p className="mt-4 text-xl text-gray-600 font-heading animate-in slide-in-from-bottom-1/2 zoom-in-50 duration-500 fade-in-25">
          Create imaginative and visually stunning images through Imaginary and
          share them with the Community.
        </p>
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <FormField
              label="Your Name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              handleChange={handleChange}
              className="w-full border-2 border-gray-300 p-4 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <FormField
              label="Prompt"
              type="text"
              name="prompt"
              placeholder="Describe your image"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
              className="w-full border-2 border-gray-300 p-4 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={generateImage}
              className="m-60 bg-white-300 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1">
              <div className="border-4 border-gray-300 rounded-lg overflow-hidden">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={form.prompt}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex justify-center items-center bg-gray-500 h-full">
                    <img src={dummy} alt="preview" className=" opacity-40" />
                  </div>
                )}
              </div>
            </div>
            {generatingImg && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            title="Share"
            type="submit"
            className="cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
          >
            <svg
              viewBox="0 -0.5 25 25"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
            <span className="text-sm text-lime-400 font-bold pr-1">
              Share Post
            </span>
          </button>
          <p className="font-heading text-blue-100">
            Once you have created the image you want, you can also share it with
            others in the Community.
          </p>
        </div>
      </form>
    </section>
  );
};
export default Createpost;
