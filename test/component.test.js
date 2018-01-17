import React from 'react';
import expect from 'expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/app';
import NotificationList from '../src/components/notification_list';

configure({ adapter: new Adapter() });

const metals = [{
    "_id": "123456",
    "CommodityId": "AL",
    "CounterpartyId": "LP",
    "PricePerMT": "1536",
    "LocationID": "BNG"
}]

describe('<App />', () => {
    it('should contain 5 div tags', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find('div')).toHaveLength(5);
    });
});
describe('<NotificationList />', () => {
    it('should contain a table', () => {
        let wrapper = shallow(<NotificationList metals={metals} />);
        expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should not contain a table', () => {
        let wrapper = shallow(<NotificationList />);
        expect(wrapper.find('table')).toHaveLength(0);
    });
});