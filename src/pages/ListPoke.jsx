import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ListPoke() {


    const [pokeList, setPokeList] = useState();


    const getPokeList = async () => {

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100/`);
        const data = await res.json();
        setPokeList(data?.results);

    }


    useEffect(() => {
        getPokeList();
    }, []);

    return (
        <>

            <Header />

            <main>
                <section className="ji gp uq">
                    <div className="bb ye ki xn vq jb jo">
                        <div className="wc qf pn xo zf iq">

                            {
                                pokeList?.map((item, index) => (
                                    <>

                                        <div className="animate_top sg vk rm xm">
                                            <div className="c rc i z-1 pg">
                                                <img className="w-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt="Blog" />

                                                <div className="im h r s df vd yc wg tc wf xf al hh/20 nl il z-10">
                                                    <a href="./blog-single.html" className="vc ek rg lk gh sl ml il gi hi">Read More</a>
                                                </div>
                                            </div>

                                            <div className="yh">
                                                <div className="tc uf wf ag jq">
                                                    <div className="tc wf ag">
                                                        <img src="images/icon-man.svg" alt="User" />
                                                        <p>ID: {index + 1}</p>
                                                    </div>
                                                </div>
                                                <h4 className="ek tj ml il kk wm xl eq lb">
                                                    <a href="blog-single.html">{item?.name}</a>
                                                </h4>
                                            </div>
                                        </div>

                                    </>
                                ))

                            }


                        </div>


                    </div>
                </section>

                <section className="i pg gh ji">
                    <img className="h p q" src="images/shape-16.svg" alt="Bg Shape" />

                    <div className="bb ye i z-10 ki xn dr">
                        <div className="tc uf sn tn un gg">
                            <div className="animate_left to/2">
                                <h2 className="fk vj zp pr lk ac">
                                    Join with 5000+ Startups Growing with Base.
                                </h2>
                                <p className="lk">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a
                                    efficitur leo. Ut venenatis rhoncus.
                                </p>
                            </div>
                            <div className="animate_right bf">
                                <a href="#" className="vc ek kk hh rg ol il cm gi hi">
                                    Get Started Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main >

            <Footer />

        </>

    );
}

export default ListPoke;