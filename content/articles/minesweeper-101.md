---
title: "Minesweeper-101"
description: "A starting guide to play minesweeper"
published: 2024/07/30
slug: "minesweeper-101"
---

>

## What is Minesweeper?

Minesweeper is a single player puzzle game. The game have grids of tiles, with "hidden" mines randomly spawned on the grids. The player objective is to find all of the mines, either by marking the mines with a "flag", or reveal all of the clue that shows up as a number that represent as the number of neighbouring mines(s).

Below are the example of 5x5 grids that its clues have been revealed:
![mines-1](./articles/minesweeper-101/mines-1.png)

## Strategy

### 1. The "Loner"
This is the first and most easiest clue you can solve.<br/>
Basically, we just need to find a 1-numbered clue who sat in the corner just like me, a loner who writes this article in the corner :sadface:. Since it only has one more "unrevealed" grid, that one grid must be the "mine".

<b>Clue:</b>
![mines-2](./articles/minesweeper-101/mines-2.png)

<b>Mines:</b>
![mines-3](./articles/minesweeper-101/mines-3.png)

### 2. The "Reducer"
The next thing we do after a "mine" is revealed, we reduce the number of its neighbouring clue by 1.

![mines-4](./articles/minesweeper-101/mines-4.png)

When the clue hits "0", then all of its neighbouring grids are clear of "mines".

![mines-5](./articles/minesweeper-101/mines-5.png)

Hey look! We found a number "2" that is revealed with already two "mines" have been found before. We can safely clear its neighbouring grids also.

![mines-6](./articles/minesweeper-101/mines-6.png)

![mines-7](./articles/minesweeper-101/mines-7.png)

### 3. The "1-2-boom"
I couldn't find the word / terms for this strat, so I make one just now.<br/>
When we see this example of a clue pattern (which I marked with red rectangle):

![mines-8](./articles/minesweeper-101/mines-8.png)

- It has the pattern <b>1-2-any</b>
- One side of the pattern is already clear, the other side is not.

The one "unrevealed" grid in front of the <b>"any"</b> number MUST BE a "mine".
![mines-9](./articles/minesweeper-101/mines-9.png)

But then, we can't say that the other two "unrevealed" grid is clear (yet). We need to go back do the "Reducer" strat again.

### 4. The "Mirror"
Actually, this is just a combination of two "1-2-boom" pattern, since the "1-2-boom" strat works vice-versa. The middle "2" also became clear of the "mines" from its neighbouring grid in front of the "1" grid.
![mines-10](./articles/minesweeper-101/mines-10.png)


That's it, everyone. Hope you enjoy reading this, I will update more strat if I found it in the future while playing this game.