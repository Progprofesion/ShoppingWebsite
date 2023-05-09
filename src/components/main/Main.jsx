import fashionIcon from "../../assets/icon/fashionIcon.svg";
import vectorYellow from "../../assets/icon/vectorYellow.svg";
import girl from "../../assets/img/girl.png"
import Button from "../buttons/Button";
import "./main.scss";

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__header">
                    <div className="main__title">
                        <img src={fashionIcon} alt="" className="main__icon" />
                        <div className="main__title">FASHION</div>
                    </div>
                    <div className="main__hug">
                        <div className="main__hugTitle">CATALOGUE</div>
                        <div className="main__hugTitle">FASHION</div>
                        <div className="main__hugTitle">FAVOURITE</div>
                        <div className="main__hugTitle">LIFESTYLE</div>
                        <Button addClass="signUp" title="SIGN UP" />
                    </div>
                </div>
                <div className="main__firstScreen">
                    <div className="main__firstScreen-title">LET’S
                        EXPLORE
                        UNIQUE
                        CLOTHES.
                        <div className="main__firstScreen-backgroundWhite"></div>
                        <div className="main__firstScreen-backgroundYelow"></div>
                    </div>

                    <div className="main__firstScreen-subtitle">Live for Influential and Innovative fashion!</div>
                    <div className="main__firstScreen-hug">
                        <img src={vectorYellow} alt="" className="main__firstScreen-icon" />
                        <Button addClass="shopNow" title="Shop Now" />
                    </div>
                    <img src={girl} alt="" className="main__firstScreen-girl" />
                </div>

            </div>
        </div>

    )
}

export default Main
