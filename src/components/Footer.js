import React from'react'
import {FaListAlt, FaCheckSquare,FaPlusSquare, FaTrash} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const Footer = () =>(
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" className="btn btn-outline-dark bg-light"><FaListAlt/></NavLink>
                <NavLink to="" className="btn btn-outline-dark bg-light"><FaCheckSquare/></NavLink>
                <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare/></NavLink>
            </div>
            <a href="#" className="btn btn-outline-dark bg-light"><FaTrash/></a>
        </footer>
)

export default Footer