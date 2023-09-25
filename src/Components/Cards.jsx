import { DataField } from "./Activities";
import "./Cards.css";
import { DoughnutChart } from "./Charts";
import { ReactComponent as PlusIcon } from "../SVG/plus_icon.svg";
import { ReactComponent as MailIcon } from "../SVG/mail_icon.svg";
import { ReactComponent as YoutubeIcon } from "../SVG/youtube_icon.svg";
import { ReactComponent as InstagramIcon } from "../SVG/instagram_icon.svg";
import { ReactComponent as CallIcon } from "../SVG/call_icon.svg";
import Modal from "./Model";
import AddProfileForm from "./AddProfileForm";
import { useState } from "react";
import { DataBetweenDates, NoOfCatagory, chartDataPercentage } from "../helpers/functions";
import { Fetch, url } from "../config/api";

const TotalCardItem = ({ iconBackground, Icon, title, count, deltaChange }) => {
  return (
    <div className="total-card-item">
      <span>
        <span style={{ background: iconBackground }}>{Icon}</span>
      </span>
      <h2>{title}</h2>
      <div>
        <p>{count}</p>
        <span>{deltaChange}</span>
      </div>
    </div>
  );
};

const TotalCards = ({ children }) => {
  return <div className="total-cards">{children}</div>;
};

const ProfileCard = ({ name, phone, instagram, mail, youtube }) => {
  return (
    <div className="profile-card">
      <div className="profile">
        <h3>{name}</h3>
        <div className="contacts">
          <div>
            <span className="icon-back" style={{ background: "#E9F9EB" }}>
              <CallIcon />
            </span>
            <span className="value" title={`+91 ${phone}`}>+91 {phone}</span>
          </div>
          { instagram &&
          <div>
            <span className="icon-back" style={{ background: "#FFE9EC" }}>
              <InstagramIcon />
            </span>
            <span className="value" title={instagram}>{instagram}</span>
          </div>}
          <div>
            <span className="icon-back" style={{ background: "#f3f1fb" }}>
              <MailIcon />
            </span>
            <span className="value" title={mail}>{mail}</span>
          </div>
          { youtube &&
          <div>
            <span className="icon-back" style={{ background: "#FFE9EC" }}>
              <YoutubeIcon />
            </span>
            <span className="value" title={youtube}>{youtube}</span>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

const AddProfileCard = ({submited}) => {
  const [showModal,setShowModdal] = useState(false);
  const handleClick = () =>{
    setShowModdal(true);
  }
  const closeModal = () =>{
    setShowModdal(false);
  }
  return (
    <div className="add-profile-card">
      <span onClick={handleClick}>
        <PlusIcon />
      </span>
      {showModal &&
      <Modal>
        <AddProfileForm closeForm={closeModal} submitForm={submited}/>
      </Modal>
      }
    </div>
  );
};

const TopProductCard = () => {
  const data = Fetch(url);
  const labels = ["Supervisor", "Executive", "Intern"];
  const chartData = [...labels.map((label)=>NoOfCatagory( DataBetweenDates(data, "Feb 1,2020", "Mar 1,2020"),"designation",label))];
  const dataPercentage = chartDataPercentage(...chartData);
  return (
    <div className="top-product-card">
      <div className="head">
        <h3>Top Product</h3>
        <span className="period">Jan - Feb 2020</span>
      </div>
      <div className="doughnut-chart-box">
        <div className="doughnut-chart">
        {!data ? "loading..." :  <DoughnutChart Data ={chartData} />}
        </div>
        <div className="data-fields">
          <DataField background="var(--Light-Green)" title="No. of Supervisor" />
          <span className="percent">{dataPercentage[0]}%</span>
          <DataField background="var(--Light-Yellow)" title="No. of Executive" />
          <span className="percent">{dataPercentage[1]}%</span>
          <DataField background="var(--Light-Red)" title="No. of Intern" />
          <span className="percent">{dataPercentage[2]}%</span>
        </div>
      </div>
    </div>
  );
};
export {
  TotalCardItem,
  TotalCards,
  TopProductCard,
  AddProfileCard,
  ProfileCard,
};
