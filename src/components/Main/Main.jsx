import React from 'react'
import "./Main.css"
const Main = () => {
  return (
    <div className='Main'>
      <div className='main-links'>
        <div className='cate'>
          <span>All posts(32)</span>
          <span>Articles</span>
          <span>Events</span>
          <span>Jobs</span>
        </div>
        <div>
          <span className='main-btn'>Write a Post</span>
        </div>
        
      </div>
      <div className='main-grid'>
        <div className="contents">
          
          <div className="content">
            <div className="content-img">
            </div>
            <div className="content-content">
              <div className='type'>Article</div>
              <h2 className='content-h'>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
              <div className="desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
              <div className='user'>
                <div>
                  <img src="" alt="" />
                  <span className='name'>Sarthak Kamra</span>
                </div>
                <div>
                  <span className='views'>1.4k views</span>
                  <a href="">Share</a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-img">
            </div>
            <div className="content-content">
              <div className='type'>Article</div>
              <h2 className='content-h'>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
              <div className="desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
              <div className='user'>
                <div>
                  <img src="" alt="" />
                  <span className='name'>Sarthak Kamra</span>
                </div>
                <div>
                  <span className='views'>1.4k views</span>
                  <a href="">Share</a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-img">
            </div>
            <div className="content-content">
              <div className='type'>Article</div>
              <h2 className='content-h'>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
              <div className="desc">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
              <div className='user'>
                <div>
                  <img src="" alt="" />
                  <span className='name'>Sarthak Kamra</span>
                </div>
                <div>
                  <span className='views'>1.4k views</span>
                  <a href="">Share</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="location">
        <div className='loc'>
         Noida, India
        </div>
        <div>
        Your location will help us serve better and extend a personalised experience.
        </div>
        </div>
      </div>
    </div>
  )
}

export default Main