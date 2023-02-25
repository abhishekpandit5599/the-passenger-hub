import { InfoOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Toggle from "./Toggle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
            <div style={{border:'1px solid lightgray'}}>
          <div
            onClick={() => handleClick(index)}
            style={{ padding: "5px 10px",display:'flex',justifyContent:'space-between' }}
          >
          <p style={{margin:'0px',fontSize:'15px'}}>{item.header}</p>  <div style={{display:'flex',gap:'10px',alignItems:'center'}}><InfoOutlined /><Toggle/><KeyboardArrowDownIcon/></div>
          </div>
         
          <p style={{ fontSize: "12px", margin: "5px 10px" }}>{item.subtitle}</p>
          </div>
          {activeIndex === index && (
            <ul style={{ backgroundColor: "#e7f0f1", padding: "10px" }}>
              {item.content.map((content, contentIndex) => (
                <li key={contentIndex} style={{ padding: "5px 10px",display:'flex',justifyContent:'space-between' }}>{content} <div style={{display:'flex',gap:'10px',alignItems:'center'}}><InfoOutlined /><Toggle/></div></li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;