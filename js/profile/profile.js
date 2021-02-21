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
import ClickMe from "../clickme";
import Text from "../text";
import Door from "../door/door";

const Section = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 30px 40px;
    z-index: 1;
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    z-index: 1;
    box-sizing: border-box;
`;

const Content = styled.div`
    border-radius: 15px;
    width: 50%;
    height: 100%;
    padding: 3rem;
    z-index: 1;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 4rem;
    letter-spacing: 6px;
    z-index: -11;
    color: ${pallete.navy};
`

export default function ({toggle}) {
    const [menu, setMenu] = useState([true, false, false, false]);
    const set = props => {
        setMenu(props);
    }
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
            <Section>
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
                        <Title>ここ<br />名前かなぁ</Title>
                        <P width='80%'>ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文。飽きた</P>
                    </Content>
                    <Content>
                        <MiniWindow>
                            <P>tap to turn light off or on</P>
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
                        <P>本ページでは表示フォントに「Beon」(http://sozoo.fr) を使用しています。
                        本ページでは表示フォントに「大正活字っぽい？フォントT5」(http://sozoo.fr) を使用しています。
                            Licensed under SIL Open Font License 1.1 (http://scripts.sil.org/OFL)
                            </P>
                    </Card>
                </Content>
            </Wrapper>
        </Section>
    </animated.div>
    )
}