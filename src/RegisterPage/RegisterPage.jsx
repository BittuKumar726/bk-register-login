import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

// class RegisterPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             user: {
//                 firstName: '',
//                 lastName: '',
//                 emailId: '',
//                 password: ''
//             },
//             submitted: false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         const { name, value } = event.target;
//         const { user } = this.state;
//         this.setState({
//             user: {
//                 ...user,
//                 [name]: value
//             }
//         });
//     }

//     handleSubmit(event) {
//         event.preventDefault();

//         this.setState({ submitted: true });
//         const { user } = this.state;
//         if (user.firstName && user.lastName && user.emailId && user.password) {
//             this.props.register(user);
//         }
//     }

//     render() {
//         const { registering  } = this.props;
//         const { user, submitted } = this.state;
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <h2>Register</h2>
//                 <form name="form" onSubmit={this.handleSubmit}>
//                     <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
//                         <label htmlFor="firstName">First Name</label>
//                         <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
//                         {submitted && !user.firstName &&
//                             <div className="help-block">First Name is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
//                         <label htmlFor="lastName">Last Name</label>
//                         <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
//                         {submitted && !user.lastName &&
//                             <div className="help-block">Last Name is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.emailId ? ' has-error' : '')}>
//                         <label htmlFor="emailId">Email Id</label>
//                         <input type="text" className="form-control" name="emailId" value={user.emailId} onChange={this.handleChange} />
//                         {submitted && !user.emailId &&
//                             <div className="help-block">emailId is required</div>
//                         }
//                     </div>
//                     <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
//                         {submitted && !user.password &&
//                             <div className="help-block">Password is required</div>
//                         }
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary">Register</button>
//                         {registering && 
//                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                         }
//                         <Link to="/login" className="btn btn-link">Cancel</Link>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }



const RegisterPage = (props) => {
    const { register, registering, alert } = props;
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.emailId && user.password) {
            register(user);
        }
    }
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <h2>Register</h2>
                    <form name="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={(e) => handleChange(e)} />
                            {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={(e) => handleChange(e)} />
                            {submitted && !user.lastName &&
                                <div className="help-block">Last Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.emailId ? ' has-error' : '')}>
                            <label htmlFor="emailId">Email Id</label>
                            <input type="text" className="form-control" name="emailId" value={user.emailId} onChange={(e) => handleChange(e)} />
                            {submitted && !user.emailId &&
                                <div className="help-block">emailId is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => handleChange(e)} />
                            {submitted && !user.password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
                            {registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };