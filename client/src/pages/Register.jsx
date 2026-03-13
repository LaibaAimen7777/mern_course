import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <FormRow type="text" name="name" defaultValue="Laiba" />
        <FormRow
          type="text"
          name="name"
          labelText="last name"
          defaultValue="Aimen"
        />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" defaultValue="laiba@gmail.com" />
        <FormRow type="password" name="password" />
        <button className="btn btn-block">Submit</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
