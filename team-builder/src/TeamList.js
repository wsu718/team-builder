import React from "react";

const TeamList = props => {
    return (
        <div>
            {props.teamList.map(teamMember => (
                <div key={teamMember.name}>
                    <h1>Name: {teamMember.name}</h1>
                    <h3>Email: {teamMember.email}</h3>
                    <h3>Role: {teamMember.role}</h3>
                </div>
            ))}
        </div>
    )
};

export default TeamList;