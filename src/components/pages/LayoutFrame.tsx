import React from 'react';
import { NavBar } from './Pages.styles';
import BackSVG from '../../assets/svg/back.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../routes';
import { IconButton } from '@mui/material';

const LayoutFrame = () => {
  const { pathname } = useLocation();
  const isNotDashboard = pathname !== pageRoutes.main;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <NavBar>
      {isNotDashboard && (
        <IconButton onClick={handleBack}>
          <img src={BackSVG} alt='' />
        </IconButton>
      )}
      <p>
        State management With Context API, Reducer Hook and React Query (POC)
      </p>
    </NavBar>
  );
};

export default LayoutFrame;