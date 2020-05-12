import React, { Component } from 'react';
import { BrowserRouter, Router } from "react-router-dom";
import Client from './Client';

const Sidebar = () => {
    return <div>
        <br></br>
        <p><div class="d1 d111 d"><a href="/client/dann">Данные о клиенте</a></div>
            <div class="d1 d222 d"><a href="/client/potrebnost">Потребность клиента</a></div>
            <div class="d1 d333 d"><a href="/client/doc">Документы</a></div>
        </p>
    </div>
}

export default Sidebar;