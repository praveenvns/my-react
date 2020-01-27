import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';



function ItemDetails({ match }) {
const[post, setPost] = useState([]);  
  useEffect(() => {
axios.get(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`).then(res => {
const post = res.data;
setPost(post);
console.log(post);
});
  },[]);
  return (
    <>
<p>{post.title}</p>
<img src={post.url} ></img>
<Helmet>
<title>{ post.title }</title>
<meta name="description" content={ post.title } />
</Helmet>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Open modal
</button>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
        Modal body..
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


</>

  );
}

export default ItemDetails;