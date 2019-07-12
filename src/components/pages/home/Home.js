import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions/status/Status.Actions';
import { ListStatus } from './ListStatus';
import Search from './Search';
import './styles.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount = () => this.props.viewListStatusRequest();

    selectItemById = (Id) => this.props.selectStatusRequest(Id);

    refreshListStatus = () => this.props.refreshListStatusRequest();

    render() {
        const { status } = this.props.data;
        const values = [];
        if (status) status.map(option => {
            if (option.Checked === true) values.push(option.Name)
        });

        return (
            <div className="app-content__wrapper">
                <div className="form">
                    <div className="app-form-group form-group row">
                        <label className="col-md-2 app--form__label">Search Option:</label>
                        <div className="col-md-3">
                            {/* begin::dropdown */}
                            <div className="dropdown">
                                <button className="btn btn-outline-light text-dark dropdown-toggle" data-toggle="dropdown">
                                    <div className="app--label__status">STATUS:</div>
                                    {!values.length ? "SELECT OPTION" : values.join(",")}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ margin: "5px 0" }}>
                                    <Search></Search>
                                    <ListStatus status={status} selectItemById={this.selectItemById} />
                                </div>
                            </div>
                            {/* end::dropdown */}
                        </div>
                    </div>
                    <div className="app-form-group form-group row">
                        <label className="col-md-2 app--form__label-disabled">Results:</label>
                        <div className="col-md-2 form-group">
                            <input className="form-control" type="text" defaultValue={values.join(",")} disabled />
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn--outline-reset" onClick={() => this.refreshListStatus()}>
                                <i className="fa fa-refresh"></i>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.status,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        viewListStatusRequest: () => dispatch(actions.viewListStatusRequest()),
        selectStatusRequest: (Id) => dispatch(actions.selectStatusRequest(Id)),
        refreshListStatusRequest: () => dispatch(actions.refreshListStatusRequest())

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));