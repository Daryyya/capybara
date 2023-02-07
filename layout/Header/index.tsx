import style from "./style.module.scss";
import Cart from "../../public/image/cart.svg";
import Like from "../../public/image/like.svg";
import Login from '../../public/image/login.svg';
import StyledLink from "@/ui/StyledLink";


const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <StyledLink path="/"><div>LOGO</div></StyledLink>
          <div>
          <StyledLink path="/like"><Like /></StyledLink>
          <StyledLink path="/cart"><Cart /></StyledLink>
          <Login />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
