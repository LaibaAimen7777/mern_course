import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { showSidebar, toggleSideBar } = useDashboardContext();
  console.log("here", showSidebar);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
