import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import ResponsiveAppBar from '../components/nav-bar';
import StickyHeadTable from '../table';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }


    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (<>
            <div style={{ marginBottom: '2rem' }}>
                <ResponsiveAppBar user={user}/>
            </div>
            <div className="col-md-10 col-md-offset-1">
                <div>
                    <StickyHeadTable />
                </div>
            </div>
        </>);
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
