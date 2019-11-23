import React from 'react'
import ReactDOM from 'react-dom'

class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {
        console.log('Email: ' + this.state.email + ' password: ' + this.state.password)
    }

    render(){
        return(
            <div>
                <form method="post" action='/register' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Email
                                <input className="form-control" type="text" onChange={this.handleEmailChange} placeholder="email" />
                            </label>
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Password
                                <input className="form-control" type="password" onChange={this.handlePasswordChange} placeholder="password" />
                            </label>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-success">Register</button>
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

ReactDOM.render(<Register />, document.getElementById('register_content_container'))