import React, { Component } from 'react';

const Orders = () => {
    return <div class="main">
        <br /><br /><br />
        <div class="sav"><a href="/client">Создать заявку</a></div>
        <table class="tab3">
            <tr>
                <td>№</td>
                <td>Дата создания</td>
                <td>ФИО</td>
                <td>Телефон клиента</td>
                <td>Email</td>
                <td>Район</td>
                <td>Адрес</td>
                <td>Код объекта</td>
                <td>Количество комнат</td>
                <td>Этаж</td>
                <td>Площадь</td>
                <td>Цена</td>
            </tr>
        </table>
    </div>;
}

export default Orders;