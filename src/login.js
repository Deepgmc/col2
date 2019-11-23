import React from 'react'
import ReactDOM from 'react-dom'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: 'admin@admin.com',
            password: '12345678'
        }
    }

    handleSubmit = () => {
        console.log('Email: ' + this.state.email + ' password: ' + this.state.password)
    }

    render(){
        return(
            <div>
                <form method="post" action='/login' onSubmit={this.handleSubmit}>
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
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
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

ReactDOM.render(<Login />, document.getElementById('login_content_container'))