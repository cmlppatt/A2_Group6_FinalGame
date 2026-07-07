# A2_Group6_MID-TERM GAME

# Description
The game challenges players to guide a penguin safely down a snowy mountain before the countdown timer expires. Using WASD movement controls, players navigate a narrow and increasingly complex path shaped by intentional dead ends, rearranged spike placements, and evolving visibility constraints. A small circular bubble of sight always surrounds the penguin, providing just enough information for basic navigation. When players need additional guidance, they can trigger a space‑bar stomp, which briefly expands this bubble into a larger visibility ring that grows, reveals more of the mountain, and then fades away after a few seconds. This temporary advantage comes at a cost: each stomp reduces the remaining time on the clock, forcing players to weigh clarity against urgency. Hidden spikes slow progress, pathway barriers prevent wandering off course, and the looming storm maintains constant pressure. To reach the bottom before the storm overtakes them, players must balance caution, speed, and limited visibility while making quick, informed decisions throughout the descent.

# Design Rationale
The game’s affordances are intentionally structured to teach players how to interpret feedback, manage risk, and interact meaningfully with the environment. Movement becomes intuitive as players discover that the penguin responds directly to the WASD controls, while the expanded movement bubble and refined turning radius make getting down the mountain feel more predictable and responsive. Environmental affordances deepen learning: spikes slow progress, dead ends force rerouting, and pathway barriers guide players back toward the intended route. Visibility plays a central role in shaping player understanding and emotional engagement. A small bubble of sight always surrounds the penguin, but its limited range creates a sense of frustration and uncertainty, as players rarely know what lies just beyond their immediate surroundings. When players trigger a space‑bar stomp, a larger visibility ring briefly expands, revealing more of the mountain before fading away. Because each stomp reduces the remaining time on the clock, players must weigh clarity against urgency, adding meaningful tension to every decision. These layered mechanics support GameFlow principles by balancing challenge, feedback, and clarity, while the blindness and low‑vision design theme reinforces the experience of navigating uncertainty under pressure.

# Setup and Interaction Instructions
Players begin by selecting Start on the opening screen, then use the WASD keys to move the penguin along the mountain path. A small visibility bubble always surrounds the character, helping players identify nearby terrain while navigating spikes, dead ends, and pathway barriers that shape the intended route. The limited view of the mountain path can feel frustrating, as players must make choices without fully knowing what lies ahead, and this uncertainty becomes more intense as the countdown timer steadily ticks down. When additional visibility is needed, players can press the space bar to activate a stomp, causing a temporary visibility ring to expand around the penguin before fading away. This expanded view helps players plan their next moves but comes with a time penalty, reducing the remaining countdown and limiting how often the stomp can be used. The game continues until the player either reaches the bottom and enters the survival screen or runs out of time and becomes lost in the storm, at which point they may retry or return to the home screen.

# Iteration Notes

**Post-Playtest:** 3 changes made based on playtesting:
Following our first playtesting session, we implemented three key interaction‑focused improvements to strengthen player control, responsiveness, and challenge. First, we refined the penguin’s turning so it moves more noticeably from side to side, making getting down the mountain feel smoother and more intuitive. We also increased the size of the movement circle, giving players more space to maneuver and reducing accidental edge collisions. Finally, we added backward movement through the S key, allowing players to reposition more precisely and recover more easily during gameplay. Building on additional tester feedback, we further enhanced difficulty by introducing intentional dead ends and rearranging spike placements to create a more complex and strategic path. To reinforce time pressure, we also implemented a stomp time penalty that reduces the countdown whenever players use the space‑bar stomp, limiting reliance on this visibility boost. Together, these changes directly addressed player feedback and created a more engaging, skill‑based, and thoughtfully challenging control experience.

**Post-Showcase:** 2 planned improvements if you were to continue iterating the game:
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
| `assets/images/warning_octo.png`            | Warning and tutorial assets - ChatGPT.com              [7] |
| `assets/images/tutorial_box.png`            | Warning and tutorial assets - ChatGPT.com              [7] |
| `assets/images/box_key.png`                 | Box key image - ChatGPT.com                            [8] |
| `assets/images/map.png`                     | Iterated game assets - ChatGPT.com                     [11]|
| `assets/images/fish.png`                    | Fish sprite sheet - ChatGPT.com                        [9] |
| `assets/images/checkmark.png`               | Iterated game assets - ChatGPT.com                     [11]|
| `assets/images/lock.png`                    | Iterated game assets - ChatGPT.com                     [11]|
| `assets/images/box .png`                    | Box asset - ChatGPT.com                                [12]|
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

[7]
2026. Check out this chat. ChatGPT. Retrieved July 6, 2026 from https://chatgpt.com/share/6a4c1c98-d984-83ea-871e-bac209f905e4

[8]
2026. Check out this chat. ChatGPT. Retrieved July 7, 2026 from https://chatgpt.com/share/6a4c3530-ff80-83ea-8016-5245a49404c3

[9]
2026. Check out this chat. ChatGPT. Retrieved July 7, 2026 from https://chatgpt.com/share/6a4d2a8e-3b80-83ea-9e1e-42f38b3ff40d

[10]
2026. Check out this chat. ChatGPT. Retrieved July 7, 2026 from https://chatgpt.com/share/6a4d2a4f-811c-83ea-b371-9b468e1be632

[11]
2026. Check out this chat. ChatGPT. Retrieved July 7, 2026 from https://chatgpt.com/share/6a4d2a01-fa68-83ea-a0d1-a8b3755555b9?fbclid=PARlRTSAS6CeRwZG9mAmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1dTKxhlNb_zbFoWwJNIeJyuHMhG3xqLByyhrMc1Unz1-spbgXtD02aGA9SN_aem_-_ATcUBkSPnsy1jTo95fxQ 

[12]
2026. Check out this chat. ChatGPT. Retrieved July 7, 2026 from https://chatgpt.com/share/6a4c3530-ff80-83ea-8016-5245a49404c3
‌
‌
‌
‌
‌
‌

