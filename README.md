## Google Books Search

This is a simple single-page react app created as an exercise on using the google books API to search for books by title/author/isb/publisher/etc and return the results with their respective cover images and a link to the google books JSON file to learn more. 

Stack: React.js + Material Design's Bootstrap for React

## Local Set Up

If you'd like to run this app locally the set up is fairly simple. Clone this respository to your local computer, run `npm install` to install the necesary dependencies, then create a `dotenv` file where you will store your google books secret key. 

To get your google books API credentials head over to the google developer console [here](https://console.developers.google.com) (if you don't already have an account you will need to make one). 

Then follow the instructions to create a new project, head to `enable apis and services` enable the google books API and create a new set of credentials. After your key is generated click on it to edit and whitelist your local url (localhost:<some port here>) under `HTTP referrers` by adding it to the website restrictions. 

Then add the key to your `dotenv` file like this:

```
export REACT_APP_API_KEY=<string here with no quotations>
```

and then run `npm start` in your terminal to begin.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
