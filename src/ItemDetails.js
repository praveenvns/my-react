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
</>

  );
}

export default ItemDetails;