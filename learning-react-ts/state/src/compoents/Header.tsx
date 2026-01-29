import { useState } from "react";

interface HeaderProps{
    title:string,
}

function Header({title}:HeaderProps) {

    return (
        <>
            <div>
                <h1> {title}</h1>
            </div>
        </>
    )
}

export default Header;