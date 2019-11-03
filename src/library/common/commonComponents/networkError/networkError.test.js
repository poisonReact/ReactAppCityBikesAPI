import React from 'react'
import renderer from 'react-test-renderer'
import NetworkError from 'library/common/commonComponents/networkError/networkError'

it('render correctly NetworkError component', () => {
    const NetworkErrorComponent = renderer.create(<NetworkError />).toJSON()
    expect(NetworkErrorComponent).toMatchSnapshot()
})