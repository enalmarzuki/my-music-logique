import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import IMGLogo from '../../Assets/image/logo.png';
import { BtnRndSecondary } from '../../Components/Button/BtnRndSecondary';
import Gap from '../../Components/Gap';
import { Input } from '../../Components/Input/Input';
import Styles from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  return (
    <div className={Styles['container']}>
      <img src={IMGLogo} alt="logo.png" />
      <div className={Styles['form-wrapper']}>
        <Input
          placeholder="Artist / Album / Title"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Gap height={15} />
        <BtnRndSecondary
          title="Search"
          onClick={() => navigate(`/result/${keyword}`)}
        />
      </div>
    </div>
  );
};

export default Home;
