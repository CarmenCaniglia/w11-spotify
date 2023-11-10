import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";
import HomePage from "./Components/HomePage";
import SearchAlbum from "./Components/SearchAlbum";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./Components/Player";

function App() {
  const [searchResults, setSearchResult] = useState([]);
  const handleSearchSubmit = (searchItem) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchItem}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        setSearchResult(data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar onSearch={handleSearchSubmit} />
          </Col>
          <Col xs={12} md={9} className=" mainPage">
            <Routes>
              <Route
                path="/"
                element={<HomePage searchResults={searchResults} />}
              ></Route>
              <Route path="/" element={<SearchAlbum />}></Route>
            </Routes>
          </Col>
          <Container>
            <Player />
          </Container>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
