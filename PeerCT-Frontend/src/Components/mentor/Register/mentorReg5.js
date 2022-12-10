import React, { useEffect,useState } from 'react'
import './mentorreg.css'

import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { Navbar } from '../Common/Navbar/Navbar';


const fileTypes = ["JPG", "PNG", "GIF"];

export const Registermentor5 = () => {

  const [file, setFile] = useState(null);
  const [urlimg1, seturlimg1] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
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
const handlesubmit=()=>{

  let companyid=localStorage.getItem('company1');
  let role=localStorage.getItem('jobtitle');
  let bio=localStorage.getItem('mentoreintro');
  let domain=localStorage.getItem('mentordomain');
  let experience=localStorage.getItem('mentorexperience');
  let language=localStorage.getItem('mentorlanguage');
  let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiZGVlcGFrIiwiZW1haWwiOiIxNSIsImNvbnRhY3QiOm51bGwsImNpdHkiOm51bGwsInN0YXRlIjpudWxsLCJhZGRyZXNzIjpudWxsLCJ1c2VyX2lkIjpudWxsLCJjb2xsZWdlX2lkIjpudWxsLCJ0eXBlIjpudWxsLCJncmFkX3llYXIiOm51bGwsInBhc3N3b3JkIjoiJDJiJDA1JDJiM2I1eWJZMlg5V3hRNWEuYVMvOWVLcTFwWkFETDRNbDNKcjhyWGQ4anJWODZJekZvVzUyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yMFQxODo0NzoxMS41MzBaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yMFQxODo0NzoxMS41MzBaIn0sImlhdCI6MTY1NTc1MTUzM30.JdhbPUMRHeCtBpwnIXGMYSNX_jOuhqtn7OsPE2wSXzE'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/create`, {
    name: "mentor name",
    company_id:32,
    role:role,
    bio:bio,
    approve:false,
    experience:parseInt(experience),
    image_url:urlimg1,
    language:language,
    domain:domain

  },config)
  .then(function (response) {
    alert("Apply sucessfully ! Wait for approve")
    
  })
  .catch(function (error) {
    console.log(error);
  });

}
      
    return (
        <>
        <Navbar/>
            <section className='register-mentor-main'>
                <div className='inner-reister-mentor'>
                    <div className='upper-mentor-reg'>
                        <div>
                            <h4>Step 4 of 5</h4>
                            <h2>Heading</h2>
                        </div>

                    </div>
                    <div className='midle-mentor-reg'>
                        <div><p>Add your profile photo so people can find you</p>
                            
                            <div class="drop-zone" >
                              <img  src={urlimg1} alt="" />
                            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                            </div>

                        </div>


                    </div>
                    <div className='lower-mentor-reg'>
                        <h2 >Back</h2>
                        <button onClick={() => handlesubmit()}>Submit</button>
                    </div>

                </div>
            </section>
        </>
    )
}