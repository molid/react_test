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


class SearchT extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text : 'hello'
        };
        this.onchange = this.onchange.bind(this);
        this.changeText= this.changeText.bind(this);
    }

    onchange(event){
        this.setState({text: event.target.value});
    }
    changeText(){
        this.setState({text:'You just click the button'});
    }

    render() {
        let searchValue = this.state.text;
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
            <div styles={'display:none'}>
                <Section  align="center" style='display:none'>
                    <h1 strong={true} >
                        {searchValue}
                    </h1>
                    <br/>
                    <Search placeHolder='Search'
                            inline={true}
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
                </Section>
                <Section  align="center">
                    <Search placeHolder='Search'
                            inline={true}
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
                </Section>
            </div>
            </Split>
        );
    }
}



render(
        <SearchT />,
    document.getElementById('root')
)

