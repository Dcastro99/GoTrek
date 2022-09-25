import styled from 'styled-components';


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
//   flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  border: 2px solid red;
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

export const TrailImageContainer = styled.div`
  margin-top: 5px;
  height: 300px;
border: 2px solid black;
  width: 100%;
  margin-bottom: 15px;
`;

export const TrailImage = styled.div`

`;

export const TrailBox = styled.div`
display: flex;
// border: 2px solid green;

`;


export const TrailSubBox = styled.div`

width: 80%;
// border: 2px solid green;

`;
;


export const TrailDescriptionContainer = styled.div`
display: flex;
margin-bottom: 10px
height: 300px;
//border: 2px solid red;
margin-bottom: 15px;
 `;

export const TrailDescription = styled.div`
 border: 2px solid black;
 border-radius: 10px;
 height: 200px;
 width: 100%


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
// width: 80%;
// border: 2px solid green;
margin-bottom: 15px
border-radius: 10px;
`;

export const TrailLengthDetail = styled.div`
border: 2px solid black;
//  margin-right: 10px;
 border-radius: 10px;
 height: 200px;
 width: 100%;
 margin-bottom: 15px
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
height: 200px;
margin-bottom: 15px
// border-radius: 10px;
`;

export const TrailWeatherDetails = styled.div`
border: 2px solid black;
//  margin-right: 10px;
 border-radius: 10px;
 width: 100%;
 height: 200px;
`;

export const DaysList = styled.div`

`;
export const WeatherMap = styled.div`
img {
    width: 150px;
    height: 150px;
    margin: 15px;
}
border: 2px solid red;
border-radius: 10px;
margin-left: 10px
`;
export const WriteReviewContainer = styled.div`
border: 2px solid black;
 margin-right: 10px;
 border-radius: 10px;
 height: 100px;
 width: 100%;
 margin-bottom: 15px
`;

export const WriteReview = styled.div`
display: flex;
float: right;
margin-right: 30px;
white-space: nowrap;
padding: 10px 40px 40px 40px;
// width: 35%;
width: 100px;

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
border: 2px solid red;
border-radius: 10px;
margin-left: 10px
`;


export const ReviewsContainer1 = styled.div`
border: 2px solid black;
margin-right: 10px;
// border-radius: 10px;
height: 200px;
width: 100%;
margin-bottom: 15px
 `;

export const Reviews = styled.div`
align-items: center;
justify-content: center;
display: flex;
margin-top: 50px;

 `;

export const ReviewsContainer2 = styled.div`
 border: 2px solid black;
//  border-radius: 10px;
 height: 200px;
 width: 100%;
 margin-bottom: 15px
  `;



export const TrailCardContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 20%;
 align-items: center;
 justify-content: space-between;

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
 margin-bottom: 15px
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
flex - direction: column;
`;
