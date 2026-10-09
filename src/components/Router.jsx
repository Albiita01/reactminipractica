import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './HomeComponent';
import DoctoresEspecialidad from './DoctoresEspecialidad';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomeComponent />}></Route>
                    <Route path='/doctores' element={<DoctoresEspecialidad />}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
