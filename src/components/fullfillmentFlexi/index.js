import React, { useState, useEffect, useLayoutEffect } from "react";
import images from "../../themes/appImage";

import { useDispatch, useSelector } from "react-redux";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";

import { drawerAction } from "../../redux/actions/authentication";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import FooterMain from "../../common/footer";
import { Button, Col, Row, Modal, Select, Input, Radio, Checkbox } from "antd";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-nextjs-toast";
import moment from "moment";
import { seasonTktPaymentInitiate } from "../../redux/actions/seasonTickets";
const { Option } = Select;
const FullfillmentFlexi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const searchedData = state?.data ? JSON.parse(state?.data) : "";
  const authenticationData = useSelector(getMemoizedAuthenticationData);
  const { drawerState } = authenticationData;
  const [photocard, setPhotocard] = useState(true);
  const [photoCardFile, setPhotoCardFile] = useState(null);
  const [photoCardFileValue, setPhotoCardFileValue] = useState("");
  const [photoCardNumber, setPhotoCardNumber] = useState("");

  const handlewClick = () => {
    let action = drawerState ? false : true;
    dispatch(drawerAction(action, "drawerState"));
  };

  const photoSelectHandle = (val) => {
    setPhotoCardFile(null);
    setPhotoCardFileValue("");
    setPhotoCardNumber("");
    setPhotocard(val);
  };

  const photoCardFileChange = (e) => {
    // console.log(e.target.files[0]);
    setPhotoCardFile(e.target.files[0]);
    setPhotoCardFileValue(e.target.value);
  };

  const handleSubmit = () => {
    if (photocard) {
      if (photoCardFile) {
        searchedData.photoCardFile = photoCardFile;
      } else
        return toast.notify("Please select photocard picture", {
          duration: 5,
          type: "error",
        });
    } else {
      if (photoCardNumber) {
        searchedData.photoCardNumber = photoCardNumber;
      } else
        return toast.notify("Please enter photocard number", {
          duration: 5,
          type: "error",
        });
    }
    navigate("/deliveryFlexi", {
      state: { data: searchedData },
    });
  };

  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div
        className="press"
        style={{ margin: "7rem 0 5rem", padding: "0 50px" }}
      >
        <h5
          style={{
            color: "#00D9B2",
            fontWeight: 800,
            margin: "1rem",
          }}
        >
          Fullfilment , Add-Ons, Discount and Photocard
        </h5>
        <div
          style={{
            width: "97.6%",
            margin: "1rem",
            border: "1px solid gray",
            borderRadius: "15px",
          }}
        >
          <h5
            style={{
              color: "#00D9B2",
              fontWeight: 800,
              fontSize: "15px",
              margin: ".5rem",
            }}
          >
            {searchedData?.source} to {searchedData?.destination} for{" "}
            {searchedData?.passengerType} Flexi Ticket
          </h5>
          <div className="p-2 ml-5" style={{ fontSize: "14px" }}>
            Travel is allowed via any permitted route.
            <br />
            Class: {searchedData?.class}
            <br />
            Traveller: {searchedData?.passengerType}
            <br />
            Duration: {searchedData?.duration?.m} Month{" "}
            {searchedData?.duration?.d} Days
            <br />
            Start Date: {moment(searchedData?.startDate).format("ll")}
            <br />
            End Date: {moment(searchedData?.endDate).format("ll")}
          </div>
        </div>
        <div
          style={{
            width: "97.6%",
            margin: "1rem",
            border: "1px solid gray",
            borderRadius: "15px",
          }}
        >
          <Row gutter={24}>
            <h5
              style={{
                color: "#00D9B2",
                fontWeight: 800,
                fontSize: "15px",
                margin: ".5rem 2rem ",
              }}
            >
              Fullfilment
            </h5>
          </Row>
          <Row
            span={24}
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              // padding: "10px",
            }}
          >
            <Radio style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
              Paper Ticket by Post
            </Radio>
          </Row>
        </div>
        <div
          style={{
            width: "97.6%",
            margin: "1rem",
            border: "1px solid gray",
            borderRadius: "15px",
          }}
        >
          <Row gutter={24}>
            <h5
              style={{
                color: "#00D9B2",
                fontWeight: 800,
                fontSize: "15px",
                margin: ".5rem 2rem ",
              }}
            >
              Discounts
            </h5>
          </Row>
          <Row>
            <Select
              showSearch
              size="large"
              placeholder="Select Rail Card"
              style={{ width: "20vw", margin: "1rem" }}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">ABC</Option>
              <Option value="2">DEF</Option>
            </Select>
          </Row>
        </div>
        <div
          style={{
            width: "97.6%",
            margin: "1rem",
            border: "1px solid gray",
            borderRadius: "15px",
          }}
        >
          <Row gutter={24}>
            <h5
              style={{
                color: "#00D9B2",
                fontWeight: 800,
                fontSize: "15px",
                margin: ".5rem 2rem ",
              }}
            >
              Discounts
            </h5>
          </Row>
          <Row>
            <Col span={4} style={{ margin: "1rem" }}>
              <Checkbox>This purchase is a renewal</Checkbox>
            </Col>
            <Col span={10} style={{ margin: "1rem" }}>
              <h5 style={{ display: "inline-block" }}>Photocard</h5>
              <Select
                showSearch
                style={{
                  width: "25vw",
                  marginLeft: "1rem",
                }}
                size="large"
                placeholder="Please select..."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.includes(input)
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                onChange={photoSelectHandle}
                defaultValue={true}
              >
                <Option value={false}>I already have a photocard</Option>
                <Option value={true}>I need a new photocard</Option>
              </Select>
            </Col>
            {photocard ? (
              <Col span={6} style={{ margin: "1rem" }}>
                <Input
                  type="file"
                  size="large"
                  name="photoCard"
                  style={{ borderRadius: "5px" }}
                  value={photoCardFileValue}
                  onChange={photoCardFileChange}
                />
              </Col>
            ) : (
              <Col span={6} style={{ margin: "1rem" }}>
                <Input
                  type="text"
                  placeholder="Photocard number"
                  size="large"
                  name="photoCardNumber"
                  style={{ borderRadius: "5px" }}
                  value={photoCardNumber}
                  onChange={(e) => setPhotoCardNumber(e.target.value)}
                />
              </Col>
            )}
          </Row>
        </div>
        <div className="container-fluid" style={{ marginTop: "1rem" }}>
          <hr />
          <Row gutter={24}>
            <Col span={12}></Col>
            <Col span={12}>
              <Row gutter={24}>
                <Col span={8}>
                  <h5
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#00D9B2",
                    }}
                  >
                    Checklist
                  </h5>
                  <h6>
                    {photoCardNumber || photoCardFile ? (
                      <CheckCircleFilled
                        style={{ fontSize: "16px", color: "rgb(0, 187, 156)" }}
                      />
                    ) : (
                      <CloseCircleFilled
                        style={{ fontSize: "16px", color: "red" }}
                      />
                    )}
                    &nbsp; Photocard entered
                  </h6>
                </Col>
                <Col span={8}>
                  <h5
                    style={{
                      fontWeight: 800,
                      fontSize: "15px",
                    }}
                  >
                    Season Ticket Cost
                  </h5>
                  <h6
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#00D9B2",
                    }}
                  >
                    Total To Pay
                  </h6>
                </Col>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5
                      style={{
                        fontWeight: 800,
                        fontSize: "20px",
                        // color: "#00D9B2",
                        display: "inline",
                        margin: "1rem",
                      }}
                    >
                      £{searchedData?.price}
                    </h5>
                  </div>
                  <div>
                    <h5
                      style={{
                        fontWeight: 800,
                        fontSize: "20px",
                        // color: "#00D9B2",
                        display: "inline",
                        margin: "1rem",
                      }}
                    >
                      £{searchedData?.price}
                    </h5>
                  </div>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={8}></Col>
                <Col span={16}>
                  <Button
                    style={{
                      background: "gray",
                      color: "white",
                      margin: "1rem",
                      width: "40%",
                      borderRadius: "10px",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="color1"
                    style={{
                      color: "white",
                      margin: "1rem",
                      width: "40%",
                      borderRadius: "10px",
                    }}
                    onClick={handleSubmit}
                  >
                    Checkout
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default FullfillmentFlexi;
