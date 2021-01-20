import React from 'react'


const Onephoto = ({state}) => {
    return (
        <div >
            <div className="card" style={{width: "18rem"}}>
  <img src={state.Url} className="card-img-top" alt="..." style={{height:"10rem"}}/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        
    )
}

export default Onephoto
