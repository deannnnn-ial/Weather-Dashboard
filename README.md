Weather Dashboard README

Download all files. You may need to install react-router-dom, express, and cors to properly run the project.

Head on over to openweathermap.org and make an account to get your own API Key. You can put this as well as the api call links into a .env file.
You'll need to use the OneCall API, which requires a subscription, as well as the geocoding and weather APIs. 
If you're struggling with getting an API call, double check you've subscribed to OneCall. You'll need to put in payment information, but it's highly unlikely you'll ever reach the free limit. 

Put all of these links into a .env file in the backend, using the same variable names used in Server.MJS (or change them, if you want, as long as you change them in the code, too). This is so that server.mjs can accurately call the API using these links, which have been imported from a .env file.

This project uses a proxy server - located in the backend folder - to retrieve api data. If you want to deploy it, you'll have to make some minor changes to the fetch links and the proxy server.

When you run the application, you need to run the backend and frontend at the same time. Then you can simply search for a city in the search bar (from the frontend) and get data on it from the apis listed above. You can see this logged in the backend console. 

Want to see the deployed project? Check here: https://frontend-weather-s5he.onrender.com/
note: response may be slow (~50seconds or longer) due to inactivity 