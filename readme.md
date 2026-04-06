# Pokemon-Style Browser Game

A small Pokemon-style game made with HTML Canvas and JavaScript.

I built this project to learn game development in a fun and practical way.

---

## Features

- Walk around a town map
- Talk to NPCs
- Enter wild battles in grass
- Fight trainer battles
- Use attack moves with cooldowns and status effects
- Switch between 3 party monsters during battle
- Run from wild battles
- View live HP bars, status text, and party info

---

## Controls

| Key | Action |
|-----|--------|
| W / A / S / D | Move |
| Space | Talk / Continue dialogue |
| 1 / 2 / 3 | Switch party monster (battle) |
| Mouse Click | Attack / Continue battle messages |
| Run Button | Escape wild battle |
| N | Start a new game (clears saved progress) |

---

## Battle System

- Wild encounters occur when walking in grass
- 10% chance for attacks to miss
- 10% chance for critical hits (2× damage)
- Status effects:
  - Fireball → Burn
  - Poison Sting → Poison
  - Thunder Shock → Stun
- Iron Guard boosts defense temporarily
- Recover restores HP
- Enemy monsters have 300 HP for added difficulty

---

## Party System

You start with:

- Charmander  
- Bulbasaur  
- Squirtle  

Each monster has unique moves.

Switching monsters updates available attacks dynamically.

---

## Save System

- Auto-save feature
- Currently stores:
  - Total battles won

---

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- HTML Canvas  
- GSAP (animations)  
- Howler.js (audio)

---

## Why I Made This

This project serves as my learning playground for:

- Canvas rendering  
- Sprite animation  
- Turn-based battle systems  
- Game UI/UX fundamentals  
- Tile-based maps  

---

## Future Improvements

- Mobile support  
- More monsters and abilities  
- Better save system  
- Sound and animation enhancements  