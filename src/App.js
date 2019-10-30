import React from 'react'
import { networksAPI } from './main/api'
import { Provider } from 'react-redux'
import store from './main/mainStore'


const App = () => {
  
  return (
    <Provider store={store}>
      
    
  
  <div>
  {console.log(networksAPI.getNetworks())}cvcv
  
  </div>
  </Provider>
  )
}

export default App
