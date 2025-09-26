import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

function Home() {


    const [pokeType, setPokeType] = useState();
    const [pokeList, setPokeList] = useState();

    const [pokeData, setPokeData] = useState();
    const [pokeDataMore, setPokeDataMore] = useState();


    const [loader, setLoader] = useState(true);


    const getPokeData = async () => {
        let num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
        const data = await res.json();
        setPokeData(data);

        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        const data2 = await res2.json();
        setPokeDataMore(data2);

        console.log(num, 'num');

    }


    const getPokeList = async () => {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=9/`);
        const data = await res.json();
        setPokeList(data?.results);

        const res2 = await fetch(`https://pokeapi.co/api/v2/type/`);
        const data2 = await res2.json();
        setPokeType(data2?.results);

        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }

    useEffect(() => {
        getPokeData();
        getPokeList();
    }, []);

    return (
        <>

            <Header />

            <Loader loader={loader} />

            <section className="gj do ir hj sp jr i pg">
                {/* Hero Images */}
                <div className="poke_hero_img_box xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
                    <img src="./images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
                    <img src="./images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
                    <img src="./images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
                    <img src="./images/shape-04.svg" alt="shape" className="h q r" />
                    <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData?.id}.png`} alt="Woman" />
                    {/* <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeData?.id}.png`} alt="Woman" /> */}
                    {/* <img className="hero_poke_img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData?.id}.svg`} alt="Woman" /> */}
                </div>

                {/* Hero Content */}
                <div className="bb ze ki xn 2xl:ud-px-0">
                    <div className="tc _o">
                        <div className="animate_left jn/2">
                            <h1 className="fk vj zp or kk wm wb poke_name_hero">{pokeData?.name}</h1>
                            <p className="fq">{pokeData?.flavor_text_entries[0]?.flavor_text}</p>

                            <div className="tc tf yo zf mb">
                                <Link to={`/single/${pokeData?.id}`} className="ek jk lk gh gi hi rg ml il vc _d _l">Explore {pokeData?.name}</Link>

                                <span className="hide_me">
                                    <a href="/" className="inline-block ek xj kk wm"> Call us (0123) 456 – 789 </a>
                                    <span className="inline-block">For any question or concern</span>
                                </span>
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
                                <img src="./images/icon-03.svg" alt="Icon" />
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
                                <img src="./images/icon-01.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeDataMore?.height}</h4>
                                <p>Height</p>
                            </div>
                        </div>

                        {/* Small Features Item */}
                        <div className="animate_top kn to/3 tc cg oq">
                            <div className="tc wf xf cf ae cd rg nh">
                                <img src="./images/icon-02.svg" alt="Icon" />
                            </div>
                            <div>
                                <h4 className="ek yj go kk wm xb">{pokeDataMore?.weight}</h4>
                                <p>Weight</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <main>


                <section className="ji gp uq 2xl:ud-py-35 pg hide_me">
                    <div className="bb ze ki xn wq">
                        <div className="tc wf gg qq">
                            {/* About Images */}
                            <div className="animate_left xc gn gg jn/2 i">
                                <div>
                                    <img src="./images/shape-05.svg" alt="Shape" className="h -ud-left-5 x" />
                                    <img src="./images/about-01.png" alt="About" className="ib" />
                                    <img src="./images/about-02.png" alt="About" />
                                </div>
                                <div>
                                    <img src="./images/shape-06.svg" alt="Shape" />
                                    <img src="./images/about-03.png" alt="About" className="ob gb" />
                                    <img src="./images/shape-07.svg" alt="Shape" className="bb" />
                                </div>
                            </div>

                            {/* About Content */}
                            <div className="animate_right jn/2">
                                <h4 className="ek yj mk gb">Why Choose Us</h4>
                                <h2 className="fk vj zp pr kk wm qb">We Make Our customers happy by giving Best services.</h2>
                                <p className="uo">It is a long established fact that a reader will be distracted by the readable content of a
                                    page when looking at its layout. The point of using Lorem Ipsum.</p>

                                <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" data-fslightbox className="vc wf hg mb">
                                    <span className="tc wf xf be dd rg i gh ua">
                                        <span className="nf h vc yc vd rg gh qk -ud-z-1"></span>
                                        <img src="./images/icon-play.svg" alt="Play" />
                                    </span>
                                    <span className="kk">SEE HOW WE WORK</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== About End ===== */}

                {/* ===== Team Start ===== */}
                <section className="i pg ji gp uq">
                    {/* Bg Shapes */}
                    <span className="rc h s r vd fd/5 fh rm"></span>
                    <img src="./images/shape-08.svg" alt="Shape Bg" className="h q r" />
                    <img src="./images/shape-09.svg" alt="Shape" className="of h y z/2" />
                    <img src="./images/shape-10.svg" alt="Shape" className="h _ aa" />
                    <img src="./images/shape-11.svg" alt="Shape" className="of h m ba" />

                    {/* Section Title Start */}
                    <div>
                        <div className="show_box bb ze rj ki xn vq">
                            <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">Explore Pokemon</h2>
                            <p className="bb on/5 wo/5 hq">Discover the world of Pokémon like never before. From tall forests to vast oceans, each region is filled with unique creatures waiting to be caught.</p>
                        </div>
                    </div>
                    {/* Section Title End */}

                    <div className="bb ze i va ki xn xq jb jo">
                        <div className="wc qf pn xo gg cp">

                            {
                                pokeList?.map((item, index) => (
                                    <>

                                        {/* Team Item */}
                                        <div className="animate_top rj">
                                            <div className="c i pg z-1">
                                                <img className="vd" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt="Team" />

                                                <div className="ef im nl il">
                                                    <span className="h -ud-left-5 -ud-bottom-21 rc de gd gh if wa"></span>
                                                    <span className="h s p rc vd hd mh va"></span>
                                                    <div className="h s p vd ij jj xa">
                                                        <ul className="tc xf wf gg">
                                                            <li>
                                                                <Link className='item_read_more_btn' to={`/single/${index + 1}`}>Explore {item?.name}</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="yj go kk wm ob zb">{item?.name}</h4>
                                            <p>ID: {index + 1}</p>
                                        </div>


                                    </>
                                ))

                            }





                        </div>
                    </div>
                </section>
                {/* ===== Team End ===== */}

                {/* ===== Services Start ===== */}
                <section className="lj tp kr">
                    {/* Section Title Start */}
                    <div>
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2 data-todo-x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b">Explore Pokemon Types</h2>
                            <p className="bb on/5 wo/5 hq" data-todo-x-text="sectionTitleText">Every Pokémon has a unique type that defines its strengths and weaknesses. Fire, Water, Grass, Electric, and more.</p>
                        </div>
                    </div>
                    {/* Section Title End */}

                    <div className="bb ze ki xn yq mb en">
                        <div className="wc qf pn xo ng">


                            {

                                pokeType?.map((item, index) => (

                                    <>
                                        <div className="type_item_box animate_top sg oi pi zq ml il am cn _m">
                                            <div className='img_type_box'>
                                                <img src={`./images/types/${item?.name}.svg`} alt="Icon" />
                                            </div>
                                            <h4 className="ek zj kk wm nb _b">{item?.name}</h4>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p> */}
                                        </div>
                                    </>

                                ))

                            }




                        </div>
                    </div>
                </section>
                {/* ===== Services End ===== */}



                {/* ===== Counter Start ===== */}
                <section className="i pg qh rm ji hp hide_me">
                    <img src="./images/shape-11.svg" alt="Shape" className="of h ga ha ke" />
                    <img src="./images/shape-07.svg" alt="Shape" className="h ia o ae jf" />
                    <img src="./images/shape-14.svg" alt="Shape" className="h ja ka" />
                    <img src="./images/shape-15.svg" alt="Shape" className="h q p" />

                    <div className="bb ze i va ki xn br">
                        <div className="tc uf sn tn xf un gg">
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">785</h2>
                                <p className="ek bk aq">Global Brands</p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">533</h2>
                                <p className="ek bk aq">Happy Clients</p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">865</h2>
                                <p className="ek bk aq">Winning Award</p>
                            </div>
                            <div className="animate_top me/5 ln rj">
                                <h2 className="gk vj zp or kk wm hc">346</h2>
                                <p className="ek bk aq">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== Counter End ===== */}

                {/* ===== Clients Start ===== */}
                <section className="pj vp mr hide_me">
                    {/* Section Title Start */}
                    <div
                        data-todo-x-data="{ sectionTitle: `Trusted by Global Brands`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2 data-todo-x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b">
                            </h2>
                            <p className="bb on/5 wo/5 hq" data-todo-x-text="sectionTitleText"></p>
                        </div>


                    </div>
                    {/* Section Title End */}

                    <div className="bb ze ah ch pm hj xp ki xn 2xl:ud-px-49 bc">
                        <div className="wc rf qn zf cp kq xf wf">
                            <a href="/" className="rc animate_top">
                                <img className="th wl ml il zl om" src="./images/brand-light-01.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-01.svg" alt="Clients" />
                            </a>
                            <a href="/" className="rc animate_top">
                                <img className="tk ml il zl om" src="./images/brand-light-02.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-02.svg" alt="Clients" />
                            </a>
                            <a href="/" className="rc animate_top">
                                <img className="tk ml il zl om" src="./images/brand-light-03.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-03.svg" alt="Clients" />
                            </a>
                            <a href="/" className="rc animate_top">
                                <img className="tk ml il zl om" src="./images/brand-light-04.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-04.svg" alt="Clients" />
                            </a>
                            <a href="/" className="rc animate_top">
                                <img className="tk ml il zl om" src="./images/brand-light-05.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-05.svg" alt="Clients" />
                            </a>
                            <a href="/" className="rc animate_top">
                                <img className="tk ml il zl om" src="./images/brand-light-06.svg" alt="Clients" />
                                <img className="xc sk ml il zl nm" src="./images/brand-dark-06.svg" alt="Clients" />
                            </a>
                        </div>
                    </div>
                </section>
                {/* ===== Clients End ===== */}

                {/* ===== Blog Start ===== */}
                <section className="ji gp uq hide_me">
                    {/* Section Title Start */}
                    <div
                        data-todo-x-data="{ sectionTitle: `Latest Blogs & News`, sectionTitleText: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.`}">
                        <div className="animate_top bb ze rj ki xn vq">
                            <h2 data-todo-x-text="sectionTitle" className="fk vj pr kk wm on/5 gq/2 bb _b">
                            </h2>
                            <p className="bb on/5 wo/5 hq" data-todo-x-text="sectionTitleText"></p>
                        </div>


                    </div>
                    {/* Section Title End */}

                    <div className="bb ye ki xn vq jb jo">
                        <div className="wc qf pn xo zf iq">
                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img className="w-full" src="./images/blog-01.png" alt="Blog" />

                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">Read More</a>
                                    </div>
                                </div>

                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img src="./images/icon-man.svg" alt="User" />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src="./images/icon-calender.svg" alt="Calender" />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">Free advertising for your online business</a>
                                    </h4>
                                </div>
                            </div>

                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img className="w-full" src="./images/blog-02.png" alt="Blog" />

                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">Read More</a>
                                    </div>
                                </div>

                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img src="./images/icon-man.svg" alt="User" />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src="./images/icon-calender.svg" alt="Calender" />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">9 simple ways to improve your design skills</a>
                                    </h4>
                                </div>
                            </div>

                            {/* Blog Item */}
                            <div className="animate_top sg vk rm xm">
                                <div className="c rc i z-1 pg">
                                    <img className="w-full" src="./images/blog-03.png" alt="Blog" />

                                    <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                        <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">Read More</a>
                                    </div>
                                </div>

                                <div className="yh">
                                    <div className="tc uf wf ag jq">
                                        <div className="tc wf ag">
                                            <img src="./images/icon-man.svg" alt="User" />
                                            <p>Musharof Chy</p>
                                        </div>
                                        <div className="tc wf ag">
                                            <img src="./images/icon-calender.svg" alt="Calender" />
                                            <p>25 Dec, 2025</p>
                                        </div>
                                    </div>
                                    <h4 className="ek tj ml il kk wm xl eq lb">
                                        <a href="blog-single.html">Tips to quickly improve your coding speed.</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===== Blog End ===== */}


                {/* ===== CTA Start ===== */}
                <section className="i pg gh ji">
                    {/* Bg Shape */}
                    <img className="h p q" src="./images/shape-16.svg" alt="Bg Shape" />

                    <div className="bb ye i z-10 ki xn dr">
                        <div className="tc uf sn tn un gg">
                            <div className="animate_left to/2">
                                <h2 className="fk vj zp pr lk ac">
                                    Join 5000+ Trainers Catching and Growing with Base
                                </h2>
                                <p className="lk">
                                    Train your Pokémon, explore new regions, and battle like a pro. Level up your team, discover rare Pokémon, and become a true Pokémon Master!
                                </p>
                            </div>
                            <div className="animate_right bf">
                                <a href="/" className="vc ek kk hh rg ol il cm gi hi">
                                    Get Started Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA End ===== */}
            </main>

            <Footer />

        </>

    );
}

export default Home;