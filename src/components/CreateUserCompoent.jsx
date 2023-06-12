import React from "react";
import { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            userName : '',
            emailId : '',
            userType : '',
            mobileNumber : ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then(
                (res) => {
                    let user = res.data;
                    this.setState({
                        userName : user.userName,
                        emailId : user.emailId,
                        userType : user.userType,
                        mobileNumber : user.mobileNumber
                    });
                }
            );
        }
    }

    
}

export default createUserComponent