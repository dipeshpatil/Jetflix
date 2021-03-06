import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

const isDark = JSON.parse(localStorage.getItem("isDark"));

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: isDark ? "#000" : "#fff",
    boxShadow: "0px 2px 15px #EA2027",
    zIndex: 100,
  },
});

const bottomNavStyles = {
  color: isDark ? "#f0f0f0" : "#000",
};

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/search");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={bottomNavStyles}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={bottomNavStyles}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={bottomNavStyles}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={bottomNavStyles}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
