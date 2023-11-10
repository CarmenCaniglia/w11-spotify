import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";

const SearchAlbum = ({ artist }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        const albumData = data.data.filter((item) => item.album).slice(0, 4);
        setAlbums(albumData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [artist]);

  return (
    <Container>
      <Row>
        {albums.map((album) => (
          <Col key={album.id} md={4} lg={3} className="mb-4">
            <Card
              className="text-center text-white border-0"
              style={{ backgroundColor: "transparent" }}
            >
              <CardImg
                variant="top"
                src={album.album.cover}
                alt="foto album"
                className="mx-auto d-block"
              />
              <Card.Body>
                <Card.Title className="text-truncate">
                  {album.album.title}
                </Card.Title>
                <Card.Text>Artista: {album.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchAlbum;
