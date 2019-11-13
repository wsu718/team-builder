import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import TeamList from './TeamList'
import Form from './Form'

function App() {
  const [teamList, setTeamList] = useState([
    {
      name: 'William Sulinski',
      email: 'w@williamsulinski.com',
      role: 'frontend engineer'
    },
    {
      name: 'Matt',
      email: 'matt@matt.com',
      role: 'frontend engineer'
    },
  ]);

  console.log(teamList);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamList([...teamList, newTeamMember])
  };

  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember}/>
      <TeamList teamList={teamList} /> 
    </div>
  );
}

export default App;
