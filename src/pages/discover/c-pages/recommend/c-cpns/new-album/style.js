import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 20px;

  .content {
    display: flex;
    align-items: center;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;

    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 640px;
      height: 150px;
      padding-top: 10px;
      .album-list {
        width: 645px;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
