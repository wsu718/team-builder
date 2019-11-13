import React, { useState } from 'react';

const Form = props => {
    console.log(props);
    const [teamMember, setTeamMember] = useState({ 
        name: "",
        email: "",
        role: ""
    });


    const handleChanges = event => {
        console.log(teamMember)
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({
            name: "",
            email: "",
            role: ""
        })};


    return (
        <form onSubmit={submitForm}>
            <label htmlFor="Name">Name:</label>
            <input 
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={teamMember.name}
            />

            <label htmlFor="Email">Email:</label>
            <input 
            id="email"
            type="text"
            name="email"
            onChange={handleChanges}
            value={teamMember.email}
            />

           <label htmlFor="Role">Role:</label>
            <input 
            id="role"
            type="text"
            name="role"
            onChange={handleChanges}
            value={teamMember.role}
            />

            <button type="submit">Add Teammember</button>
        </form>
    );
};

export default Form;
