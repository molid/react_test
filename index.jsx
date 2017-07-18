// import React from 'react';
import React, { Component, PropTypes } from 'react';
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
import LoginForm from 'grommet/components/LoginForm';
import Logo from './Logo';
import Promo from './Promo';
import { sessionLogin } from './session';


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
        this._onSubmit = this._onSubmit.bind(this);
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
    _onSubmit (fields) {
        this.setState({ busy: true });
        this.props.dispatch(sessionLogin('', fields.username, fields.password));
    }
    render() {
        let searchValue = this.state.text;
        // let myBoolean=true;
        // var myBoolean=new Boolean();
        var myBoolean1=this.state.myBoolean;
        var mm=this.state.Animate_Bool;
        const { session } = this.props;

        return (
            <Split flex="left" separator={true}>
                <Promo />
                <Sidebar justify="between" align="center" pad="none" size="large">
                    <span />
                    <LoginForm align="start"
                               logo={<Logo size="large" busy={this.state.busy} />}
                               title={"Molid"}
                               forgotPassword={<Anchor href='#'
                                                       label='Forgot password?' />}
                               rememberMe={true}
                               onSubmit={this.state.busy ? null : this._onSubmit}

                               usernameType="text" />
                    <Footer direction="row" size="small"
                            pad={{horizontal: 'medium', vertical: 'small', between: 'small'}}>
                        <span className="secondary">&copy; 2016 Grommet Labs</span>
                    </Footer>
                </Sidebar>
            </Split>
        );
    }
}
// SearchT.propTypes = {
//     session: PropTypes.shape({
//         error: PropTypes.string
//     })
// };

// let select = (state) => ({
//     session: state.session
// });
//
// export default connect(select)(SearchT);

render(
        <SearchT />,
    document.getElementById('root')
)

