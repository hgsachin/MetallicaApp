import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { DropdownList, DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import _ from 'lodash';

// import 'react-widgets/dist/css/react-widgets.css';

import { insertTrade } from '../actions/insertTradeAction';

class TradeCreate extends Component {

    renderInputField(field) {
        const { meta: { touched, error }, value } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <small className="txt-help">{touched ? error : ''}</small>
            </div>
        )
    }

    renderDropdown({ input, data, valueField, textField }) {
        let name = input.name;
        return (
            <DropdownList {...input}
                data={data}
                onChange={input.onChange} />
        );
    }
    renderDateTimePicker({ input: { onChange, value }, showTime }) {
        Moment.locale('en');
        momentLocalizer();

        return (
            <DateTimePicker
                editFormat='DD/MM/YYYY'
                onChange={onChange}
                format='DD/MM/YYYY'
                time={showTime}
                value={!value ? null : new Date(value)}
            />
        )
    }

    onSubmit(values) {
        console.log(values);
        this.props.insertTrade(values);
    }
    render() {
        const { handleSubmit, load, pristine, reset, submitting, valid } = this.props;
        const commodities = ["AL", "ZN", "HG", "CU"];
        const Counterparties = ["LP", "BB", "SK", "KL", "PW", "SB"];
        const locations = ["BNG", "LND", "BRC", "DRT", "MIL", "AUK"];

        return (
            <div>
                <div className="alert alert-info">You can insert New trade here</div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div>
                        <label>Select Commodity</label>
                        <Field name="commodity_id" component={this.renderDropdown} data={commodities} />
                    </div>
                    <div className="form-group pt-4">
                        <label className="pr-2">Select Side</label>
                        <label className="pr-2">
                            <Field
                                name="side"
                                component="input"
                                type="radio"
                                value="BUY"
                                className="form-control"
                            />BUY
                        </label>
                        <label className="pr-2">
                            <Field
                                name="side"
                                component="input"
                                type="radio"
                                value="SELL"
                                className="form-control"
                            />SELL
                        </label>
                    </div>
                    <div>
                        <label>Select Counterparty</label>
                        <Field name="counterparty_id" component={this.renderDropdown} data={Counterparties} />
                    </div>
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
                    <div>
                        <label>Select Location</label>
                        <Field name="location_id" component={this.renderDropdown} data={locations} />
                    </div>
                    <div className="pb-3">
                        <label>Trade Date</label>
                        <Field
                            name="trade_date"
                            showTime={false}
                            component={this.renderDateTimePicker}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={pristine || submitting || !valid}>Create</button>
                    <button type="button"
                        onClick={reset}
                        className="btn btn-danger cancel-button"
                        disabled={pristine || submitting}>Cancel</button>
                </form>
            </div>
        )
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
        deleteTradeRes: state.deleteTradeRes,
        updatedTrade: state.updatedTrade,
        state
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        insertTrade: insertTrade
    }, dispatch);
}

TradeCreate = reduxForm({
    validate,
    form: 'CreateTradeForm'
})(TradeCreate);


export default connect(mapStateToProps, mapDispatchToProps)(TradeCreate);