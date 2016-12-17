import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import store from './store'
import actions from './actions'
import routes from './routes'

render(
    <h1>react-redux-firebase</h1>,
    document.getElementById("root")
)
