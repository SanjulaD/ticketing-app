import { AddPosts } from "./components/posts/AddPosts"
import ListPosts from "./components/posts/ListPosts"

const App = () => {
  return (
    <div className="container p-3">
      <h1 className="text-center">Blog Posts</h1>
      <div>
        <h2>Create Posts</h2>
      </div>
      <AddPosts />
      <h2 className="mt-3 mb-2">List of Posts</h2>
      <ListPosts />
    </div>
  );
}

export default App;