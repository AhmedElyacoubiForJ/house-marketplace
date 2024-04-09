import { useEffect } from "react"

import { getAuth } from "firebase/auth"
function Profile() {
  const auth = getAuth()

  useEffect(() => {
    console.log("Profile")
    console.log(auth.currentUser)
  },[]);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
