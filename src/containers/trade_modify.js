import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import { tradeSelected } from '../actions/index';
import { clearDeleteNotif, deleteTrade } from '../actions/deleteTradeAction';
import { clearInsertNotif } from '../actions/insertTradeAction';
import { updateTrade, clearUpdateNotif } from '../actions/updateTradeAction';
import { tradesUpdated } from '../actions/tradesUpdatedAction';
import InsertTrade from './insert_trade';

class TradeModify extends Component {
    renderInputField(field) {
        const { meta: { touched, error }, value } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control disabled"
                    type="text"
                    disabled
                    {...field.input}
                />
                <small className="txt-help">{touched ? error : ''}</small>
            </div>
        )
    }

    enableEdit() {
        _.map(document.querySelectorAll(".form-control"), (elem) => {
            elem.classList.remove("disabled");
            elem.removeAttribute("disabled");
        })
        _.map(document.querySelectorAll(".update-button"), (elem) => {
            elem.removeAttribute("hidden");
        })
        _.map(document.querySelectorAll(".cancel-button"), (elem) => {
            elem.classList.remove("disabled");
            elem.removeAttribute("disabled");
        })
    }

    disableEdit() {
        const { reset } = this.props;
        _.map(document.querySelectorAll(".form-control"), (elem) => {
            elem.classList.add("disabled");
            elem.setAttribute("disabled", true);
        });
        _.map(document.querySelectorAll(".update-button"), (elem) => {
            elem.setAttribute("hidden", true);
        });
        _.map(document.querySelectorAll(".cancel-button"), (elem) => {
            elem.setAttribute("disabled", true);
        });
        reset();
    }

    onSubmit(values) {
        console.log(values);
        this.props.updateTrade(values);
    }
    render() {
        const { handleSubmit, load, pristine, reset, submitting, valid } = this.props;
        const trade = this.props.initialValues;
        let deleteTradeRes = this.props.deleteTradeRes;
        let updatedTrade = this.props.updatedTrade;
        if (trade && !_.isEmpty(trade) && !deleteTradeRes && !updatedTrade) {
            return (
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="ID"
                        name="_id"
                        component={this.renderInputField}
                    />
                    <div className="">
                        <input type="button"
                            onClick={this.enableEdit}
                            className="btn btn-info"
                            value="Edit" />
                        <input type="button" onClick={() => this.props.deleteTrade(trade)}
                            className="btn btn-danger" value="Delete" />
                        <input type="button"
                            onClick={() => {
                                this.props.clearUpdateNotif();
                                this.props.clearDeleteNotif();
                                this.props.tradeSelected();
                            }}
                            className="btn btn-success" value="New" />
                    </div>
                    <Field
                        label="Commodity"
                        name="commodity_id"
                        component={this.renderInputField}
                    />
                    <div>
                        <label>
                            <Field
                                name="side"
                                component="input"
                                type="radio"
                                value="BUY"
                                className="form-control disabled"
                                disabled
                            />{' '} BUY
                    </label>
                        <label>
                            <Field
                                name="side"
                                component="input"
                                type="radio"
                                value="SELL"
                                className="form-control disabled"
                                disabled
                            />{' '} SELL
                    </label>
                    </div>
                    <Field
                        label="Counterparty"
                        name="counterparty_id"
                        component={this.renderInputField}
                    />
                    <Field
                        label="Price"
                        name="price"
                        component={this.renderInputField}
                    />
                    <Field
                        label="Quantity"
                        name="qty"
                        component={this.renderInputField}
                    />
                    <Field
                        label="Location"
                        name="location_id"
                        component={this.renderInputField}
                    />
                    <Field
                        label="Trade Date"
                        name="trade_date"
                        component={this.renderInputField}
                    />
                    <button type="submit" className="btn btn-primary" disabled={pristine || submitting || !valid}>Update</button>
                    <button type="button"
                        onClick={this.disableEdit.bind(this)}
                        onLoad={this.disableEdit}
                        className="btn btn-danger disabled cancel-button">Cancel</button>
                </form>
            )
        } else if (this.props.deleteTradeRes) {
            return (
                <div className="alert alert-danger"
                    role="alert"
                    onClick={() => {
                        this.props.clearDeleteNotif();
                        this.props.tradeSelected();
                        this.props.tradesUpdated();
                    }}>
                    {`Deleted trade with id : ${this.props.deleteTradeRes._id} \n click to refresh list`}
                </div>
            )
        } else if (this.props.updatedTrade) {
            return (
                <div className="alert alert-success"
                    role="alert"
                    onClick={() => {
                        this.props.clearUpdateNotif();
                        this.props.tradeSelected();
                        this.props.tradesUpdated();
                    }}>
                    {`Updated trade with id : ${this.props.updatedTrade._id}.\n click to refresh list`}
                </div>
            )
        } else if (this.props.insertedTrade) {
            return (
                <div className="alert alert-success"
                    role="alert"
                    onClick={() => {
                        this.props.clearInsertNotif();
                        this.props.tradesUpdated();
                    }}>
                    {`Inserted new trade with id : ${this.props.insertedTrade._id}.\n click to refresh list`}
                </div>
            )
        } else {
            return <InsertTrade />
        }
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.commodity_id) {
        errors.commodity_id = 'Enter a Commodity';
    }
    return errors;
}

function mapStateToProps(state) {
    return ({
        initialValues: state.selectedTrade,
        enableReinitialize: true,
        deleteTradeRes: state.deleteTradeRes,
        updatedTrade: state.updatedTrade,
        insertedTrade: state.insertedTrade,
        state
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteTrade: deleteTrade,
        tradesUpdated: tradesUpdated,
        clearDeleteNotif: clearDeleteNotif,
        clearUpdateNotif: clearUpdateNotif,
        tradeSelected: tradeSelected,
        updateTrade: updateTrade,
        clearInsertNotif: clearInsertNotif,
    }, dispatch);
}

TradeModify = reduxForm({
    validate,
    form: 'EditTradeForm'
})(TradeModify)


export default connect(mapStateToProps, mapDispatchToProps)(TradeModify);