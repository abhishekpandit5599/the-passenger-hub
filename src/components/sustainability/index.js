import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../../themes/appImage";
import MobileSidebar from "../../common/mobilesidebar";
import HeaderMain from "../../common/header";
import { getMemoizedAuthenticationData } from "../../redux/selectors/authentication";
import { drawerAction } from "../../redux/actions/authentication";
import FooterMain from "../../common/footer";
import Icon1 from "../../common/icon";
import "../../css/trainticekt.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArrowRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Sustainability= (props) => {
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


  const CardDataArray=[
    {
        cardMedia:images.banner3,
        Cardheading:"Nat Zero",
        paraText:"We Are Commited to become a nat zero railway",
    },
    {
        cardMedia:images.banner2,
        Cardheading:"Sustainability case studies",
        paraText:"Find out more how we have embedded sustainabality at SWR",
    },
    {
        cardMedia:images.banner1,
        Cardheading:"iSpy -Looking Out for nature",
        paraText:"Each of Our Stations can provide a unique habitate hsfgjdgfhd dhfgdgfdhj djfhgjhgfhjdf dfhdjfhjkfhv jfhd vdjv dfbv",
    },
    
  ]
  return (
    <div>
      <MobileSidebar isVisible={drawerState} handlewClick={handlewClick} />
      <HeaderMain handleClick={handlewClick} />
      <div className="mobileabout text-item">
        <div className="container-fluid spacert">
          <h3>Sustainability</h3>
        </div>
      </div>
      <div className="press">
        <div className="container">
            <div className="row "  >
         <div className="col mx-auto mt-3">
<p className="mb-2">Here at SWR sustainability is at the heart of everything we do, and vital for a future that’s better for everyone.</p>
       <p className="mb-3">Our Journey to a better future has three key pillars: Better for our planet - Better for our places and Better for our people.</p>
         <p className="mb-2">Find out more about what we are up to here:</p>
         <img src="https://www.southwesternrailway.com/other/about-us/our-plan/-/media/15DB1A7FFCD04A84929CA42EB2A482D0.ashx" alt="" className="img-fluid" />
         </div>
         </div>
         <div className="row" style={{justifyContent:"space-evenly"}}>
         

    {
        CardDataArray.map((val,indx)=>{
            return(
                <>
                 <Card sx={{ maxWidth:{md:"30%", sm:"50%"}, marginTop:'10px'   ,  position:'relative' }} key={indx}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.cardMedia}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{whiteSpace:'nowrap',textOverflow:"ellipsis",overflow:'hidden'}}>
          {val.Cardheading}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height:"50px",textOverflow:'ellipsis',width:'100%',display:'-webkit-box',WebkitBoxOrient:'vertical',WebkitLineClamp:'3',overflow:'hidden'}}>
          {val.paraText.length<=60?val.paraText: val.paraText.slice(0,60)+"..."}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        <Link style={{textDecoration:"none"}}>Find Out More</Link>
        <Link size="small"><ArrowRightOutlined /></Link>
      </CardActions>
    </Card>
                </>
            )
        })
    }
        
         </div>
       
         
        </div>
      </div>
      <FooterMain />
      <Icon1 handleClick={handlewClick} />
    </div>
  );
};
export default Sustainability;
