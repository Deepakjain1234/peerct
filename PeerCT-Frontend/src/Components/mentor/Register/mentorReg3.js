import React, { useEffect, useState } from 'react'
import './mentorreg.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Navbar } from '../Common/Navbar/Navbar'


export const Registermentor3 = () => {
    const [formFields, setFormFields] = useState([
        { },
    ])
    const [Services,setServices] = useState([ ])
    // useEffect(() =>{
    //     axios.get("${process.env.REACT_APP_BACKEND_URL}/api/services").then((response)=>{setServices(response)}).catch((error)=>{console.log(error)});
    // })

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        let object = {

        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }
    console.log(formFields)

    const handlenext=()=>
    {
      let sociallink={};
      formFields.map(data=>{
        if(Object.keys(data).length==4 )
        {
          sociallink[data.Services]=data;
        }
        console.log(data);
      })
      console.log(sociallink);
      
      localStorage.setItem('mentorservices',JSON.stringify(sociallink));
     
    }
    return (
        <>
            <Navbar />
            <section className='register-mentor-main'>
                <div className='inner-reister-mentor'>
                    <div className='upper-mentor-reg'>
                        <div>
                            <h4>Step 3 of 5</h4>
                            <h2>Heading</h2>
                        </div>

                    </div>
                    <div className='midle-mentor-reg'>

                        <div>
                            <form onSubmit={submit}>
                                {formFields.map((form, index) => {
                                    return (
                                        <dir> 
                                            <div key={index} className="add-more-input-2">
                                                <div><p>Services would you like to mentor</p>
                                                <select name="Services" id="" onChange={(event) => handleFormChange(event, index)}>
                                                <option disabled selected hidden>select your level</option>
                                                    <option value="1to1session">1 to 1 sesssion</option>
                                                    <option value="cv review">cv review</option>
                                                   {Services.map((element)=>{
                                                    return <option value={element.id}>{element.name}</option>
                                                   })}
                                                   
                                                </select>
                                                </div>
                                                <div><p>Add brief discreption</p>
                                                    <textarea name="discreption" id="" cols="30" rows="10" onChange={(event) => handleFormChange(event, index)}></textarea> </div>
                                            
                                                
                                               <div className='set-prize-box'>
                                                <div>
                                                    <p>prize</p>
                                                <input
                                                    name='prize'
                                                    placeholder='set prize'
                                                    onChange={event => handleFormChange(event, index)}
                                                    
                                                />
                                                </div>
                                                <div>
                                                    <p>duration</p>
                                                <input
                                                    name='duration'
                                                    placeholder='set duration'
                                                    onChange={event => handleFormChange(event, index)}
                                                   
                                                />
                                                </div>
                                               </div>
                                                {/* <button onClick={() => removeFields(index)}>Remove</button> */}
                                            </div></dir>

                                    )
                                })}
                            </form>
                            {formFields.length!=5 && <div className='add-more-button'><button onClick={addFields}>+ Add More social link</button></div>}

                        </div>


                    </div>
                    <div className='lower-mentor-reg'>
                    <Link to='/mentor/registermentor2'><h2>Back</h2></Link>
                <Link to='/mentor/registermentor4'><button onClick={() => handlenext()}>Next</button></Link>
                    </div>

                </div>
            </section>
        </>
    )
}