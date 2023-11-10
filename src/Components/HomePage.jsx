import { Card, Col, Container, Row } from "react-bootstrap";
import SearchAlbum from "./SearchAlbum";
import TopBar from "./TopBar";

const HomePage = ({ searchResults }) => {
  return (
    <Container fluid>
      <TopBar />
      <div id="searchResults" className="py-3">
        <h2>Search Results</h2>
        <Row>
          {searchResults.map((result, i) => (
            <Col key={i} md={4} lg={3} className="mb-4">
              <Card
                className="text-center text-white border-0"
                style={{ backgroundColor: "transparent" }}
              >
                <Card.Img
                  variant="top"
                  src={result.album.cover}
                  alt="foto album"
                  className="mx-auto d-block"
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {result.album.title}
                  </Card.Title>
                  <Card.Text>Artista:{result.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div id="rock" className="py-3">
        <h2>Rock Classics</h2>
        <SearchAlbum artist="Queen" />
      </div>

      <div id="pop" className="py-3">
        <h2>Pop Culture</h2>
        <SearchAlbum artist="Katy Perry" />
      </div>

      <div id="hiphop" className="py-3">
        <h2>#HipHop</h2>
        <SearchAlbum artist="Eminem" />
      </div>
    </Container>
  );
};

export default HomePage;
