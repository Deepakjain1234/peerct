import React, { useState } from 'react'
import addr from '../../assets/img/add_addr.png'
import axios from 'axios';


export const ManageAddress = () => {
    const [state, setstate] = useState('disable-addr-add')
    const handleChange = (e) => {
        e.preventDefault();
        setstate("");
    }

    const [address,setaddress]=useState();
    const [pincode,setpincode]=useState();
    const [stat,setstat]=useState();
    const [city,setcity]=useState();
    // let result = address.concat(" ", city, " ", pincode," ",stat);
    // console.log(result)


    const handlesubmit=(e)=>{
        e.preventDefault();
       let token=localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const bodyParameters = {
           address:address
        };
        
        axios.post( 
          `${process.env.REACT_APP_BACKEND_URL}/api/address/add`,
          bodyParameters,
          config
        ).then(console.log).catch(console.log);
        alert("address add sucessfully")
        setstate('disable-addr-add')


    }
    
    return (
        <div className="personal-info">
            <form>
                <div className="tittle">
                    <span>Manage Address</span>
                </div>
                <div id={state === 'disable-addr-add' ? '' : 'disable-addr-add'} className="add-address-button">
                    <button onClick={handleChange}><img src={addr} alt="" /></button>
                </div>
                <form className='address-form' id={state}>
                    <div className="tittle">
                        <span>Add a new Address</span>
                    </div>
                    <div className="double-inputs">
                        <input placeholder='Name' type="text" />
                        <input placeholder='10 digit Mobile No' type="text" />
                    </div>
                    <input placeholder='College' type="text" name="" id="" />
                    <textarea placeholder='Address' name="" id="" cols="30" rows="10" onChange={(event) => setaddress(event.target.value)}></textarea>
                    <div className="double-inputs">
                        <input placeholder='City' type="text" onChange={(event) => setcity(event.target.value)}/>
                        <input placeholder='Pincode' type="text" onChange={(event) => setpincode(event.target.value)}/>
                    </div>
                    <input placeholder='State' type="text" name="" id="" onChange={(event) => setstat(event.target.value)} />
                    <div className="double-inputs">
                        <button className='btn-submit btn-addr btn' onClick={handlesubmit}>Submit</button>
                        <button className='btn-cancel btn-addr btn' onClick={(e)=>{
                            e.preventDefault();
                            setstate('disable-addr-add');
                        }}>Cancel</button>
                    </div>
                </form>
            </form>
        </div>
    )
}
