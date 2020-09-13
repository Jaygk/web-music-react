import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;

  .left {
    display: flex;
    align-items: center;

    .title {
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        height: 35px;
        width: 35px;
        background-position: -225px -154px;
      }

      h2 {
        font-size: 20px;
      }
    }

    .keywords {
      display: flex;
      margin-left: 20px;
      font-size: 12px;

      .line {
        color: #ccc;
        margin: 0 12px;

        &.last {
          display: none;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-right: 10px;

    a {
      color: #666;
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
