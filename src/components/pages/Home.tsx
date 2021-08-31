import React from 'react';
import Header from '../header/Header';
import TabsBar from '../tabs-bar/TabsBar';
import Gallery from '../gallery/Gallery';
import NavBar from '../nav-bar/NavBar';
import { useAppState } from '../../context/AppContext';

const Home = () => {
  const images = useAppState();
  console.log(images, ':images');
  return (
    <div>
      <NavBar />
      <Header />
      <TabsBar />
      <Gallery />
    </div>
  );
};

export default Home;
