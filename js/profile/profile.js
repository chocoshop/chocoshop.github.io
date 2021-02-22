import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import Circle from "../circle";
import { pallete } from '../pallete/pallete';
import Box from './box';
import Card from "./card";
import H2 from "./h2";
import P from "./p";
import * as easings from 'd3-ease';
import MiniWindow from "./miniwindow";
import Scene from "./scene";
import { media } from "../mediaquery/breakpoints";
import useWindowDimensions from "../hooks/window";

const Section = styled.section`
    width: 100%;
    height: ${({theme}) => theme.height < 800 ? '100%' : '100vh'};
    padding: 30px 40px;
    z-index: 1;
    box-sizing: border-box;
    ${media.lessThan('medium')`
        padding: 1rem;
        position: relative;
        height: 100%;
    `}
`;

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
    ${media.lessThan('medium')`
        display: block;
    `}
`;

const Content = styled.div`
    border-radius: 15px;
    width: 50%;
    height: 100%;
    padding: 2rem;
    z-index: 1;
    box-sizing: border-box;
    ${media.lessThan('tablet')`
        padding: 2.0rem 1.0rem .5rem 2.0rem;
        width: 100%;
    `}
    ${media.lessThan('medium')`
        width: 100%;
        padding: 1.0rem 2.5rem .5rem 2.5rem;
        margin: 15px 0;
    `}
`;

const Title = styled.h1`
    font-size: 4rem;
    letter-spacing: 6px;
    z-index: -11;
    color: ${pallete.navy};
    ${media.lessThan('medium')`
        font-size: 3rem;
    `}
`

export default function ({toggle}) {
    const [menu, setMenu] = useState([true, false, false, false]);
    const set = props => {
        setMenu(props);
    }
    const {height} = useWindowDimensions();
    return (
        <animated.div style={useSpring({
            from: {opacity: 0.8},
            to: {opacity: toggle ? 1 : 0},
            config: {
                duration: 100,
                tension: 200,
                easing: easings.easeCubicIn,
            }
        })}>
            <Section theme={{height}}>
                <Wrapper>
                    {/* <div style={{position: 'relative', width: '120px', height: '120px'}}>
                        <Circle size='100' position='absolute' radius='50%'  >
                            <Circle size='10' position='absolute' top='40%' left='20px' radius='15px' background={pallete.navy} />
                            <Circle size='10' position='absolute' top='40%' left='63px' radius='15px' background={pallete.navy}/>
                            <Circle size='10' position='absolute' top='70%' left='40px' radius='0 0 10px 10px' background='#FFF' half={true} />
                        </Circle>
                    </div> */}
                    <Content>
                        {/* <Title>Kiharu<br />Ishikawa</Title> */}
                        <Title>Kiharu</Title>
                        <H2>かっこいいサブタイ</H2>
                        <P width='80%'>もうこの辺で作るの飽きてる。ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文。飽きた</P>
                    </Content>
                    <Content>
                        <MiniWindow>
                            <P>Tap to animate</P>
                            <Scene />
                        </MiniWindow>
                    </Content>
                </Wrapper>
                <Wrapper>
                <Content>
                    <H2>Info</H2>
                    <Box onClick={() => set([true, false, false, false])} >私について</Box>
                    <Box onClick={() => set([false, true, false, false])}>このページについて</Box>
                    <Box onClick={() => set([false, false, true, false])}>ToDo</Box>
                    <Box onClick={() => set([false, false, false, true])}>CopyLight</Box>
                </Content>
                <Content>
                    <Card toggle={menu[0]} >
                        <H2>私について</H2>
                        <P>エンジニア</P>
                        <P>Lv.0.2</P>
                        <P>一言: 何もわからない</P>
                    </Card>
                    <Card toggle={menu[1]}>
                        <H2>このページについて</H2>
                        <P>React Spring使ってみたかった。かっこいいキーフレームアニメーションに憧れて頑張って作る</P>
                    </Card>
                    <Card toggle={menu[2]}>
                        <H2>ToDo</H2>
                        <P>
                            ・レスポンシブ<br/>
                            ・レイアウトカラーの切替
                        </P>
                    </Card>
                    <Card toggle={menu[3]}>
                        <H2>CopyLight</H2>
                        <P>本ページでは表示フォントに「Beon」<a href="http://sozoo.fr" target="_black">(http://sozoo.fr)</a> を使用しています。<br />
                            本ページでは表示フォントに「大正活字っぽい？フォントT5」<a href="https://nukosuki.booth.pm/items/738177" target="_black">(https://nukosuki.booth.pm/items/738177)</a> を使用しています。<br />
                            Licensed under SIL Open Font License 1.1 <a href="http://scripts.sil.org/OFL" target="_black">(http://scripts.sil.org/OFL)</a>
                        </P>
                    </Card>
                </Content>
            </Wrapper>
        </Section>
    </animated.div>
    )
}