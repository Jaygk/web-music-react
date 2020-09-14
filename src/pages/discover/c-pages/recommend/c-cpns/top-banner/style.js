import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  background: url(${props => props.backImage}) center center/6000px;

  height: 285px;
  position: relative;

  .banner {
    height: 285px;
    display: flex;

    .banner-list {
      width: 730px;
      .item {
        img {
          height: 284px;
          width: 730px;
        }
      }
    }

    .right-download {
      flex: 1;
      background-image: url(${require('@/assets/img/download.png')});
    }

    .control {
      width: 980px;
      height: 63px;
      display: flex;
      justify-content: space-between;
      z-index: 999;

      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      .control-left,
      .control-right {
        position: absolute;
        z-index: 1001;
        width: 37px;
        height: 63px;
        background-image: url(${require('@/assets/img/banner_sprite.png')});

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      .control-left {
        left: -68px;
        background-position: 0 -360px;
      }

      .control-right {
        right: -68px;
        background-position: 0px -508px;
      }
    }
  }
`
