import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Error from './components/error'

class Register extends React.Component{

    static propTypes = {
        errMessage: PropTypes.string,
        succMessage: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            email: 'admin@admin.com',
            password: '123123',
            errMessage: '',
            succMessage: ''
        }
    }

    render(){
        let err = null
        if(this.state.errMessage.length > 0) err = <Error isErr={true} message={this.state.errMessage} />
        if(this.state.succMessage.length > 0) err = <Error isErr={false} message={this.state.succMessage} />
        return(
            <div>
                {err}
                <form method="post" action='/register' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Email
                                <input className="form-control"
                                       name="email"
                                       value={this.state.email}
                                       type="text" onChange={this.handleEmailChange}
                                       placeholder="email" />
                            </label>
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Password
                                <input className="form-control"
                                       name="password"
                                       value={this.state.password}
                                       type="password"
                                       onChange={this.handlePasswordChange}
                                       placeholder="password" />
                            </label>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-success">Register</button>
                        </div>
                    </div>
                </form>
                <a className="btn btn-warning mt-3" href="/login">Go to login page</a>
            </div>
        )
    }

    handleSubmit = (e) => {

        const {email, password} = this.state

        e.preventDefault()
        //отправляем запрос регистрации аяксом
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            referrer: 'no-referrer'
        })
            .then((response) => {
                return response.json()
            })
            .then((resp) => {
                if(resp.registerSuccess){
                    this.setState({
                        email: '',
                        password : '',
                        succMessage: resp.message
                    })
                } else {
                    this.setState({
                        email: '',
                        password : '',
                        errMessage: resp.message
                    })
                }
            })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
}

ReactDOM.render(<Register />, document.getElementById('register_content_container'))