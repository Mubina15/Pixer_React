import React from 'react'
import "./Intro.css"

export const Intro = () => {

  return (
    <intro>

      <div className='container'>
        <div className="intro__div">

          <div className="content">

            <h1 className="intro__title">
              Biznesingizni keyingi bosqichga olib chiqing
            </h1>

            <p className="intro__text">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>

            <a className="xizmatlar" href="#">
              Xizmatlar bilan tanishish
            </a>

          </div>
          <div className="video">

          

          <iframe className="video" width="458" height="258" src="https://www.youtube.com/embed/b9eMGE7QtTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

        </div>
      </div>

    </intro>
  )
}
