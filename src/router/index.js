import React from "react";
import { Redirect } from "react-router-dom";

// import Discover from "../pages/discover";
// import Recommend from "../pages/discover/c-pages/recommend";
import Ranking from "../pages/discover/c-pages/ranking";
import Songs from "../pages/discover/c-pages/songs";
import DjRadio from "../pages/discover/c-pages/djradio";
import Artist from "../pages/discover/c-pages/artist";
import Album from "../pages/discover/c-pages/album";

import Friend from "../pages/friend";
import Mine from "../pages/mine";
import Player from "../pages/player";

const Discover = React.lazy(() => import("../pages/discover"));
const Recommend = React.lazy(() =>
  import("../pages/discover/c-pages/recommend")
);

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/discover"} />,
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      },
      {
        path: "/discover/ranking",
        component: Ranking,
      },
      {
        path: "/discover/songs",
        component: Songs,
      },
      {
        path: "/discover/djradio",
        component: DjRadio,
      },
      {
        path: "/discover/artist",
        component: Artist,
      },
      {
        path: "/discover/album",
        component: Album,
      },
      {
        path: "/discover/player",
        component: Player,
      },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
