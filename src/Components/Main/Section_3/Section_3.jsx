import React from 'react'
import "./Section_3.css"


export const Section_3 = () => {
  return (
    <section className="number_3">

    <div className="container">

        <h2 className="berish">Buyurtma berish</h2>

        <p className="ex">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
        </p>

        <form>
            <input className='text' type="text" placeholder='Ismingiz' /> <br />
            <input className='tel' type="tel" placeholder='Telefon raqamingiz' /> <br />
            <select className='sel'>
                <option selected disabled>Xizmat turi</option>
            </select> <br />
            <button className='Buyurtma'>Buyurtma berish</button>
        </form>

    </div>

</section>
  )
}
