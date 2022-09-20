import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleForm from "./ArticleForm";

const ArticleTutorial = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const onSubmit = (articleObject) => {
    axios
      .put(
        "http://localhost:8080/tutorial/update-tutorial/" +
          props.match.params.id,
        articleObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Article successfully updated");
          props.history.push("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/tutorial/update-tutorial/" +
          props.match.params.id
      )
      .then((res) => {
        const { title, description } = res.data;
        setFormValues({ title, description });
      })
      .catch((err) => console.log(err));
  });

  return (
    <ArticleForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Article
    </ArticleForm>
  );
};

export default ArticleTutorial;
