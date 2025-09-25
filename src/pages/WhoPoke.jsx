import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function WhoPoke() {


    const [pokeData, setPokeData] = useState();

    const getPokeData = async () => {

        let num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
        const data = await res.json();
        setPokeData(data);

    }

    useEffect(() => {
        getPokeData();
    }, []);

    return (
        <>

            <Header />

            <div className="who_poke_box">

                <div className="spark_box">
                    <img className="spark_img" src="../images/spark.gif" alt="" />
                    <img className="poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData?.id}.png`} alt="Woman" />
                </div>
                <div className="qmark_box">
                    <img src="../images/qmark.png" alt="" />
                </div>

            </div>


        </>

    );
}

export default WhoPoke;