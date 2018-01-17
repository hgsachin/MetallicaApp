import React, { Component } from 'react';

export default class NotificationList extends Component {
    constructor(props) {
        super(props);
        this.renderNotificationList = this.renderNotificationList.bind(this);
    }
    renderNotificationList() {
        if (this.props.metals) {
            return (
                this.props.metals.map((metal, key) => {
                    return (
                        <div className={key == 0 ? 'carousel-item active' : 'carousel-item'} key={metal._id}>
                            <table className="table col-sm-5 table-sm table-secondary">
                                <thead className="align-centre">
                                    <tr>
                                        <th scope="col">Commodity</th>
                                        <th scope="col">Counterparty</th>
                                        <th scope="col">Price Per MT</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody className="align-center">
                                    <tr key={metal._id}>
                                        <td>{metal.CommodityId}</td>
                                        <td>{metal.CounterpartyId}</td>
                                        <td>{metal.PricePerMT}</td>
                                        <td>{metal.LocationID}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    );
                })
            );
        } else {
            return <div><h1>Notification Ticker is Loading....</h1></div>
        }
    }
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.renderNotificationList()}
                </div>
            </div>
        );
    }
}