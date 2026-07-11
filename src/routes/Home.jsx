import { useEffect, useState } from "react";
import HomeDetail from "../features/Home";
import Layout from "../layout/page";
import CardData from "../sampleData/cardData";

const Home = () => {

    return (
        <>
            <HomeDetail data={CardData} />
        </>
    );
};

export default Home;