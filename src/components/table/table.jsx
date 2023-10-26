import {
  IconWrapFive,
  IconWrapFour,
  IconWrapOne,
  IconWrapThree,
  IconWrapTwo,
  StudentCourseInfo,
  TableAvatar,
  TableItem,
  TableItemBox,
  TableList,
  TableSection,
  TableTopItem,
  TableTopItemBall,
  TableTopItemName,
  TableTopItemNumber,
  TableTopItemOval,
  TableTopList,
  TableUserEvaluation,
  TableUserName,
  TableWrapper,
} from "./style.js";

import { userData } from "../../data/data.js";
import {
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  HtmlIcon,
  VisualCodeIcon,
} from "../../assets/icons/loading-icon.jsx";

import CountUp from "react-countup";
import GlobalStyle from "../../App.js";
import { useEffect, useState } from "react";

function Table() {
  const API = "https://6537a88fbb226bb85dd39095.mockapi.io/student/list";

  const [data, setData] = useState([]);
  const [leader, setLeader] = useState([]);

  async function GetData() {
    const response = await fetch(API);
    const data = await response.json();

    setData(data);
  }

  data.sort((a, i) => {
    return i.evaluation - a.evaluation;
  });

  useEffect(() => {
    GetData();
  }, []);

  const leaderData = data.slice(0, 3);
  const newData = data.slice(3);

  //   setLeader(data?.slice(0, 3));

  console.log(leaderData);

  return (
    <TableSection>
      <GlobalStyle />
      {/* <IconWrapOne data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
                <HtmlIcon width={'120px'} height={'120px'} />
            </IconWrapOne>
            <IconWrapTwo data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1500">
                <CssIcon width={'120px'} height={'120px'} />
            </IconWrapTwo>
            <IconWrapThree data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1500">
                <VisualCodeIcon width={'120px'} height={'120px'} />
            </IconWrapThree>
            <IconWrapFour data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
                <FigmaIcon width={'120px'} height={'120px'} />
            </IconWrapFour>
            <IconWrapFive data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1500">
                <BootstrapIcon width={'120px'} height={'120px'} />
            </IconWrapFive> */}

      <TableWrapper>
        <TableTopList>
          <TableTopItem>
            <TableTopItemOval>
              <TableTopItemBall>{leaderData?.length - 1}</TableTopItemBall>
              <TableTopItemNumber>{leaderData[1]?.evaluation}</TableTopItemNumber>
            </TableTopItemOval>
            <TableTopItemName>{leaderData[1]?.name}</TableTopItemName>
          </TableTopItem>
          <TableTopItem>
            <TableTopItemOval>
              <TableTopItemBall>{leaderData?.length - 2}</TableTopItemBall>
              <TableTopItemNumber>{leaderData[0]?.evaluation}</TableTopItemNumber>
            </TableTopItemOval>
            <TableTopItemName>{leaderData[0]?.name}</TableTopItemName>
          </TableTopItem>
          <TableTopItem>
            <TableTopItemOval>
              <TableTopItemBall>{leaderData?.length}</TableTopItemBall>
              <TableTopItemNumber>{leaderData[2]?.evaluation}</TableTopItemNumber>
            </TableTopItemOval>
            <TableTopItemName>{leaderData[2]?.name}</TableTopItemName>
          </TableTopItem>
        </TableTopList>
        <TableList>
          {newData.map((item, index) => {
            return (
              <TableItem key={index}>
                <TableItemBox>
                  <TableAvatar>#{index + 4}</TableAvatar>
                  <TableUserName>{item.name}</TableUserName>
                  <StudentCourseInfo>{item.course_name}</StudentCourseInfo>
                </TableItemBox>
                <TableUserEvaluation>
                  <CountUp duration={15} start={0} end={item.evaluation} />
                </TableUserEvaluation>
              </TableItem>
            );
          })}
        </TableList>
      </TableWrapper>
    </TableSection>
  );
}

export default Table;
