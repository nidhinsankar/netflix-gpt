# NeftlixGPT

- setup react app using vite
- configured tailwindcss
- configured react-router-dom
- build UI for sign in and sign up page
- validation of forms using regex 
- setup firebase 
- implemented email / password signin/signup feature in the app
- onAuthStateChanged is setup in root file
- created redux store using reduxjs/toolkit 
- create user slice for managing user data
- implemeneted signout feature
- route to browse page when signin / signup happens
- Bugfix when routing to login and browse pages
- cleanup onAuthStateChanged event listener
- registered the tmdb developer settings
- used movies and videos api for fetching movies, trailers to use in browse
- created movies in redux store for storing data related movies and trailer
- created videoplayer background component in the browse page
- created env file to store the api keys data
- created Now playing, top rated, ,upcoming, popular movies horizontal list container UI in browse page
- fetched data from api for Now playing, top rated, ,upcoming ,popular movies
- used redux store to manage the api data  
- search-gpt toggle button in browse page

# features

- Login / SignUP page
     - login form
     - signup form

- Browse (only after authentication)
    - Header
    - Main Movie
       - movie trailer
       - title & description
       - movie suggestions
          - list of movies * N - horizontal scroll

- NetflixGPT

   - SearchBar
   - Movie suggestions


notes

- create a tmdb account
- register the app create apikey
- need to do multi langauge feature