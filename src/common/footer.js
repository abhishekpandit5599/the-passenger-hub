import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Breadcrumb, Layout, Menu, Drawer } from "antd";
import images from "./../themes/appImage";
import { Link, useNavigate } from "react-router-dom";
import "react-chat-elements/dist/main.css";
import "../images/FY_21_Modern_Slavery_Statement.pdf"
// MessageBox component

import { appConstants } from "../themes/appConstant";
const { Header, Content, Footer, Sider } = Layout;

const FooterMain = () => {
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div style={{position:'relative'}}>
      
      
      <div className="footer" style={{ paddingTop: "0px", position:'relative' }}>
      <a
        className="chat-float-logo"
        onClick={() => {
          setIsModalOpen(true);
        }}
        style={{
        
          alignItems: "center",
          background: "transparent",
          border: "none",
          borderRadius: "50%",
          bottom: "72px",
          /* box-shadow: ,gb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px,
            rgb(0 0 0 / 12%) 0px 1px 18px; */
          /* color: white; */
          display: "flex",
          
          justifyContent: "center",
          height: "94px",
          right: "60px",
          padding: "0px",
          position: "absolute",
          left: "initial",
          width: "64px",
          zIndex: "214",
        }}
      >
        <img
          src={images.chatfloatLogo}
          alt="logo"
          style={{ width: "70px", height: "70px", objectFit: "contain" }}
        />
      </a>
        <div
          style={{
            display: "flex",
            background: "linear-gradient(90deg,#84e0ab 5%,#7bd0d3 51.25%,#84e0ab 93.75% )",
          padding:'10px 0px'
          }}
        >
          <div
            className="container-fluid flex-md-row flex-column"
            style={{ display: "flex", alignItems:"center" , gap:"10px" }}
          >
            <h5 className="ml-md-5 my-0" style={{    fontWeight: "700",    fontSize: "23px"}}>Online Payments Methods</h5>
           
            <div className="footer-payment-images" style={{display:"flex" , flexDirection:'row',gap:'10px'}}>
            <img
              src={images.payment1}
              style={{    }}
              className="footer-payment-img"

            />
            <img
              src={images.payment2}
              style={{    }}
              className="footer-payment-img"
            />
            <img
              src={images.payment3}
              style={{    }}
              className="footer-payment-img"
            />
            <img
              src={images.payment4}
              style={{   }}
              className="footer-payment-img"
            />
            <img
              src={images.payment5}
              style={{   }}
              className="footer-payment-img"
            />
            <img
              src={images.payment6}
              style={{   }}
              className="footer-payment-img"
            />
            <img
              src={images.payment7}
              className="footer-payment-img"
              style={{   }}
              
            />

            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div
            style={{
              marginBottom: "-40px",
              marginLeft: "150px",
              marginTop: "50px",
            }}
          ></div>

          <div className="row footer-draw px-3" >
          <div className="col-md-6 col-12">
              <div className="row">
            <div className="col-4" style={{  }}>
              <div className=" wrapper footers first_text">
                <h4>Helpful links</h4>
                <ul className="lisit-trends">
                  <li>
                    <Link className="footer_links" to="/contactUs">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/train-ticket-explained">
                      Train tickets explained
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/how-to-get-your-tickets">
                      How to get your tickets
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="#">
                      Live train times
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/train-ticket-refunds">
                      Train ticket refunds
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/delay-repay">
                      Delay Repay
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            
              <div class="wrapper footers second_text col-4">
                <h4  >About us</h4>
                <ul className="lisit-trends">
                  <li>
                    <Link className="footer_links" to="/press">
                      Latest news
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/sustainabilty">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/careers">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/passenger-hub-charter">
                      Passenger's Charter
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/passenger-hub-kpi">
                      Our performance
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/tph-&-tch">
                      FirstGroup and MTR Company
                    </Link>
                  </li>
                </ul>
              </div>
            
            
              <div class="wrapper footers second_text col-4">
                <h4>Top destinations</h4>
                <ul className="lisit-trends">
                  <li>
                    <Link className="footer_links" to="/contactUs">
                      Trains to London
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      Trains to Bournemouth
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      Trains to Exeter
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      Trains to Southampton
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      Trains to Portsmouth
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      See all destinations
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <div className="col-md-6 col-12 row">
              <div class="wrapper footers col-6 second_text p-relative">
             
                <h4>Cheap train tickets and offers</h4>
                <ul className="lisit-trends">
                  <li>
                    <Link className="footer_links" to="/cheap-train-tickets">
                      Cheap train tickets
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/faq">
                      Railcards
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/advance-train-tickets">
                      Advance train tickets
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/tph-rewards">
                      TPH Rewards
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/group-save">
                      GroupSave & group travel
                    </Link>
                  </li>
                  <li>
                    <Link className="footer_links" to="/2-for-1">
                      2FOR1 Offers
                    </Link>
                  </li>
                </ul>
              </div>
            
           
              <div class="wrapper col-6 footers " >
                <img src={images.logohome} style={{ width: "",height:"43px",marginTop:'-5px' }} />
               
                {/* <h2 className="black-line">Subject to status. Over 18 only.</h2> */}
                <div
                class="wrapper footers icons-footer pt-5"
                style={{marginTop:'25px' }}
              >
                <h4 style={{margin:'0px 0px 15px 7px' ,color:'#02bc9d'}}>Follow us</h4>

                <img src={images.fb} style={{ width: "40px" }} />
                <img src={images.tw} style={{ width: "40px" }} />
                <img src={images.youtube} style={{ width: "40px" }} />

                <img src={images.tik} style={{ width: "40px" }} />
                <img src={images.insta} style={{ width: "40px" }} />

                <img src={images.link} style={{ width: "40px" }} />
              </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            style={{
              marginBottom: "-40px",
              marginLeft: "150px",
              marginTop: "50px",
            }}
          ></div>
        </div>
      </div>
      <div className="copyright">
        <div
          className="px-md-5"
          style={{
            
            align: "center",
            textAlign:'center',
            color: "#ffff",
          }}
        >
           
           <Link className="footer_link" to="/">Sitemap</Link> | <Link className="footer_link" to="/termss">Terms & conditions </Link> | <Link className="footer_link" to="/privacyPolicy">Privacy policy</Link> |<Link className="footer_link" to="/cookiespolicy">Cookie policy </Link>
           | <Link className="footer_link" to="/accessability">Accessability</Link> |<Link className="footer_link" to="/ourplan"> Our plan</Link> | <Link className="footer_link" to="/modern-slavery">Modern slavery act </Link> |<a className="footer_link" href="../images/FY_21_Modern_Slavery_Statement.pdf" download> Gender  pay </a>|<a className="footer_link" href="../images/FY_21_Modern_Slavery_Statement.pdf" download> Equal opportunities policy</a> | <Link className="footer_link" to="/">My account</Link> |  <Link className="footer_link" to="/press" >Media centre</Link>
         
        </div>
        <br />
        <p>
          The Passenger Hub Ltd. Registered in England, Scotland, Ireland and
          Wales.
        </p>
      </div>
    </div>
  );
};
export default FooterMain;
