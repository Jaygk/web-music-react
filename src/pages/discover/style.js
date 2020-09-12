import styled from 'styled-components'

export const Discover = styled.div`
  .discover-nav {
    height: 35px;
    position: relative;
    top: -5px;
    z-index: 999;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;

    .nav-list {
      height: 34px;
      display: flex;
      padding-left: 180px;

      .list-item {
        text-decoration: none;
        font-size: 12px;
        color: #fff;

        em {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          margin: 7px 17px 0;
          padding: 0 13px;
          border-radius: 20px;
        }

        &.active em, &:hover em {
          background-color: #9b0909;
        }
      }
    }
  }
`
