import React from "react";

const EstdetailsCart = ({ estate }) => {
  const handleRead = () => {
    // Define functionality for handling 'Read' button click
  };

  const handleWishlist = () => {
    // Define functionality for handling 'Wishlist' button click
  };

  const {
    image,
    estate_title,
    author,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = estate;

  return (
    <section className="container px-8 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 px-10 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="rounded-lg flex items-center justify-center p-6 mt-8 lg:mt-0 h-80 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-[#1313130D] w-[500px]">
          <img className="p-20 w-80" src={image} alt={estate_title} />
        </div>
        <div className="flex flex-col justify-center p-6 space-y-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">{estate_title}</h1>
          <p><span className="font-bold">By:</span> {author}</p>
          <hr />
          <p className="mt-6 mb-8 text-lg sm:mb-12"><span className="font-bold">Review:</span> {review}</p>
          {/* <div className="flex justify-around py-3">
            <h2 className="font-bold">Tags:</h2>
            {tags.map((tag, index) => (
              <h2 key={index} className="text-[#23BE0A]">#{tag}</h2>
            ))}
          </div> */}
          <hr />
          <div className="flex gap-x-6">
            <h2>Number of pages:</h2>
            <h1>{totalPages}</h1>
          </div>
          <div className="flex gap-x-6">
            <h2>Publisher:</h2>
            <h1>{publisher}</h1>
          </div>
          <div className="flex gap-x-6">
            <h2>Year of publishing:</h2>
            <h1>{yearOfPublishing}</h1>
          </div>
          <div className="flex gap-x-6">
            <h2>Rating :</h2>
            <h1>{rating}</h1>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              onClick={handleRead}
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Read
            </button>
            <button
              onClick={handleWishlist}
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstdetailsCart;
