import { Link } from "react-router-dom";

const EstateCart = ({estate}) => {

  const handleDetails=()=>{
    console.log('clicked');
  }



   const {image,location,estate_title,price,id}=estate
    return (
        <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="justify-start card-actions">
      <Link to={`/details/${id}`}><button onClick={handleDetails} className="btn btn-primary">ViewProperty</button></Link>
    </div>
  </div>
</div>
    );
};

export default EstateCart;