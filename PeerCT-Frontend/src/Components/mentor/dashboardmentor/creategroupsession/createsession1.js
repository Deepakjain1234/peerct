import React, { useEffect,useState } from 'react'
import img1 from '../../../../assets/img/social/alarm.png'
import img2 from '../../../../assets/img/social/setting.png'
import img3 from '../../../../assets/img/social/messege.png'
import img4 from '../../../../assets/img/social/Rectangle 27.png'
import logo from '../../../../assets/img/horizontal-logo.png'
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import './createsession.css'
import { Link } from 'react-router-dom'
const fileTypes = ["JPG", "PNG", "GIF"];





export const Createsession = () => {
  const [file, setFile] = useState(null);
  const [urlimg1, seturlimg1] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
  const [sessionname,setsessionname]=useState();
  const [sessionintro,setsessionintro]=useState();
  const handleChange = (file) => {
    setFile(file);
  };
  React.useEffect(() => {
    submitHandler1(file)

}, [file])
  const submitHandler1 = async (file) => {


    if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);

        try {
            await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
                data: data,
            });
        } catch (err) { }

        seturlimg1(`${process.env.REACT_APP_BACKEND_URL}/images/${file.name}`)


    }
}

  const handlenext=()=>
  {
    localStorage.setItem('sessionname',sessionname);
    localStorage.setItem('sessionintro',sessionintro);
    localStorage.setItem('sessionurl',urlimg1);
  }

  return (
    <>
      <section>
        <div className='dashboard-navbar'>
          <img className='logo-img-size' src={logo} alt="" />
          <input type="text" placeholder='Search' />
          <div className='right-navbar'>
            <div className='navbar-icon-white'><img src={img1} alt="" /></div>
            <div className='navbar-icon-white'><img src={img2} alt="" /></div>
            <div className='navbar-icon-white'><img src={img3} alt="" /></div>
            <div className='avtar-icon'><img src={img4} alt="" /></div>
            <button>Create session</button>
          </div>

        </div>

        <div className='create-session-main'>
          <div className='create-session-inner'>
            <div className='back-box-upper'><h3>Back to Group Session</h3></div>
            <div className='create-session-head'><h2>Hey, Lets get started mentoring in groups</h2>

              <h5>What is this group session about?</h5></div>
            <div className='create-session-form'>
              <div className='create-session-form-upper'>
                <div className='create-session-left'>
                  <div className='create-session-input'>
                    <p>Session Name</p>
                    <input type="text" placeholder='Eg: Design review' onChange={(event)=>setsessionname(event.target.value)} />
                  </div>
                  <div className='create-session-input'>
                    <p>Session description and agenda</p>
                    <textarea name="" id="" cols="30" rows="10" onChange={(event)=>setsessionintro(event.target.value)}></textarea>
                  </div>
                </div>
                <div className='create-session-right'>
                  <p>Add a profile photo so people can find you</p>
                  <div class="drop-zone">
                  <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                  </div>
                </div>
              </div>
              <div className='create-session-lower'>
                <div >
                  <button className='back-button-create'> Back</button>
                  <Link to="/mentor/dashboard/createsession2"><button onClick={()=>handlenext()} className='next-button-create'>Next</button></Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}