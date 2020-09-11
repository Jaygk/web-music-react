import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;

    .left {
      display: flex;

      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }

      .select-list {
        display: flex;

        .select-item {
          a {
            position: relative;
            display: block;
            height: 70px;
            font-size: 14px;
            line-height: 70px;
            padding: 0 19px;
            text-align: center;
            text-decoration: none;
            color: #ccc;

            &:hover,
            &.active {
              background-color: #000;
              color: #fff;
            }

            &.active .icon {
              position: absolute;
              display: inline-block;
              width: 12px;
              height: 7px;
              bottom: -1px;
              left: 50%;
              transform: translate(-50%, 0);
              background-position: -226px 0;
            }
          }

          :last-of-type a {
            position: relative;
            ::after {
              content: '';
              width: 28px;
              height: 19px;
              background-image: url(${require('@/assets/img/sprite_01.png')});
              background-position: -190px 0;
              position: absolute;
              top: 20px;
              right: -15px;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      font-size: 12px;

      .search {
        width: 158px;
        height: 32px;
        border-radius: 32px;

        input {
          font-size: 12px;
        }
      }

      .center {
        width: 90px;
        height: 32px;
        text-align: center;
        margin: 0 20px;
        border: 1px solid #4F4F4F;
        line-height: 32px;
        border-radius: 20px;
        color: #ccc;
      }

      .login {
        width: 28px;
        color: #787878;
      }
    }
  }

  .divider {
    background-color: #c20c0c;
    height: 5px;
  }
`
