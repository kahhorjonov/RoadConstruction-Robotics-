import React from "react";

const Posts = ({ posts, loading, error, onEdit, onDelete }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  {
    return (
      <>
        <table class="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Mavzu</th>
              <th>Holati</th>
              <th>Yangilik</th>
              <th>Rasm</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, idx) => {
              return (
                <>
                  <tr key={post.id}>
                    <th>{idx + 1}</th>
                    <td>{post.name}</td>
                    <td>{post.status}</td>
                    <td>{post.news}</td>
                    <td>{post.img}</td>

                    <td>
                      <button
                        class="btn btn-warning"
                        onClick={() => onEdit(post.id)}
                      >
                        {"🖋"}
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => onDelete(post.id)}
                      >
                        {"🗑"}
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
};

export default Posts;
