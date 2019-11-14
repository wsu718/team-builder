import React, { useState } from 'react';
import './App.css';
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
