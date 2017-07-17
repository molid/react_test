import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import Button from 'grommet/components/Button';
import FingerPrint from 'grommet/components/icons/base/FingerPrint';
import EditIcon from 'grommet/components/icons/base/edit';
import User from 'grommet/components/icons/base/user';
import Box from 'grommet/components/Box';
import 'grommet/grommet-hpinc.min.css'
import Search from 'grommet/components/Search';
import Section from 'grommet/components/Section';

import Heading from 'grommet/components/Heading'
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Split from 'grommet/components/Split';
import Layer from 'grommet/components/Layer';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import SocialShare from 'grommet/components/SocialShare';
import Animate from 'grommet/components/Animate';
 import Value from 'grommet/components/Value';




class SearchT extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text : 'hello',
            myBoolean : true,
            Animate_Bool : true,
            label : "Leave"
        };
        this.onchange = this.onchange.bind(this);
        this.changeText= this.changeText.bind(this);
        this.ccc=this.ccc.bind(this);
        this.aaa=this.aaa.bind(this);
    }

    onchange(event){
        this.setState({text: event.target.value});
    }
    changeText(){
        this.setState({text:'You just click the button'});
    }
    ccc(){
        if(this.state.myBoolean == true)
            this.setState({myBoolean: false});
        else
            this.setState({myBoolean: true});
    }
    aaa(){
    // this.refs.aa.props.style.display="none"
        if(this.state.Animate_Bool ==true)
            this.setState({Animate_Bool: false});
            //this.state.Animate_Bool =false;
        else
            // this.state.Animate_Bool =true;
            this.setState({Animate_Bool: true});
        if(this.state.label=='Leave')
            this.setState({label:'Enter'})
        else
            this.setState({label:"Leave"})
    }
    render() {
        let searchValue = this.state.text;
        // let myBoolean=true;
        // var myBoolean=new Boolean();
        var myBoolean1=this.state.myBoolean;
        var mm=this.state.Animate_Bool;
        return (
            <Split flex='right'>
            <div>
                <Sidebar colorIndex='neutral-1'
                         fixed={true}
                         full={true}>
                    <Header pad='medium'
                            justify='between'>
                        <Title>
                            Title
                        </Title>
                    </Header>
                    <Box flex='grow'
                         justify='start'>
                        <Menu primary={true}>
                            <Anchor href='#'
                                    className='active'>
                                First
                            </Anchor>
                            <Anchor href='#'>
                                Second
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                        </Menu>
                    </Box>
                    <Footer pad='medium'>
                        <Button icon={<User />} />
                    </Footer>
                </Sidebar>
            </div>
            <div>
                {/*<Layer closer={true} flush={true} hidden="true">*/}
                <Section  align="center" styles='display:none' visible={false}>
                    <h1 strong={true} visible={false}>
                        {searchValue}
                    </h1>
                    <br/>
                    <Search placeHolder='Search'
                            inline={true}
                            visible={false}
                            // value={searchValue}
                            dropAlign={{"right": "right"}}
                            onDOMChange={(event) => {
                                this.onchange(event)
                            }} />
                    <br/>
                    <Button icon={<EditIcon />}
                            label='点击'
                            onClick={(event) =>this.changeText()}
                            href='#'/>
                    <br/>
                    <Button icon={<EditIcon />}
                            label='点击跳转'
                            onClick={(event)=>this.ccc()}
                            href='#'/>
                    <Accordion openMulti={false}>
                        <AccordionPanel heading='First Title'>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Paragraph>
                        </AccordionPanel>
                        <AccordionPanel heading='Second Title'>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Paragraph>
                        </AccordionPanel>
                        <AccordionPanel heading='Third Title'>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Paragraph>
                        </AccordionPanel>
                    </Accordion>
                    <Box pad={{"between": "medium"}}
                         align='center'>

                        <Button id ="but" label={this.state.label}
                                primary={true}
                        onClick={this.aaa}/>
                        <Animate   ref="aa" visible={mm} enter={{"animation": "fade", "duration": 1000, "delay": 0}}
                                 keep={true}>
                            <Box direction='row'>
                                <Box colorIndex='light-2'
                                     margin='medium'
                                     pad='large'>
                                    <Value value={1} />
                                </Box>
                            </Box>
                        </Animate>
                    </Box>
                </Section>
                    <Layer dispaly = "none" closer={true} flush={true} hidden={myBoolean1}>
                    <Button icon={<EditIcon />}
                            label='关闭'
                            onClick={(event) =>this.ccc()}
                            href='#'/>
                    <br/>
                    <Card thumbnail='http://img.mp.itc.cn/upload/20170524/3dd5ba0bb91d4ef4acb2cfb4ed8c8fab_th.jpg'
                              label='LeBron Raymone James'
                              heading='LeBron Raymone James'
                              description='LeBron Raymone James description providing more details.'/>

                        <Footer justify='between'>
                            {/*<Title>*/}
                                {/*/!*<Logo />*!/*/}
                                {/*Title*/}
                            {/*</Title>*/}
                            <SocialShare type='twitter'
                                         link='https://grommet.io'
                                         text='Sample text' />
                            <Box direction='row'
                                 align='center'
                                 pad={{"between": "medium"}}>
                                <Paragraph margin='none'>
                                    © 2017 Molid Labs
                                </Paragraph>
                                <Menu direction='row'
                                      size='small'
                                      dropAlign={{"right": "right"}}>
                                    <Anchor href='https://grommet.io'  target='https://grommet.io'>
                                        Support
                                    </Anchor>
                                    <Anchor href='#'>
                                        Contact
                                    </Anchor>
                                    <Anchor href='#'>
                                        About
                                    </Anchor>
                                </Menu>
                            </Box>
                        </Footer>
                    </Layer>

            </div>

            </Split>
        );
    }
}



render(
        <SearchT />,
    document.getElementById('root')
)

