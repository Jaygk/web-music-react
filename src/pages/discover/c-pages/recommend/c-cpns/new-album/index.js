import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'

import LWThemeHeaderRcm from 'components/theme-header-rcm'
import AlbumCover from 'components/album-cover'
import { Carousel } from 'antd'

import { NewAlbumWrapper } from './style'

export default memo(function NewAlbum() {
  const dispatch = useDispatch()

  const { newAlbums } = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch])

  const albumRef = useRef()

  return (
    <NewAlbumWrapper>
      <LWThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={() => albumRef.current.prev()}></button>
        <Carousel className="album" ref={albumRef}>
          {[0, 1].map(item => {
            return (
              <div className="album-list" key={item}>
                {newAlbums.slice(item * 5, item * 5 + 5).map(iten => {
                  return (
                    <div className="list-item" key={iten.id}>
                      <AlbumCover info={iten} width={118} height={150} size={100} bgp={-570} />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </Carousel>

        <button className="arrow arrow-right sprite_02" onClick={() => albumRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
