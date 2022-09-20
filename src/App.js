import React from "react";

import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import CreateArticle from "./Components/create-article.component";
import EditArticle from "./Components/edit-article.component";
import ArticleList from "./Components/article-list.component";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Simple CRUD App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/tutorials"} className="nav-link">
                    Create Article
                  </Link>
                </Nav>

                <Nav>
                <Link to={"/tutorials-list"} className="nav-link">
                    Article List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

            <Container>
              <Row>
                <Col md={12}>
                  <div className="wrapper">
                    <Routes>
                      <Route index element={<CreateArticle />}/>
                      <Route path="/tutorials" element={<CreateArticle />} />
                      <Route path="/api/tutorials/:id" element={<EditArticle />} />
                      <Route path="/tutorials-list" element={<ArticleList />} />
                    </Routes>
                  </div>
                </Col>
              </Row>
            </Container>

      
      </div>
    </Router>
  )
}

export default App;
