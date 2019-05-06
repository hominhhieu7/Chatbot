import React, { Component } from 'react'
import { Widget, addResponseMessage } from 'react-chat-widget';
import logo from './Shared/Assets/9-26-2018-2-32-00-PManh dd.jpg'
import 'react-chat-widget/lib/styles.css'
import './Shared/CSS/dialogchat.css'

class Chatbot extends Component {
    componentDidMount() {
        addResponseMessage("Chào mừng bạn đến với chat bot!!");
        addResponseMessage("Hãy đặt một câu hỏi cho tôi!");
      }
    handleNewUserMessage = (newMessage) => {

        // Now send the message throught the backend API
        // addResponseMessage();
    }
    render() {
        return (
            <Widget
                subtitle="Chatbot Đại học Thủ Dầu Một"
                profileAvatar={logo}
                title=""
                handleNewUserMessage={this.handleNewUserMessage}
                senderPlaceHolder = "Nhập tin nhắn"
            />
        )
    }
}

export default Chatbot
