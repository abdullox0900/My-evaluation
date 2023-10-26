import styled from "styled-components";

export const TableSection = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 100px 0;
`

export const TableWrapper = styled.div`
    width: 650px;
    /* height: 650px; */
    background-color: #fff;
    border-radius: 20px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
`

export const TableTopList = styled.ul`
   display: flex;
   justify-content: center;
   align-items: end;
   gap: 0 40px;
   margin-bottom: 30px;
`

export const TableTopItemOval = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* border: 2px solid rebeccapurple; */
    background-image: linear-gradient(160deg, #fa709a 0%, #fee140 100%);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 1;
`

export const TableTopItemBall = styled.div`
    font-size: 40px;
    color: white;
    font-weight: 700;
    
`

export const TableTopItemName = styled.div`
    font-size: 18px;
    color: #6A6C72;
    text-align: center;
`

export const TableTopItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px 0;

    &:nth-child(1) {
        ${TableTopItemOval} {
            background-image: linear-gradient(160deg, #4facfe 0%, #00f2fe 100%);  
        }
    }

    &:nth-child(2) {
        ${TableTopItemOval} {
            width: 150px;
            height: 150px;
        }
        ${TableTopItemName} {
            font-size: 20px;
            font-weight: 500;
        }
    }

    &:nth-child(3) {
        ${TableTopItemOval} {
             background-image: linear-gradient(160deg, #43e97b 0%, #38f9d7 100%);
        }
    }
`



export const TableTopItemNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 12;
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    /* &:nth-child(1) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 0px 5px 0px;
    }

    &:nth-child(2) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 1px 5px 0px;
    }

    &:nth-child(3) {
        animation: color-mix 1s linear infinite alternate;
        box-shadow: #FDD819 0px 1px 5px 0px;
    } */

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

export const StudentCourseInfo = styled.div`
    position: absolute;
    top: 35%;
    right: 15%;
    padding: 1px 10px;
    font-size: 14px;
    color: grey;
    border: 1px solid grey;
    border-radius: 30px;
`