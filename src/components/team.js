import React from "react";
import TeamMember from "./TeamMember";
import "../Css/Team.css";
import img1 from "../image/3001764.png";
import img2 from "../image/download.png";

const teamMembers = [
  {
    name: "Islam Aladwan",
    specialty: "Cis",
    imageUrl: img1,
  },
  {
    name: "Hanenn",
    specialty: "cs",
    imageUrl: img2,
  },
  {
    name: "Mike Johnson",
    specialty: "UI/UX Designer",
    imageUrl: img1,
  },
  {
    name: "Sarah Lee",
    specialty: "Marketing Specialist",
    imageUrl: img2,
  },
];

const Team = () => {
  return (
    <div className="team-page text-center  align-items-center justify-content-center flex-direction: column;
    flex-wrap: wrap; " >
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            specialty={member.specialty}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
