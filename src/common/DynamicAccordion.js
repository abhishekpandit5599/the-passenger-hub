import { InfoOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Toggle from "./Toggle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AccordionHeader = ({ header, subtitle, onClick,iconsToggle }) => (
  <div style={{border:'1px solid lightgray',marginBottom:'3px'}}>
    <div onClick={onClick} style={{ display:'flex',justifyContent:"space-between", alignItems:'center', padding: "10px" }}>
    <p style={{margin:'0px'}}>{header}</p>  <div style={{display:'flex',gap:'10px',alignItems:'center'}}>{iconsToggle?iconsToggle:<Toggle/>}<KeyboardArrowDownIcon/></div>
    </div>
    <p style={{ fontSize: "12px", margin: "5px 10px" }}>{subtitle}</p>
  </div>
);

const AccordionContent = ({ content }) => (
  <div style={{ backgroundColor: "#e7f0f1", padding: "10px" }}>{content}</div>
);

const DynamicAccordion = ({ header, subtitle, content,iconsToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AccordionHeader header={header} subtitle={subtitle} iconsToggle={iconsToggle} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <AccordionContent content={content} />}
    </div>
  );
};

export default DynamicAccordion;
