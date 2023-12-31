import React from 'react'
import ImgSlider from '../ImgSlider/ImgSlider'
import NewDisney from '../Posters/NewDisney'
import Originals from '../Posters/Originals'
import Recommends from '../Posters/Recommends'
import Trending from '../Posters/Trending'
import Viewers from '../Viewers/Viewers'
import './Home.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../../firebase'
import { setMovies } from "../../features/movie/movieSlice"
import { selectUserName } from '../../features/user/userSlice'

const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, {id:doc.id, ...doc.data()}];
            break;
          case 'new':
            newDisneys = [...newDisneys, {id:doc.id, ...doc.data()}];
            break;
          case 'original':
            originals = [...originals, {id:doc.id, ...doc.data()}];
            break;
          case 'trending':
            trending = [...trending, {id:doc.id, ...doc.data()}];
            break;

        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <main className='homeContainer'>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  )
}

export default Home;