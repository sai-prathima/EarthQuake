import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import EarthQuakeListing from './EarthQuakeListing'
import EarthQuakeDetils from './EarthQuakeDetails'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import { mystore } from '../../Redux/Store/EarthQuakeStore'
const navigation = {
    navigate: jest.fn()
}

test('render check', () => {

    const tree = shallow(
        <Provider store={mystore}>
            <EarthQuakeListing navigation={navigation} />
        </Provider>
    )

})