import React, { Component } from 'react';

const Potrebnost = () => {
    return <div class="main pot">
        <br /><br /><br />
        <form>
            <table cellspacing="15">
                <tr>
                    <td><b>Год постройки </b></td>
                    <td><input type="text" /></td>
                </tr><tr>
                    <td><b>Район</b></td>
                    <td><input type="text" /></td>
                </tr><tr>
                    <td><b>Улица </b></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><b>Количество комнат </b></td>
                    <td><input type="text" /></td>
                </tr>
                    <tr>
                        <td><b>Цена </b></td>
                        <td><input type="text" /></td>
                    </tr>
                        <tr>
                            <td><b>Этаж </b></td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td></td><td ><input id="sub1" type="submit" value="Сохранить" /></td>
                        </tr>
        </table>
    </form>
</div>
}

export default Potrebnost;