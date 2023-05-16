import React from 'react'
import "./rightbar.css";
import { Users } from '../../dummyData';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Rightbar({profile}) 
{
  const HomeRightbar=()=>{
    return(
      <>
      <div className='birthdayContainer'>
          <img className='birthdayImg' src={`${PF}posts/camp.png`}></img>
          <span className='birthdayText'><b>seemal Arif</b> and <b> 3 other friends</b> posted for new hirings</span>
        </div>
        <img className='rightbarAd' src={`${PF}posts/ad2.jpg`} alt=""/>
      </>
    );
  };
  const ProfileRightbar=({user})=>{
    return(
    <>
    <h4 className='rightbarTitile'>User Information</h4>
    <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoKey'>Lahore</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoKey'>Pakistan</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relashionship:</span>
            <span className='rightbarInfoKey'>Single</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Education:</span>
            <span className='rightbarInfoKey'>BS(CS)</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Institute:</span>
            <span className='rightbarInfoKey'>FAST NUCES, Lahore</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Resume:</span>
            <span className='rightbarInfoKey'>Attached Resume</span>
          </div>
    </div>
   
        
    </>)
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ?<ProfileRightbar/>: <HomeRightbar/>} 
      </div>
    </div>
  )
}

export default Rightbar
