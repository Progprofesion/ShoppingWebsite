import fashionIcon from "../../assets/icon/fashionIcon.svg";
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


            </div>
        </div>

    )
}

export default Main
