import React, { useEffect, useState } from 'react';
import Styles from './Result.module.scss';
import IMGBurger from '../../Assets/image/img-burger.png';
import IMGMyMusic from '../../Assets/image/img-mymusic.png';
import IMGSearch from '../../Assets/image/img-search.png';
import IMGClose from '../../Assets/image/img-close.png';
import IMGLoading from '../../Assets/image/loading.gif';
import Gap from '../../Components/Gap';
import { CardMusic, ICardMusicProps } from './Components/CardMusic/CardMusic';
import { BtnRndSecondary } from '../../Components/Button/BtnRndSecondary';
import { Input } from '../../Components/Input/Input';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const Result = () => {
  const params = useParams();
  const [isShowModal, setIsShowModal] = useState(false);
  const [resultMusic, setResultMusic] = useState<any>();
  const [limit, setLimit] = useState(10);
  const [keyword, setKeyword] = useState(params.key);
  const [isLoading, setIsLoading] = useState(false);

  const getListMusic = () => {
    setIsLoading(true);
    axios
      .get(
        `https://itunes.apple.com/search?term=${keyword}&limit=${limit}&entity=musicVideo`
      )
      .then((res) => setResultMusic(res.data.results))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  };

  const onClickSearch = () => {
    setResultMusic(undefined);
    setLimit(10);
    getListMusic();
    setIsShowModal(false);
  };

  useEffect(() => {
    getListMusic();
  }, [limit]);

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

      {!resultMusic ? (
        <>
          <Gap height={50} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ width: 50, height: 50 }}
              src={IMGLoading}
              alt="ladong.png"
            />
          </div>
        </>
      ) : (
        <>
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
              onClick={() => setLimit((prev) => prev + 10)}
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
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <Gap height={15} />
                <BtnRndSecondary
                  title="Search"
                  onClick={() => onClickSearch()}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
