import { useLoaderData } from "react-router-dom";
import EstateCart from "./EstateCart";

const FindYourHome = () => {
    const estates=useLoaderData();
    return (
        <div className="py-5 mt-8">
           <div className="px-5 text-center">
           <h2 className="text-5xl">Find Your Dream Home</h2>
            <p>Explore new apartments, land estates, house and land, home designs, builders and more.
          </p>
           </div>
           <div className="grid grid-cols-3">
           {
            estates.map(estate=><EstateCart key={estate.id} estate={estate}></EstateCart>)
           }
           </div>
           
            
        </div>
    );
};

export default FindYourHome;