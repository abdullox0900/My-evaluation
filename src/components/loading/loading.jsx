import { HtmlIcon, FigmaIcon, CssIcon, JsIcon, ReactIcon, TailwindIcon, NextIcon, ReduxIcon, TypeScriptIcon, VisualCodeIcon, GitHubIcon, NpmIcon, ThreeJsIcon, YarnIcon, WepPackIcon, BootstrapIcon } from "../../assets/icons/loading-icon"

import { LoadingBootstrapIcon, LoadingCssIcon, LoadingFigmaIcon, LoadingGitHubIcon, LoadingHtmlIcon, LoadingJsIcon, LoadingNextIcon, LoadingNpmIcon, LoadingOval, LoadingReactIcon, LoadingReduxIcon, LoadingTailwindIcon, LoadingThreeIcon, LoadingTypeScriptIcon, LoadingVisualIcon, LoadingWebPackIcon, LoadingWrap, LoadingWrapper, LoadingYarnIcon } from "./loading"

function Loading({opacity}) {

    // document.body.style.overflow = 'hidden'

    return (
        <div>
            <LoadingWrapper op={opacity}>
                <LoadingWrap>
                    <LoadingHtmlIcon data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1500">
                        <HtmlIcon width={'60px'} hight={'60px'} />
                    </LoadingHtmlIcon>
                    <LoadingFigmaIcon data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1500">
                        <FigmaIcon width={'50px'} hight={'50px'} />
                    </LoadingFigmaIcon>
                    <LoadingOval  />
                    <LoadingCssIcon data-aos="zoom-in" data-aos-delay="400" data-aos-duration="2000">
                        <CssIcon width={'60px'} hight={'60px'} />
                    </LoadingCssIcon>
                    <LoadingJsIcon data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                        <JsIcon width={'60px'} hight={'60px'} />
                    </LoadingJsIcon>
                    <LoadingReactIcon data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
                        <ReactIcon width={'70px'} hight={'70px'} />
                    </LoadingReactIcon>
                    <LoadingTailwindIcon data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
                        <TailwindIcon width={'60px'} hight={'60px'} />
                    </LoadingTailwindIcon>
                    <LoadingNextIcon data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                        <NextIcon width={'60px'} hight={'60px'} />
                    </LoadingNextIcon>
                    <LoadingReduxIcon data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                        <ReduxIcon width={'60px'} hight={'60px'} />
                    </LoadingReduxIcon>
                    <LoadingTypeScriptIcon data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                        <TypeScriptIcon width={'40px'} hight={'40px'} />
                    </LoadingTypeScriptIcon>
                    <LoadingVisualIcon data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
                        <VisualCodeIcon width={'40px'} hight={'40px'} />
                    </LoadingVisualIcon>
                    <LoadingGitHubIcon data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000">
                        <GitHubIcon width={'40px'} hight={'40px'} />
                    </LoadingGitHubIcon>
                    <LoadingNpmIcon data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
                        <NpmIcon width={'40px'} hight={'40px'} />
                    </LoadingNpmIcon>
                    <LoadingThreeIcon data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
                        <ThreeJsIcon width={'40px'} hight={'40px'} />
                    </LoadingThreeIcon>
                    <LoadingYarnIcon data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                        <YarnIcon width={'40px'} hight={'40px'} />
                    </LoadingYarnIcon>
                    <LoadingWebPackIcon data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
                        <WepPackIcon width={'40px'} hight={'40px'} />
                    </LoadingWebPackIcon>
                    <LoadingBootstrapIcon data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1500">
                        <BootstrapIcon width={'40px'} hight={'40px'}/>
                    </LoadingBootstrapIcon>
                </LoadingWrap>
            </LoadingWrapper>
        </div>
    )
}

export default Loading