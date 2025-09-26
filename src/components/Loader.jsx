import Lottie from "lottie-react";

import animationData from "../assets/images/loader/poke_ball_load.json";

function Loader({ loader }) {

    if (!loader) return null;

    return (
        <>

            <div className="loader_box">
                <div className="lot_box">
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>

        </>

    );
}

export default Loader;