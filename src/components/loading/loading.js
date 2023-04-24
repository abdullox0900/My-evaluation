import styled from "styled-components";

export const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: all 1s ease;
    z-index: 111;
    display: ${props => props.op};
`

export const LoadingWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
`

export const LoadingOval = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    /* background-color: #000; */
    border: 5px solid #000;
    opacity: 0.4;
`

export const LoadingHtmlIcon = styled.div`
    position: absolute;
    top: -25%;
`

export const LoadingFigmaIcon = styled.div`
    position: absolute;
    left: -25%;
`

export const LoadingCssIcon = styled.div`
   position: absolute;
   right: -25%;
`

export const LoadingJsIcon = styled.div`
   position: absolute;
   bottom: -25%;
`

export const LoadingReactIcon = styled.div`
    position: absolute;
    top: -10%;
    right: -10%;
`

export const LoadingTailwindIcon = styled.div`
    position: absolute;
    right: -10%;
    bottom: -10%;
`

export const LoadingNextIcon = styled.div`
    position: absolute;
    left: -10%;
    bottom: -10%;
`

export const LoadingReduxIcon = styled.div`
    position: absolute;
    top: -10%;
    left: -10%;
`

export const LoadingTypeScriptIcon = styled.div`
    position: absolute;
    top: -35%;
    left: 10%;
`

export const LoadingVisualIcon = styled.div`
    position: absolute;
    top: -35%;
    right: 10%;
`

export const LoadingGitHubIcon = styled.div`
    position: absolute;
    top: 13%;
    right: -33%;
`

export const LoadingNpmIcon = styled.div`
    position: absolute;
    top: 71%;
    right: -33%;
`

export const LoadingThreeIcon = styled.div`
    position: absolute;
    bottom: -32%;
    right: 9%;
`

export const LoadingYarnIcon = styled.div`
    position: absolute;
    top: 14%;
    left: -35%;
`

export const LoadingWebPackIcon = styled.div`
    position: absolute;
    bottom: 10%;
    left: -36%;
`

export const LoadingBootstrapIcon = styled.div`
    position: absolute;
    left: 12%;
    bottom: -31%;
`