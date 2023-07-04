import React from 'react'
import './Detail.css'
import PlayButton from '../../assets/images/play-icon-black.png'
import TrailerButton from '../../assets/images/play-icon-white.png'
import GroupIcon from '../../assets/images/group-icon.png'
import { useParams } from 'react-router-dom'
import db from '../../firebase'
import { useEffect, useState } from 'react'

const Details = () => {

  const {id} = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if(doc.exists){
          setDetailData(doc.data());
        } else {
          console.log("no such doccument in firebase");
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='details__container'>
      <div className='background'>
        <img src={detailData.backgroundImg} alt={detailData.title}></img>
      </div>
      <div className='imageTitle'>
        <img src={detailData.titleImg} alt={detailData.title}></img>
      </div>
      <div className='detail__content'>
        <div className='controls'>
          <button className='playBtn'>
            <img src={PlayButton} alt=''></img>
            <span>PLAY</span>
          </button>
          <button className='playBtn trailerBtn'>
            <img src={TrailerButton} alt=''></img>
            <span>TRAILER</span>
          </button>
          <div className='addList'> 
            <span />
            <span />
          </div>
          <div className='groupIcon'>
            <div>
              <img src={GroupIcon} alt='group icon'></img>
            </div>
          </div>
        </div>
        <div className='subTitle'>
          {detailData.subTitle}
        </div>
        <div className='description'>
          {detailData.description}
        </div>
      </div>
    </div>
  )
}

export default Details