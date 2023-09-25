import "./Navbar.css";
import { ReactComponent as DashboardIcon } from "../SVG/dashboard_icon.svg";
import { ReactComponent as TransactionIcon } from "../SVG/transaction_icon.svg";
import { ReactComponent as ScheduleIcon } from "../SVG/schedule_icon.svg";
import { ReactComponent as UserIcon } from "../SVG/user_icon.svg";
import { ReactComponent as SettingIcon } from "../SVG/setting_icon.svg";
import { useState } from "react";

const NavItem = ({ Icon, title }) => {
  return (
    <div className={`nav-item ${Icon ? "" : "no-icon"}`}>
      {Icon}
      <span>{title}</span>
    </div>
  );
};

const NavOptions = ({ children,mobileMenu }) => {
  return <div className={`nav-options ${mobileMenu?"flex":''}`}>{children}</div>;
};

const Navbar = () => {
  const [bool, SetBool] = useState(false);
  const handleClick = () => {
    SetBool(!bool);
  };

  return (
    <div className="navbar" onClick={handleClick}>
      <h1>Board.</h1>
      <NavOptions mobileMenu={bool}>
        <div>
          <NavItem Icon={<DashboardIcon />} title="Dashboard" />
          <NavItem Icon={<TransactionIcon />} title="Transactions" />
          <NavItem Icon={<ScheduleIcon />} title="Schedules" />
          <NavItem Icon={<UserIcon />} title="Users" />
          <NavItem Icon={<SettingIcon />} title="Settings" />
        </div>
        <div>
          <NavItem title="Help" />
          <NavItem title="Contact Us" />
        </div>
      </NavOptions>
    </div>
  );
};

export { Navbar, NavItem, NavOptions };
