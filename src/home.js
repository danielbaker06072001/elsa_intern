import React from 'react'; 
import './setting.css' ;

/*------------------------------------------------------*/
/*This import the first section of the page
/*------------------------------------------------------*/
import elsa_logo from './img/elsa_logo.png'
import around_phone from './img/around_phone.png'
import phone from './img/phone.png'
import left_phone_box from './img/left_phone_box.png'
import right_phone from './img/right_phone.png'
import register from './img/register.png'

/*------------------------------------------------------*/
/* This import middle section that include register button
/*------------------------------------------------------*/
import yellow from './img/yellow.png'
import middle_next from './img/middle_next.png'
import two_phone from './img/two_phone.png'
import pink from './img/pink.png'
import big_elsa from './img/big_elsa.png'
import blue_two from './img/blue_two.png'
import small_blue from './img/small_blue.png'

import input_white from './img/input_white.png'
import input_blue from './img/input_blue.png'
import input_text from './img/input_text.png'

import name from './img/name.png'
import phone_num from './img/phone_num.png'
import input_email from './img/input_email.png'

import one_year from './img/one_year.png'
import life_time from './img/life_time.png'
import submit_box from './img/submit_box.png'

import last_img from './img/last_img.png'

import one_year_price from './img/one_year_price.png'
import life_time_price from './img/life_time_price.png'

/*------------------------------------------------------*/
class Home extends React.Component{ 
    constructor(props) { 
        super(props) ;
        this.state = { 
            name : '',
            phone : '',
            email : '',
            check_boxA : false,
            check_boxB : false,
        
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleCheckBoxA = this.handleCheckBoxA.bind(this)
        this.handleCheckBoxB = this.handleCheckBoxB.bind(this)
        this.submit = this.submit.bind(this)
        
    }
    submit() { 
        var checkEmail = true , checkPhone = true
        alert("Name: "+ this.state.name + "Phone: " +this.state.phone + "email: " + this.state.email);
        
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( !re.test(this.state.email) ){
            alert("Email is not valid!!");
            checkEmail = false;
        }
        if ( isNaN(this.state.phone)){
            alert("Phone number is not valid!!");
            checkPhone = false
        }
        if(checkEmail && checkPhone) { 
            alert("You have succesfully submit your application!")
        }
    
    }
    handleCheckBoxA(event){ 
        document.getElementById("check_box").checked = true;
        document.getElementById("check_box2").checked = false;
        var change = document.getElementById('one_year')
        change.src = one_year_price
        var changeB = document.getElementById('life_time')
        changeB.src = life_time
        this.setState({
            check_boxA : true,
            check_boxB : false ,
        })

    }
    handleCheckBoxB(event){ 
        document.getElementById("check_box").checked = false;
        document.getElementById("check_box2").checked = true;
        var change = document.getElementById('life_time')
        change.src = life_time_price
        var changeB = document.getElementById('one_year')
        changeB.src = one_year
        this.setState({
            check_boxA : false,
            check_boxB : true ,
        })
    }
    handleChangeName(event) { 
        this.setState({
            name : event.target.value,
        });
    }
    handleChangePhone(event) { 
        this.setState({
            phone : event.target.value
        });
    }
    handleChangeEmail(event) { 
        this.setState({
            email : event.target.value
        });
    }
    render() {
        return (
            <div class = "container">
                <div class ="elsa_logo">
                    <img class = "elsa_logo" src = {elsa_logo} />
                </div>

                <div class = "middle_section">
                    <img class = "around_phone" src = {around_phone} /> 
                    <img class = "phone" src = {phone} /> 
                    <img class = "left_phone_box" src = {left_phone_box} /> 
                    <img class = "right_phone" src = {right_phone} /> 
                    <a href ="#input_white">
                        <button class ="button_setting"><img class = "register" src = {register} /> </button>
                    </a>
                </div>

                <div class = "middle_next" >
                    <img class = "yellow" src = {yellow} /> 
                    <img class = "middle_next" src = {middle_next} /> 
                    <img class = "two_phone" src = {two_phone} /> 
                    <img class = "pink" src = {pink} /> 
                    <img class = "big_elsa" src = {big_elsa} /> 
                    <img class = "blue_two" src = {blue_two} /> 
                    <img class = "small_blue" src = {small_blue} /> 

                    <img class = "input_white" src = {input_white} id = "input_white"/> 
                    <img class = "input_blue" src = {input_blue} /> 
                    <img class = "input_text" src = {input_text} /> 

                    <img class = "name" src = {name} /> 
                    <img class = "phone_num" src = {phone_num} /> 
                    <img class = "input_email" src = {input_email} /> 

                    <form onSubmit = {this.submit}>
                        <input class = "input_box" type ="text" id = "name_box" value = {this.state.name} onChange = {this.handleChangeName}/>
                        <input class = "input_box2" type ="tel" id = "phone_box" value2 = {this.state.phone} onChange = {this.handleChangePhone}/>
                        <input class = "input_box3" type ="email" id = "email_box" value3 = {this.state.email} onChange = {this.handleChangeEmail}/>
                        <input class = "check_box" type ="checkbox" id = "check_box" ref="check_me1" onChange = {this.handleCheckBoxA}/>
                        <input class = "check_box2" type ="checkbox" id = "check_box2" ref = "check_me2" onChange = {this.handleCheckBoxB}/>
                        <button><img class = "submit_box" src = {submit_box} type = "submit"/></button>                            
                    </form>
                    

                    <img class = "one_year" src = {one_year} id = "one_year"/>
                    <img class = "life_time" src = {life_time} id = "life_time"/>

                </div>

                <div class = "last_img" >
                    <img class = "last_img" src = {last_img} />
                </div>
                
            </div>
        ) 
        
    }
}

export default Home