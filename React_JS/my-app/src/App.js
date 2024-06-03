import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from './pages/SearchBox';
import Map from './pages/Map';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mapContainer: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [center, setCenter] = React.useState({ lat: 37.7749, lng: -122.4194 });

  const handleLocationChange = (location) => {
    setCenter(location);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <SearchBox onLocationChange={handleLocationChange} />
      </Container>
      <div className={classes.mapContainer}>
        <Map center={center} />
      </div>
    </div>
  );
}

export default App;
