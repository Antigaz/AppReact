import React from "react";
import io from "socket.io-client";
import navbar from './navbar';
import "../Assets/css/chat.css";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: []
        };

        this.socket = io('localhost:5000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            this.setState({messages: [...this.state.messages, data]});
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: navbar.name,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }

    render() {

        const user = this.props.user;

        return (

            <div className="card chat">
                <div className="card-header">
                    <div className="card-title">Global Chat</div>
                </div>
                <div className="card-body">
                    <div className="messages">
                        {this.state.messages.map(message => {
                            return (
                                <div><b>{user.name}</b> : {message.message}</div>
                            )
                        })}
                    </div>

                </div>
                <div className="card-footer">
                    <input type="text" placeholder="Message" className="form-control" value={this.state.message}
                           onChange={ev => this.setState({message: ev.target.value})}/>
                    <br/>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default withRouter(connect(mapStateToProps)(Chat));