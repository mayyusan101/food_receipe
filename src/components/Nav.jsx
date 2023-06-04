import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [openMobile, setOpenMobile] = useState(false);

  const handlerMenu = () => {
    setOpenMobile(!openMobile);
  };
  const handlerMenuItem = (path_name) => {
    navigate(path_name);
    setOpenMobile(false);
  };
  return (
    <Wrapper>
      <nav>
        <h1 className="logo">My Receipe</h1>
        <MenuWrapper>
          <ul className="menu_ul">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/receipes"}>
              <li>Receipe</li>
            </Link>
            <Link to={"/saved/meals"}>
              <li>Saved Meals</li>
            </Link>
          </ul>
        </MenuWrapper>
        <MobileNav className="mobile_icon" onClick={handlerMenu}>
          <RiMenu3Fill />
        </MobileNav>

        <ul className={`mobile_wrapper ${openMobile ? "show" : "hide"}`}>
          <li onClick={() => handlerMenuItem("/")}>Home</li>
          <li onClick={() => handlerMenuItem("/receipes")}>Receipes</li>
          <li onClick={() => handlerMenuItem("/saved/meals")}>Saved Meals</li>
        </ul>
      </nav>

      <div className="line" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .mobile_wrapper {
    display: none;
    position: absolute;
    top: 67px;
    right: 1rem;
    width: 80%;
    height: 0px;
    overflow: hidden;
    transition: all 1s ease;
    transform: translateY(-100%);
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f1eee9;
    height: var(--nav-height);
    width: 100vw;
    z-index: 22;
  }
  .logo {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: #000;
  }
  @media (max-width: 968px) {
    nav {
      padding: 1rem;
    }
    .logo {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    .mobile_wrapper {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: #fff;
      padding: 0.5rem;
      z-index: 100;
      border-radius: 10px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
  .mobile_wrapper li {
    color: #fff;
    text-align: center;
    width: 80%;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #f58f48;
    border-radius: 5px;
    cursor: pointer;
  }
  .mobile_wrapper li:hover {
    background-color: #f47e37;
  }

  .show {
    height: 155px;
    padding: 0.5rem;
    transition: all 0.5s ease;
    transform: translateY(0%);
  }
  .hide {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  .menu_ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .menu_ul li {
    color: #555;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
  }
  .menu_ul li:hover {
    background-color: #f58f48;
    color: #f1eee9;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  color: #555;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #f58f48;
    color: #f1eee9;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Nav;
