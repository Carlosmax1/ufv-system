import type { NextPage } from 'next';
import Rooms from '../components/Rooms';
import Layout from '../components/Layout';
import Search from '../components/Search';
import { useEffect, useState } from "react";

import axios from 'axios';

const Home: NextPage = () => {

  const [rooms, setRooms] = useState<any>();
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
          setRooms(response.data);
        })
          .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }
    getRooms();
  }, [])

  return (
    <Layout>
      <Search />
      <Rooms rooms={rooms} isLoading={loading} />
    </Layout>
  );
}

export default Home
