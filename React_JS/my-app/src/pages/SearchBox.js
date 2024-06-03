import React, { useRef } from 'react';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  libraries: ['places'],
});

function SearchBox({ onLocationChange }) {
  const inputRef = useRef(null);

  const handleSearch = async () => {
    const input = inputRef.current.value;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: input }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        onLocationChange({ lat: location.lat(), lng: location.lng() });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  React.useEffect(() => {
    loader.load().then(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          onLocationChange({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      });
    });
  }, [onLocationChange]);

  return (
    <TextField
      inputRef={inputRef}
      variant="outlined"
      label="Search Location"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBox;
