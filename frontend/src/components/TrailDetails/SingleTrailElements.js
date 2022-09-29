import styled from 'styled-components';
// import photo from '../TrailDetails/banner2.jpg';

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

export const Input = styled.input`
width: 80%;
height: 30px;
/* background: pink; */
`;

// ---------------------------------------------

export const TrailContainer = styled.div`
  display: flex;
//  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: #B9BFA4;
  // border: 2px solid red;
 `;



// >>>>>>>>trailWrapper <<<<<<<<<


export const TrailWrapper = styled.div`
display: flex;
flex-direction: column;
// border: 2px solid black;
align-item: center;
justify-content: center;
width: 90%;
 `;

export const TrailImageContainers = styled.div`
// /* height: 50vh; */
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
// border: 2px solid black;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
 margin-top: 10px;
 margin-bottom: 20px;
/* border: 2px solid black; */
object-fit: cover;



`;

export const TrailImage = styled.div`

width: 100%;
object-fit: cover;
// align-items: center;
img{
  // width: 500px;
  object-fit: cover;
}

// background: #232a34;
/* margin: 30px; */
border-radius: 10px;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
border: 2px solid black; 
background-image: url("../banner2.jpg");
// background-color: lightblue;
// background-size: 100% 100%;
//  background-clip: border-box;
height: 300px;

`;

export const TrailBox = styled.div`
display: flex;
// border: 2px solid green;

`;


export const TrailSubBox = styled.div`

width: 80%;
// border: 2px solid green;

`;



export const TrailDescriptionContainer = styled.div`
display: flex;
margin-bottom: 10px
height: 300px;
// border: 2px solid red;
margin-bottom: 15px;

`;

export const TrailDescription = styled.div`

 border: 2px solid black;
 border-radius: 10px;
 height: 200px;
 width: 100%
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 h3 {
  width: 100%;
 border: 2px solid black;
  padding: 5px;
  text-align: center;
  font-size: 2rem;
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

export const TrailLengthContainer = styled.div`
display: flex;
flex-direction: column;
 width: 100%;
 border-radius: 15px;
margin-bottom: 15px;
border: 2px solid black;
margin-bottom: 15px
border-radius: 10px;
`;

export const TrailLengthDetail = styled.div`
// border: 2px solid black;
//  margin-right: 10px;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 text-align: center;
 margin-top: 10px;


 h3{
  font-size: 1rem;
  font-weight: 400;
 }
 p{
  font-weight: 900;
  font-size: 1rem;
  
 }
`;

export const Row = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin: 10px 0;

`;

export const Column = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 100%;
h3 {
  font-size: 1rem;
}


`;
export const Feature = styled.div`
//  width: 30px;
//  height: 15px;
 border: 5px solid #44733D;
 padding: 5px;
 color: #44733D;
 border-radius: 15px;
 font-weight: 600;

 

`;


export const LengthLink = styled.div`

`;

export const NearbyTrailsImage = styled.div`
img {
    width: 150px;
    height: 150px;
    margin: 15px;
}
// border: 2px solid red;
border-radius: 10px;
margin-left: 10px
`;

export const TrailWeatherContainer = styled.div`
display: flex;
 width: 100%;
margin-bottom: 15px;
align-items: center;
justify-content: space-around;


`;

export const TrailWeatherDetails = styled.div`

//  margin-right: 10px;
 border-radius: 15px;
 width: 100%;
 height: 500px;
 background-color: #72aff0;
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
// border: 2px solid black;
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
  flex-direction: column;
  width: 20%;
  align-items: center;
  justify-content: space-between;
  // border: 2px solid black;
  margin-left: 15px;
  `;

export const TrailCards = styled.div`
   width: 100%;
 //   border: 2px solid black;
  
  `;

export const TrailMap = styled.div`
 width: 300px;
 height: 200px;
 // margin: 25px;
 border: 2px solid black;
 border-radius: 10px;
  margin-bottom: 15px;
  margin-left: 20px;
  `;

export const TrailInfo = styled.div`
 width: 300px;
 height: 200px;
 // margin: 25px;
 border: 2px solid black;
 border-radius: 10px;
  margin-bottom: 15px
 `;

export const TrailCardsWrapper = styled.div`
 display: flex;
 flex-direction: column;
 `;
