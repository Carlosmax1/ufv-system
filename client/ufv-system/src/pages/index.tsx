import type { NextPage } from 'next';
import Rooms from '../components/Rooms';
import Layout from '../components/Layout';
import Forms from '../components/Forms';

const Home: NextPage = () => {
  return (
    <Layout>
      <Rooms />
      <Forms />
    </Layout>
  );
}

export default Home
