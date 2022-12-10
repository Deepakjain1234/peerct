import React from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import './style.css'
import { useParams, Link } from 'react-router-dom'
import upload from '../../assets/img/upload_img.png'
import axios from 'axios';


export const SpecificAd = () => {

    let url1 = null;


    const [title, setTitle] = React.useState();
    const [file1, setFile1] = React.useState(null);
    const [file2, setFile2] = React.useState(null);
    const [file3, setFile3] = React.useState(null);
    const [file4, setFile4] = React.useState(null);
    //   const [file, setFile] = React.useState(null);
    const [urlimg1, seturlimg1] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
    const [urlimg2, seturlimg2] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
    const [urlimg3, seturlimg3] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
    const [urlimg4, seturlimg4] = React.useState(`${process.env.REACT_APP_BACKEND_URL}/images/upload_img.png`);
    //   console.log(file)
    React.useEffect(() => {
        submitHandler1(file1)

    }, [file1])



    React.useEffect(() => {
        submitHandler2(file2)

    }, [file2])
    React.useEffect(() => {
        submitHandler3(file3)

    }, [file3])
    React.useEffect(() => {
        submitHandler4(file4)

    }, [file4])

    const submitHandler1 = async (file) => {


        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            url1 = fileName;
            data.append("name", fileName);
            data.append("file", file);

            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
                    data: data,
                });
            } catch (err) { }

            seturlimg1(`${process.env.REACT_APP_BACKEND_URL}/images/${file1.name}`)


        }
    }

    const submitHandler2 = async (file) => {


        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            url1 = fileName;
            data.append("name", fileName);
            data.append("file", file);

            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
                    data: data,
                });
            } catch (err) { }

            seturlimg2(`${process.env.REACT_APP_BACKEND_URL}/images/${file2.name}`)


        }
    }

    const submitHandler3 = async (file) => {


        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            url1 = fileName;
            data.append("name", fileName);
            data.append("file", file);

            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
                    data: data,
                });
            } catch (err) { }

            seturlimg3(`${process.env.REACT_APP_BACKEND_URL}/images/${file3.name}`)


        }
    }

    const submitHandler4 = async (file) => {


        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            url1 = fileName;
            data.append("name", fileName);
            data.append("file", file);

            try {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_BACKEND_URL}/api/upload`,
                    data: data,
                });
            } catch (err) { }

            seturlimg4(`${process.env.REACT_APP_BACKEND_URL}/images/${file4.name}`)


        }
    }





    // console.log(title)
    const [description, setDescription] = React.useState();
    // console.log(description)
    const [price, setPrice] = React.useState();
    const [type, settype] = React.useState();
    console.log(type);
    const [collegename, setcollegename] = React.useState();
    console.log(price)
    let cate = localStorage.getItem('Postadd_category_id')
    console.log(cate)
    // let cate=localStorage.getItem('Postadd_category_id')
    // const [title,setTitle]=React.useState();
    // const [title,setTitle]=React.useState();
    // const [title,setTitle]=React.useState();

    const handlepostadd = () => {
        // alert("adsf")
        let email = localStorage.getItem('email');

        let token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        // localStorage.removeItem()



        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product/create`, {
            category_id: cate,
            college_id: localStorage.getItem('college_id'),
            name: title,
            description: description,
            price: price,
            type:type,
            image_1: urlimg1,
            image_2: urlimg2,
            image_3: urlimg3,
            image_4: urlimg4

        }, config)
            .then(function (response) {
                // console.log(response);
                alert(response.data)
            })
            .catch(function (error) {
                alert(error)
            });



    }

    let useful1 = []


    const [userDetails, setuserDetails] = React.useState([]);
    let token = localStorage.getItem('token')

    const fetchapi = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                useful1 = res.data.user;
                setuserDetails(useful1)
                setcollegename(res.data.user.peerCTUserCollege.name)
            })
            .catch((error) => {
                console.log(error)
                // alert(error)
            });
        ;
    }

    React.useEffect(() => {
        fetchapi()

    }, [])



    let { id } = useParams();
    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                <div className='category-bar'>
                    <div className="category-heading center">
                        <h3 className='heading'>Post Your AD</h3>
                    </div>
                    <div className="choose-cat">
                        <span>Selected Category</span>
                        <div className="show-ad-cat">
                            <span>{id}</span>
                            <Link to={'/post-ads'}><span>Change</span></Link>
                        </div>
                    </div>
                    <form className="ads-form">
                        <div className="section-ads">
                            <div className="tittle-ad">
                                <span>Include Some Details</span>
                            </div>
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>Ad Tittle</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" onChange={(event) => setTitle(event.target.value)} />
                                </div>
                                <label className='small-des' htmlFor=""><span>Mention the key features of your item (e.g. brand, model, age, type)</span></label>
                            </div>
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>Description</span></label>
                                <div className="tittle-input input-common-ad">
                                    <textarea onChange={(event) => setDescription(event.target.value)} style={{
                                        resize: 'none'
                                    }} type="text" />
                                </div>
                                <label className='small-des' htmlFor=""><span>Include condition, features and reason for selling</span></label>
                            </div>
                        </div>
                        <div className="horizontal-line-full"></div>
                        <div className="section-ads">
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>Price</span></label>
                                <div className="tittle-input input-common-ad price-ads">
                                    <input type="text" onChange={(event) => setPrice(event.target.value)} />
                                    <label htmlFor="">$  </label>
                                </div>
                            </div>

                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor="">select your college</label>
                                <div className="tittle-input input-common-ad price-ads">
                                <select name="type" id="" onChange={(event) => settype(event.target.value)}>
                                    <option disabled selected hidden>Select the type of product</option>
                                    <option value="old">Old</option>
                                    <option value="new">New</option>



                                </select>
                                    
                                </div>
                               

                            </div>
                        </div>


                        <div className="horizontal-line-full"></div>
                        <div className="section-ads">
                            <div className="tittle-ad">
                                <span>Upload Photos</span>
                            </div>
                            <div className="input-ads">
                                <div className="tittle-input input-upload-ad">


                                    <div>
                                        <img src={urlimg1} style={{ height: "140px" }}>
                                        </img>
                                        <input
                                            style={{ opacity: "1", fontsize: "10px" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile1(e.target.files[0])}
                                        />
                                    </div>

                                    <div>
                                        <img src={urlimg2} style={{ height: "140px" }}>
                                        </img>
                                        <input
                                            style={{ opacity: "1", fontsize: "10px" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile2(e.target.files[0])}
                                        />
                                    </div>

                                    <div>
                                        <img src={urlimg3} style={{ height: "140px" }}>
                                        </img>
                                        <input
                                            style={{ opacity: "1", fontsize: "10px" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile3(e.target.files[0])}
                                        />
                                    </div>

                                    <div>
                                        <img src={urlimg4} style={{ height: "140px" }}>
                                        </img>
                                        <input
                                            style={{ opacity: "1", fontsize: "10px" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile4(e.target.files[0])}
                                        />
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line-full"></div>
                        <div className="section-ads">
                            <div className="tittle-ad">
                                <span>Confirm Your Location</span>
                            </div>
                            {/* <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>State</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>City</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" />
                                </div>
                            </div> */}
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>College</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" value={collegename} />
                                </div>
                            </div>
                        </div>
                        <div className="horizontal-line-full"></div>
                        <div className="section-ads">
                            <div className="tittle-ad">
                                <span>Confirm Your Details</span>
                            </div>
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>Name</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" value={userDetails.name} />
                                </div>
                            </div>
                            <div className="input-ads">
                                <label className='placeholder-ad space-label' htmlFor=""><span>Enter your Mobile Number.</span></label>
                                <div className="tittle-input input-common-ad">
                                    <input type="text" value={userDetails.contact} />
                                </div>
                            </div>
                            <div className="input-ads">
                                <button className='ad-post-btn btn' onClick={handlepostadd}>Post Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
