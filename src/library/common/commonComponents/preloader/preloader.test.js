import React from 'react'
import renderer from 'react-test-renderer'
import Preloader from 'library/common/commonComponents/preloader/preloader'

it("render correctly preloader component", () => {
    const PreloaderComponent = renderer.create(<Preloader />).toJSON()
    expect(PreloaderComponent).toMatchSnapshot()
})