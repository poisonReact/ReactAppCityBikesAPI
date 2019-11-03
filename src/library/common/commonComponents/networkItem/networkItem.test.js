import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import NetworkItem from 'library/common/commonComponents/networkItem/networkItem'

it('render correctly NetworkItem component', () => {
    const NetworkItemComponent = renderer.create(<NetworkItem />).toJSON()
    expect(NetworkItemComponent).toMatchSnapshot()
})

it('check prop networkCompany by default', () => {
    const NetworkItemComponent = mount(<NetworkItem />)
    expect(NetworkItemComponent.find('.networkItemName').text()).toEqual('No Data')
})

it('check prop networkId by default', () => {
    const NetworkItemComponent = mount(<NetworkItem />)
    expect(NetworkItemComponent.find('.networkItemId').text()).toEqual('(No Data)')
})

it('check prop networkCompany', () => {
    const props = {
        networkCompany: 'Some company'
    }
    const NetworkItemComponent = mount(<NetworkItem {...props} />)
    expect(NetworkItemComponent.find('.networkItemName').text()).toEqual('Some company')
})

it('check prop networkId', () => {
    const props = {
        networkId: 'Some-id'
    }
    const NetworkItemComponent = mount(<NetworkItem {...props} />)
    expect(NetworkItemComponent.find('.networkItemId').text()).toEqual('(Some id)')
})

it('check color NetworkItem when network is active', () => {
    const props = {
        network: { company: ['Some company'], id: 'Some-id' },
        activeNetwork: { company: ['Some company'], id: 'Some-id' }
    }
    const NetworkItemComponent = mount(<NetworkItem {...props} />)
    expect(NetworkItemComponent.find('.networkItemWrapper').prop('style')).toHaveProperty('color', 'red')
})

it('check color NetworkItem when network is inactive', () => {
    const props = {
        network: { company: ['Some company'], id: 'Some-id' },
        activeNetwork: { company: ['Some other company '], id: 'Some-other-id' }
    }
    const NetworkItemComponent = mount(<NetworkItem {...props} />)
    expect(NetworkItemComponent.find('.networkItemWrapper').prop('style')).toHaveProperty('color', 'black')
})
