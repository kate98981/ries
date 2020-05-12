import React, { Fragment, useEffect, useState } from "react";

const ListHouse = () => {
    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        try {
            const response = await fetch("http://localhost:5000/house")
            const jsonData = await response.json();

            setHouse(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }

    };

    useEffect(() => {
        getHouse();
    }, []);
    return (
        <div>
            
            <h1>Список объектов</h1>
            <table class="tab3">
                <tr>
                    <td>Код</td>
                    <td>Улица</td>
                    <td>Район</td>
                    <td>Этажи</td>
                    <td>Номер</td>
                    <td>Год</td>
                </tr>
     
                {house.map(house => ( 
                    <tr>
                        <td>{house.ID_House}</td>
                        <td>{house.street}</td>
                        <td>{house.area}</td>
                        <td>{house.floor}</td>
                        <td>{house.number}</td>
                        <td>{house.year}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ListHouse;