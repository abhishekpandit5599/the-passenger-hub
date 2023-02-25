import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import images from "../../themes/appImage";
import { Collapse } from "antd";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import { Card } from 'antd';
import "../../css/trainticekt.css"
import { ArrowRightOutlined } from '@ant-design/icons'


const NewsAndMedia = (props) => {
    console.log("welcome investors screen.");
    const dispatch = useDispatch();
    const authenticationData = useSelector(getMemoizedAuthenticationData);
    const { drawerState } = authenticationData;
    const handlewClick = () => {
        let action = drawerState ? false : true;
        dispatch(drawerAction(action, "drawerState"));
    };
    useEffect(() => {
        document.title = "The PassengerHub";
        window.scrollTo(0, 0);
    }, []);
    const CardDataArray = [
        {
            id: 1,
            Heading: "south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh ",
            subHeading: "2022 to 2023",
            paraGraph: 'We are alasdhsfh shfjfh dhfjdfhdfdb dhfjdfh dfhjhf shdjksf sfkhsfhbsf skfb fbf fhfj fhbf dfhbdf df  dfhbdf djfbdf jd fdf jdf jd ffd f hdfjbd fjdf d',
            link: "/",
            image:images.mediaCardImg,
        },
        {
            id: 1,
            Heading: "south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh ",
            subHeading: "2022 to 2023",
            paraGraph: 'We are alasdhsfh shfjfh dhfjdfhdfdb dhfjdfh dfhjhf shdjksf sfkhsfhbsf skfb fbf fhfj fhbf dfhbdf df  dfhbdf djfbdf jd fdf jdf jd ffd f hdfjbd fjdf d',
            link: "/",
            image:images.mediaCardImg,
        },
        {
            id: 1,
            Heading: "south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh ",
            subHeading: "2022 to 2023",
            paraGraph: 'We are alasdhsfh shfjfh dhfjdfhdfdb dhfjdfh dfhjhf shdjksf sfkhsfhbsf skfb fbf fhfj fhbf dfhbdf df  dfhbdf djfbdf jd fdf jdf jd ffd f hdfjbd fjdf d',
            link: "/",
            image:images.mediaCardImg,
        },
        {
            id: 1,
            Heading: "south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh ",
            subHeading: "2022 to 2023",
            paraGraph: 'We are alasdhsfh shfjfh dhfjdfhdfdb dhfjdfh dfhjhf shdjksf sfkhsfhbsf skfb fbf fhfj fhbf dfhbdf df  dfhbdf djfbdf jd fdf jdf jd ffd f hdfjbd fjdf d',
            link: "/",
            image:images.mediaCardImg,
        },
        {
            id: 1,
            Heading: "south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh ",
            subHeading: "2022 to 2023",
            paraGraph: 'We are alasdhsfh shfjfh dhfjdfhdfdb dhfjdfh dfhjhf shdjksf sfkhsfhbsf skfb fbf fhfj fhbf dfhbdf df  dfhbdf djfbdf jd fdf jdf jd ffd f hdfjbd fjdf d',
            link: "/",
            image:images.mediaCardImg,
        },
    ]
    return (
        <div>
            <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
            <HeaderMain handleClick={handlewClick} />
            <div className="mobileabout text-item">
                <div className="container-fluid spacert">
                    <h3>News And Media</h3>
                </div>
            </div>
            <div className="press">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-md-8 press-enqueries " >
                            <h3 className="press mb-3 mt-0">Press Enquerise</h3>
                            <p className="my-2">If you are a member of the press please contact the South Western Railway press office team on:</p>
                            <ul className="my-2">
                                <li className="lisfdf">Email: press@swrailway.com</li>
                                <li className="lisfdf">Phone: 07623 514 055</li>
                            </ul>
                            <p className="my-3">If you have an urgent enquiry out of hours a member of the on call press team will have access to these and will respond to you as soon as they can.</p>


                            <div className="latest-news-cards my-3">

                                <h2 className="laetess my-2">Latest news</h2>
                                <h2 className="showing my-2">Showing 1-10 of 417 results</h2>
                                {/* <div className="cardbox my-3">
                                    <div className="row">
                                        <div className="col-md-8 text-areas p-0" style={{ background: "#95dfac", boxSizing: "border-box" }}>
                                            <div className="p-2">
                                                <h3 className="headingssj my-3" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "20px", fontWeight: "700" }}>south western railway to reinstate through sdkjfhdfhdkfhdkjfhkdjfh</h3>
                                                <h3 className="subheadskfj my-2">22 January 2023</h3>
                                                <p className="paras my-2">We're Storing some servdkdgk</p>

                                                <div className="textbottem mt-auto d-flex justify-content-between">
                                                    <a href="" className="shdf">Find Out More</a>
                                                    <a href="" className="shdf"><ArrowRightOutlined /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 p-0">
                                            <img src={images.banner1} alt style={{ objectFit: 'cover', height: '100%', objectPosition: 'right top', width: '100%' }} classname="" />
                                        </div>

                                    </div>
                                </div> */}
                                {
                                    CardDataArray.map((val) => {                                
                                    
                                    return    (<div className="cardbox my-3" key={val.id}>
                                            <div className="row">
                                                <div className="col-md-8 text-areas p-0" style={{ background: "#95dfac", boxSizing: "border-box" }}>
                                                    <div className="p-2">
                                                        <h3 className="headingssj my-3" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "20px", fontWeight: "700" }}>{val.Heading}</h3>
                                                        <h3 className="subheadskfj my-2">{val.subHeading}</h3>
<p className="paras my-2" style={{width:" 100%", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden'}}>{val.paraGraph}</p>

                                                        <div className="textbottem mt-auto d-flex justify-content-between">
                                                            <a href={val.link} className="shdf">Find Out More</a>
                                                            <a href="" className="shdf"><ArrowRightOutlined /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 p-0">
                                                    <img src={val.image} alt style={{ objectFit: 'cover', height: '100%', objectPosition: 'right top', width: '100%' }} classname="" />
                                                </div>

                                            </div>
                                        </div>);
}
                                    )
                                }
                            </div>

                        </div>
                        <div className="col-md-4 card-area">
                        <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{
        width: 
        '100%',
        
      }}
    >
        <div className="card-content" style={{padding:'28px'}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
      </div>
    </Card>

                        </div>

                    </div>

                </div>
            </div>
            <FooterMain />
            <Icon1 handleClick={handlewClick} />
        </div>
    );
};
export default NewsAndMedia;
