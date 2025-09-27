import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function WhoPoke() {


    const [playBtn, setPlayBtn] = useState(true);
    const [loader, setLoader] = useState(true);

    const [pokeData, setPokeData] = useState();
    const [hidePoke, setHidePoke] = useState(true);
    const audioRef = useRef(null);

    const [hideButtons, setHideButtons] = useState(true);



    const getPokeData = async () => {
        setHidePoke(true);
        setPlayBtn(true)
        let num = Math.floor(Math.random() * (150 - 1 + 1)) + 1;

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
        const data = await res.json();
        setPokeData(data);


        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }


    function showpoke(text) {

        const utterance = new SpeechSynthesisUtterance(text);
        audioRef.current.play();

        setPlayBtn(false);

        setTimeout(() => {
            setHidePoke(false);
            speechSynthesis.speak(utterance);
            setHideButtons(true)
        }, 7000)


    }


    useEffect(() => {
        getPokeData();
        // showpoke();
    }, []);

    return (
        <>

            <Header />

            <Loader loader={loader} />



            <div className="who_poke_box">

                <div className="spark_box">
                    <img className="spark_img" src="../images/spark.gif" alt="" />
                    <img className={`big_img poke_img   ${hidePoke ? "hide_poke" : ""}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData?.id}.png`} alt="Woman" />
                    <h3 className="who_poke_name">{pokeData?.name}</h3>
                </div>

                <div className="who_button_box">

                    {

                        hideButtons && (

                            playBtn == true ?

                                <>
                                    <button className="btn" onClick={() => { showpoke(pokeData?.name); setHideButtons(false) }}>Play</button>
                                </>
                                :
                                <>
                                    <button className="btn" onClick={() => { getPokeData(); setLoader(true); }}>Rest</button>
                                </>
                        )

                    }

                </div>

                <div className="qmark_box">
                    <img src="../images/qmark.png" alt="" />
                </div>

                <audio ref={audioRef} src="../sound/who_poke_sound.mp3" />

            </div>


        </>

    );
}

export default WhoPoke;