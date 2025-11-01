import { NavLink, useNavigate } from "react-router-dom";
import BubbleMenu from "../components/BubbleMenu";
import { useSelector } from "react-redux";

const BubbleNav = () => {
  const user = useSelector((state) => state.user?.user);

  console.log(user);

  const navigate = useNavigate()
  
  
  


  const items = [
    {
      label: "Home",
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#432323", textColor: "#ffffff" },
    },
    {
      label: "Bollywood",
      href: "/bollywood",
      ariaLabel: "Bollywood",
      rotation: 5,
      hoverStyles: { bgColor: "#D97D55", textColor: "#ffffff" },
    },
    {
      label: "Hollywood",
      href: "/hollywood",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#432323", textColor: "#ffffff" },
    },
    {
      label: "Webseries",
      href: "/webseries",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#334443", textColor: "#ffffff" },
    },

    ...(user?.isAdmin
      ? [
          {
            label: "Create",
            href: "/create",
            ariaLabel: "create",
            rotation: 0,
            hoverStyles: { bgColor: "#334443", textColor: "#ffffff" },
          },
          {
            label: "Logout",
            href: "/user/logout",
            ariaLabel: "create",
            rotation: 0,
            hoverStyles: { bgColor: "#334443", textColor: "#ffffff" },
          },
        ]
      : [
          {
            label: "Admin",
            href: "/user/login",
            ariaLabel: "Contact",
            rotation: 0,
            hoverStyles: { bgColor: "#334443", textColor: "#ffffff" },
          },
        ]),
  ];

  return (
    <div className="">
      <BubbleMenu
        logo={
          <span className=" p-10 text-3xl text-[#1E3E62] font-bold">
            <a href="/">20movies</a>
          </span>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#76ABAE"
        menuContentColor="#F8EDED"
        useFixedPosition={true}
        animationEase="back.out(2)"
        animationDuration={0.6}
        staggerDelay={0.12}
      />
    </div>
  );
};

export default BubbleNav;
