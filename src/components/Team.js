import React from "react";
import BlueHeading from "../components/BlueHeading";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <div className="team">
      <div className="mb-8">
        <BlueHeading heading="Our Core team" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <TeamMember name="Arthur Akanga" img="arthur2.jpg" position="Managing Partner" />
        <TeamMember name="Diana Abeho" img="abeho.jpg" position="Managing Partner" />
        <TeamMember name="David Ofoyrwoth" img="david.jpg" position="Surveyor" />
        <TeamMember name="Adrian Kirabira" img="adrian.jpg" position="Surveyor" />
        <TeamMember name="Elvin Clint Tumukunde" img="clint.jpg" position="Surveyor" />
        <TeamMember name="Akram Sseruwuge" img="akram.jpg" position="Surveyor" />
        <TeamMember name="Maxwell Bariyo" img="maxwell.jpg" position="Surveyor" />
        <TeamMember name="Mariam Bruce Nalujja" img="nalujja.jpg" position="Surveyor"/>
        <TeamMember name="Tevin Herbert Katerega" img="tevin.jpg" position="Surveyor" />
        <TeamMember name="Paul Joshua Ogwal" img="pajosh.jpg" position="Surveyor"/>
      </div>
    </div>
  );
};

export default Team;
