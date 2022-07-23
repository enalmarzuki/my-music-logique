import React from 'react';
import Gap from '../../../../Components/Gap';
import Styles from './CardMusic.module.scss';
import IMGDummy from '../../../../Assets/dummy/img-dummy-album.jpg';
import IMGDollar from '../../../../Assets/image/img-dollar.png';

export interface ICardMusicProps {
  name: string;
  title: string;
  img: string;
  price: number;
  genre: string;
}

export const CardMusic: React.FC<ICardMusicProps> = ({
  name,
  title,
  img,
  price,
  genre,
}) => {
  return (
    <div className={Styles['card-wrapper']}>
      <div className={Styles['card-img-wrapper']}>
        <img src={img} alt={title} />
      </div>
      <Gap width={12} />

      <div className={Styles['card-body-wrapper']}>
        <div>
          <p className={Styles['card-singer-name']}>{name}</p>
          <p className={Styles['card-singer']}>{title}</p>
          {/* <p className={Styles['card-singer-feat']}>(feat. Jason Mraz)</p> */}
        </div>
        <div className={Styles['card-footer']}>
          <p className={Styles['card-tag']}>{genre}</p>
          <div className={Styles['card-footer-right']}>
            <img src={IMGDollar} alt="" />
            <Gap width={6} />

            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
