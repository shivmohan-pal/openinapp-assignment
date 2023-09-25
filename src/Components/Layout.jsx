import "./Layout.css";
import { AddProfileCard, ProfileCard, TopProductCard, TotalCardItem, TotalCards } from "./Cards";
import { ReactComponent as RevenueIcon } from "../SVG/revenue_icon.svg";
import { ReactComponent as TransactionIcon } from "../SVG/transaction_icon.svg";
import { ReactComponent as ThumbsupIcon } from "../SVG/thumbsup-icon.svg";
import { ReactComponent as UsersIcon } from "../SVG/users_icon.svg";
import { ReactComponent as BellIcon } from "../SVG/bell_icon.svg";
import { Navbar } from "./Navbar";
import Searchbar from "./Searchbar";
import Avatar from "./Avatar";
import { Activities } from "./Activities";
import { useState } from "react";
import { useNavigate } from "react-router";
import { googleLogout } from "@react-oauth/google";

const Layout = () => {
  const navigate = useNavigate();
  const [profileData,setProfileData] = useState(JSON.parse(localStorage.getItem('userData')));
 const getLocalStorageData =()=>{
    setProfileData(JSON.parse(localStorage.getItem('userData')));
 }
 const handleSignout = ()=>{
  googleLogout();
  localStorage.removeItem('userData');
  localStorage.removeItem('access-token');
  navigate('/signin');
 }
  return (
    <div className="layout">
      <Navbar />
      <div id="main">
        <header>
          <h2>Dashboard</h2>
          <div>
            <Searchbar />
            <BellIcon />
            <Avatar src="./images/avatar-croped.jpg" onClick={handleSignout}/>
          </div>
        </header>
        <main>
          <TotalCards>
            <TotalCardItem
              iconBackground="#7FCD93"
              Icon={<RevenueIcon />}
              title="Total Revenue"
              count="$2,129,430"
              deltaChange="+2.5%"
            />
            <TotalCardItem
              iconBackground="#DEBF85"
              Icon={<TransactionIcon />}
              title="Total Transactions"
              count="$1,520"
              deltaChange="+1.7%"
            />
            <TotalCardItem
              iconBackground="#ECA4A4"
              Icon={<ThumbsupIcon />}
              title="Total Likes"
              count="$9,721"
              deltaChange="+1.4%"
            />
            <TotalCardItem
              iconBackground="#A9B0E5"
              Icon={<UsersIcon />}
              title="Total Users"
              count="$9,430"
              deltaChange="+4.2%"
            />
          </TotalCards>
          <Activities />
          <div className="cards">
            <TopProductCard />
            { profileData? 
            <ProfileCard 
              name= {profileData.name}
              phone= {profileData.phone}
              mail= {profileData.email}
              instagram={profileData.instagram}
              youtube= {profileData.youtube}
            /> :
            <AddProfileCard submited={getLocalStorageData} />
            }
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
