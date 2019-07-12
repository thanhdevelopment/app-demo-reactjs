import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routers from '../Routers';

class Layout extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <div className="app-header">
                    {/* begin:: header navigation */}
                    {/* end:: header navigation */}
                </div>
                <div className="app-content" style={{ padding: "20px" }}>
                    <Switch>
                        {
                            routers.map((route, index) => {
                                return <Route key={index} path={route.path} exact component={route.component} />
                            })
                        }
                    </Switch>
                </div>
                <div className="app-footer">
                    {/* begin:: footer */}
                    {/* end:: footer */}
                </div>
            </div>
        )
    }
}

export default withRouter(Layout);