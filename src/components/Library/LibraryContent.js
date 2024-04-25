import React, { useState } from "react";
import library from "../../datas//exerciseLibrary.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Library/Library.css";

const LibraryContent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (photoUrl) => {
    setSelectedPhoto(photoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  return (
    <div>
      {Object.keys(library).map((bodyPart, index) => (
        <div key={index} className="bg-wheat-bg text-center flex flex-col ">
          <h2 className="uppercase font-bold text-dark-bg pt-4 ">{bodyPart}</h2>
          <Slider
            {...settings}
            className="flex flex-col items-center justify-center px-4 pb-10"
          >
            {library[bodyPart].exercises.map((exercise, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-between bg-dark-bg rounded-md h-36 pt-4 relative"
                onClick={() => openModal(exercise.img)}
              >
                <h1 className="text-white text-sm">{exercise.name}</h1>
                <h1 className="text-white text-sm opacity-65 capitalize">
                  {exercise.type}
                </h1>

                <img
                  src={exercise.img}
                  className="w-10 h-10 absolute bottom-4 left-10 cursor-pointer"
                  alt={exercise.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
      {showModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-70">
          <div className="max-w-md p-4 bg-white rounded-lg flex flex-col items-center">
            <img
              src={selectedPhoto}
              alt="Selected Exercise"
              className="w-52 h-52 object-cover"
            />
            <button
              className="mt-4 p-2 bg-red-500 hover:bg-red-900   text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryContent;
