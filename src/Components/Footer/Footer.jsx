import React from 'react'
import "./Footer.css"
import { Footer_List } from './Footer_List/Footer_List'
import { Footer_Item } from './Footer_Item/Footer_Item'
import tel from "../../Assets/img/telegram.png"
import face from "../../Assets/img/facebook.png"
import inst from "../../Assets/img/instagram.png"



export const Footer = () => {
    return (
        <footer>

            <div className="container">

                <div className="orovchi">

                    <div>
                        <h1 className="copy">
                            Copyright 2020
                        </h1>
                        <p className="footer__text">
                            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.
                        </p>
                    </div>

                    <div>
                        <h3 className="sayt">
                            Sayt sahifalari
                        </h3>

                        <Footer_List>
                            <Footer_Item />
                        </Footer_List>

                    </div>

                    <div>

                        <h3 className="internet">
                            Biz internetda
                        </h3>

                        <div className="telegram">

                            <img src={tel} alt="telegram" width="22" height="23" />

                            <p className="tele">
                                Telegram
                            </p>

                        </div>

                        <div className="telegram">
                            <img src={face} alt="telegram" width="22" height="23" />


                            <p className="tele">
                                Facebook
                            </p>

                        </div>

                        <div className="telegram">
                            <img src={inst} alt="telegram" width="22" height="23" />


                            <p className="tele">
                                Instagram
                            </p>

                        </div>

                    </div>




                </div>


            </div>


        </footer>
    )
}
