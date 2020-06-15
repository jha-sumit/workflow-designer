import React from 'react';
import { bindActionCreators } from 'redux';
import * as actionHandler from "../../redux";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Navigation } from '../navigation';

interface MainProps {
  component: any;
  isAuthed: boolean;
  path?: string;
  exact?: boolean;
  checkAuthentication: boolean;
}

const MainContainer: React.StatelessComponent<MainProps> = (props) => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={matchProps =>
    (props.checkAuthentication && !props.isAuthed) ?
      (
        <Redirect to="/" />
      ) :
      (
        <div className="wrapper">
          <Navigation {...matchProps} />
          <Component {...matchProps} />
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