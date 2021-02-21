import React, { useState } from "react";
import styled from "styled-components";
import Circle from "../circle";
import { pallete } from '../pallete/pallete';
import Box from './box';
import Card from "./card";
import H2 from "./h2";
import P from "./p";

const Section = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 45px;
    z-index: 4;
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    box-sizing: border-box;
`;

const Content = styled.div`
    border-radius: 15px;
    width: 50%;
    height: 100%;
    padding: 3rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 4rem;
    color: ${pallete.navy};
`

export default function () {
    const [toggle, setToggle] = useState([true, false, false, false]);
    const set = props => {
        setToggle(props);
    }
    return (
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
                    <Title>かっこいい<br />タイトルくれ</Title>
                    <P width='400px'>ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文ここにかっこいい本文。飽きた</P>
                </Content>
                <Content>
                    <H2>Info</H2>
                    <Box onClick={() => set([true, false, false, false])} >私について</Box>
                    <Box onClick={() => set([false, true, false, false])}>このページについて</Box>
                    <Box onClick={() => set([false, false, true, false])}>ToDo</Box>
                    <Box onClick={() => set([false, false, false, true])}>CopyLight</Box>
                </Content>
            </Wrapper>
            <Wrapper>
            <Content>
                <Title>ここ<br />なんか動くやつ</Title>
            </Content>
            <Content>
                <Card toggle={toggle[0]} >
                    <H2>私について</H2>
                    <P>エンジニア</P>
                    <P>Lv.0.2</P>
                    <P>一言: 何もわからない</P>
                </Card>
                <Card toggle={toggle[1]}>
                    <H2>このページについて</H2>
                    <P>React Spring使ってみたかった。かっこいいキーフレームアニメーションに憧れて頑張って作る</P>
                </Card>
                <Card toggle={toggle[2]}>
                    <H2>ToDo</H2>
                    <P>
                        ・レスポンシブ<br/>
                        ・レイアウトカラーの切替
                    </P>
                </Card>
                <Card toggle={toggle[3]}>
                    <H2>CopyLight</H2>
                    <P>本ページでは表示フォントに「Beon」(http://sozoo.fr) を使用しています。
                        Licensed under SIL Open Font License 1.1 (http://scripts.sil.org/OFL)
                        </P>
                </Card>
            </Content>
        </Wrapper>
    </Section>
    )
}