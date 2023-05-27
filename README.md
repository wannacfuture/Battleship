# Field Materials - Frontend Coding Assignment

*confidential, please do not share*

Design and implement a (partial) Battleship game as a web app.

In Battleship, the computer has positioned five ships of various sizes on a 10x10 board. Each ship must be placed horizontally or vertically, completely on the board, without overlapping another ship. The player cannot see the ship's locations. Each round, the player "fires" at a board position of his choosing. The computer indicates if this was a "hit" or a "miss". When all tiles of a particular ship have been hit, the computer indicates that the entire ship has been sunk. When the player has sunk all of the ships, the game is over.

Obviously this game would be more fun if the player had his own ships and the computer were firing back, but we'll leave that out for simplicity. In other words, we are only implementing the turns for Player 1, not for Player 2.

You may use the provided JSON data (see below) indicating the position of the ships. The game should be responsive and mobile-friendly, so that it may be played on an iPhone 5-sized screen (320x568) up to a desktop browser (approx. 1440x1024).

You need to use React and Typescript for the implementation. You may feel free to use Redux, LESS, or any other library you think is suitable for this project. It's not necessary to save game state or anything like that.

Please create a new branch from main and open pull request to main upon completion. You may push as many commits to your branch as you need (no need to squash them before opening pull request).

Ship layout data:
```
{

    "shipTypes": {
        "carrier": { "size": 5, "count": 1 },
        "battleship": { "size": 4, "count": 1 },
        "cruiser": { "size": 3, "count": 1 },
        "submarine": { "size": 3, "count": 1 },
        "destroyer": { "size": 2, "count": 1 }
    },

    "layout": [
        { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
        { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] },
        { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] },
        { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] },
        { "ship": "destroyer", "positions": [[0,0], [1,0]] }
    ]
}
```


<img width="452" alt="image" src="https://user-images.githubusercontent.com/103999766/165146192-e71c1d15-1682-41a4-bf14-3c39bd8c1d8e.png">
