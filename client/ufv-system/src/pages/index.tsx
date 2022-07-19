import type { NextPage } from 'next';
import Rooms from '../components/Rooms';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Rooms />
    </Layout>
  );
}

export default Home
