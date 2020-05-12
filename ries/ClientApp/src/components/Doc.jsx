import React, { Component } from 'react';

const Doc = () => {
    return <div class="main pot">
        <br /><br /><br />
        <form>
            <table cellspacing="15">
                <tr>
                    <td><b>ФИО </b></td>
                    <td><input type="text" /></td>
                </tr><tr>
                    <td><b>Телефон</b></td>
                    <td><input type="text" /></td>
                </tr><tr>
                    <td><b>Дата заключения сделки в рег.палате </b></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><b>Дата задатка </b></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td></td><td ><input id="sub1" type="submit" value="Сохранить" /></td>
                </tr>
            </table>
        </form>
    </div>
}

export default Doc;