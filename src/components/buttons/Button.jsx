import "./button.scss";

const Button = ({ width, height, title, addClass }) => {
    return (
        <button className={addClass}>{title}</button>
    )
}

export default Button