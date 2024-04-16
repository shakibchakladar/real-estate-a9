import FindYourHome from "../components/FindYourHome";
import Header from "../components/Header";
import WhatPeopleSay from "../components/WhatPeopleSay";

const Home = () => {
    return (
        <div className="container px-5 mx-auto mt-5">
            <Header></Header>
            <FindYourHome></FindYourHome>
            <WhatPeopleSay></WhatPeopleSay>
            
        </div>
    );
};

export default Home;