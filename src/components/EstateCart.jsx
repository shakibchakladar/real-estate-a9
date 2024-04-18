import { Link } from "react-router-dom";
import 'animate.css';


const EstateCart = ({estate}) => {

  const handleDetails=()=>{
    // console.log('clicked');
  }



   const {image,location,estate_title,price,id,area}=estate
    return (
      <>
            <div className="shadow-xl card card-compact animate__animated animate__bounce">
                <figure className='h-5/6'>

                    <img src={image} alt="car!" />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between gap-x-10">
                  <h2 className="card-title">${price}</h2>
                  <p>{area}</p>

                  </div>
                    <h2 className="text-2xl font-bold animate__animated animate__bounce animate__headShake ">{estate_title}</h2>
                    <p>{location}</p>
                    <div className="justify-end card-actions">
                    <Link to={`/details/${id}`}><button onClick={handleDetails} className="btn btn-neutral btn-sm">ViewProperty</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EstateCart;





// // import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types"; // Import PropTypes for prop validation
// import 'animate.css';

// const EstateCart = ({ estate }) => {
//   if (!estate) {
//     return <div>Error: Estate data not provided.</div>;
//   }

//   const { image, location, estate_title, price, id, area } = estate;

//   return (
//     <div className="shadow-xl card card-compact animate__animated animate__bounce">
//       <figure className='h-5/6'>
//         <img src={image} alt="Estate" />
//       </figure>
//       <div className="card-body">
//         <div className="flex justify-between gap-x-10">
//           <h2 className="card-title">${price}</h2>
//           <p>{area}</p>
//         </div>
//         <h2 className="text-2xl font-bold animate__animated animate__bounce animate__headShake">{estate_title}</h2>
//         <p>{location}</p>
//         <div className="justify-end card-actions">
//           <Link to={`/details/${id}`}>
//             <button className="btn btn-neutral btn-sm">View Property</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Prop validation using PropTypes
// EstateCart.propTypes = {
//   estate: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     estate_title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     id: PropTypes.string.isRequired,
//     area: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default EstateCart;