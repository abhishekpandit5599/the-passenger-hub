import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Radio, Select } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";

import images from "../../themes/appImage";
import { Collapse } from "antd";

import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const TrainTicketRefunds = (props) => {
  console.log("welcome investors screen.");
  const dispatch = useDispatch();
  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };
  const { Panel } = Collapse;
  
 
  const PanelArray = [
    {
      id: "1",
      Header: "Advance tickets",
      Para: "Advance tickets aren’t refundable, but a change of journey may be made. Find out more.        For Advance tickets bought on or before the 30 Nov a refund in e/Vouchers may be requested prior to the date of departure. Apply here.",
    },
    {
      id: "2",
      Header:
        "Anytime, Off-Peak, Evening Out, Sunday Out, and Super Off-Peak tickets",
      Para: "Customers holding these tickets may change their journey to travel at a different time. The difference in fare will need to be paid.  You must apply for a refund within 28 days of the ticket's expiry date. No admin fees are charged if you submit your ticket for a refund before the first date of validity.",
    },
    {
      id: "3",
      Header: "Rangers and Rovers tickets",
      Para: "Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
    {
      id: "4",
      Header: "Replacement season tickets",
      Para: 'Accordion title      If you want a refund for a duplicate season ticket we issued to replace one that was lost or stolen you’ll need to contact our Customer Service Centre. We will normally give a refund for a replacement season ticket where any of the following applies:    The original season ticket is returned within 1 month of the date you told us it was lost     The original and replacement tickets were on smartcard and it was possible to cancel the original ticket      You were made redundant, resigned, retired, changed your job or address, became pregnant or suffered prolonged illness, and you provide satisfactory evidence of this      We’ll also consider a refund on a replacement season ticket in other circumstances, but we may ask you to attend a meeting with us to confirm the reason for your refund.     All train companies have agreed a Code of Practice for such meetings, which can be found in the National Rail Conditions of Travel (appendix C).     If we agree to a refund, we’ll calculate the amount in the same way as for ordinary season tickets.     If you’ve applied for a replacement season ticket and had to buy tickets to travel while waiting for it to arrive, we’ll give you a full refund on the extra tickets you’ve bought. This applies only to tickets for the same journey as on your season ticke',
    },
    {
      id: "5",
      Header: "Monthly auto-renewal season tickets",
      Para: ` You can initiate a refund from your online account. Alternatively, contact our Customer Services on 0345 6000 650 or smartcards@swrailway.com who will arrange the refund.

      You will also need to cancel the automatic payment set up in ‘My Account’ unless you want to resume travelling with the same journey the following month.`,
    },
    {
      id: "6",
      Header: "Flexi Season tickets",
      Para: `Accordion title
      We are unable to extend the use by date.
      
      A refund of unused tickets is available and must be requested before the expiry date.
      
      Refunds are based on the full cost of the journeys completed less the cost of the ticket. The refund will be the difference less an administration fee of £10.
      
      Flexi Season tickets are discounted, and the refund is not a fixed proportion of what you paid. Where a significant proportion of the ticket has already been used there may not be any refund value.
      
      To claim a refund on a Flexi Season ticket you’ll need to apply by filling out the online form below. `},
    {
      id: "7",
      Header: "Car park season tickets",
      Para: `Accordion title
      It is not possible to pause and restart your season ticket. If you are not going to be using your car park season ticket for some time, you should request a refund from where it was bought.
      
      Car park season refunds are calculated on the cost of the period parked less the cost of the ticket. The refund will be the difference less an administration fee of £10, if you are claiming a refund of a rail ticket at the same time only one fee will be charged.
      
      Car park season tickets are discounted and where a significant proportion of the ticket has already been used there may not be any refund value.` },
    {
      id: "8",
      Header: "Forgotten your season ticket?",
      Para: `If you forget your season ticket and have to buy another ticket to travel, we’ll refund the cost of the extra ticket.

      You will need to keep the extra ticket when you request the refund, as well as show your valid season ticket and photocard. Our ticket office will give you a refund immediately, if it can. We’ll give no more than two refunds in any 12-month period:
      
      First occasion: we’ll give you a full refund
      Second occasion: we’ll give you a full refund, less a £10 administration charge
      Third or later occasion: no refund will be given`,
    },
    {
      id: "9",
      Header: "Forgotten your Railcard?",
      Para: `If you forget your Railcard and have to pay the full fare or buy another ticket, we’ll refund the extra cost if you meet the conditions listed below. If you received a Penalty Fare or Unpaid Fare Notice for failing to show your Railcard, you can ask us to cancel it. We’ll give no more than one refund in any 12-month period.

      You must claim a refund within 28 days of the expiry date on your ticket
      You’ll need to upload a photo or scan of your Railcard and photocard, plus another form of ID that shows your full name
      Your Railcard must be valid for the day and time of travel
      You’ll need to send us the original tickets, not photocopies
      You’ll need to send us any Penalty Fare or Unpaid Fare Notice`  },
    {
      id: "10",
      Header: "Rangers and Rovers tickets",
      Para: "Refunds aren't generally allowed unless the tickets are returned before the first date of validity shown on them.",
    },
  ];
  const PanelArray2 = [
    {
      id: "1",
      Header: "Our website",
      Para: `You can request a refund by logging into your online account.

      If you have multiple tickets to refund, please ensure you select all tickets to be refunded.
      
      You can also change the date and time of travel by logging into your account and clicking ‘initiate change’. Customer Services can also assist with this.
      
      Alternatively if you visit one of our ticket offices, they will be able to complete the change of journey process for you.
      
      You can also claim a refund online using the form below. This includes tickets for journeys not on the South Western Railway network but sold on this website.`,
    },
    {
      id: "2",
      Header:
        "A South Western Railway station",
      Para: `If you bought your tickets at a South Western Railway ticket office or ticket machine, you can return your tickets to the ticket office where they will arrange your refund.

      You can also claim online using the form below. This includes tickets for journeys not on the South Western Railway network but sold at one of our stations.
      
      (Also see ticket machine price guarantee below)`,
    },
    {
      id: "3",
      Header: "Another train company, a travel agent or other source (such as Trainline)s",
      Para: "You’ll need to claim a refund from them, including tickets sold for journeys on the South Western Railway network.",
    },
    {
      id: "4",
      Header: "A Transport for London outlet",
      Para: "You will need to claim a refund from Transport for London if you bought a ticket from London Underground, London Overground or Docklands Light Railway, or through their Oyster website.",
    },
    {
      id: "5",
      Header: "Ticket machine price guarantee",
      Para: `In the unlikely event that you buy a ticket from one of our self-service machines, and then find a cheaper one for the identical journey, you could be entitled to a refund for the difference.

      Please use the form below to make a claim.`,
    },
  ];
  const PanelArray3 = [
    {
      id: "1",
      Header: "Paper tickets",
      Para: `This applies to all refund applications where a paper ticket has been printed, including season tickets.

      You will need to cut the paper ticket in half
      Scan or photograph the ticket (cut in half) and uploaded as an image. We must be able to see the complete ticket in the upload
      If you are requesting a refund on your season ticket, please confirm the date you last used your ticket in the ‘additional comments’
      You will not need to upload any tickets not yet collected`,
    },
    {
      id: "2",
      Header:
        "Tickets bought online but not yet collected",
      Para: `Please include the ticket reference number in the additional comments section on the online refund form and we will be able to cancel your booking.`,
    },
    {
      id: "3",
      Header: "Smartcards",
      Para: "Please include your unique smartcard number as shown on the bottom of the card in the additional comments section.",
    },
    {
      id: "4",
      Header: "eTickets",
      Para: `Please include the AO ticket reference number below the barcode in the additional comments section on the online refund form.

      Upload a screenshot or clear photograph of the eTicket and we will be able to cancel your booking.`,
    },
    
  ];

  useEffect(() => {
    document.title = "The PassengerHub";
    window.scrollTo(0, 0);
  }, []);
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>Train Ticket Refunds</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
          {/* <h2 className="line">Investors</h2> */}
          {/* <div className="text-line" style={{ paddingBottom: '20px' }}>
                        <img src={images.border1} style={{ width: '400px' }} />
                    </div> */}
          <div
            className="texts-wrapper p-4 my-3"
            style={{ background: "#e7f0f1" }}
          >
            <h4 className="textsdbsffs my-2">
              <strong>Industrial Action</strong>{" "}
            </h4>
            <p>
              For information on applying for a refund during periods of
              Industrial Action, click here.
            </p>
          </div>
          <div className="apply-for-refund my-2">
            <h4 className="apply">
              <strong> Apply for a refund if:</strong>
            </h4>
            <ol className="lissd">
              <li className="sgdf">
                You changed your plans and didn’t make the journey at all
              </li>
              <li className="sgdf">
                Disruption meant you decided not to travel, or you weren't able
                to make it to your destination
              </li>
              <li className="sgdf">
                If you have a season ticket that you no longer require
              </li>
            </ol>
          </div>
          <div className="apply-for-refund my-2">
            <h4 className="apply">
              <strong>Ticket type refund information</strong>{" "}
            </h4>
            <ol className="lissd">
              <li className="sgdf">
                The refund process varies according to the ticket type you have
                and where you purchased it. Please click on the ticket that
                applies to you for relevant information
              </li>
              <li className="sgdf">
                A full refund, without administration fee will be given for
                Advance, Anytime, Off-Peak, Super Off-Peak, Evening Out, and
                Sunday Out tickets where due to a cancelled, delayed or
                rescheduled train you choose not to travel
              </li>
              <li className="sgdf">
                You can also make a claim for expenses you've incurred during
                disruption
              </li>
            </ol>
          </div>
          
          <div className="faq-accordian">
            <h2 className="line"></h2>
            
            <div className="accordion">
              <Collapse accordion>
              {PanelArray.map((val, idx) => {
              return (
                <>
                  <Panel header={val.Header} key={idx}>
                    <p className="px-2">{val.Para}</p>
                  </Panel>
                </>
              );
            })}
               
              </Collapse>
            </div>
          </div>
          <div className="faq-accordian">
            <h2 className="line">If you purchased your ticket from:</h2>
             
            <div className="accordion">
              <Collapse accordion>
              {PanelArray3.map((val, idx) => {
              return (
                <>
                  <Panel header={val.Header} key={idx}>
                    <p className="px-2">{val.Para}</p>
                  </Panel>
                </>
              );
            })}
               
              </Collapse>
            </div>
          </div>
          <div className="faq-accordian">
            <h2 className="line">Before completing the online form read the following advice: </h2>
             
            <div className="accordion">
              <Collapse accordion>
              {PanelArray3.map((val, idx) => {
              return (
                <>
                  <Panel header={val.Header} key={idx}>
                    <p className="px-2">{val.Para}</p>
                  </Panel>
                </>
              );
            })}
               
              </Collapse>
            </div>
          </div>
          <p className="my-3">You will receive an email with a unique reference number once your claim has been submitted.</p>
          <h3 className="my-3">Refund Form</h3>
          <p><strong>
          If you are having issues submitting the form, you will need to clear any cached images and files on your device (generally found under settings). <br /><br />

On a desktop, you can also press the Ctrl and F5 keys and resubmit your form. On a mobile device, you might need to clear your browser history and website data then resubmit your form.</strong></p>
          <div className="my-4">
            <Form
              layout="vertical"
              form={form}
              initialValues={{
                layout: "vertical",
              }}
              style={{
                maxWidth: "100%",
                background: "#e7f0f1",
                padding: "20px",
              }}
            >
              <Form.Item label="Title">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="First Name *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Last Name *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Address line 1 *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Address line 2">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Address line 3">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="City / town *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Postcode *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Email address *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Ticket cost *">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Ticket type *">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Photocard number">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Additional comments">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action=""
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default TrainTicketRefunds;
