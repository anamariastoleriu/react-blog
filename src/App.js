import Layout from './Layout';
import Home from './Home'
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { Route, Routes } from 'react-router-dom';
import { action, useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data, setPosts])
  return (
    <Routes>
        <Route path="/" element={<Layout isLoading={isLoading} fetchError={fetchError} />}>
          <Route index element={<Home />} />
          <Route path="post" element={<NewPost />}/>
          <Route path="edit/:id" element={<EditPost />}/>
          <Route path="post/:id" element={<PostPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}

export default App;
