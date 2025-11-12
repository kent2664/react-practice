import Greeting from './Greetings.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function App() {
  const myName = "Kenta";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1,
      });
      console.log("Post created:", response.data);
    }
    catch (error) {
      console.error('Error creating post:', error);
    }
  }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Hello World! ;D</h1>
      <h2>My first react app made by {myName}</h2>
      <Greeting name={myName} />
      {/* <div>{loading ? 'Loading...' : data.map(item => <p key={item.id}>{item.title}</p>)}</div> */}
      <form onSubmit={handleSubmit}>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder='Body' ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </>
  )
}