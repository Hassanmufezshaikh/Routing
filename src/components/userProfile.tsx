import React from "react";
import { useParams } from "react-router-dom";

const userProfile: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  return (
    <div>
      {" "}
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
};

export default userProfile;
