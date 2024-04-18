import { useLoaderData } from "react-router-dom"; // Check if this import is correct
import EstateCart from "./EstateCart";

const FindYourHome = () => {
    const estates = useLoaderData(); // Ensure useLoaderData returns the expected data
    // Consider handling loading and error states when fetching data
    
    return (
        <div className="py-5 pt-8 mt-8 space-y-3">
            <div className="px-5 py-4 text-center">
                <h2 className="text-5xl">Find Your Dream Home</h2>
                <p>Explore new apartments, land estates, house and land, home designs, builders and more.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {/* Map over estates and render EstateCart component for each */}
                {estates?.map(estate => (
                    <EstateCart key={estate.id} estate={estate}></EstateCart>
                ))}
            </div>
        </div>
    );
};

export default FindYourHome;

// import { useLoaderData } from "react-router-dom";
// import EstateCart from "./EstateCart";

// const FindYourHome = () => {
//     const estates=useLoaderData();
//     return (
//         <div className="py-5 pt-8 mt-8 space-y-3">
//            <div className="px-5 py-4 text-center">
//            <h2 className="text-5xl">Find Your Dream Home</h2>
//             <p>Explore new apartments, land estates, house and land, home designs, builders and more.
//           </p>
//            </div>
//            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 ">
//            {
//             estates.map(estate=><EstateCart key={estate.id} estate={estate}></EstateCart>)
//            }
//            </div>
           
            
//         </div>
//     );
// };

// export default FindYourHome;