import React from "react";

const Info = (props) => {
    return (
        <ul>
            <li>
                Имя: {props.name} <br/>
                Возраст: {props.age} <br/>
                Пол: {props.sex} <br/>
            </li>
        </ul>
    )
};
export default Info;