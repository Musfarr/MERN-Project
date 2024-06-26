import React, { useState } from 'react'

import axios from 'axios'
import Header from '../common/header'
import h from '../common/3.jpg'

const Home = () => {

  const [datalist ,setdatalist] = useState([])
  const[flag , setflag] = useState(true)



  const X = () => {
    var x = [10 , 20 ,30, 40 , 50 ]
    

    var tmp = x[x.length - 1]
    for( var i = 1 ; i < X.length ; i++) {
        x[i] = x[i-1];

    }
    x[0] = tmp


  }

  // const handledata = () =>{
  //   datalist.map( data ,index )
  // }

  const api = () =>{

    axios({
      method:'get',
      url : 'http://localhost:8000/api/goals'
    })
    .then((res)=> {
      
      setdatalist(res.data)
      setflag(true)
      console.log(datalist)
    } )
    
  }
  

  return (
    <>
      <Header/>
      <section class="slider">
      <div class="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
        <div class="slide-item align-v-h bg-overlay bg-overlay-gradient">
          <div class="bg-img"><img src={h} alt="slide img"/></div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div class="slide__content">
                  <h2 class="slide__title">We Run All Kinds Of IT Services That Vow Your Success</h2>
                  <p class="slide__desc">We are experienced professionals who understand that It services is
                    changing,
                    and are true partners who care about your success. Our team provides a consultative approach on
                    emerging technology.</p>
                  <a href="#" class="btn btn__primary btn__icon mr-30">
                    <span>More About Us</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                  <a href="projects-grid.html" class="btn btn__white">Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-item align-v-h bg-overlay bg-overlay-gradient">
          <div class="bg-img"><img src={h} alt="slide img"/></div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div class="slide__content">
                  <h2 class="slide__title">Keep Business Safe And Ensure High Availability.</h2>
                  <p class="slide__desc">We are experienced professionals who understand that It services is
                    changing,
                    and are true partners who care about your success. Our team provides a consultative approach on
                    emerging technology.</p>
                  <a href="#" class="btn btn__primary btn__icon mr-30">
                    <span>More About Us</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                  <a href="projects-grid.html" class="btn btn__white">Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
  )
}

export default Home