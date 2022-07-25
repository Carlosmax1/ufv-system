import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Form } from "../../styles/formStyle";
import axios from "axios";

type validationProps = {
  day: string;
  month: string;
  year: string;
};

export default function Forms() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [responsible, setResponsible] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [dateAvailable, setDateAvailable] = useState('');
  const [spots, setSpots] = useState('');

  const hoverInput = {
    '& .MuiOutlinedInput-root': {
      fontSize: 19,
      color: '#d9d9d9',
      borderColor: '#818181',
      ':hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: "#818181",
        }
      }
    },
    '& .MuiInputLabel-root': {
      fontSize: 18,
      borderColor: '#818181'
    },
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: "#d9d9d9",
    },
    '& .MuiInputLabel-root.Mui-disabled': {
      color: '#d9d9d9',
    },
    margin: '0.8em',
    width: '500px',
    height: '63px'
  };

  const buttonStyle = {
    color: '#111',
    backgroundColor: '#d9d9d9' 
  }

  function validation(){
    const newDay = dateAvailable.slice(8);
    const newMonth = dateAvailable.slice(5,7);
    const newYear = dateAvailable.slice(0,4);
    return `${newDay}-${newMonth}-${newYear}`;
  }

  const handleSubmit = async (event: React.FormEvent) =>{
    event.preventDefault();
    setLoading(true);
    const data = {
      name: name,
      time_start: timeStart,
      date_available: validation(),
      responsible: responsible,
      user_create: "Admin",
      spots: parseInt(spots)
    };
    console.log(data);
    await axios.post(`http://localhost:3001/api/v1/create`, data)
      .then((response) => console.log(response))
        .catch((error) => console.log(error))
          .finally(() => setLoading(false));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          required
          label='Nome'
          type='text'
          sx={hoverInput}
          value={name}
        />
        <TextField
          onChange={(e) => setTimeStart(e.target.value)}
          required
          type='time'
          sx={hoverInput}
          hiddenLabel
        />
        <TextField
          onChange={(e) => setDateAvailable(e.target.value)}
          required
          type='date'
          sx={hoverInput}
          hiddenLabel
        />
        <TextField
          onChange={(e) => setResponsible(e.target.value)}
          required
          label='Responsavel'
          type='text'
          sx={hoverInput}
        />
        <TextField
          onChange={(e) => setSpots(e.target.value)}
          required
          label='Vagas'
          type='number'
          sx={hoverInput}
        />
        <Button
          type="submit"
          variant="contained"
          sx={buttonStyle}
        >
          Criar sala
        </Button>
      </Form>
    </>
  );
}