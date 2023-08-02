import React from 'react'
import "./Header.css"
import Pixer from "../../Assets/img/Pixer.svg"
import { List } from './List/List'
import { ItemList } from './ItemList/ItemList'

export const Header = () => {
    return (
        <header>

            <div className="container">
                <div className="header__div">
                    <a href="#">
                        <img src={Pixer} alt="logo" width="58" height="20" />
                    </a>

                    <List>
                        <ItemList />
                    </List>

                    <a className="number" href="+998909213711">
                        +998 90 921 37 11
                    </a>

                </div>
            </div>


        </header>
    )
}
