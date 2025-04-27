import { NavLink } from "react-router";
import { HomeIcon } from "../ui/icons/HomeIcon";
import { LeaderBoardIcon } from "../ui/icons/LeaderBoardIcon";
import { ShopIcon } from "../ui/icons/ShopIcon";
import { ProfileIcon } from "../ui/icons/ProfileIcon";

export const Navbar = () => {
  return (
    <div className="w-80 border-r-2 border-zinc-200 shadow-lg p-2">
      <h1 className="text-primary font-medium text-4xl m-2 tracking-wide text-shadow-primary/10 text-shadow-lg  ">Quizzy</h1>

      <div className="flex flex-col gap-3 mt-10 px-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 pl-5 flex items-center  text-base-content/70 border-2 border-base-100  gap-5 rounded-2xl text-start transition-all font-medium 
     ${isActive ? "border-secondary/30 bg-secondary/10 text-secondary" : " hover:bg-info-content/10"}`
          }
        >
          <HomeIcon />
          HOME
        </NavLink>

        <NavLink
          to="/leader-board"
          className={({ isActive }) =>
            `p-3 pl-5 flex items-center  text-base-content/70 border-2 border-base-100  gap-5 rounded-2xl text-start transition-all font-medium 
     ${isActive ? "border-secondary/30 bg-secondary/10 text-secondary" : " hover:bg-info-content/10"}`
          }
        >
          <LeaderBoardIcon />
          LEADERBOARDS
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `p-3 pl-5 flex items-center  text-base-content/70 border-2 border-base-100  gap-5 rounded-2xl text-start transition-all font-medium 
     ${isActive ? "border-secondary/30 bg-secondary/10 text-secondary" : " hover:bg-info-content/10"}`
          }
        >
          <ShopIcon />
          SHOP
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `p-3 pl-5 flex items-center  text-base-content/70 border-2 border-base-100  gap-5 rounded-2xl text-start transition-all font-medium 
     ${isActive ? "border-secondary/30 bg-secondary/10 text-secondary" : " hover:bg-info-content/10"}`
          }
        >
          <ProfileIcon />
          PROFILE
        </NavLink>
      </div>
    </div>
  );
};
