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
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Viloyati</th>
              <th>Ko'cha nomi</th>
              <th>Holati</th>
              <th>Yo'l uzunligi</th>
              <th>Ajratilgan mablag'</th>
              <th>O'zlashtirilgan mablag'</th>
              <th>Boshlangan sana</th>
              <th>Tugatiladigan sana</th>
              <th>Moliya manbai</th>
              <th>Organ</th>
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
                    <td>{post.region}</td>
                    <td>{post.name}</td>
                    <td>{post.status}</td>
                    <td>{post.lenghth}</td>
                    <td>{post.separatedMoney}</td>
                    <td>{post.usedMoney}</td>
                    <td>{post.startedAt.substr(0, 10)}</td>
                    <td>{post.finishedAt.substr(0, 10)}</td>
                    <td>{post.source}</td>
                    <td>{post.responsible}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => onEdit(post.id)}
                      >
                        {"🖋"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
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
