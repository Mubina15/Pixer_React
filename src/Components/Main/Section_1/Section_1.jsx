import React from 'react'
import "./Section_1.css"
import malumot from "../../../Assets/img/malumotnoma.png"
import robot from "../../../Assets/img/robot.png"
import smm from "../../../Assets/img/smm.png"
import vitamins from "../../../Assets/img/vitamins.png"
import compyuter from "../../../Assets/img/compyuter.png"


export const Section_1 = () => {
    return (
        <section>
            <div className="container">
                <div className="main__div">

                    <h3 className="main__title">
                        Xizmatlar
                    </h3>

                    <div >
                        <p className="main__text">
                            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                        </p>
                    </div>

                    <div className="dad">
                        <div className="card">
                            <img src={malumot} alt="malumotnoma" width="202" height="130" />

                            <h3 className="card__title">
                                Vebsayt tuzish
                            </h3>

                            <p className="card__text">
                                lorem ipsum
                            </p>

                        </div>
                        <div className="card">
                            <img src={robot} alt="malumotnoma" width="222" height="130" />


                            <h3 className="card__title">
                                Telegram bot
                            </h3>

                            <p className="card__text">
                                lorem ipsum
                            </p>

                        </div>
                        <div className="card">
                            <img src={smm} alt="malumotnoma" width="176" height="130" />


                            <h3 className="card__title">
                                SMM
                            </h3>

                            <p className="card__text">
                                lorem ipsum
                            </p>

                        </div>
                        <div className='display'>
                        <div className="card">
                            <img src={vitamins} alt="malumotnoma" width="178" height="130" />


                            <h3 className="card__title">
                                Grafik dizayn
                            </h3>

                            <p className="card__text">
                                lorem ipsum
                            </p>

                        </div>
                        <div className="card">
                            <img src={compyuter} alt="malumotnoma" width="169" height="130" />


                            <h3 className="card__title">
                                Vebsayt tuzish
                            </h3>

                            <p className="card__text">
                                lorem ipsum
                            </p>

                        </div>
                        </div>
                    </div>

                    <div className="big">
                        <a className="xizmatlar" href="#">
                            Buyurtma berish
                        </a>

                        <a className="sahifa" href="#">
                            Xizmatlar sahifasiga o’tish
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
