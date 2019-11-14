import React from 'react'
import ReactDOM from 'react-dom'

class Register extends React.Component{
    render(){
        return(
            <div>
                <form method="post">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Email
                                <input className="form-control" type="text" placeholder="email" />
                            </label>
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Password
                                <input className="form-control" type="password" placeholder="password" />
                            </label>
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Password repeat
                                <input className="form-control" type="password" placeholder="password" />
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
}

ReactDOM.render(<Register />, document.getElementById('register_content_container'))