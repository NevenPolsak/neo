import React from 'react'
import "./Subscribe.css"

function Subscribe() {
  return (
    <div className='subscribe' name="subscribe">
      <div className="content">
                <h2>Join NEO Community</h2>
                <form action="https://formbold.com/s/oDjx9" method="POST">
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Yes, I agree to receive email communications from NEO.</p>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Subscribe
