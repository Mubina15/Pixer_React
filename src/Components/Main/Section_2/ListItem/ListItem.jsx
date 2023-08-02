import React from 'react'
import "./ListItem.css"
import document from "../../../../Assets/img/document.png"
import fayls from "../../../../Assets/img/fayls.png"
import vaqt from "../../../../Assets/img/vaqt.png"
import winner from "../../../../Assets/img/winner.png"
import malumot from "../../../../Assets/img/malumot.png"

export const ListItem = () => {
    return (
        <>
            <li className="document__item">
                <img src={document} alt="document" width="300" height="278" />
                <div>
                    <h3 className="money">Talablarni aniqlab chiqamiz</h3>
                    <p className="room">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </li>
            <li className="document__item">
                <img src={fayls} alt="document" width="300" height="224" />

                <div>
                    <h3 className="money">Bir necha yechimlarni taklif qilamiz</h3>
                    <p className="room__2">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </li>
            <li className="document__item">
                <img src={vaqt} alt="document" width="300" height="258" />

                <div>
                    <h3 className="money">Loyiha uchun vaqt belgilaymiz</h3>
                    <p className="room__3">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </li>
            <li className="document__item">
                <img src={winner} alt="document" width="300" height="171" />

                <div>
                    <h3 className="money">A’lo sifat bilan bajarib topshiramiz</h3>
                    <p className="room__4">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </li>
            <li className="document__item">
                <img src={malumot} alt="document" width="300" height="232" />

                <div>
                    <h3 className="money">Qo’llab-quvvatlab boramiz</h3>
                    <p className="room__5">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                </div>
            </li>
        </>
    )
}
