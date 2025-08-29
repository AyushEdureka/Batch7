import React from "react";
import './ProductsStyle.css'

function Products(){

    


    return(
        <div className="products">

          <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhZHBob25lfGVufDB8fDB8fHww" />
            <h3>Headphone</h3>
            <p>$59.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>

           <div className="card">
            <img src="https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D" />
            <h3>Smartwatch</h3>
            <p>$20.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>


           <div className="card">
            <img src="https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D" />
            <h3>SmartPhone</h3>
            <p>$79.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>


           <div className="card">
            <img src="https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D" />
            <h3>Hoodie</h3>
            <p>$18.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>


           <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" />
            <h3>Laptop</h3>
            <p>$159.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>

           <div className="card">
            <img src="https://images.unsplash.com/photo-1634624943458-3e29f132d4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmlrZVNob2VzfGVufDB8fDB8fHww" />
            <h3>Nike</h3>
            <p>$9.88</p>
            <button className="buy-btn">Buy Now</button>
          </div>

        </div>
    )

}
export default Products