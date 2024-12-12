import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import CatCard from "../../components/catCard/catCard"
import ProjectCard from "../../components/projectCard/projectCard"
import { cards, projects } from '../../data';

const Home = () => {
  return (
    <div>
      <Featured />
      <Slide slidesToShow={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className='title'>
              <img src='./img/check.png' alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className='title'>
              <img src='./img/check.png' alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className='title'>
              <img src='./img/check.png' alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className='title'>
              <img src='./img/check.png' alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className='title'>
              <img src='./img/check.png' alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          </div>
          <div className='item'>
            <video src='./img/video.mp4' controls></video>
          </div>
        </div>
      </div>
      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore liverr business</button>
          </div>
          <div className='item'>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
              id='item-img'
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4}>
        {projects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home