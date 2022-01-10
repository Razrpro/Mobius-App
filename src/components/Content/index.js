import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-native";

import MainPage from "../../pages/MainPage";
import QrPage from "../../pages/QrPage";
import PushPage from "../../pages/PushPage";
import SigninPage from "../../pages/SigninPage";
import ProfilePage from "../../pages/ProfilePage";
import NewsPage from "../../pages/NewsPage";
import ShedulePage from "../../pages/ShedulePage";
import NewsMorePage from "../../pages/NewsMorePage";

const Content = ({
  user
}) => {
    return (
      <Switch>
            <Route
              exact
              path="/"
              component={MainPage}
            />
          <Route
              exact
              path="/push"
              component={PushPage}
          />

            <Route
              exact
              path="/signin"
              component={SigninPage}
            />
                <Route
                  exact
                  path="/qr"
                  component={QrPage}
                />
            <Route
              exact
              path="/profile"
              component={ProfilePage}
            />
            <Route
              exact
              path="/profile/edit"
              component={ProfilePage}
            />
            <Route
              exact
              path="/profile/save"
              component={ProfilePage}
            />
            <Route
              exact
              path="/news"
              component={NewsPage}
            />
            <Route
              exact
              path="/news/:newsId"
              component={NewsMorePage}
            />
            <Route
              exact
              path="/shedule"
              component={ShedulePage}
            />


            <Route
              component={SigninPage}
            />
      </Switch>
    );
}


export default withRouter(Content);