import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Form } from "../../styles/formStyle";

export default function Forms() {

  const [name, setName] = useState('');

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

  return (
    <>
      <Form>
        <TextField
          required
          label='Nome'
          type='text'
          sx={hoverInput}
          value={name}
        />
        <TextField
          required
          type='time'
          sx={hoverInput}
          hiddenLabel
        />
        <TextField
          required
          type='date'
          sx={hoverInput}
          hiddenLabel
        />
        <TextField
          label='Responsavel'
          type='text'
          sx={hoverInput}
        />
        <TextField
          label='Vagas'
          type='number'
          sx={hoverInput}
        />
        <Button
          variant="contained"
          sx={buttonStyle}
        >
          Criar sala
        </Button>
      </Form>
    </>
  );
}