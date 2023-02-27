# PD10VirtualWorld
## Description

<p>
Virtual World is a turn-based virtual world with different organisms. The map has 20x20 tiles and contains various animals, plants, and the player.
</p>
<p>
In each turn, every organism performs an action in the order of initiative. The organisms with the higher initiative move first. 
If organisms have equal initiative, the older organism has priority.
</p>
<p>
Every animal moves in a random direction each turn, if not specified otherwise.
If two animals of different species meet, they fight. The animal with higher strength wins. If the strength is equal, nothing happens.
If animals of the same species meet, they create a third animal in one of the adjoining fields. If there is no field left around the animals, nothing happens.
</p>
<p>
At every gameplay, user can generate various organisms randomly. Player can move in all eight directions or stay put for the turn.
</p>
<p>
 You can control the player with a numpad, or if your keyboard is not equipped with it, then with the buttons on the right side of theboard.
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
