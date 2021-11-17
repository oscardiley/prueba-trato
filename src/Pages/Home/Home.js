import React from 'react';
import { homeObjOne } from './Data';
import Landing from '../../components/Landing/Landing'

function Home() {
  return (
    <>
      <Landing {...homeObjOne} />
    </>
  );
}

export default Home;
