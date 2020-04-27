import React from 'react';

function Profile ({ profile } : any) {
  return (
    <>
      Profile Page:
      <br />
      {profile}
    </>
  )
}

Profile.getInitialProps = async () => {
  // const url = `${baseUrl}/api/Profile`
  // const payload = { params: { _id } }
  // const response = await axios.get(url, payload)
  return { profile: 'Profile Data Test' }
}

export default Profile
