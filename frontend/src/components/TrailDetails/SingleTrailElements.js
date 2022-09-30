import styled from 'styled-components';
import { Link as linkRouter} from 'react-router-dom';


export const SearchBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 20%;
/* background: lightblue; */
border: 1px solid black;
border-radius: 10px;
margin-top: 30px;
padding: 5px;
margin-left: 90px;
`;

export const SearchBarForm = styled.form`
width: 80%;
display: flex;
/* border: 2px solid black; */
`;

export const Button = styled.button`
width: 80px;
border-radius: 10px;
background: #44733D;
margin-bottom: 10px;
transition: all 0.2s ease-in-out;
border: 1px solid lightgray;
justify-content: space-around;
align-items: center;
margin-right: 60px;
margin-left: 50px;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid lightgray;
    color: black;
}
`;

export const LinkButton = styled(linkRouter)`
    cursor: pointer;
    width: 50px;
    background: #44733D;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 10px;
    color: #fff;
    text-decoration: none;
    /* border: 2px solid black; */
    
    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        color: black;
        background-color: #fff;
    }
`;

export const Input = styled.input`
width: 80%;
height: 30px;
/* background: pink; */
`;

export const TrailMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #B9BFA4;
  /* border: 2px solid red; */
 `;

export const TrailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* border: 2px solid black; */
  `;

export const TrailBanner = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
 margin-top: 10px;
 margin-bottom: 50px;
 /* border: 2px solid black; */
`;

export const TrailSection = styled.div`
  display: flex;
  /* border: 2px solid green; */
`;


export const TrailSectionColumn = styled.div`
  width: 80%;
  /* border: 2px solid green; */
`;



export const TrailDescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  /* border: 2px solid red; */
`;

export const TrailDescription = styled.div`
  border-radius: 10px;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid black; */
  h3 {
    width: 100%;
    /* border: 2px solid black; */
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    font-size: 2rem;
  }

  p {
    padding: 15px;
  }
`;

export const Des = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 50px;
`;

export const ViewMapLink = styled.div`
border-radius: 50px;
background: #44733D;
color: #fff;
white-space: nowrap;
padding: 10px 20px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
width: 35%;
height: 20px;


&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid lightgray;
    /* background-color: #30592E; */
    color: black;
    }
`;
// >>>>>>>>trailWrapper <<<<<<<<<

export const Bar = styled.div`
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, rgba(20,38,21,1) 0%, rgba(34,64,33,1) 0%, rgba(185,191,164,0.6867121848739496) 93%);
    margin: 40px 0px;
    border-radius: 20px;
`;

export const TrailLengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  /* border: 2px solid black; */
`;

export const TrailLengthDetail = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  /* border: 2px solid black; */

 h3 {
  font-size: 1rem;
  font-weight: 525;
  }
 p {
   font-weight: 900;
   font-size: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  /* border: 1px solid black; */
`;

export const Column = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 100%;
/* border: 1px solid black; */
h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 10px;
}


`;
export const FeatureIcon = styled.div`
 border: 2px solid #4a9e3d;
 padding: 5px;
 /* background: #369d26; */
 /* color: #06b300; */
 /* color: #369d26; */
 color: #44733D;
 /* color: #fff; */
 border-radius: 15px;
 font-weight: 550;
 /* margin: 20px; */
 font-size: 1rem;
 box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;


export const LengthLink = styled.div``;

export const NearbyTrailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid red; */
  border-radius: 10px;
  margin-left: 10px;

  img {
      /* width: 150px; */
      width: 100%;
      height: 100%;
      margin: 10px, 0px;
  }
`;

export const TrailWeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  align-items: center;
  justify-content: space-around;
  /* border: 2px solid red; */
`;

export const TrailWeatherDetails = styled.div`
//  margin-right: 10px;
 border-radius: 15px;
 width: 100%;
 height: 500px;
 /* background-color: #72aff0; */
 /* background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); */
 background-image: linear-gradient(90deg, #30592E 0%, #B9BFA4 100%);
// padding-left: 20px;
align-items: center;
justify-content: space-around;
`;

export const DaysList = styled.div`
  // float: left;
  // border: 2px solid black;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
`;

export const WeatherMap = styled.div`
img {
    width: 150px;
    height: 150px;
    margin: 15px;
}
// border: 2px solid red;
border-radius: 10px;
margin-left: 10px;
`;

export const WriteReviewContainer = styled.div`
 /* border: 2px solid black; */
 margin-right: 10px;
 border-radius: 10px;
//  height: 100px;
 width: 100%;
 margin-bottom: 15px;
`;

export const WriteReview = styled.div`
display: flex;
float: right;
margin-right: 30px;
white-space: nowrap;
padding: 10px 40px 40px 40px;
// width: 35%;
width: 100%;

`;
export const ReviewButton = styled.div`
// width: 35%;
 display: flex;
 float: right;
 width: 100px;
 `;

export const ReviewMap = styled.div`

 img {
   width: 150px;
   height: 150px;
   margin: 15px;
}
// border: 2px solid red;
border-radius: 10px;
margin-left: 10px;
`;


export const ReviewsContainer1 = styled.div`
// border: 2px solid black;
// margin-right: 10px;
// // border-radius: 10px;
// height: 200px;
// width: 100%;
// margin-bottom: 15px
 `;

export const Reviews = styled.div`
// align-items: center;
// justify-content: center;
// display: flex;
// margin-top: 50px;

 `;

export const ReviewsContainer2 = styled.div`
//  border: 2px solid black;
// //  border-radius: 10px;
//  height: 200px;
//  width: 100%;
//  margin-bottom: 15px
  `;



export const TrailCardContainer = styled.div`
  display: flex;
  /* display: grid; */
  /* grid-template-rows: repeat()(1fr); */
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid black; */
  margin-left: 15px;
  `;

export const TrailCards = styled.div`
   width: 100%;
   /* border: 2px solid black; */
  
  `;

export const TrailMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 300px; */
  height: 200px;
  width: 100%;
  /* height: 1fr; */
  // margin: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  /* margin-left: 20px; */
  /* border: 2px solid black; */
  `;

export const TrailInfo = styled.div`
  width: 300px;
  height: 200px;
  // margin: 25px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const TrailCardsWrapper = styled.div`
 display: flex;
 flex-direction: column;
 `;
