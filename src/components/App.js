import React from 'react'
import ToDoList from './ToDoList'
import Footer from './Footer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddTask from './AddTask'
import initialData from '../initialData'
import ToDoDataService from './service/ToDoDataService'

class App extends React.Component{
    render(){
      return(
        <section id="todo">
            <BrowserRouter>
                <Switch>
                    <Route path="/add-task" component={AddTask}/> 
                    <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData}/>}/>
                    <Route path="/get-all" component={ToDoDataService}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </section>
      )
    }
  }

  export default App