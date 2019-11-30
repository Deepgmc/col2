import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";

class Header extends React.Component{
    static propTypes = {
        user: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetch('/api/get-user-data', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                referrer: 'no-referrer'
            })
            .then((response) => {
                return response.json()
            })
            .then((resp) => {
                this.setState({user: resp})
            })
    }

    render(){
        let mail = <div>Not logined</div>
        const {user} = this.state
        if(user) mail = <div>{this.state.user.email}</div>
        return(
            <div>
                {mail}
                <div><a href='/logout'>Exit</a></div>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('login_info_cnt'))