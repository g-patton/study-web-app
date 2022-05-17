# study-web-app

# :black_nib: Flash card creator

this web application allows the individual to create flashcards on their own, 
and test their knowledge against two sided cards on the internet.

It can be used at https://gpstudyapp.netlify.app/

#Features

## :pushpin: Features

* Allows users to write flashcards 
* Simple database managed by local storage
* Deletion of individual cards or of entire card base if desired
* A toggle for darkmode

## Directions:
1. Select "Add" to begin writing a new card
2. Fill out what the user would like on the front and back of the cards and select "Save and Add"
3. The user will then see the front of the card[s] and may click on the card to check the backside.
4. To delete individual cards: click the "-" on the top-right of a card.
5. To delete all cards, select "Delete All" in the header.  The user will then get a prompt to check that this is desired.

## :scroll: Setup

Install [Node.js](https://nodejs.org/en/). Open up a terminal and clone the project 
`cd` into the project root folder and install all dependencies:

```
git clone https://github.com/g-patton/study-web-app.git
cd study-web-app
npm install
```

## :wrench: Usage

The following commands are used for development and building:

| Node.js command | Description |
|-----------------|-------------|
| `npm start` | Builds the project in development mode and launches `Electron`. |
| `npm run package` | Generates a portable application in the `dist` folder. |
| `npm run publish` | Generates a distributable application in the `dist` folder. |

