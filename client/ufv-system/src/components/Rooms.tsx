import { Container, Box, NameRoom } from "../../styles/roomStyle";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

type RoomsProps = {
  rooms: [{
    id: string;
    name: string;
    time_start: string;
    date_available: string;
    responsible: string;
    user_create: string;
    spots: string;
    createDate: string;
  }],
  isLoading?: boolean;
}

export default function Rooms({ rooms, isLoading }: RoomsProps) {

  console.log(rooms);

  return (
    <>
      <Container>
        {isLoading ?
          <CircularProgress />
          :
          <ul>
            {rooms ?
              <>
                {rooms.map((room) => (
                  <Box key={room.id}>
                    <NameRoom>
                      {room.name} 
                    </NameRoom>
                    <NameRoom>
                      {room.responsible} 
                    </NameRoom>
                    <NameRoom>
                      {room.time_start} 
                    </NameRoom>
                    <NameRoom>
                      {room.date_available} 
                    </NameRoom>
                    <NameRoom>
                      {room.spots} 
                    </NameRoom>
                    <Button
                      variant="contained"
                      sx={{backgroundColor: 'green', color: '#111'}}
                    >Reservar</Button>
                  </Box>
                ))}
              </>
              :
              <span>Não existe salas disponives agora</span>}
          </ul>
        }
      </Container>
    </>
  )
}