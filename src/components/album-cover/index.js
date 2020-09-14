import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { AlbumCoverWrapper } from './style'

export default memo(function AlbumCover(props) {
  const { info = {}, width = 186, height = 208, size = 130, bgp = -845 } = props

  return (
    <AlbumCoverWrapper className="sprite_02" width={width} height={height} size={size} bgp={bgp}>
      <div className="pic sprite_cover">
        <div className="img">
          <img src={getSizeImage(info.picUrl, size)} alt={info.name} />
          <a href="todo" className="icon sprite_icon">
            {' '}
          </a>
        </div>
      </div>
      <p className="desc text-nowrap">{info.name}</p>
      <p className="artist text-nowrap">{info.artist && info.artist.name}</p>
    </AlbumCoverWrapper>
  )
})
