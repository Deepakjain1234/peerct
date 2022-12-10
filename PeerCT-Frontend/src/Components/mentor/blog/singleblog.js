import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './singleblog.css'
import logo2 from '../../../assets/img/mentor/New folder/Rectangle 9.png'
import logo3 from '../../../assets/img/mentor/New folder/Rectangle 14.png'
import logo4 from '../../../assets/img/mentor/New folder/Rectangle 18.png'
import { Footer } from '../Common/Footer/Footer'
import { Blogsession } from '../home/blogsession/Blogsession'
import axios from 'axios'
import { Navbar } from '../Common/Navbar/Navbar'


// let data = 
//     {
//         "heading": "heading of the blog",
//         "name": "pratham patidar",
//         "position": "growth manager",
//         "date": "12/3/2014",
//         "heading2":"Lorem ipsum dolor sit amet consectetur adipisicing elit et consectetur adipisi",
//         "content1": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur deleniti perspiciatis ipsam consequatur autem atque esse praesentium? Fugit optio in voluptate consequatur amet, quos exercitationem dolore, quibusdam doloribus nulla repudiandae nemo voluptatem! Quasi, cumque nisi? Quaerat quo dignissimos, quibusdam impedit soluta qui laboriosam velit, placeat ipsam harum minus officiis possimus ex odit aliquam nesciunt tempore. Magni veniam odio eveniet eaque quis, voluptatibus quisquam voluptatem nulla delectus? Eaque quod vitae assumenda mollitia harum repellat possimus quaerat! Dolores fugit aliquam commodi laboriosam, illum dolorum, obcaecati doloribus, molestias voluptate impedit dicta dolor natus cumque laudantium mollitia repellat excepturi nobis eveniet perferendis? Quas molestias eveniet, perferendis accusamus earum deleniti eaque rem modi nam, consequuntur minus officia. Sequi modi tempora, voluptas pariatur, iste provident sunt omnis praesentium expedita quos voluptatibus dolorem. Sunt officia impedit eos perspiciatis ducimus. Fuga similique sapiente voluptatum. Accusamus laboriosam debitis odit necessitatibus ut consequatur at alias eum nemo pariatur incidunt similique voluptatum quod est esse sed facilis repellendus consectetur enim obcaecati, porro dicta quaerat suscipit. Perferendis distinctio praesentium similique blanditiis ratione error unde repellendus, assumenda itaque est nisi asperiores accusantium debitis quo nobis fugit voluptatem sapiente, saepe ab, voluptate eligendi exercitationem minima. Commodi aliquid consectetur fugiat, in incidunt modi? Earum quaerat blanditiis, corrupti ea optio, adipisci vel quam, vero deleniti debitis sit fugiat nulla consequatur doloribus fugit cum obcaecati consequuntur soluta nemo et error modi? Animi laborum voluptatum omnis earum quos quae odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur deleniti perspiciatis ipsam consequatur autem atque esse praesentium? Fugit optio in voluptate consequatur amet, quos exercitationem dolore, quibusdam doloribus nulla repudiandae nemo voluptatem! Quasi, cumque nisi? Quaerat quo dignissimos, quibusdam impedit soluta qui laboriosam velit, placeat ipsam harum minus officiis possimus ex odit aliquam nesciunt tempore. Magni veniam odio eveniet eaque quis, voluptatibus quisquam voluptatem nulla delectus? Eaque quod vitae assumenda mollitia harum repellat possimus quaerat! Dolores fugit aliquam commodi laboriosam, illum dolorum, obcaecati doloribus, molestias voluptate impedit dicta dolor natus cumque laudantium mollitia repellat excepturi nobis eveniet perferendis? Quas molestias eveniet, perferendis accusamus earum deleniti eaque rem modi nam, consequuntur minus officia. Sequi modi tempora, voluptas pariatur, iste provident sunt omnis praesentium expedita quos voluptatibus dolorem. Sunt officia impedit eos perspiciatis ducimus. Fuga similique sapiente voluptatum. Accusamus laboriosam debitis odit necessitatibus ut consequatur at alias eum nemo pariatur incidunt similique voluptatum quod est esse sed facilis repellendus consectetur enim obcaecati, porro dicta quaerat suscipit. Perferendis distinctio praesentium similique blanditiis ratione error unde repellendus, assumenda itaque est nisi asperiores accusantium debitis quo nobis fugit voluptatem sapiente, saepe ab, voluptate eligendi exercitationem minima. Commodi aliquid consectetur fugiat, in incidunt modi? Earum quaerat blanditiis, corrupti ea optio, adipisci vel quam, vero deleniti debitis sit fugiat nulla consequatur doloribus fugit cum obcaecati consequuntur soluta nemo et error modi? Animi laborum voluptatum omnis earum quos quae odio!",
//         "content2": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur deleniti perspiciatis ipsam consequatur autem atque esse praesentium? Fugit optio in voluptate consequatur amet, quos exercitationem dolore, quibusdam doloribus nulla repudiandae nemo voluptatem! Quasi, cumque nisi? Quaerat quo dignissimos, quibusdam impedit soluta qui laboriosam velit, placeat ipsam harum minus officiis possimus ex odit aliquam nesciunt tempore. Magni veniam odio eveniet eaque quis, voluptatibus quisquam voluptatem nulla delectus? Eaque quod vitae assumenda mollitia harum repellat possimus quaerat! Dolores fugit aliquam commodi laboriosam, illum dolorum, obcaecati doloribus, molestias voluptate impedit dicta dolor natus cumque laudantium mollitia repellat excepturi nobis eveniet perferendis? Quas molestias eveniet, perferendis accusamus earum deleniti eaque rem modi nam, consequuntur minus officia. Sequi modi tempora, voluptas pariatur, iste provident sunt omnis praesentium expedita quos voluptatibus dolorem. Sunt officia impedit eos perspiciatis ducimus. Fuga similique sapiente voluptatum. Accusamus laboriosam debitis odit necessitatibus ut consequatur at alias eum nemo pariatur incidunt similique voluptatum quod est esse sed facilis repellendus consectetur enim obcaecati, porro dicta quaerat suscipit. Perferendis distinctio praesentium similique blanditiis ratione error unde repellendus, assumenda itaque est nisi asperiores accusantium debitis quo nobis fugit voluptatem sapiente, saepe ab, voluptate eligendi exercitationem minima. Commodi aliquid consectetur fugiat, in incidunt modi? Earum quaerat blanditiis, corrupti ea optio, adipisci vel quam, vero deleniti debitis sit fugiat nulla consequatur doloribus fugit cum obcaecati consequuntur soluta nemo et error modi? Animi laborum voluptatum omnis earum quos quae odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur deleniti perspiciatis ipsam consequatur autem atque esse praesentium? Fugit optio in voluptate consequatur amet, quos exercitationem dolore, quibusdam doloribus nulla repudiandae nemo voluptatem! Quasi, cumque nisi? Quaerat quo dignissimos, quibusdam impedit soluta qui laboriosam velit, placeat ipsam harum minus officiis possimus ex odit aliquam nesciunt tempore. Magni veniam odio eveniet eaque quis, voluptatibus quisquam voluptatem nulla delectus? Eaque quod vitae assumenda mollitia harum repellat possimus quaerat! Dolores fugit aliquam commodi laboriosam, illum dolorum, obcaecati doloribus, molestias voluptate impedit dicta dolor natus cumque laudantium mollitia repellat excepturi nobis eveniet perferendis? Quas molestias eveniet, perferendis accusamus earum deleniti eaque rem modi nam, consequuntur minus officia. Sequi modi tempora, voluptas pariatur, iste provident sunt o"
        
