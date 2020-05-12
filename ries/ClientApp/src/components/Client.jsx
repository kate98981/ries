import React, { Component } from 'react';

const Client = () => {
    return <div class="main">
        <br></br><br></br><br></br>
        <form>
            <table cellspacing='15'>
                <tr>
                    <td><b>ФИО* </b></td>
                    <td><input type="text"></input></td>
                    <td><div class="mod mod0">ЕЩЕ <img height="24px" src="unnamed.png"></img></div></td><td><a href="#" class="a2">Купить</a>/<a href="#" class="a1">Продать</a></td>
                </tr><tr>
                    <td><b>Телефон*</b></td>
                    <td><input type="text"></input></td>
                </tr><tr>
                    <td><b>Город* </b></td>
                    <td><input type="text"></input></td>
                </tr><tr>
                    <td><b>Почта </b></td>
                    <td><input type="text"></input></td>
                </tr><tr>
                    <td></td><td ><input id="sub1" type="submit" value="Сохранить заявку"></input></td>
                </tr>
            </table>
        </form>
    </div>
}

export default Client;