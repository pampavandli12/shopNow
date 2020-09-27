import React, { useState, useEffect } from 'react';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { MainComponent } from '../../containers/main/Main';
import classes from './Layout.module.css';
import { useLocation } from 'react-router-dom';

export const Layout = (props) => {
  // Declaring component level state
  const [path] = useState(useLocation());
  const [headerState, setHeaderState] = useState(true);

  // Component lifecycle hook
  useEffect(() => {
    let headerStateValue = path.pathname !== '/signin';
    setHeaderState(headerStateValue);
  }, [headerState, path, props]);

  let header = headerState ? <HeaderComponent /> : null;
  return (
    <div className={classes.layout}>
      {header}
      <MainComponent>{props.children}</MainComponent>
    </div>
  );
};
