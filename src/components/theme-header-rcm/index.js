import React, { memo } from 'react'

import { ThemeHeaderWrapper } from './style'

export default memo(function LWThemeHeaderRcm(props) {
  const { title, keywords = [] } = props

  return (
    <ThemeHeaderWrapper>
      <div className="left">
        <div className="title">
          <i className="sprite_02"></i>
          <h2>{title}</h2>
        </div>
        <div className="keywords">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className={'line ' + (index === keywords.length - 1 ? 'last' : '')}>|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderWrapper>
  )
})
