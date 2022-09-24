import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import { ProfileContainer, ProfileWrapper, ProfileCard, ProfileImage, ProfileInformation, ProfileBio, ProfileTrailContainer, ProfileTrailCards } from './ProfileElements';
import photo from '../../assets/images/masterHiker.jpeg';
import photo1 from '../../assets/images/hike.jpg';
function Profile() {
  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileCard>
          <ProfileImage>
            <img src={photo} alt='hiking' />
          </ProfileImage>
          <ProfileInformation>
            <h3>Don Hiker</h3>
            <h5>email: wildman@mntn.com</h5>
          </ProfileInformation>
        </ProfileCard>
        <ProfileBio>
          <p>Bio: I explore...I hike...I live.</p>
        </ProfileBio>
        <ProfileTrailContainer>
          <h2>Recent Trails</h2>
          <ProfileTrailCards>
            <ProfileImage>
              <img src={photo1} alt='hiking' />
            </ProfileImage>
            <ProfileInformation>
              <h3>Title</h3>
              <h5>Distance: 10 miles</h5>
              <p>Information</p>
            </ProfileInformation>

          </ProfileTrailCards>
          <ProfileTrailCards>
            <ProfileImage>
              <img src={photo1} alt='hiking' />
            </ProfileImage>
            <ProfileInformation>
              <h3>Title</h3>
              <h5>Distance: 10 miles</h5>
              <p>Information</p>
            </ProfileInformation>

          </ProfileTrailCards>
        </ProfileTrailContainer>
      </ProfileWrapper>
    </ProfileContainer>
  )

};
// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return (
//       <ProfileContainer>
//         <ProfileWrapper>
//           <div>Loading ...</div>
//         </ProfileWrapper>
//       </ProfileContainer>
//     )
//   }

//   return (
//     isAuthenticated && (
//       <ProfileContainer>
//         <ProfileWrapper>
//           <div>
//             <img src={user.picture} alt={user.name} />
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//             {/* <Content /> */}
//           </div>
//         </ProfileWrapper>
//       </ProfileContainer>
//     )
//   );
// };

export default Profile;

