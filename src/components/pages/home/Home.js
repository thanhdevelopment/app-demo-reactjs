import React, { Component } from 'react';
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Col, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../../actions/status/Status.Actions';

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
                <Form>
                    <FormGroup row>
                        <Label md={2}>SELECT OPTION:</Label>
                        <Col md={3}>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
                                <DropdownToggle caret>
                                    <div style={{ fontSize: "10px", fontWeight: "600", textAlign: "left" }}>STATUS</div>
                                    <span>{!values.length ? "SELECT OPTION" : values.join(",")}                                    </span>
                                </DropdownToggle>
                                <DropdownMenu right style={{ padding: "10px" }}>
                                    {
                                        !status ? null : status.map(option => {
                                            return (
                                                <div className="form-check" key={option.Id}>
                                                    <input onClick={() => this.selectItemById(option.Id)} className="form-check-input" type="checkbox"
                                                        defaultChecked={option.Checked}
                                                        name={option.Id}
                                                        value={option.Id} />
                                                    <label className="form-check-label">{option.Name}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2}>result:</Label>
                        <Col md={3}>
                            <Input type="result" name="result" disabled
                                defaultValue={values.join(",")} />
                        </Col>
                        <Col md={2}>
                            <Button onClick={() => this.refreshListStatus()}>Reset</Button>
                        </Col>
                    </FormGroup>
                </Form>

                <div className="app-list--item__result">
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);