import styled from "styled-components";

export const TableSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
`

export const TableWrapper = styled.div`
    width: 500px;
    height: 650px;
    padding: 30px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const TableList = styled.ul`

`

export const TableItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 8px;
    border-radius: 10px;
    transition: all 0.5s ease;

    &:nth-child(1) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 0px 5px 0px;
        /* background-image: linear-gradient( 135deg, #FDD819 10%, #E80505 100%); */
    }

    &:nth-child(2) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 1px 5px 0px;
    }

    &:nth-child(3) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 1px 5px 0px;
    }

    & ~ & {
        margin-top: 10px;
    }

    &:hover {
        cursor: pointer;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }


    @keyframes color-mix {
  0% { color: #FDD819 }
  100% { color: red }
}
`


export const TableItemBox = styled.div`
    display: flex;
    align-items: center;
`

export const TableAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 17px;
    font-weight: 600;
    color: #6A6C72;
    border-radius: 50%;
`

export const TableUserName = styled.div`
    font-size: 18px;
    color: #6A6C72;
`

export const TableUserEvaluation = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 22px;
    font-weight: 600;
    color: #fff;
    border-radius: 50%;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    /* background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */

`

export const IconWrapOne = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    transform: rotate(-1.1turn) !important;
`

export const IconWrapTwo = styled.div`
    position: absolute;
    top: 55%;
    left: 15%;
    transform: rotate(0.1turn) !important;
`

export const IconWrapThree = styled.div`
    position: absolute;
    top: 20%;
    right: 10%;
`

export const IconWrapFour = styled.div`
    position: absolute;
    right: 20%;
    transform: rotate(1turn);
`

export const IconWrapFive = styled.div`
    position: absolute;
    top: 60%;
    right: 8%;
    transform: rotate(0.1turn) !important;
`