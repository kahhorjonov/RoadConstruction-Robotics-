import { Link } from "react-router-dom";

function NewsMore() {
  return (
    <div className="w-50" style={{ background: "rgba(255, 255, 255, 0.178)" }}>
      <Link to="/">
        <button
          className="btn position-absolute "
          style={{ top: "10px", right: "10px" }}
        >
          ❌
        </button>
      </Link>
      SALOM
    </div>
  );
}

export default NewsMore;
