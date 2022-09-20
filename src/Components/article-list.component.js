import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ArticleTableRow from "./ArticleTableRow";

const ArticleList = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tutorials")
      .then(({ data }) => {
        setArticle(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("ArticleList", article);

  const DataTable = () => {
    return article.map((res, i) => {
      return <ArticleTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Description</th>
            <th>Created at:</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default ArticleList;
