import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Crousel from "../components/Crousel";
import StarRating from "../components/StarRating";
import themeContext from "../context/themeContext";
import useDebounce from '../hooks/useDebounce'
const Home = () => {
  const { theme, setTheme } = useContext(themeContext);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const liStyle =
    "bg-blue-200 px-6 py-4 rounded-md hover:bg-blue-300 duration-200 cursor-pointer mb-4";

  const liStyle2 =
    "bg-blue-200 rounded-md hover:bg-blue-300 duration-200 cursor-pointer mb-4 ";

  const navigate = useNavigate();

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  let print ="og "

  function sayHii(print)
  {
    console.log(print);
  }

  const handleDebounce = useDebounce(sayHii,2000); // Set debounce delay to 1000ms (1 second)


  return (
    <>
      <div className="min-h-[100vh] w-full  bg-slate-300 text-black flex flex-col items-center pt-10 ">
        <button
          onClick={toggleTheme}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Toggle Theme == {theme}
        </button>
        <ul className="text-lg font-semibold capitalize text-center w-[40%]">
          <li onClick={() => navigate("/ReactTheory")} className={liStyle}>
            react thory
          </li>

          <li onClick={() => navigate("/InfinteScroll")} className={liStyle}>
            Infinite Scroll
          </li>

          {/* Open modal on click */}
          <li onClick={openModal} className={liStyle}>
            Modal
          </li>

          <li className={liStyle2}>
            <div
              onClick={() => setShowDropMenu(!showDropMenu)}
              className="py-2"
            >
              <p>Dropdown</p>
            </div>
            {/* Apply Tailwind classes for animation */}
            <div
              className={`bg-white  ${
                showDropMenu ? "max-h-screen" : "max-h-0"
              } overflow-hidden transition-all duration-500`}
            >
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </div>
          </li>

          <li onClick={() => navigate("/Pagination")} className={liStyle}>
            Pagination
          </li>

          <li onClick={() => navigate("/Employee")} className={liStyle}>
            Employee management
          </li>

          <li onClick={()=>handleDebounce(print)}  className={liStyle}>
            Perform debounce
          </li>
        </ul>

        <div className=" h-[400px] w-full bg-red-100 my-8 flex items-center justify-center">
          <Crousel />
        </div>

        <div className=" h-[400px] w-full bg-yellow-100 my-8 flex items-center justify-center">
          <StarRating />
        </div>
      </div>

      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Home;
