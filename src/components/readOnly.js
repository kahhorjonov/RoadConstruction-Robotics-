import { useState } from "react";

const ReadOnly = ({ data, onEdit, onDelete, num }) => {
  return (
    <tr key={data.id}>
      <td>{num++}</td>
      <td>{data.region}</td>
      <td>{data.name}</td>
      <td>{data.status}</td>
      <td>{data.lenghth}</td>
      <td>{data.separatedMoney}</td>
      <td>{data.usedMoney}</td>
      <td>{data.startedAt.substr(0, 10)}</td>
      <td>{data.finishedAt.substr(0, 10)}</td>
      <td>{data.source}</td>
      <td>{data.responsible}</td>

      <td>
        <button className="btn btn-warning" onClick={() => onEdit(data.id)}>
          🖋
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(data.id)}>
          🗑
        </button>
      </td>
    </tr>
  );
};

export default ReadOnly;
