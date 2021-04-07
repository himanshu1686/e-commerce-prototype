import React,{useState} from 'react'

const BeanBag = () => {
    const allitems = [
        {
            name: "Name",
            price:2500,
            discountedPrice:1000,
            discountPercent:20,
            imgUrls:['img/images.jfif','img/images.jfif','img/images.jfif']
        }
    ]

    const [items, setitems] = useState(allitems)
    return (
        items.map((item,idx)=>{
            return (
                <div className="col-6 col-md-4 col-lg-3" style={{padding:"30px"}}>
                <div className="card  item-card w-100" >
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
  <div class="carousel-inner" >
      {
      item.imgUrls.map( (imgUrl ,idx)=>{
          return (
            <div  className={(idx===0)?"carousel-item active":"carousel-item"} key={idx}>
            <img src={imgUrl} className="d-block w-100" alt="..."  />
          </div>
          )
      } )
    }
   
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                <div className="card-body info">
                  <p className="card-text">
                    <span className="title" > {item.name} </span> <br/>
                    <span className="dicounted" > 
                    {item.discountedPrice} {''} </span>
                    <span className="price" > {item.price} {''}</span>
                    <span className='discount'>
                       {item.discountPercent} {''} % OFF
                    </span>    
                    </p>
                    <button className="btn btn-dark btn-block">
                      Add To Cart
                    </button>
                </div>
                <div class="heart" >
                <i class="far fa-heart"></i> 
                </div>
              </div>
              </div>
            
            )
        })
    )
}

export default BeanBag
