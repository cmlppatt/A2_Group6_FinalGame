

# A2_Group6_MID-TERM GAME


# Description
The game challenges players to guide a penguin safely down a mountain before the countdown timer expires. Using the movement controls (W, A, and D keys), players navigate a narrow path while managing a deliberately restricted field of view. This limited visibility creates tension and requires careful decision‑making as players encounter hidden spikes that slow progress and threaten their ability to beat the timer. The experience is built around exploration, time pressure, and environmental uncertainty, encouraging players to stay alert and adapt quickly as they descend toward safety.


# Design Rationale
The game’s affordances are intentionally designed to shape how players understand and interact with the environment. Movement becomes intuitive as players discover that the penguin responds directly to the WAD controls, reinforcing a clear relationship between input and action. Environmental cues further guide learning: spikes slow progress, pathway barriers redirect movement, and avalanche warnings signal heightened urgency. As players advance, the introduction of the space‑bar visibility affordance adds a meaningful layer of strategy. Rather than feeling like an isolated mechanic, this temporary reveal of a random area of the mountain teaches players how to interpret limited information, plan ahead, and make informed choices about where to move next. These affordances work together to support GameFlow principles by balancing challenge, feedback, and clarity. The integrated blindness and low‑vision design is represented through the small visibility bubble around the penguin. This feature deepens engagement by requiring players to navigate uncertainty, rely on partial information, and adapt quickly as they descend the mountain.


# Setup and Interaction Instructions
To begin, players select Start on the opening screen and immediately gain control of the penguin using the WAD keys to move along the mountain path. Progress depends on interpreting the small visibility bubble around the character, avoiding spikes that slow movement, and staying within the pathway barrier that prevents leaving the mountain’s intended route. Throughout the descent, players must monitor the countdown timer and make quick decisions to stay ahead of the approaching storm. In the next round, avalanche warnings appear, and players can press the space bar to briefly reveal a random portion of the mountain. This ability helps with planning, but introduces risk due to the vibrations caused by stomping. The game continues until the player either reaches the bottom and enters the survival screen or runs out of time and becomes lost in the storm, at which point they may retry or return to the home screen.


# Iteration Notes


Post-Playtest: 3 changes made based on playtesting:
Following our first playtesting session, we implemented three key interaction-focused improvements to strengthen player control and overall responsiveness. First, we adjusted the penguin’s turning so it moves more noticeably from side to side, making navigation feel smoother and more intuitive. We also increased the size of the movement circle, giving players more space to maneuver and reducing accidental collisions with the edges. Finally, we added backward movement through the S key, allowing players to reposition more precisely and recover more easily during gameplay. Together, these changes directly addressed tester feedback and created a more fluid, enjoyable control experience.


Post-Showcase: 2 planned improvements if you were to continue iterating the game:
After the showcase, we identified two additional improvements that would further enhance gameplay if development continued. One planned feature is the introduction of holes that the penguin can fall into, requiring players to click rapidly to escape, adding tension, challenge, and a fun interactive moment. We also plan to incorporate level‑specific background changes, such as different snowy mountain environments, to create a stronger sense of progression and visual variety as players advance. These enhancements would deepen both the mechanical and aesthetic experience of the game.


# Assets


| File                                        | Source                                                     |
| ------------------------------------------- | -----------------------------------------------------------|
| `assets/images/background.png`              | Game and penguin screens and images - ChatGPT.com      [1] |
| `assets/images/blizzard.png`                | Game and penguin screens and images - ChatGPT.com      [1] |
| `assets/images/loss_screen.png`             | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/penguin_front.png`           | Penguin sprite sheets - ChatGPT.com                    [5] |
| `assets/images/penguin_left.png`            | Penguin movement screens and images - ChatGPT          [3] |
| `assets/images/penguin_right.png`           | Penguin movement screens and images - ChatGPT          [3] |
| `assets/images/penguin_stomp.png`           | Penguin sprite sheets - ChatGPT.com                    [5] |
| `assets/images/spike_double.png`            | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/spike_mid.png`               | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/penguin_small.png`           | Penguin sprite sheets - ChatGPT.com                    [5] |
| `assets/images/penguin_tall.png`            | Penguin sprite sheets - ChatGPT.com                    [5] |
| `assets/images/start_penguin.png`           | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/start_screen.png`            | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/win_screen.png`              | Screens, spike and penguin images - ChatGPT.com        [6] |
| `assets/images/map.png`                     | TBD                                                    [-] |
| `assets/images/fish.png`                    | TBD                                                    [-] |
| `assets/sounds/stomp.mp3`                   | TBD                                                    [-] |
| `assets/sounds/background_music.mp3`        | TBD                                                    [-] |
| `assets/sounds/collect_fish.mp3`            | TBD                                                    [-] |
| `assets/sounds/ouch.mp3`                    | TBD                                                    [-] |
| `assets/sounds/into_sound.mp3`              | TBD                                                    [-] |
| `assets/images/into.mp3`                    | TBD                                                    [-] |




## References
[1]

2026. Check out this chat. ChatGPT. Retrieved June 28, 2026 from https://chatgpt.com/share/6a38b0a0-d964-83ea-b273-7854ec0e107f 

[2]
2026. Check out this chat. ChatGPT. Retrieved June 28, 2026 from https://chatgpt.com/share/6a3b1c9d-a274-83ea-9a6a-e0bd091c228a 

[3]
2026. Check out this chat. ChatGPT. Retrieved June 28, 2026 from https://chatgpt.com/share/6a3b1cc5-8bb8-83ea-9f4d-e796682b96a3 

[4]
2026. p5.js Sprite Animation Lock Mechanic. p5.js Sprite Animation Lock Mechanic. Retrieved June 28, 2026 from https://copilot.microsoft.com/shares/qWoQU7cuRCNA2YVGK73iy   

[5]
2026. Check out this chat. ChatGPT. Retrieved July 1, 2026 from https://chatgpt.com/share/6a38b0a0-d964-83ea-b273-7854ec0e107f 

[6]
2026. Check out this chat. ChatGPT. Retrieved July 6, 2026 from https://chatgpt.com/share/6a38b0a0-d964-83ea-b273-7854ec0e107f 

