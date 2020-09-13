import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'

import { getSizeImage, getCount } from '@/utils/format-utils'

export default memo(function SongsCover(props) {
  const { songsList } = props

  return (
    <SongsCoverWrapper>
      <div className="cover">
        <img src={getSizeImage(songsList.picUrl, 140)} alt="" />
        <div className="bottom sprite_cover">
          <span>
            <i className="sprite_icon earphone"></i>
            {getCount(songsList.playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      <p className="dec text-nowrap">{songsList.name}</p>
      <p className="auth text-nowrap">
        <span>by </span>
        {songsList.copywriter || songsList.creator.nickname}
      </p>
    </SongsCoverWrapper>
  )
})
