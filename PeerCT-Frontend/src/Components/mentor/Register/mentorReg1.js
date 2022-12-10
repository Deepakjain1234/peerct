import React, { useEffect, useState } from "react";
import "./mentorreg.css";
import axios from "axios";
import Select from "react-select";
import { Link } from 'react-router-dom'
import { Navbar } from "../Common/Navbar/Navbar";

export const Registermentor1 = () => {
  const [formFields, setFormFields] = useState([]);
  const [socialFields, setSocialFields] = useState([]);
  const [company, setCompany] = useState([]);
  const [jobtitle,setjobtitle]=useState();
  const [company1,setCompany1]=useState();
  const [linkedin,setlinkedin]=useState();
  

  useEffect(() => {
    axios
      .get("${process.env.REACT_APP_BACKEND_URL}/api/SocialMediaList")
      .then((response) => {
        setSocialFields(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("${process.env.REACT_APP_BACKEND_URL}/api/getAllCompany")
      .then((response) => {
        setCompany(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const options = company.map((element) => {
    return {
      value: element.id,
      label: element.name,
    };
  });
  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
      data.splice(index, 1);
      setFormFields(data);
    
  };
  const logOnchangeCompany = (company) => {
    console.log(company.value);
    setCompany1(company.value);
  };
  // console.log(formFields);

  const handlenext=()=>
{
  let sociallink={};
  formFields.map(data=>{
    if(Object.keys(data).length==2 && data.linktype.length !=0 && data.link.length !=0)
    {
      sociallink[data.linktype]=data.link;
      
    }
    console.log(data);
  })
  console.log(sociallink);
  
  localStorage.setItem('sociallink',JSON.stringify(sociallink));
  localStorage.setItem('jobtitle',jobtitle);
  localStorage.setItem('linkedin',linkedin);
  localStorage.setItem('companyid',company1);
}

  
  return (
    <>
     <Navbar />
      <section className="register-mentor-main">
        <div className="inner-reister-mentor">
          <div className="upper-mentor-reg">
            <div>
              <h4>Step 1 of 5</h4>
              <h2>Heading</h2>
            </div>
          </div>
          <div className="midle-mentor-reg">
            <div>
              <p>Company</p>
              <Select options={options} onChange={logOnchangeCompany} />
            </div>
            <div>
              <p>your job title</p>
              <input type="text" placeholder="What is your post" onChange={(event)=>setjobtitle(event.target.value)} />
            </div>
            <div>
              <p>Linkedin link</p>
              <input type="text" placeholder="your linkedin profile link" onChange={(event)=>setlinkedin(event.target.value)}/>
            </div>
            <div>
              <form onSubmit={submit}>
                {formFields.map((form, index) => {
                  return (
                    <dir>
                      {" "}
                      <p>Social Links</p>
                      <div key={index} className="add-more-input">
                        <select name="linktype" id="" onChange={(event) => handleFormChange(event, index)} >
                          <option value="">Select</option>
                          {socialFields.map((data, index) => {
                            return <option value={data}>{data}</option>;
                          })}
                        </select>
                        <input
                          name="link"
                          placeholder="link"
                          onChange={(event) => handleFormChange(event, index)}
                          // value={form.age}
                        />
                        <button onClick={() => removeFields(index)}>
                          Remove
                        </button>
                      </div>
                    </dir>
                  );
                })}
              </form>
              <div className="add-more-button">
                <button onClick={addFields}>+ Add More social link</button>
              </div>
            </div>
          </div>
          <div className="lower-mentor-reg">
            <Link  to='/mentor'><h2>Back</h2></Link>
            <Link to='/mentor/registermentor2'><button onClick={()=>handlenext()}>Next</button></Link>
          </div>
        </div>
      </section>
    </>
  );
};
