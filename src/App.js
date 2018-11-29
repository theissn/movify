import React, { Component } from "react";
import { App, View, Page, Navbar, Toolbar, Link } from "framework7-react";

const home = () => (
  <Page name="home">
    <Navbar title="Home Page" />
    ...
    <Link href="/about/">About Page</Link>
    <Link href="/login/">Login Page</Link>
  </Page>
);

const about = () => (
  <Page name="about">
    <Navbar title="About" backLink="Back" />
    {/* Page content */}
    ...
  </Page>
);

const login = () => (
  <Page name="login">
    <Navbar title="Login" backLink="Back" />
    {/* Page content */}
    ...
  </Page>
);

const f7params = {
  name: "My App",
  id: "com.myapp.test",
  panel: {
    swipe: "left",
  },
  theme: "ios",
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/about/",
      component: about,
    },
    {
      path: "/login/",
      component: login,
    },
  ],
};

class AppT extends Component {
  render() {
    return (
      <App params={f7params}>
        {/* Current View/Router, initial page will be loaded from home.jsx component */}
        <View main url="/" />
      </App>
    );
  }
}

export default AppT;
