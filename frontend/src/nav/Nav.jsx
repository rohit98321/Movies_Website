import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="p-5" >

     <div className=" hidden md:flex text-xl gap-5 justify-center">
     <NavLink to={"/"} className={(e) => e.isActive && "text-red-950"}>
        Home
      </NavLink>
      <NavLink
        to={"/bollywood"}
        className={(e) => e.isActive && "text-red-950"}
      >
        Bollywood
      </NavLink>
      <NavLink
        to={"/hollywood"}
        className={(e) => e.isActive && "text-red-950"}
      >
        Hollywood
      </NavLink>
      <NavLink
        to={"/webseries"}
        className={(e) => e.isActive && "text-red-950"}
      >
        WebSeries
      </NavLink>

      <NavLink
        to={"/create"}
        className={(e) => e.isActive && "text-red-950"}
      >
        Create
      </NavLink>

      <NavLink
        to={"/user/register"}
        className={(e) => e.isActive && "text-red-950"}
      >
        admin
      </NavLink>
     </div>

      {/*for mobiles*/}
      <div className="absolute z-50 p-1 gap-4 right-1 bg-neutral-800" >
        <button onClick={() => setisOpen(!isOpen)} className=" md:hidden text-5xl transition-all ease-in-out duration-200">
          {isOpen ? <X  size={20} /> : <Menu  size={45} />}

        </button>

        {isOpen && (
          <div className=" flex flex-col transition-all duration-500 text-amber-500 ease-in-out">
            <NavLink to={"/"} className={(e) => e.isActive && "text-red-950"}>
              Home
            </NavLink>
            <NavLink
              to={"/bollywood"}
              className={(e) => e.isActive && "text-red-950"}
            >
              Bollywood
            </NavLink>
            <NavLink
              to={"/hollywood"}
              className={(e) => e.isActive && "text-red-950"}
            >
              Hollywood
            </NavLink>
            <NavLink
              to={"/webseries"}
              className={(e) => e.isActive && "text-red-950"}
            >
              WebSeries
            </NavLink>

            <NavLink
        to={"/create"}
        className={(e) => e.isActive && "text-red-950"}
      >
        Create
      </NavLink>

          </div>
        )}
      </div>



    </div>
  );
};

export default Nav;
