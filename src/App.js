import React from 'react'
import PlacesAutocomplete, {
  getcodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

function App() {
  const [address, setAddress] = React.useState("");

  const handleSelect = async value=> {};
  return (
    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
        <div>
          <input type="text" {...getInputProps({placeholder: "type address "})} />

          <div>
            {loading ? <div>...loading</div> : null }

            {suggestions.map((suggestion) => {
              return (
              <div>{suggestion.description}</div>
              )
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
      
    
  )
}

export default App
