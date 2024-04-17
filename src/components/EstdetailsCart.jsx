
const EstdetailsCart = ({ estate }) => {


  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = estate;

  return (

    <>
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-[880px] animate__animated animate__bounce">
      <div className="flex items-center justify-center bg-white ">
        <img src={image} alt="" />
        <p>{status}</p>
      </div>
      <div className="flex items-center text-slate-900 bg-sky-500 py-9 ">
        <div className=" bg-blue-300 h-auto md:h-[80%] md:-ml-24  p-9 py-7">
          <h1 className="mb-8 text-5xl font-bold">{estate_title}</h1>
          <p>{description}</p>
          <div className="space-y-5">
            <p className="mt-10 font-bold">Area: {area}</p>
            <p>Location: {location}</p>
            <p>Facilities:</p>
            <ul>
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <h1 className="my-4 text-4xl font-bold">${price}</h1>
          </div>
          <br />
          <p>{segment_name}</p>
          <button className="btn">Buy it now!</button>
        </div>
      </div>
    </div>
  </>
  );
};

export default EstdetailsCart;
