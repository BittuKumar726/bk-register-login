import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import ResponsiveAppBar from '../components/nav-bar';
import DocumentPreview from '../table/preview';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { } = this.props;
        return (<>
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage} />
                    {/* <Route exact path="/document-preview" render={() => (<>
                        <div style={{ marginBottom: '2rem' }}>
                            <ResponsiveAppBar {...this.props}/>
                        </div>
                        <DocumentPreview {...this.props} />
                    </>
                    )} /> */}
                    <Route path="/login" render={() => <LoginPage {...this.props} />} />
                    <Route path="/register" render={() => <RegisterPage {...this.props} />} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

// "repository": {
    //   "type": "git",
    //   "url": "https://github.com/cornflourblue/react-redux-registration-login-example.git"
    // },