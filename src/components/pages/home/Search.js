import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/status/Status.Actions';
let keypress;

class Search extends Component {
    findStatusByKeyword = (e) => {
        e.preventDefault();
        const value = e.target.value;
        clearTimeout(keypress);
        keypress = setTimeout(() => {
            this.props.viewListStatusRequest(value)
        }, 400);
    }
    render() {
        return (
            <div className="">
                <label className="dropdown--label__status">STATUS</label>
                <div className="app-form-group">
                    <i className="fa fa-search"></i>
                    <input onChange={(e) => this.findStatusByKeyword(e)} className="form-control" type="text" />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        viewListStatusRequest: (keyword) => dispatch(actions.viewListStatusRequest(keyword))
    }
}


export default connect(null, mapDispatchToProps)(Search);