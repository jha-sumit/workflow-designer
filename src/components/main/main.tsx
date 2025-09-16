import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionHandler from "../../redux";
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { Navigation } from '../';

interface MainProps {
  component: any;
  isAuthed: boolean;
  path?: string;
  exact?: boolean;
  checkAuthentication: boolean;
}

const MainContainer: React.StatelessComponent<MainProps> = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} element={
    (props.checkAuthentication && !props.isAuthed) ?
      (
        <Navigate to="/" />
      ) :
      (
        <div className="wrapper">
          <Navigation  />
          <Component {...rest} />
          <div className="push"></div>
        </div>
      )
  } />
}

export const Main = connect(
  (state: any) => {
    return ({ isAuthed: state.isAuthed });
  },
  (dispatch) => bindActionCreators(actionHandler, dispatch)
)(MainContainer);