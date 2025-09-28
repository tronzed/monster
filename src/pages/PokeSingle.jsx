import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";

function PokeSingle() {


    const { id } = useParams();

    const audioRef = useRef(null);

    const [pokeData, setPokeData] = useState();
    const [pokeDataMore, setPokeDataMore] = useState();
    const [eveoData, setEveoData] = useState([]);

    const [loader, setLoader] = useState(true);


    const getPokeData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await res.json();
        setPokeData(data);

        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data2 = await res2.json();
        setPokeDataMore(data2);


        const res3 = await fetch(data?.evolution_chain.url);
        const data3 = await res3.json();

        const arrbox = [];

        arrbox.push({ "name": data3.chain.species.name, "id": data3.chain.species.url.split("/").filter(Boolean).pop() });
        arrbox.push({ "name": data3?.chain?.evolves_to[0]?.species.name, "id": data3?.chain?.evolves_to[0]?.species?.url.split("/").filter(Boolean).pop() });
        arrbox.push({ "name": data3?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name, "id": data3?.chain?.evolves_to[0]?.evolves_to[0]?.species?.url.split("/").filter(Boolean).pop() });


        setEveoData(arrbox);
        setTimeout(() => {
            setLoader(false);
        }, 2000)

    }


    const handlePlay = () => {
        audioRef.current.play();
    };

    useEffect(() => {

        window.scrollTo(0, 0);
        getPokeData();
    }, [id]);

    return (
        <>

            <Header />

            <Loader loader={loader} />

            {console.log(pokeData, '---------pokeData----------')}
            {/* {console.log(pokeDataMore, '---------pokeDataMore----------')} */}
            {/* {console.log(eveoData, '---------eveoData----------')} */}


            <section className="gj do ir hj sp jr i pg top_sec">
                {/* Hero Images */}
                <div className="poke_hero_img_box xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
                    <img src="../images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
                    <img src="../images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
                    <img src="../images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
                    <img src="../images/shape-04.svg" alt="shape" className="h q r" />
                    <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData?.id}.png`} alt="Woman" />
                    {/* <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeData?.id}.png`} alt="Woman" /> */}
                    {/* <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData?.id}.svg`} alt="Woman" /> */}
                </div>

                {/* Hero Content */}
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="tc _o">
                        <div className="animate_left jn/2">
                            <div className="gif_img_box">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt="" />

                                <div className="audio_box">
                                    {pokeDataMore?.cries?.latest && (
                                        <audio ref={audioRef} controls>
                                            <source src={pokeDataMore.cries.latest} type="audio/ogg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    )}
                                </div>

                            </div>

                            {/* <div className="gallery_img_box hide_me">
                                    <img src={pokeDataMore?.sprites?.back_default} alt="" />
                                    <img src={pokeDataMore?.sprites?.back_shiny} alt="" />
                                    <img src={pokeDataMore?.sprites?.front_default} alt="" />
                                    <img src={pokeDataMore?.sprites?.front_shiny} alt="" />
                                </div> */}

                            <h1 className="fk vj zp or kk wm wb poke_name_hero">{pokeData?.name}</h1>
                            <p className="fq">{pokeData?.flavor_text_entries[0]?.flavor_text}</p>
                            <button className="sound_play_btn" onClick={handlePlay}>Play Sound</button>


                        </div>
                    </div>
                </div>
            </section>


            <section id="features" className='features_box'>
                <div className="bb ze ki yn 2xl:ud-px-12.5">
                    <div className="tc uf zo xf ap zf bp mq">

                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg oh">
                                <img src="../images/icon-03.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{
                                    pokeDataMore?.types?.map((item, index) => (
                                        <>

                                            <span className='hero_type_box'>{item?.type?.name}</span>

                                        </>
                                    ))
                                }</h4>
                                <p>Types</p>
                            </div>
                        </div>
                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg mh">
                                <img src="../images/icon-01.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeDataMore?.height}</h4>
                                <p>Height</p>
                            </div>
                        </div>

                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg nh">
                                <img src="../images/icon-02.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeDataMore?.weight}</h4>
                                <p>Weight</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section id="features" className='features_box'>
                <div className="bb ze ki yn 2xl:ud-px-12.5">
                    <div className="tc uf zo xf ap zf bp mq">

                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg oh">
                                <img src="../images/icon-03.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeData?.genera[7]?.genus}</h4>
                                <p>Category</p>
                            </div>
                        </div>
                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg mh">
                                <img src="../images/icon-01.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeDataMore?.abilities[0]?.ability?.name}</h4>
                                <p>Abilities</p>
                            </div>
                        </div>

                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg nh">
                                <img src="../images/icon-02.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{


                                    pokeData?.gender_rate == 1 ? "Male" : "Female"


                                }</h4>
                                <p>Gender</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* ===== Team Start ===== */}
            <section className="i pg ji gp uq">
                {/* Bg Shapes */}
                <span className="rc h s r vd fd/5 fh rm"></span>
                <img src="../images/shape-08.svg" alt="Shape Bg" className="h q r" />
                <img src="../images/shape-09.svg" alt="Shape" className="of h y z/2" />
                <img src="../images/shape-10.svg" alt="Shape" className="h _ aa" />
                <img src="../images/shape-11.svg" alt="Shape" className="of h m ba" />

                {/* Section Title Start */}
                <div>
                    <div className="show_box bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Evolution</h2>
                        <p className="bb on/5 wo/5 hq">Witness the incredible journey of Pokémon Evolution. From small beginnings to mighty transformations, each stage unlocks new powers.</p>
                    </div>
                </div>
                {/* Section Title End */}

                <div className="bb ze i va ki xn xq jb jo ">
                    <div className="wc qf pn xo gg cp poke_evo">

                        {
                            eveoData?.map((item, index) => (
                                <>

                                    {item.name && (

                                        <>

                                            {/* Team Item */}
                                            <div className="animate_top rj">
                                                <div className="c i pg z-1">
                                                    <img className="vd" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="Team" />

                                                    <div className="ef im nl il">
                                                        <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                                                        <span className="h s p rc vd hd mh va"></span>
                                                        <div className="h s p vd ij jj xa">
                                                            <ul className="tc xf wf gg">
                                                                <li>
                                                                    <Link className='item_read_more_btn' to={`/single/${item.id}`}>Explore {item.name}</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="yj go kk wm ob zb">{item.name}</h4>
                                            </div>


                                        </>

                                    )}






                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* ===== Team End ===== */}

            <section class="i pg qh rm ji hp">
                <img src="../images/shape-11.svg" alt="Shape" class="of h ga ha ke" />
                <img src="../images/shape-07.svg" alt="Shape" class="h ia o ae jf" />
                <img src="../images/shape-14.svg" alt="Shape" class="h ja ka" />
                <img src="../images/shape-15.svg" alt="Shape" class="h q p" />

                <div class="bb ze i va ki xn br">
                    <div class="tc uf sn tn xf un gg">
                        <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">{pokeDataMore?.stats[0]?.base_stat}</h2>
                            <p class="ek bk aq">HP</p>
                        </div>
                        <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">{pokeDataMore?.stats[1]?.base_stat}</h2>
                            <p class="ek bk aq">Attack</p>
                        </div>
                        <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">{pokeDataMore?.stats[2]?.base_stat}</h2>
                            <p class="ek bk aq">Defense</p>
                        </div>
                        {/* <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">346</h2>
                            <p class="ek bk aq">Special Attack</p>
                        </div>
                        <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">865</h2>
                            <p class="ek bk aq">Special Defense</p>
                        </div> */}
                        <div class="animate_top me/5 ln rj">
                            <h2 class="gk vj zp or kk wm hc">{pokeDataMore?.stats[5]?.base_stat}</h2>
                            <p class="ek bk aq">Speed</p>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />

        </>

    );
}

export default PokeSingle;