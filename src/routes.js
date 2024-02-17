import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import RawMaterials from './pages/RawMaterials';
import NewRawMaterial from './pages/NewRawMaterial';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Login}/>
                <Route path="/login" Component={Login}/>
                <Route path="/register" Component={Register}/>
                <Route path="/rawmaterials" Component={RawMaterials}/>
                <Route path="/rawmaterials/new" Component={NewRawMaterial}/>
            </Routes>
        </BrowserRouter>
    );
}