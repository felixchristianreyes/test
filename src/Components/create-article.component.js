import React, { useState } from "react";

import axios from "axios";

import ArticleForm from "./ArticleForm";

const CreateArticle = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const onSubmit = (articleObject) => {
    axios
      .post("http://localhost:8080/api/tutorials", articleObject)
      .then((res) => {
        if (res.status === 200) alert("Article successfully created");
        else Promise.reject();
      })
      .catch((e) => alert("something went wrong"));
  };

  return (
    <ArticleForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Post
    </ArticleForm>
  );
};

export default CreateArticle;
