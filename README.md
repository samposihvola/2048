# 2048

This is my rendition of the game 2048, originally created by Gabrielle Cirulli in 2014. 2048 is a game in which there is a 4x4 grid, and the player moves tiles using arrow keys (or swipes on mobile devices) to merge them. Tiles merge when they have the same value on a basis of x * 2. Once a player reaches the 2048 tile, the game is finished, but they can continue playing thereafter.

![Screencap of the game](/2048-screencap.png)

The main purpose of this project is to give me hands-on experience from modern day web development. React + Vite for the app, Jest for unit tests, and Cypress for end-to-end tests. I am currently planning on creating a backend with NodeJS and MongoDB. Check my todo list below for details!

## Usability Testing

To ensure solid gameplay, I conducted a usability testing situation following Jacob Nielsen’s 10 heuristics. I recruited an external participant to navigate through the following test cases:

1. Assess the intuitiveness of the game interface.
2. Evaluate the intuitiveness of game mechanics and controls.
3. Merge tiles and evaluate the responsiveness and accuracy of the mechanic.
4. Evaluate the addictiveness of the game.
5. Evaluate the UI after dark reader mode has been switched on.
6. Get four (4) tiles into the same row and merge them.
7. Get the game into a game-over situation. What happens?
8. Update browser. What happens?
9. Play the game for another 20 minutes and evaluate the overall feel of the UI
after that.
10. Try to get the highest score possible within the time frame.

This proved useful, since it gave me non-author biased information in the early stages of development. Most of the results were concerned with UI: the lack of animations, tiles moving too fast, the lack of background in the tiles affecting how immersive the gameplay was. Additionally, one bug was found during the procedure, which had to do with how the tiles merged together.

## Todo

- Backend with user registration
	- NodeJS & MongoDB
	- Calculates points to the users profile
	- Top 10 players list
	- Game could still be played without registration
	- API tests with Postman?
- CI/CD

## Instructions

Clone the repository with git clone

Install dependencies

```
npm install
```

Launch the game

```
npm run dev
```

Open browser and hit http://localhost:5173

Run E2E tests

```
npm run cy:open
```

Run component tests

```
npm test
```