//     }


export const Singleblog = () => {
    const {id} = useParams();
    console.log(id);
    const [data, setData] = React.useState([]);
    const loadData = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/${id}`);
        if (data.length == 0) {
            info = info.data
            console.log(info);
            for (let i = 0; i < info.length; i++) {
                info[i] = {
                    "heading": info[i].topic,
                    "name": info[i].peerCTUser.name,
                    "content1": info[i].description,
                    "date": new Date(info[i].updatedAt).toLocaleDateString(),
                }
            }
            console.log(info[0])
            setData(info[0]);
        }
    }
    useEffect(() => {
        loadData();
    }, [data])
    return (
        <>
            <p></p>
            <Navbar />
            <section className='single-blog-main'>
                <div className='inner-single-blog'>
                    <div className='single-blog-heading'>

                        <h2>{data.heading}</h2>
                    </div>
                    <div className='blog-heading-second'>
                        <div className='blog-name-postion'>
                            <img src={logo2} alt="" />
                            <div><h4>{data.name}
                            </h4>
                                <h5>{data.position}</h5></div>
                        </div>
                        <h3>Date-{data.date}</h3>

                    </div>
                    <div className='main-blog-content'>
                        <img className='main-blog-img1' src={logo3} alt="" />
                        <h4>{data.heading2}</h4>
                        <p>{data.content1}</p>
                        <img src={logo4} alt="" />
                        <p>{data.content2}</p>


                    </div>


                </div>
            </section>
            <Blogsession />
            <Footer/>
        </>
    )
}