import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import { ProfileContainer, ProfileWrapper, ProfileCard, ProfileImage, ProfileInformation, ProfileBio, ProfileTrailContainer, ProfileTrailInformation, ProfileTrailCards, ProfileTrailImage, RecentTrailsTitle, TrailCardWrapper, ProfileTitle } from './ProfileElements';
import photo from '../../assets/images/masterHiker.jpeg';
import photo1 from '../../assets/images/hike.jpg';
// import LogoutButton from '../../components/Logout/index';

function Profile() {



  return (
    <ProfileContainer>
      <ProfileTitle>
        <h1>My Profile</h1>
      </ProfileTitle>
      <ProfileWrapper>
        {
          //>>>>>>>PROFILE CARD>>>>>>>>
        }
        <ProfileCard>
          <ProfileImage>
            <img src={photo} alt='hiking' />
          </ProfileImage>
          <ProfileInformation>
            <h3>Don Hiker</h3>
            <h5>wildman@mntn.com</h5>
          </ProfileInformation>
        </ProfileCard>

        {
          //>>>>>>>PROFILE BIO>>>>>>>>
        }

        <ProfileBio>
          <h4>MyBio:</h4>
          <p>I explore...I hike...I live.</p>
        </ProfileBio>

        {
          //>>>>>>>RECENT TRAILS>>>>>>>>
        }

        <ProfileTrailContainer>

          <RecentTrailsTitle>
            <h2>Recent Trails</h2>
          </RecentTrailsTitle>
          <TrailCardWrapper>
            <ProfileTrailCards>
              <ProfileTrailImage>
                <img src={photo1} alt='hiking' />
              </ProfileTrailImage>
              <ProfileTrailInformation>
                <h4>Mail Box</h4>
                <h5>Distance: 10 miles</h5>
                <p>Information</p>
              </ProfileTrailInformation>
            </ProfileTrailCards>
            <ProfileTrailCards>
              <ProfileTrailImage>
                <img src={photo1} alt='hiking' />
              </ProfileTrailImage>

              {
                //>>>>>>>PROFILE INFO>>>>>>>
              }

              <ProfileTrailInformation>
                <h4>Rattle Snake</h4>
                <h5>Distance: 12 miles</h5>
                <p>Information</p>
              </ProfileTrailInformation>

            </ProfileTrailCards>
          </TrailCardWrapper>
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

