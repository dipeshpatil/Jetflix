import { useState, createRef } from "react";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import ColorThief from "colorthief";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const textStyles = {
    color:
      colorArrays[0] * 0.299 + colorArrays[1] * 0.587 + colorArrays[2] * 0.114 >
      149
        ? "#000000"
        : "#ffffff",
    fontWeight: "bold",
  };

  return (
    <ContentModal
      backgroundCardColor={rgb(colorArrays)}
      media_type={media_type}
      id={id}
    >
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        ref={imgRef}
        onLoad={() => getColorArrays()}
        crossOrigin="anonymous"
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title" style={textStyles}>
        {title}
      </b>
      <span style={textStyles} className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle" style={textStyles}>
          {date}
        </span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
