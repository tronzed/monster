import { useEffect, useState } from "react";

function Header() {


    const [pokeData, setPokeData] = useState();
    const [pokeDataMore, setPokeDataMore] = useState();

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

    useEffect(() => {
        getPokeData();
    }, []);

    return (

        <>

            <header className="g s r vd ya cj hh sm _k dj bl ll" data-todo-colon-className="{ 'hh sm _k dj bl ll' : stickyMenu }"
                data-todo-at-scroll-window="stickyMenu = (window.pageYOffset > 20) ? true : false">
                <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
                    <div className="vd to/4 tc wf yf">
                        <a href="index.html">
                            <img className="om" src="./images/logo-light.svg" alt="Logo Light" />
                            <img className="xc nm" src="./images/logo-dark.svg" alt="Logo Dark" />
                        </a>

                        {/* Hamburger Toggle BTN */}
                        <button className="po rc" data-todo-at-click="navigationOpen = !navigationOpen">
                            <span className="rc i pf re pd">
                                <span className="du-block h q vd yc">
                                    <span className="rc i r s eh um tg te rd eb ml jl dl" data-todo-colon-className="{ 'ue el': !navigationOpen }"></span>
                                    <span className="rc i r s eh um tg te rd eb ml jl fl" data-todo-colon-className="{ 'ue qr': !navigationOpen }"></span>
                                    <span className="rc i r s eh um tg te rd eb ml jl gl" data-todo-colon-className="{ 'ue hl': !navigationOpen }"></span>
                                </span>
                                <span className="du-block h q vd yc lf">
                                    <span className="rc eh um tg ml jl el h na r ve yc" data-todo-colon-className="{ 'sd dl': !navigationOpen }"></span>
                                    <span className="rc eh um tg ml jl qr h s pa vd rd" data-todo-colon-className="{ 'sd rr': !navigationOpen }"></span>
                                </span>
                            </span>
                        </button>
                        {/* Hamburger Toggle BTN */}
                    </div>

                    <div className="vd wo/4 sd qo f ho oo wf yf" data-todo-colon-className="{ 'd hh rm sr td ud qg ug jc yh': navigationOpen }">
                        <nav>
                            <ul className="tc _o sf yo cg ep">
                                <li><a href="index.html" className="xl" data-todo-colon-className="{ 'mk': page === 'home' }">Home</a></li>
                                <li><a href="index.html#features" className="xl">Features</a></li>
                                <li className="c i" data-todo-x-data="{ dropdown: false }">
                                    <a href="/" className="xl tc wf yf bg" data-todo-at-click-prevent="dropdown = !dropdown"
                                        data-todo-colon-className="{ 'mk': page === 'blog-grid' || page === 'blog-single' || page === 'signin' || page === 'signup' || page === '404' }">
                                        Pages

                                        <svg data-todo-colon-className="{ 'wh': dropdown }" className="th mm we fd pf" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </a>

                                    {/* Dropdown Start */}
                                    <ul className="a" data-todo-colon-className="{ 'tc': dropdown }">
                                        <li><a href="blog-grid.html" className="xl" data-todo-colon-className="{ 'mk': page === 'blog-grid' }">Blog Grid</a></li>
                                        <li><a href="blog-single.html" className="xl" data-todo-colon-className="{ 'mk': page === 'blog-single' }">Blog Single</a></li>
                                        <li><a href="signin.html" className="xl" data-todo-colon-className="{ 'mk': page === 'signin' }">Sign In</a></li>
                                        <li><a href="signup.html" className="xl" data-todo-colon-className="{ 'mk': page === 'signup' }">Sign Up</a></li>
                                        <li><a href="404.html" className="xl" data-todo-colon-className="{ 'mk': page === '404' }">404</a></li>
                                    </ul>
                                    {/* Dropdown End */}
                                </li>
                                <li><a href="index.html#support" className="xl">Support</a></li>
                            </ul>
                        </nav>

                        <div className="tc wf ig pb no">
                            <div className="pc h io pa ra" data-todo-colon-className="navigationOpen ? '!-ud-visible' : 'd'">
                                <label className="rc ab i">
                                    <input type="checkbox" data-todo-colon-value="darkMode" data-todo-at-change="darkMode = !darkMode" className="pf vd yc uk h r za ab" />
                                    {/* Icon Sun */}
                                    <svg data-todo-colon-className="{ 'wn' : page === 'home', 'xh' : page === 'home' && stickyMenu }" className="th om" width="25"
                                        height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.0908 18.6363C10.3549 18.6363 8.69 17.9467 7.46249 16.7192C6.23497 15.4916 5.54537 13.8268 5.54537 12.0908C5.54537 10.3549 6.23497 8.69 7.46249 7.46249C8.69 6.23497 10.3549 5.54537 12.0908 5.54537C13.8268 5.54537 15.4916 6.23497 16.7192 7.46249C17.9467 8.69 18.6363 10.3549 18.6363 12.0908C18.6363 13.8268 17.9467 15.4916 16.7192 16.7192C15.4916 17.9467 13.8268 18.6363 12.0908 18.6363ZM12.0908 16.4545C13.2481 16.4545 14.358 15.9947 15.1764 15.1764C15.9947 14.358 16.4545 13.2481 16.4545 12.0908C16.4545 10.9335 15.9947 9.8236 15.1764 9.00526C14.358 8.18692 13.2481 7.72718 12.0908 7.72718C10.9335 7.72718 9.8236 8.18692 9.00526 9.00526C8.18692 9.8236 7.72718 10.9335 7.72718 12.0908C7.72718 13.2481 8.18692 14.358 9.00526 15.1764C9.8236 15.9947 10.9335 16.4545 12.0908 16.4545ZM10.9999 0.0908203H13.1817V3.36355H10.9999V0.0908203ZM10.9999 20.8181H13.1817V24.0908H10.9999V20.8181ZM2.83446 4.377L4.377 2.83446L6.69082 5.14828L5.14828 6.69082L2.83446 4.37809V4.377ZM17.4908 19.0334L19.0334 17.4908L21.3472 19.8046L19.8046 21.3472L17.4908 19.0334ZM19.8046 2.83337L21.3472 4.377L19.0334 6.69082L17.4908 5.14828L19.8046 2.83446V2.83337ZM5.14828 17.4908L6.69082 19.0334L4.377 21.3472L2.83446 19.8046L5.14828 17.4908ZM24.0908 10.9999V13.1817H20.8181V10.9999H24.0908ZM3.36355 10.9999V13.1817H0.0908203V10.9999H3.36355Z"
                                            fill="" />
                                    </svg>
                                    {/* Icon Sun */}
                                    <img className="xc nm" src="./images/icon-moon.svg" alt="Moon" />
                                </label>
                            </div>

                            <a href="signin.html" data-todo-colon-className="{ 'nk yl' : page === 'home', 'ok' : page === 'home' && stickyMenu }"
                                className="ek pk xl">Sign In</a>
                            <a href="signup.html" data-todo-colon-className="{ 'hh/[0.15]' : page === 'home', 'sh' : page === 'home' && stickyMenu }"
                                className="lk gh dk rg tc wf xf _l gi hi">Sign Up</a>
                        </div>
                    </div>
                </div>
            </header>

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
                                <a href="/" className="ek jk lk gh gi hi rg ml il vc _d _l">Explore {pokeData?.name}</a>

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

        </>

    );
}

export default Header;