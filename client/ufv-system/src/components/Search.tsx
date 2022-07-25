import { TextField, Button } from "@mui/material";

export default function Search(){
  return(
    <>
      <form
        style={{
          margin: '1em'
        }}
      >
        <TextField type='date' hiddenLabel/>
        <Button sx={{backgroundColor: '#d9d9d9', color: '#111'}} type="submit" variant="contained">Buscar</Button>
      </form>
    </>
  )
}