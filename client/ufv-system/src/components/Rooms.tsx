import axios from "axios";
import { Container } from "../../styles/roomStyle";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

export default function Rooms(){

  const [rooms, setRooms] = useState<AxiosResponse>();
  const [loading, setLoading] = useState(true);

  function getDate(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}` + '-' + `${month}` + '-' + `${year}`;
  }

  useEffect(() => {
    async function getRooms(){
      await axios.get(`http://localhost:3001/api/v1/lae/${getDate()}`)
        .then((response) => {
          setRooms(response);
        })
          .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }
    getRooms();
  }, [])

  return(
    <>
      <Container>
        <ul>
        
        </ul>
      </Container>
    </>
  )
}