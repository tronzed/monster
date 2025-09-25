import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function PokeSingle() {


    const { id } = useParams();

    const [pokeData, setPokeData] = useState();
    const [pokeDataMore, setPokeDataMore] = useState();

    const getPokeData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await res.json();
        setPokeData(data);

        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data2 = await res2.json();
        setPokeDataMore(data2);


    }

    useEffect(() => {
        getPokeData();
    }, []);

    return (
        <>

            <Header />


            {console.log(pokeData, '---------pokeData----------')}
            {console.log(pokeDataMore, '---------pokeDataMore----------')}


            <section className="gj do ir hj sp jr i pg">
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

                                {pokeDataMore?.cries?.latest && (
                                    <audio controls>
                                        <source src={pokeDataMore.cries.latest} type="audio/ogg" />
                                        Your browser does not support the audio element.
                                    </audio>
                                )}

                            </div>

                                <div className="gallery_img_box">
                                    <img src={pokeDataMore?.sprites?.back_default} alt="" />
                                    <img src={pokeDataMore?.sprites?.back_shiny} alt="" />
                                    <img src={pokeDataMore?.sprites?.front_default} alt="" />
                                    <img src={pokeDataMore?.sprites?.front_shiny} alt="" />
                                 
                                </div>


                            <h1 className="fk vj zp or kk wm wb poke_name_hero">{pokeData?.name}</h1>
                            <p className="fq">{pokeData?.flavor_text_entries[0]?.flavor_text}</p>


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
                                
                                
                                pokeData?.gender_rate == 1 ? "Male":"Female"
                                
                                
                                }</h4>
                                <p>Gender</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <main>


            </main>

            <Footer />

        </>

    );
}

export default PokeSingle;