import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function WhoPoke() {


    const [pokeList, setPokeList] = useState();


    const getPokeList = async () => {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=9/`);
        const data = await res.json();
        setPokeList(data?.results);

    }


    useEffect(() => {
        getPokeList();
    }, []);

    return (
        <>

            <Header />

            WhoPoke

            <Footer />

        </>

    );
}

export default WhoPoke;