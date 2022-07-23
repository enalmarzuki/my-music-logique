import React, { useEffect, useState } from 'react';
import Styles from './Result.module.scss';
import IMGBurger from '../../Assets/image/img-burger.png';
import IMGMyMusic from '../../Assets/image/img-mymusic.png';
import IMGSearch from '../../Assets/image/img-search.png';
import IMGClose from '../../Assets/image/img-close.png';
import Gap from '../../Components/Gap';
import { CardMusic, ICardMusicProps } from './Components/CardMusic/CardMusic';
import { BtnRndSecondary } from '../../Components/Button/BtnRndSecondary';
import { Input } from '../../Components/Input/Input';
import axios from 'axios';
import { useParams } from 'react-router';

const Result = () => {
  const params = useParams();
  const [isShowModal, setIsShowModal] = useState(false);
  const [resultMusic, setResultMusic] = useState<any>();
  const [limit, setLimit] = useState(25);
  const [keyword, setKeyword] = useState(params.key);
  const [tempKeyword, settempKeyword] = useState('');

  console.log('params', params);

  const getListMusic = () => {
    axios
      .get(`https://itunes.apple.com/search?term=${keyword}&limit=${limit}`)
      .then((res) => setResultMusic(res.data.results))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getListMusic();
  }, [keyword, limit]);

  console.log('resultMusic', resultMusic);

  if (!resultMusic) {
    return <p>loading...</p>;
  }

  return (
    <div className={Styles['container']}>
      <div className={Styles['navbar']}>
        <img src={IMGBurger} alt="img-burger.png" />
        <img src={IMGMyMusic} alt="img-burger.png" />
        <img
          src={IMGSearch}
          alt="img-burger.png"
          onClick={() => setIsShowModal(true)}
        />
      </div>

      <Gap height={50} />
      <div className={Styles['search-key-wrapper']}>
        <p className={Styles['search-key-title']}>Search result for :</p>
        <p className={Styles['search-key']}>{keyword}</p>
      </div>

      <div>
        {resultMusic.map((item: any) => (
          <CardMusic
            key={item.artistId}
            name={item.artistName}
            title={item.collectionName}
            img={item.artworkUrl100}
            price={item.collectionPrice}
            genre={item.primaryGenreName}
          />
        ))}
      </div>

      <div className={Styles['load-wrapper']}>
        <button
          className={Styles['btn-rnd-load-more']}
          onClick={() => setLimit((prev) => prev + 25)}
        >
          Load More
        </button>
      </div>

      <Gap height={20} />

      {isShowModal && (
        <div className={Styles['modal-wrapper']}>
          <img
            src={IMGClose}
            alt="img-close.png"
            className={Styles['modal-ic-close']}
            onClick={() => setIsShowModal(false)}
          />
          <p className={Styles['modal-title']}>Search</p>
          <Gap height={31} />
          <div className={Styles['form-wrapper']}>
            <Input
              placeholder="Artist / Album / Title"
              onChange={(e) => settempKeyword(e.target.value)}
            />
            <Gap height={15} />
            <BtnRndSecondary
              title="Search"
              onClick={() => {
                setKeyword(tempKeyword);
                setIsShowModal(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
