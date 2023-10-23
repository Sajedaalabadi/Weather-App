import React from "react";

const TeamMember = ({ name, specialty, imageUrl }) => {
  return (
    <div className="team-member" >
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{specialty}</p>
    </div>
  );
};

export default TeamMember;
