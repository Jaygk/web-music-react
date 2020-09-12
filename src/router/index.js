import React from 'react'
import { Redirect } from 'react-router-dom'

import LWDiscover from '@/pages/discover'
import LWMine from '@/pages/mine'
import LWFriend from '@/pages/friend'

import LWRecommend from '@/pages/discover/c-pages/recommend'
import LWRanking from '@/pages/discover/c-pages/ranking'
import LWSongs from '@/pages/discover/c-pages/songs'
import LWDjradio from '@/pages/discover/c-pages/djradio'
import LWArtist from '@/pages/discover/c-pages/artist'
import LWAlbum from '@/pages/discover/c-pages/album'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => {
      return <Redirect to="/discover" />
    },
  },
  {
    path: '/discover',
    component: LWDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: () => {
          return <Redirect to="/discover/recommend" />
        },
      },
      {
        path: '/discover/recommend',
        component: LWRecommend,
      },
      {
        path: '/discover/ranking',
        component: LWRanking,
      },
      {
        path: '/discover/songs',
        component: LWSongs,
      },
      {
        path: '/discover/djradio',
        component: LWDjradio,
      },
      {
        path: '/discover/artist',
        component: LWArtist,
      },
      {
        path: '/discover/album',
        component: LWAlbum,
      },
    ],
  },
  { path: '/mine', component: LWMine },
  { path: '/friend', component: LWFriend },
]

export default routes
