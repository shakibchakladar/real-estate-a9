import { useLoaderData, useParams } from "react-router-dom";
import EstdetailsCart from "../components/EstdetailsCart";

const EstDetails = () => {
    const { id } = useParams(); 
    const allest=useLoaderData();
    // const book=books.find(book=>book.bookId==id)
    const estate=allest.find(estate=>estate.id==id);
    // console.log(estate);
    return (
        <div>
            {/* <h2>This is details for estate with ID: {id}</h2> */}
            {
               <EstdetailsCart key={estate.id} estate={estate}></EstdetailsCart> 
            }
        </div>
    );
};

export default EstDetails;
