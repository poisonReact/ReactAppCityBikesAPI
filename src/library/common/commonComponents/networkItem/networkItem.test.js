import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import NetworkItem from 'library/common/commonComponents/networkItem/networkItem'

it('render correctly NetworkItem component', () => {
    const NetworkItemComponent = renderer.create(<NetworkItem />).toJSON()
    expect(NetworkItemComponent).toMatchSnapshot()
})
/*
it("check prop network by default", () => {
    const NetworkItemComponent = mount(<NetworkItem />);
    expect(NetworkItemComponent.find("p").text()).toEqual("No Data");
});
*/
it('should render a document title', () => {
    const wrapper = shallow(
        <NetworkItem />
    );
    expect(wrapper.prop('network')).toEqual({company: ['No Data'], id: 'No Data'});
});