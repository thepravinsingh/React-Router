import React from "react";
import { useParams } from "react-router";

const Profile = () => {
  const parameters = useParams();
  return (
    <div>
      <h1>Profile of{`${parameters.userId}   ${parameters.projectId}`}</h1>
    </div>
  );
};

export default Profile;
