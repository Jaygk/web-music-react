import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { TopRankingWrapper } from './style'

export default memo(function TopRanking(props) {
  const { info = {} } = props
  const list = info.tracks || []

  return (
    <TopRankingWrapper>
      <div className="pic">
        <div className="img">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
        </div>
        <div className="title">
          <h3>{info.name}</h3>
          <div className="btn">
            <i className="icon play sprite_02"></i>
            <i className="icon favor sprite_02"></i>
          </div>
        </div>
      </div>

      <div className="songs-list">
        {list.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <span className={'rank ' + (index < 3 ? 'red' : '')}>{index + 1}</span>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>

                <div className="operate">
                  <button className="btn sprite_02 play"></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="more">
        <a href="todo">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
