import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {
const[post, setPost] = useState([]);  
  useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
const post = res.data;
setPost(post);
});
  },[]);

if(post.length > 0){
return (
<div className="container">
        <div className="row">
{post.map(item => (

<div className="col-sm-6 col-md-4 col-lg-3 mt-4">
  <div className="card">
 <Link to={`/shop/${item.id}`} > 
 <img className="card-img-top" src={item.thumbnailUrl}></img>
<div className="card-block">
    <p className="text-bold">{item.title}</p>
  </div>

</Link>
</div>
</div>


))}
</div>
</div>

  );
}else{
  return (
<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
</div>
  );
}



}

export default Shop;