import React, { Component } from 'react'
import { Widget, addResponseMessage,addLinkSnippet } from 'react-chat-widget';
import logo from './Shared/Assets/9-26-2018-2-32-00-PManh dd.jpg';
import apiService from './Service/apiService';
import 'react-chat-widget/lib/styles.css'
import './Shared/CSS/dialogchat.css'

class Chatbot extends Component {
    componentDidMount() {
        this.handleNewUserMessage();
    }
    handleNewUserMessage = async (newMessage) => {
        var mess = { name: newMessage };
        let data = await apiService.post("/ask", mess);
        console.log(data);
        data.output.text.forEach(question => {
            let value = "http";
            if(question.toLowerCase().indexOf(value.toLowerCase()) === -1){
                addResponseMessage(question);
            }
            else {
                addLinkSnippet({
                    title: "Vui lòng truy cập liên kết bên dưới",
                    link: question,
                    target: "_blank",
                    color: "black"
                })
            }
            
        });
    }
    render() {
        return (
            <Widget
                subtitle="Chatbot Đại học Thủ Dầu Một"
                profileAvatar={logo}
                title=""
                handleNewUserMessage={this.handleNewUserMessage}
                senderPlaceHolder="Nhập tin nhắn"
            />
        )
    }
}

export default Chatbot
