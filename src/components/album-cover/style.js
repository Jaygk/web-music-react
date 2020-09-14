import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  background-position: -260px 100px;

  .pic {
    background-position: 0 ${props => props.bgp + 'px'};

    .img {
      height: ${props => props.size + 'px'};
      width: ${props => props.size + 'px'};
      position: relative;

      .icon {
        position: absolute;
        display: none;
        height: 22px;
        width: 22px;
        right: 6px;
        bottom: 5px;
        background-position: 0 -85px;
      }
    }

    &:hover .icon {
      display: block;
    }
  }

  .desc {
    font-size: 12px;
    margin-top: 6px;
    color: #000;
  }

  .artist {
    font-size: 12px;
    color: #666;
  }
`
