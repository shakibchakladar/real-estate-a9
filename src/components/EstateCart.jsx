
const EstateCart = ({estate}) => {
   const {image,location,estate_title,price}=estate
    return (
        <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default EstateCart;