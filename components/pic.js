import React from 'react'
import Image from 'next/image'
import pic1 from  "../public/assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
import pic2 from  "../public/assets/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"
import pic3 from  "../public/assets/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg"
function Picture() {
  return (
    <div>
     <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={pic1} className="d-block "style={{width:"100%",height:600}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 style={{fontFamily:"initial", fontWeight:"bolder"}}>First slide label</h1>
        <p style={{fontSize:22,fontWeight:"bold"}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={pic2} className="d-block "style={{width:"100%",height:600}}  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 style={{fontFamily:"initial", fontWeight:"bolder"}}>Second slide label</h1>
        <p style={{fontSize:22,fontWeight:"bold"}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={pic3}className="d-block"style={{width:"100%",height:600}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 style={{fontFamily:"initial",  fontWeight:"bolder "}}>Third slide label</h1>
        <p style={{fontSize:22,fontWeight:"bold"}}>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Picture
