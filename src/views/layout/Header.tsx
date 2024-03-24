// @ts-ignore
import imgLogo from "../../assets/media/logo/img.png";


const Header = () => {
    return (
        <div className="header">

                <img src={imgLogo} alt="Logo" className="header__logo-img"/>

            <div className="header__content">
                <p className="header__message">¡Compra por este medio!</p>
                <p className="header__contact"><i className="fa-solid fa-phone header__icon"></i> (01) 411 6001</p>
            </div>
        </div>
    );
};

export default Header;
