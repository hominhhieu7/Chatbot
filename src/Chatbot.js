import React, { Component } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from './Shared/Assets/9-26-2018-2-32-00-PManh dd.jpg';
import apiService from './Service/apiService';
import 'react-chat-widget/lib/styles.css'
import './Shared/CSS/dialogchat.css'

class Chatbot extends Component {
    componentDidMount() {
        addResponseMessage("Xin chào, tôi là trợ lý ảo của trường Đại học Thủ Dầu Một, tôi có thể giúp gì cho bạn ?");
        addResponseMessage(`Gõ "Tips" để hiển thị những câu hỏi mà tôi có thể trả lời cho bạn!!!`);
    }
    handleNewUserMessage = async (newMessage) => {
        var mess = { name: newMessage };
        let data = await apiService.post("/ask", mess);
        data.output.text.forEach(question => {
            addResponseMessage(question);
            
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
