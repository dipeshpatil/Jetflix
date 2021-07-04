import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import { Button, Grid } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Carousel from "../Carousel/Carousel";

import "./ContentModal.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    borderRadius: 4,
    color: "white",
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({
  children,
  media_type,
  id,
  backgroundCardColor,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer", backgroundColor: backgroundCardColor }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ backgroundColor: backgroundCardColor }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        startIcon={<YouTubeIcon />}
                        target="__blank"
                        color="primary"
                        href={`https://www.youtube.com/watch?v=${video}`}
                      >
                        Watch the Trailer
                      </Button>
                    </Grid>
                    {window.screen.width <= 420 ? (
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          startIcon={<WhatsAppIcon />}
                          target="__blank"
                          color="secondary"
                          href={`whatsapp://send?text=%0AHere's a movie worth watching!🔥🎬%0A%0A*${
                            content.name || content.title
                          }*%0A${
                            content.overview
                          }%0A%0Ahttps://www.youtube.com/watch?v=${video}`}
                        >
                          Share on Whatsapp
                        </Button>
                      </Grid>
                    ) : null}
                  </Grid>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
