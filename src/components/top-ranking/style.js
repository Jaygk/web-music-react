import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  width: 230px;

  .pic {
    height: 120px;
    padding: 20px 0 0 19px;
    display: flex;

    .title {
      width: 116px;
      margin: 6px 0 0 10px;

      h3 {
        font-size: 14px;
        font-weight: 800;
      }

      .icon {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .songs-list {
    height: 319px;

    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      span {
        display: inline-block;
      }

      .rank {
        width: 35px;
        margin-left: 10px;
        text-align: center;
        line-height: 32px;
        font-size: 16px;

        &.red {
          color: #c10d0c;
        }
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .more {
    height: 32px;
    line-height: 32px;
    margin-right: 32px;
    text-align: right;

    a {
      color: #000;
      font-size: 12px;
    }
  }
`
