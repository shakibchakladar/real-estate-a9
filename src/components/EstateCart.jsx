import { Link } from "react-router-dom";

const EstateCart = ({estate}) => {

  const handleDetails=()=>{
    console.log('clicked');
  }



   const {image,location,estate_title,price,id,area}=estate
    return (
      <>
            <div className="shadow-xl card card-compact">
                <figure className='h-5/6'>

                    <img src={image} alt="car!" />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between gap-x-10">
                  <h2 className="card-title">${price}</h2>
                  <p>{area}</p>

                  </div>
                    <h2 className="text-2xl font-bold">{estate_title}</h2>
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