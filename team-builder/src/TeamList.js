import React from "react";

const TeamList = props => {
    return (
        <div>
            <h1>Team:</h1>
            {props.teamList.map(teamMember => (
                <div key={teamMember.name}>
                    <h2>Name: {teamMember.name}</h2>
                    <p>Email: {teamMember.email}</p>
                    <p>Role: {teamMember.role}</p>
                </div>
            ))}
        </div>
    )
};

export default TeamList;