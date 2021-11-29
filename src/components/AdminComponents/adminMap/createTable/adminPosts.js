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
              <th>Ism</th>
              <th>Fameliya</th>
              <th>Otasining ismi</th>
              <th>Hudud</th>
              <th>Username</th>
              <th>Password</th>
              <th>Rule</th>
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
                    <td>{post.sureName}</td>
                    <td>{post.familyName}</td>
                    <td>{post.area}</td>
                    <td>{post.userNname}</td>
                    <td>{post.password}</td>
                    <td>{post.role}</td>

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
