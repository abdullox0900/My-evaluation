import { IconWrapFive, IconWrapFour, IconWrapOne, IconWrapThree, IconWrapTwo, TableAvatar, TableItem, TableItemBox, TableList, TableSection, TableUserEvaluation, TableUserName, TableWrapper } from "./style.js"

import { userData } from "../../data/data.js"
import {
    BootstrapIcon,
    CssIcon,
    FigmaIcon,
    HtmlIcon,
    VisualCodeIcon
} from "../../assets/icons/loading-icon.jsx"

import CountUp from 'react-countup';
import GlobalStyle from "../../App.js";

function Table() {

    // document.body.style.overflow = 'hidden'

    return (
        <TableSection>
            <GlobalStyle />
            <IconWrapOne data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
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
            </IconWrapFive>
            <TableWrapper>
                <TableList>
                    {
                        userData.map((item) => {
                            return (
                                <TableItem key={item.id} >
                                    <TableItemBox>
                                        <TableAvatar>#{item.id}</TableAvatar>
                                        <TableUserName>{item.name}</TableUserName>
                                    </TableItemBox>
                                    <TableUserEvaluation><CountUp duration={15} start={0} end={item.evaluation} /></TableUserEvaluation>
                                </TableItem>
                            )
                        })
                    }
                </TableList>
            </TableWrapper>
        </TableSection>
    )
}

export default Table