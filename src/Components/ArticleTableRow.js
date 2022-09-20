import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleTableRow = (props) => {
  const { id, title, description, createdAt } = props.obj;

  const deleteArticle = () => {
    axios
      .delete(`http://localhost:8080/api/tutorials/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Article successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((e) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{createdAt.slice(0, 10)}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + id}>
          Edit
        </Link>
        <Button onClick={deleteArticle} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default ArticleTableRow;
