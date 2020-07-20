import {Switch, Route} from 'react-router-dom'
import GlobalFeed from './globalFeed'
import Article from './article'
import React from 'react'
import Authentication from './authentication'


const Pages =  ()=>{
  return(
    <Switch>
      <Route path={'/'} component={GlobalFeed} exact/>
      <Route path={'/login'} component={Authentication} />
      <Route path={'/register'} component={Authentication} />
      <Route path={'/articles/'} component={Article}/>
    </Switch>
  )
}

export default Pages
