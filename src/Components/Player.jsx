const Player = ({ currentSong }) => {
  if (!currentSong) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div className="progressbar" style={{ width: "50%" }}></div>{" "}
                {/* Esempio di progresso */}
              </div>
            </div>
            <div className="col-12 song-details">
              <span className="song-title">{currentSong.title}</span>
              <span className="song-artist">{currentSong.artist}</span>
              {/* ulteriori dettagli della canzone  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
