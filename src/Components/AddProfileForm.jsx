import "./AddProfileForm.css";
import { ReactComponent as CrossIcon } from "../SVG/cross_icon.svg";
import { useState } from "react";

const InputField = ({
  type,
  For,
  label,
  pattern,
  value,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={`${For}`}>{label}</label>
      <input
        type={`${type}`}
        id={`${For}`}
        name={For}
        pattern={pattern}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

const BasicForm = ({display,onChange,inputValue }) => {
  const { name, email, phone } = inputValue;

  const handleChange = (e) => {
     onChange(e);
  };
  return (
    <div className={`basic-form ${display}`}>
      <InputField
        type="text"
        For="name"
        label="Enter Name*"
        placeholder="Eg. John Doe"
        required={true}
        value={name}
        pattern="^[a-zA-Z\s]*$"
        onChange={handleChange}
      />
      <InputField
        type="email"
        For="email"
        label="Enter Email*"
        placeholder="Eg. john@xyz.com"
        required={true}
        value={email}
        onChange={handleChange}
      />
      <InputField
        type="text"
        For="phone"
        label="Enter Phone*"
        placeholder="Eg. 9123835284"
        required={true}
        pattern="(\+([0-9]{1})?[0-9]{1})?[1-9]{1}[0-9]{9}"
        value={phone}
        onChange={handleChange}
      />
    </div>
  );
};

const SocialForm = ({display,onChange,inputValue }) => {
  const { instagram, youtube } = inputValue;

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className={`social-form ${display}`}>
      <InputField
        type="text"
        For="instagram"
        label="Instagram Link (Optional)"
        placeholder="Eg. instagram.com/username"
        required={false}
        value={instagram}
        pattern="(^$)|(http://)?(www\.)?instagram\.com\/(.+)|(https://)?(www\.)?instagram\.com\/(.+)"//empty or pattern
        onChange={handleChange}
      />
      <InputField
        type="text"
        For="youtube"
        label="Youtube Link (Optional)"
        placeholder="Eg. youtube.com/username"
        required={false}
        value={youtube}
        pattern="(^$)|(http://)?(www\.)?youtube\.com\/(.+)|(https://)?(www\.)?youtube\.com\/(.+)"//empty or pattern
        onChange={handleChange}
      />
    </div>
  );
};

const AddProfileForm = ({closeForm,submitForm}) => {
  const [level, setLevel] = useState("basic");
  const [formInput,setFormInput] = useState({ name: "", email: "",phone: "", instagram: "", youtube: ""})

  const inputChange = (e) =>{
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const levelClick = (e) => {
    setLevel(String(e.target.innerText).toLowerCase());
  };
  const nextClick = () =>{
    setLevel("social");
  }
  const backClick =() =>{
    setLevel("basic");
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    let valid = ()=> e.target.checkValidity();
    if(valid()){
      localStorage.setItem('userData',JSON.stringify(formInput));
      submitForm();
      closeForm();
    }else{
      backClick();
    } 
  }
  const closeClick = () => {
   closeForm();
  }

  return (
    <div className="add-profile-form">
      <div className="head">
        <h4>Add New Profile</h4>
        <span onClick={closeClick}>
          <CrossIcon />
        </span>
      </div>
      <div className="form-box">
        <div className="form-levels">
          <span
            className={level === "basic" ? "level-active" : ""}
            onClick={levelClick}
          >
            Basic
          </span>
          <span
            className={level === "social" ? "level-active" : ""}
            onClick={levelClick}
          >
            Social
          </span>
        </div>
        <form id="add-profile" onSubmit={handleSubmit}>
          <BasicForm display={level === "social" ? "none" : ""} onChange={inputChange} inputValue ={formInput}/>
          <SocialForm display={level === "basic" ? "none" : ""} onChange={inputChange} inputValue ={formInput}/>
        </form>
      </div>
      <div className="btn-container">
        {   level === "social" ? 
            (<button onClick={backClick}>Back</button>) 
          : (<button className="highlight-btn" form="add-profile" type="submit"  onClick={nextClick}>Next</button>)
             }
         { level==="social" &&
        <button className="highlight-btn" form="add-profile" type="submit" >Done</button>
         }
      </div>
    </div>
  );
};

export default AddProfileForm;
