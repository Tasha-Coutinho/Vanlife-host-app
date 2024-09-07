import React from "react";
import "./Reviews.css"

export const Reviews = () =>{
  return <div>
      <div class="host-sec">
      <div class="sub-host-reviews">
        <div id="host">
          <div class="top-reviews">
            <div class="heading-text">
              <h1>Your reviews</h1>
              <p>last 30 days</p>
            </div>
         
            <div className="img-container">
            <div class="reviews-img"></div>
            </div>
          
          </div>
          <h2>Reviews (2)</h2>
          <div class="testimonial-div">
            <div class="testimonial1">
              <div class="icons">
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
              </div>
              <div class="testimonial1-text">
                <p className="testifier">Elliot <span>December 1, 2022</span></p>
                <p class="main-testimonial sm-scrn">
                  The beach bum is such as awesome van! Such as comfortable
                  trip.
                  <br />We had it for 2 weeks and there was not a single issue.
                  Super <br />clean when we picked it up and the host is very
                  comfortable and <br />understanding. Highly recommend!
                </p>

                <p class="main-testimonial bg-scrn">
                  The beach bum is such as awesome van! Such as comfortable
                  trip. We had it for 2 weeks and there <br />was not a single
                  issue. Super clean when we picked it up and the host is very
                  comfortable and <br />understanding. Highly recommend!
                </p>
              </div>
            </div>
            <div class="line">
              <hr />
            </div>
        
            <div class="testimonial2">
              <div class="icons">
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
                <i class="fa fa-star fa-lg text-yellow"></i>
              </div>
              <div class="testimonial2-text">
                <p className="testifier">Sandy <span>November 23, 2022</span></p>
                <p class="main-testimonial">
                  This is our third time using the Modest Explorer for our
                  travels
                  <br />and we love it! No complaints, absolutely perfect!
                </p>
              </div>
            </div>
            <div class="line">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};