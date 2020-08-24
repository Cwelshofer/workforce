let locations = []

export const useLocations = () => locations.slice()

export const getLocations = () => fetch("http://localhost:8088/locations")
    .then(res => res.json())
    .then(data => locations = data)