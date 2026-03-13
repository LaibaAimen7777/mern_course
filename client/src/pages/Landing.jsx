import styled from "styled-components";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, consequatur perferendis veniam aut iure laudantium hic
            error expedita qui corrupti doloremque natus in. Molestias, illo
            impedit rerum doloribus assumenda fuga?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
