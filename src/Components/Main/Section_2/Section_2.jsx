import React from 'react'
import "./Section_2.css"
import { List } from './List/List'
import { ListItem } from './ListItem/ListItem'



export const Section_2 = () => {
  return (
    <section>

    <div className="container">
        <h2 className="Biz">
            Biz qanday ishlaymiz?
        </h2>

        <p className="nullam">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
        </p>

           <List>
            <ListItem />
           </List>

        <a className="buyurtma" href="#">
            Buyurtma berish
        </a>

       
        </div>
   
</section>
  )
}
