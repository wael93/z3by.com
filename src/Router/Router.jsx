import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Paths from './Paths'
import Nav from '../components/Nav'

export default function Router() {
  return (
    <BrowserRouter>
        <Nav />

        {
            Paths.map((path, i) => (
            <Route path={path.path} component={path.component} />
            ))
        }
    </BrowserRouter>
  )
}
