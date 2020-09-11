import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from 'common/local-data'

import { HeaderWrapper } from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default memo(function LWAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="left">
          <a href="#/" className="logo sprite_01">
            {' '}
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
