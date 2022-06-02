import React from "react";

interface DinamicAct {
    text: string,
    anotherText: string;
}

const TypeHobbies = (props: DinamicAct): any => {
    return (
        <p> It's me {props.text} {props.anotherText}</p>
    );
}

export default TypeHobbies;