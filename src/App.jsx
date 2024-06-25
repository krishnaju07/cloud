import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersList from './pages/userList/index.jsx'

function App() {
  const get_store = store();

  return (
    <>
      <Provider store={get_store}>
        <UsersList />
      </Provider>
    </>
  )
}

export default App
