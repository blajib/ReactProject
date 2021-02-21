import axios from 'axios'
import React from 'react'


const TO_DO_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${TO_DO_API_URL}/getAllToDos`

class ToDoDataService extends React.Component {

    render(){
        return axios.post(`${INSTRUCTOR_API_URL}`);   
    }
}

export default ToDoDataService

