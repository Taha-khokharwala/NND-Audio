'use client'
import { Image, Slider } from "antd"
import { BsArrowRightCircle } from "react-icons/bs"
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { PiPlayCircleLight } from "react-icons/pi";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { HiOutlineVolumeUp } from "react-icons/hi";
import { FaCircleArrowUp, FaShuffle } from "react-icons/fa6";
import { LuRepeat } from "react-icons/lu";
import { useState } from "react";



const FooterMusic = () => {
  const [showData, handelData] = useState(null)

  const ShowData = () => {
    const newText = "hii";
    handelData(newText)
  }
  return (
    <div className="footer-player">
      <div className="footer-music-player">
        <div className="style-footer-image">
          <Image className="footer-image-style" src="/r_music1.jpg" alt="footer-image" width={50} height={50} />
        </div>
        <div className="footer-text-style">
          <h1 className="footer-text">Satisfya</h1>
          <h1 className="footer-text2">Play</h1>
        </div>
        <div className="footer-right-play-icon">
          <BsArrowRightCircle />
        </div>
      </div>

      <div className="player-controler">
        <div className="footer-right-icon fs-6">
          <IoPlaySkipBackOutline />
        </div>
        <div className="footer-right-icon fs-1 ">
          <PiPlayCircleLight />
        </div>
        <div className="footer-right-icon fs-6 ">
          <IoPlaySkipForwardOutline />
        </div>
      </div>
      <div className="music-adjest-controler">
        <div className="range-style">
          <input type="range" className="range-tracker"
            defaultValue={0}>
          </input>
        </div>
        <div className="footer-icone-after-tracker">
          <div className="footer-right-icon fs-1">
            <HiOutlineVolumeUp />
          </div>
          <div className="footer-right-icon ">
            <FaShuffle />
          </div>
          <div className="footer-right-icon ">
            <LuRepeat />
          </div>
        </div>
        <div className="audio-quality">
          <select id="audio-quality">
            <option className="footer-option" value="" disabled selected>Quality</option>
            <option className="footer-option" value="low">HD</option>
            <option className="footer-option" value="low">HIGH</option>
            <option className="footer-option" value="medium">MEDIUM</option>
            <option className="footer-option" value="high">LOW</option>
          </select>
        </div>
      </div>
      <div>
        <div className="hover-box-button">
          <button className="button-style" onClick={ShowData}>
            <FaCircleArrowUp /> Queue
          </button>
        </div>
        {showData && (
          <div className="custom-box">
            {showData}
          </div>
        )}
      </div>
    </div>
  )
}

export default FooterMusic
