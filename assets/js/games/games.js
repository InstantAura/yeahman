const gamesArr = [
  /*{
    filter: [`shoot`, `mp`],
    link: `sample`,
    imgsrc: `rooftop.jpg`,
    name: `Sample Game`,
    developer: `Sample Game Creator`,
    desc: `Sample Description`,
    controls: [`←/→ Arrow Keys: Move horizontally`]
  },*/
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers`,
    imgsrc: `rooftop.jpg`,
    name: `Rooftop Snipers`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: ['clicker'],
    link: `clicker-heroes`,
    imgsrc: `clicker-heroes.jpg`,
    name: `Clicker Heroes`,
    developer: `Playsaurus`,
    desc: `In Clicker Heroes, the player clicks on the enemy to damage and eventually kill it. 0nce killed, the enemy drops gold that can be used to upgrade and purchase characters. Purchased characters automatically damage the enemy, increasing the player's total damage per second.`,
    controls: [`Click to Play`]
  },
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers-2`,
    imgsrc: `rooftop-snipers-2.jpg`,
    name: `Rooftop Snipers 2`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers 2 is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`mp`, `misc`],
    link: `uno-online`,
    imgsrc: `uno-online.png`,
    name: `Uno Online`,
    developer: `Merle Robbins`,
    desc: `UNO Online is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.`,
    controls: [`Mouse`]
  },
  {
    filter: ['mp'],
    link: `just-fall-lol`,
    imgsrc: `just-fall-lol.png`,
    name: `Just Fall.lol`,
    developer: `Unknown`,
    desc: `Play the fun Fall Ultimate Knockout Guys game directly from your PC without download, just in your browser! Try out the penguin hexagon Fall Multiplayer Game.`,
    controls: [`Keyboard`]
  },
  {
    filter: [`mp`],
    link: `tube-jumpers`,
    imgsrc: `tj.jpg`,
    name: `Tube Jumpers`,
    developer: `Pat Eichler`,
    desc: `Tube Jumpers is a local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
    controls: [`W/I: Jump`]
  },
  {
    filter: [`plat`],
    link: `slope`,
    imgsrc: `slope.jpg`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
    controls: [`AD/QE/Arrow Keys: Control movement`]
  },
  {
    filter: ['mp','fight'],
    link: `12-mini-battles`,
    imgsrc: `12-mini-battles.png`,
    name: `12 Mini Battles`,
    developer: `Shared Dreams (Mariano Maffia)`,
    desc: `12 MiniBattles is a fun two players game in which you and a friend can play against each other on a variety of games. This physics style game has different game types that you can play at random including a soccer match and sniper warfare.`,
    controls: [`Player 1 use A
    Player 2 use L`]
  },
  {
    filter: [`mp`, `shoot`, `fight`],
    link: `getaway-shootout`,
    imgsrc: `getaway-shootout.jpg`,
    name: `Getaway Shootout`,
    developer: `Pat Eichler`,
    desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
    controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
  },
  {
    filter: [`mp`],
    link: `eaglercraft`,
    imgsrc: `eaglercraft.png`,
    name: `Eaglercraft`,
    developer: `LAX1DUDE`,
    desc: `Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. You can join real Minecraft 1.5.2 servers with it through a custom proxy based on Bungeecord.
    
    If your keyboard inputs aren't registering, try refreshing the page.

    Want to join more servers? You can find supported servers here: https://g.eags.us/eaglercraft/servers`,
    controls: [`Controls can be modified ingame`]
  },
  {
    filter: [`mp`],
    link: `craft-mine`,
    imgsrc: `craft-mine.png`,
    name: `Craft Mine`,
    developer: `Markus Alexej Persson`,
    desc: `Craft Mine is a minecraft themed terraria clone.`,
    controls: [`Controls can be modified ingame`]
  },
  {
    filter: [`misc`],
    link: `crossy-road`,
    imgsrc: `crossy-road.jpg`,
    name: `Crossy Road`,
    developer: `Matt Hall`,
    desc: `The objective of Crossy Road is to move a character through an endless path of static and moving obstacles as far as possible without dying.`,
    controls: [`Arrow Keys/WASD/Mouse`]
  },
  {
    filter: ['food'],
    link: `cut-the-rope`,
    imgsrc: `cut-the-rope.png`,
    name: `Cut The Rope`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: ['food'],
    link: `cut-the-rope-holiday`,
    imgsrc: `cut-the-rope-holiday.png`,
    name: `Cut The Rope: Holiday`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: ['food'],
    link: `cut-the-rope-time-travel`,
    imgsrc: `cut-the-rope-time-travel.png`,
    name: `Cut The Rope: Time Travel`,
    developer: `ZeptoLab`,
    desc: `Cut the Rope is a charming physics-based puzzle game featuring a cute green monster named "Om Nom." Players must cut dangling ropes that hold candy so that it falls into the monster's mouth, while collecting as many bonus stars as possible.`,
    controls: [`Mouse`]
  },
  {
    filter: [`shoot,'misc`,'food'],
    link: `om-nom-bounce`,
    imgsrc: `om-nom-bounce.jpg`,
    name: `Om Nom Bounce`,
    developer: `ZeptoLab`,
    desc: `Om Nom Bounce is an arcade game to defeat the enemy by shooting the candy right at them. Bounce your way through 40 challenging levels!`,
    controls: [`Mouse`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `2048`,
    imgsrc: `2048.png`,
    name: `2048`,
    developer: `Gabriele Cirulli`,
    desc: `2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `1`,
    imgsrc: `1.png`,
    name: `1`,
    developer: `Gabriele Cirulli`,
    desc: `1 is a clone of the popular 2048 single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `2048-multitask`,
    imgsrc: `2048-multitask.png`,
    name: `2048 Multitask`,
    developer: `Gabriele Cirulli`,
    desc: `Join the numbers and get to the 2048 and/or 3072 tile!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `9007199254740992`,
    imgsrc: `9007199254740992.png`,
    name: `9007199254740992`,
    developer: `Gabriele Cirulli`,
    desc: `Join the numbers and get to the 9007199254740992 tile!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`meme`, `puzzle`],
    link: `doge-2048`,
    imgsrc: `doge-2048.png`,
    name: `Doge 2048`,
    developer: `Gabriele Cirulli`,
    desc: `Doge 2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same doge touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`misc`,'meme','simulator'],
    link: `doge-miner`,
    imgsrc: `doge-miner.png`,
    name: `Doge Miner`,
    developer: `Unknown`,
    desc: `Doge Miner is an awesome incremental game featuring our favorite dog. It is an idle game inspired by Cookie Clicker and uses the famous Doge meme featuring Shiba Inus. The goal of the game is to click your way to the moon.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['sport'],
    link: `cannon-basketball-4`,
    imgsrc: `cannon-basketball-4.png`,
    name: `Cannon Basketball 4`,
    developer: `Oleg Kuzyk (Nepix Games)`,
    desc: `Cannon Basketball is a puzzle game that combines the amazing sport of basketball together with Angry-Birds-style gameplay. You control a cannon and during each level, you must fire basketballs from the cannon into the basket.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['music'],
    link: `osu`,
    imgsrc: `osu.png`,
    name: `Osu!`,
    developer: `Joshua-Usi`,
    desc: `An in-development osu! clone designed to run on web browers It is planned to emulate the osu! experience as closely as possible in the browser Heavy development phase as the project heads closer to a release candidate`,
    controls: [`For red circles, hit X or C. For blue circles, hit Z or V. Hit larger circles to the beat. When a larger circle overlaps the area in front of the drum, press the two appropriate keys together.`]
  },
  {
    filter: ['shoot','flash'],
    link: `canyon-defense`,
    imgsrc: `canyon-defense.png`,
    name: `Canyone Defense`,
    developer: `Miniclip`,
    desc: `Canyon Defense is a single player game by Miniclip. It was published on March 6, 2008. The game has three different options for style of canyon, each at a different difficulty, as well as the difficulty setting for number of attacks your canyon will receive.`,
    controls: [`Click to Play`]
  },
  {
    filter: [`clicker`],
    link: `idle-breakout`,
    imgsrc: `idle-breakout.png`,
    name: `Idle Breakout`,
    developer: `Kodiqi`,
    desc: `Click on a brick to break it and score points. Use points to purchase new balls with different abilities and upgrade them. Balls will automatically bounce and break bricks to score more points.`,
    controls: [`Click to Play`]
  },
  {
    filter: [`puzzle`],
    link: `breaking-the-bank`,
    imgsrc: `breaking-the-bank.png`,
    name: `Breaking The Bank`,
    developer: `Puffballs United`,
    desc: `Breaking the Bank is a stickman puzzle game made by Puffballs United, just as Infiltrating The Airship and Fleeing The Complex. Find the best way to Break the Bank!`,
    controls: [`Click to Play`]
  },
  {
    filter: [`scary`],
    link: `backrooms`,
    imgsrc: `backrooms.jpg`,
    name: `Idle Breakout`,
    developer: `David Campbell III`,
    desc: `The Backrooms is a horror multiplayer game mixed with different mechanics that will make you spend an intense night with friends.`,
    controls: [`Unknown`]
  },
  {
    filter: [`drawing`],
    link: `draw-the-hill`,
    imgsrc: `draw-the-hill.png`,
    name: `Draw The Hill`,
    developer: `Stelennnn`,
    desc: `In this cool driving game, use your skills to draw a path for the car to drive through the level. Make sure to draw a steady path! If hills are too steep, you'll topple over. If you get too close to obstacles, you're stuck.`,
    controls: [`Mouse`]
  },
  {
    filter: [`emu`],
    link: `emulatorjs`,
    imgsrc: `ejs.png`,
    name: `EmulatorJS`,
    developer: `ethanobrien`,
    desc: `The original decompilation of emulatorjs. Retroarch in your browser! Upload your own ROMS to play!
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem`,
    imgsrc: `gunmayhem.jpg`,
    name: `Gun Mayhem`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem is an extremely interesting flash format shooting game developed by Kevin Gu. The game is designed with 10 maps starting from prehistoric context to modern times. The player's task in this game is to destroy all enemies by shooting them down! Very simple, isn't it! Let's start the adventure now!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-2`,
    imgsrc: `gunmayhem2.jpg`,
    name: `Gun Mayhem 2`,
    developer: `Kevin Gu`,
    desc: `More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once! 
    Gun Mayhem returns with brand new maps, and much more:
    - New campaign with 16 progressively challenging missions
    - Challenge levels to test your skills
    - 7 custom game modes
    - New guns, perks, and customization options`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-redux`,
    imgsrc: `gunmayhemredux.jpg`,
    name: `Gun Mayhem Redux`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem Redux which is the brand new chapter of Gun Mayhem, is now available. This chapter is little bit different compared to other chapters. For instance, game characters and war maps is minimized little bit to have a better view and game play but this doesn't cause the loose of excitement of the this superb game. 
    In this chapter, tens of brand new weapons will be awaiting you. Even, you will have a chance to war by using primitive weapons. The war resumes in the arena with the superior war maps and weapons and entertaining chapters!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`plat`,'runner'],
    link: `run-3`,
    imgsrc: `run3.jpg`,
    name: `Run 3`,
    developer: `Player03`,
    desc: `There’s a whole new galaxy waiting to be explored! You can play Run 3 in the Explore Mode and the Infinite Mode. To add more levels to your Galaxy Map, choose the Explore Mode. The Runner will encounter lots of new tunnels and areas, and may bump into some friends along the way!
    If the game is stuck on the loading screen and not loading, try disabling your adblocker.`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Reset`, `P: Pause`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `wordle-unlimited`,
    imgsrc: `wordle.png`,
    name: `Wordle +`,
    developer: `Josh Wardle`,
    desc: `Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!`,
    controls: [`Type to interact`]
  },
  {
    filter: [`puzzle`],
    link: `tetris`,
    imgsrc: `tetris.jpg`,
    name: `Tetris`,
    developer: `Kyle Shanks`,
    desc: `Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the rights in the late 1980s.`,
    controls: [`←/→ Arrow Keys: Move horizontally`, `↑: Rotate piece`, `↓: Soft Drop`, `P: Pause`, `Shift: Switch blocks`, `Space: Hard drop`, `R: Reset`]
  },
  {
    filter: [`sport`],
    link: `retro-bowl`,
    imgsrc: `retrobowl.jpg`,
    name: `Retro Bowl`,
    developer: `New Star Games`,
    desc: `Retro Bowl is an American style football game created by New Star Games. Are you ready to manage your dream team into victory? Be the boss of your NFL franchise, expand your roster, take care of your press duties to keep your team and fans happy.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Drag to throw`]
  },
  {
    filter: [`shoot`, `flash`],
    link: `zombocalypse`,
    imgsrc: `zombocalypse.jpg`,
    name: `Zombocalypse`,
    developer: `John Funtanilla`,
    desc: `Only you, and a whole lot of hungry hungry zombies. Fortunately, you get constant airdrops to deliver fresh weapons and med kits. Now, if you can only live long enough to earn some achievements and unlock some bigger guns. When things get really hairy, call in an airstrike!`,
    controls: [`AD/← →: Control movement`, `S/↓: Pick up items`, `W/↑: Call airstrike`, `Space: Attack`, `Shift: Pause game`]
  },
  {
    filter: [`plat`,'emu'],
    link: `super-mario-64`,
    imgsrc: `sm64.jpeg`,
    name: `Super Mario 64`,
    developer: `Nintendo, ported by sm64js`,
    desc: `Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first Super Mario game to feature 3D gameplay. It was developed by Nintendo EAD and published by Nintendo, now ported over to the web thanks to the folks over at sm64js!
    
    Note: The first key is the one you press, the second key is what it does in game (Ex: in game, it will say to press A. You would press "X" to achieve that.`,
    controls: [`Arrow Keys: Control movement`, `Enter: Start`, `X: A`, `C: B`, `Q: L`, `Space: Z`, `C-Stick: WASD`]
  },
  {
    filter: [`drive`],
    link: `madalin-stunt-cars-2`,
    imgsrc: `msc2.jpg`,
    name: `Madalin Stunt Cars 2`,
    developer: `Madalin Games`,
    desc: `Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps.

    Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2.
    
    Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Shift: Nitrous`, `R: Respawn`, `T: Open map`, `C: Change camera`]
  },
  {
    filter: [`drive`],
    link: `car-simulator`,
    imgsrc: `car-simulator.png`,
    name: `Car Simulator`,
    developer: `Unknown`,
    desc: `Unknown`,
    controls: [`WASD/Arrow Keys`]
  },
  {
    filter: [`misc`],
    link: `core-ball`,
    imgsrc: `core-ball.png`,
    name: `Core Ball`,
    developer: `Tasty Pill`,
    desc: `Core Ball is a simple tapping strategy game fun for users of for all ages. Shoot arrows at the spinning circle target but don't touch the other arrows. Use the right strategy to improve your accuracy and hit the bullseye on the circle as it twists every time. The more arrows you shoot, the harder it is to be accurate and hit the bullseye. Can you beat this impossible rotating wheel? What level can you get to? Download right now and spin the wheel to find out.`,
    controls: [`Mouse`]
  },
  {
    filter: [`drive`],
    link: `cluster-truck`,
    imgsrc: `cluster-truck.png`,
    name: `Cluster Truck`,
    developer: `Wilhelm Nylund`,
    desc: `Clustertruck is a new kind of platformer on top of a speeding highway! Use agility and acrobatics through insane levels in a game of "the floor is lava" on top of unpredictable, speeding trucks! The game only gets harder when dangers such as swinging hammers, lasers and flamethrowers are added!`,
    controls: [`WASD/Arrow Keys/Space`]
  },
  {
    filter: [`shoot`],
    link: `superhot`,
    imgsrc: `superhot.jpg`,
    name: `SUPERHOT`,
    developer: `SUPERHOT Team`,
    desc: `No regenerating health bars. No conveniently placed ammo drops. 
    It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Space: Jump`, `Left Click: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `my-friend-pedro`,
    imgsrc: `mfp.jpg`,
    name: `My Friend Pedro`,
    developer: `Dead Toast Entertainment`,
    desc: `An action packed slow motion face-blasting-simulator about friendship and imagination.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Shoot`, `Shift/Space: Slow down time`]
  },
  {
    filter: [`food`,'clicker'],
    link: `cookie-clicker`,
    imgsrc: `cookie-clicker.jpg`,
    name: `Cookie Clicker`,
    developer: `Julien "Orteil" Thiennot`,
    desc: `Cookie Clicker is a game about making an absurd amount of cookies. To help you in this endeavor, you will recruit a wide variety of helpful cookie makers, like friendly Grandmas, Farms, Factories, and otherworldly Portals.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `doodle-jump`,
    imgsrc: `doodle.jpg`,
    name: `Doodle Jump`,
    developer: `Lima Sky`,
    desc: `Doodle Jump is a fun and cute game. Your must help our alien jump as high as possible onto a range of different hand-drawn platforms. This game is an endless game, so you must simply keep jumping and try to register as high a score as you possibly can!`,
    controls: [`Arrow Keys: Control movement`, `Space: Start/Restart game`]
  },
  {
    filter: [`misc`],
    link: `snake`,
    imgsrc: `snake.jpg`,
    name: `Snake`,
    developer: `Google`,
    desc: `How long can you last before your tail becomes your dinner? Take the challenge and eat all those apples! Be careful not to hit the wall!`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `solitaire`,
    imgsrc: `solitaire.png`,
    name: `Solitaire`,
    developer: `Google`,
    desc: `Patience, card solitaire or just solitaire, is a genre of card games that can be played by a single player. Patience games can also be played in a head-to-head fashion with the winner selected by a scoring scheme.`,
    controls: [`Click to play`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `a-dark-room`,
    imgsrc: `adr.png`,
    name: `A Dark Room`,
    developer: `Doublespeak Games`,
    desc: `A Dark Room is a minimalist text-based adventure RPG game right in your browser! How far will you go, player?`,
    controls: [`Click to play`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `align-4`,
    imgsrc: `align4.jpg`,
    name: `Align 4`,
    developer: `Will Boyd`,
    desc: `Align 4 is a two-player connection board game just like Connect 4, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. 
    The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The first player can always win by playing the right moves.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `pacman`,
    imgsrc: `pacman.jpg`,
    name: `Pac-Man`,
    developer: `Bandai Namco, remade by Shaun Williams`,
    desc: `Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment.`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `meat-boy`,
    imgsrc: `meatboy.jpg`,
    name: `Meat Boy`,
    developer: `Team Meat`,
    desc: `This is NOT Super Meat Boy!

    Its simply the flash prototype that Super Meat Boy was based off of.
    SMB, will play very differently and is 100% new.. what im saying is if you even slightly enjoy the prototype, you will LOVE SMB!
    
    For more info on Super Meat Boy check out supermeatboy.com
    
    -Team Meat`,
    controls: [`←/→: Control movement`, `Space: Jump`]
  },
  {
    filter: [`misc`],
    link: `fnf`,
    imgsrc: `fnf.png`,
    name: `Friday Night Funkin`,
    developer: `ninjamuffin99`,
    desc: `Friday Night Funkin' is an open-source donationware rhythm game first released in 2020 for a game jam. 
    The game was developed by a team of four Newgrounds users, Cameron "Ninjamuffin99" Taylor, David "PhantomArcade" Brown, Isaac "Kawai Sprite" Garcia, and evilsk8r.`,
    controls: [`WASD/Arrow Keys: Interact`, `+/-: Change volume`]
  },
  {
    filter: [`misc`],
    link: `hackertyper`,
    imgsrc: `hackertyper.jpg`,
    name: `Hacker Typer`,
    developer: `David M.`,
    desc: `Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. 
    Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).`,
    controls: [`Click or type to play`]
  },
  {
    filter: [`plat`, `flash`],
    link: `fancy-pants-adventures`,
    imgsrc: `fancy-pants-adventures.png`,
    name: `Fancy Pants Adventures`,
    developer: `DrNeroCF`,
    desc: `Run Fast, Run Fancy.`,
    controls: [`←/→: Control movement`, `↓: Duck/roll`, `↑: Enter door`, `S: Jump`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war`,
    imgsrc: `age-of-war.jpg`,
    name: `Age of War`,
    developer: `Louissi`,
    desc: `Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy.
    In this game, you start at the cavern men's age, then evolve! There is a total of 5 ages, each with its units and turrets. I hope you have fun with this game! Sooo many hours of hard work.`,
    controls: [`Click to play`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war-2`,
    imgsrc: `aow2.png`,
    name: `Age of War 2`,
    developer: `Louissi`,
    desc: `A terrible struggle is about to take place that will determine the future of your people. Only one possible solution to this conflict: to conquer or die! 
    Establish your strategy carefully, finding the right balance between attack and defense, and use your collected experience to upgrade your troops. 
    Age of War 2 is a great strategy / defense game, with easy handling but vast possibilities.`,
    controls: [`Click to play`]
  },
  {
    filter: [`mp`, `sport`,'fight'],
    link: `basket-random`,
    imgsrc: `basket-random.jpg`,
    name: `Basket Random`,
    developer: `RHM Interactive`,
    desc: `In Basket Random game, try to score a basket by using only one key with different variations from each other! Changing fields, changing players and changing balls do not surprise you! You can be the best of them all. You can play Basket Random game either against CPU or against a friend in 2 player gaming mode!.`,
    controls: [`W/UP ARROW`]
  },
  {
    filter: [`mp`, `sport`,'fight'],
    link: `volley-random`,
    imgsrc: `volley-random.jpg`,
    name: `Volley Random`,
    developer: `RHM Interactive`,
    desc: `There is a Volleyball experience unlike any before. With fun ragdoll physics and a variety of variations, each match will be different. The playing court, ball and players may change.`,
    controls: [`W/UP ARROW`]
  },
  {
    filter: ['misc'],
    link: `elastic-face`,
    imgsrc: `elastic-face.jpg`,
    name: `Elastic Face`,
    developer: `Adult Swim Games`,
    desc: 'Elastic Man is an entertaining arcade game in which you can be free to play with an elastic face. Drag and pinch his face to relax and reduce stress.',
    controls: ['Mouse']
  },
  {
    filter: ['runner'],
    link: `subway-surfers`,
    imgsrc: `subway-surfers.png`,
    name: `Subway Surfers`,
    developer: `Kiloo Gmaes/SYBO`,
    desc: 'Single player mobile gaming app and website developed by Kiloo. The aim of the game is to outrun a train inspector while dodging oncoming trains, barriers and other objects. Collecting coins on the way gives players advantages such as hover boards and high scores.',
    controls: ['Mouse/Arrow Keys']
  },
  {
    filter: ['plat'],
    link: `vex-3`,
    imgsrc: `vex-3.png`,
    name: `Vex 3`,
    developer: `Acclaim Studios Austin`,
    desc: 'Vex 3 is a challenging platform adventure game. Make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! Run and jump to reach the flags. These are the checkpoints',
    controls: ['ARROW KEYS or WASD to move']
  },
  {
    filter: ['plat'],
    link: `vex-4`,
    imgsrc: `vex-4.png`,
    name: `Vex 4`,
    developer: `Acclaim Studios Austin`,
    desc: 'Vex 4 is a challenging platform adventure game. Make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! Run and jump to reach the flags. These are the checkpoints',
    controls: ['ARROW KEYS or WASD to move']
  },
  {
    filter: ['plat'],
    link: `vex-5`,
    imgsrc: `vex-5.jpeg`,
    name: `Vex 5`,
    developer: `Acclaim Studios Austin`,
    desc: 'Vex 5 is a challenging platform adventure game. Make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! Run and jump to reach the flags. These are the checkpoints',
    controls: ['ARROW KEYS or WASD to move']
  },
  {
    filter: ['plat'],
    link: `vex-6`,
    imgsrc: `vex-6.jpeg`,
    name: `Vex 6`,
    developer: `Acclaim Studios Austin`,
    desc: 'Vex 6 is a challenging platform adventure game. Make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! Run and jump to reach the flags. These are the checkpoints',
    controls: ['ARROW KEYS or WASD to move']
  },
  {
    filter: ['simulator'],
    link: `bezos-simulator`,
    imgsrc: `bezos-simulator.png`,
    name: `Bezos Simulator`,
    developer: `Kris Lorischild`,
    desc: 'A simple text-based adventure exploring the age-old question: What would you do if you had more money than any single human being should ever have? Be sure to expand the side column using the arrow in the upper left to view your current funds.',
    controls: ['Click to Play']
  },
  {
    filter: ['plat'],
    link: `vex-7`,
    imgsrc: `vex-7.jpeg`,
    name: `Vex 7`,
    developer: `Acclaim Studios Austin`,
    desc: 'Vex 7 is a challenging platform adventure game. Make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! Run and jump to reach the flags. These are the checkpoints',
    controls: ['ARROW KEYS or WASD to move']
  },
  {
    filter: ['misc'],
    link: `town-scaper`,
    imgsrc: `town-scaper.jpg`,
    name: `Town Scaper`,
    developer: `Oskar Stålberg.`,
    desc: 'More of a toy than a game. Pick colors from the palette, plop down colored blocks of house on the irregular grid',
    controls: ['Click to Play']
  },
  {
    filter: ['flash', 'drive'],
    link: `earn-to-die-2012-part-2`,
    imgsrc: `earn-to-die-2012-part-2.png`,
    name: `Earn to Die 2012 Part 2`,
    developer: `Not Doppler`,
    desc: `Drive your car through a zombie apocalypse! Earn to Die 2 is set in a world where the struggle for survival is told through the eyes of only a few people who have survived the zombie apocalypse. Hordes of zombies have taken over the world. One of the last survivors is the player.`,
    controls: [`Arrow Keys/Mouse`]
  },
  {
    filter: [`puzzle`,'misc'],
    link: `bad-ice-cream`,
    imgsrc: `bad-ice-cream.jpg`,
    name: `Bad Ice Cream`,
    developer: `Nitrome Ltd`,
    desc: `Bad Ice Cream is a fun puzzle game where you play as an ice cream in a maze of fruit and bad guys. The challenge is to get all the fruit before you get caught by an enemy! Thankfully you can shoot walls into existence to help you trap enemies, or hide from them.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: ['misc'],
    link: `flappy-2048`,
    imgsrc: `flappy-2048.png`,
    name: `Flappy 2048`,
    developer: `Gabrielle Cirulli`,
    desc: `Flappy 2048 is a flappy bird clone themed after the popular game 2048`,
    controls: [`W/Up Arrow`]
  },
  {
    filter: ['music'],
    link: `geometry-dash`,
    imgsrc: `geometry-dash.png`,
    name: `Geometry Dash`,
    developer: `Griffpatch`,
    desc: `In Geometry Dash, players control the movement of an icon and navigate along music-based levels, while avoiding obstacles such as spikes that instantly destroy the icon on impact. Geometry Dash currently consists of 21 official levels.`,
    controls: [`Space/Up Arrow`]
  },
  {
    filter: ['misc'],
    link: `frying-nemo`,
    imgsrc: `frying-nemo.png`,
    name: `Frying Nemo`,
    developer: `Unknown`,
    desc: `An evil flying red hand wants to fry your fishes. Try to keep em alive by constantly putting them in the “aquarium”
    Reaching wave 10 is your goal, hope you have fun!`,
    controls: [`Mouse`]
  },
  {
    filter: ['misc'],
    link: `flappy-bird`,
    imgsrc: `flappy-bird.png`,
    name: `Flappy Bird`,
    developer: `.Gears`,
    desc: `Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.`,
    controls: [`W/Up Arrow/Space`]
  },
  {
    filter: [`puzzle`,'misc'],
    link: `bad-ice-cream-2`,
    imgsrc: `bad-ice-cream-2.png`,
    name: `Bad Ice Cream 2`,
    developer: `Nitrome Ltd`,
    desc: `Bad Ice Cream 2 is a fun puzzle game where you play as an ice cream in a maze of fruit and bad guys. The challenge is to get all the fruit before you get caught by an enemy! Thankfully you can shoot walls into existence to help you trap enemies, or hide from them.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`flash`,'clicker'],
    link: `big-red-button`,
    imgsrc: `big-red-button.png`,
    name: `Big Red Button`,
    developer: `Big Red Button Entertainment`,
    desc: `Big Red Button is the game of mutually assured destruction. Each player leads a nation armed with an apocalyptic arsenal, a hunger for domination, and a finger on the button. The doomsday clock is set to midnight: only one can win, but everyone can lose`,
    controls: [`Mouse`]
  },
  {
    filter: [`puzzle`],
    link: `bad-ice-cream-3`,
    imgsrc: `bad-ice-cream-3.png`,
    name: `Bad Ice Cream 3`,
    developer: `Nitrome Ltd`,
    desc: `Bad Ice Cream 3 is a fun puzzle game where you play as an ice cream in a maze of fruit and bad guys. The challenge is to get all the fruit before you get caught by an enemy! Thankfully you can shoot walls into existence to help you trap enemies, or hide from them.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`misc`],
    link: `hextris`,
    imgsrc: `hextris.png`,
    name: `Hextris`,
    developer: `David King`,
    desc: `An addictive puzzle game inspired by Tetris.`,
    controls: [`WASD/ARROW KEYS`]
  },
  {
    filter: [`plat`, `mp`],
    link: `fbwg1`,
    imgsrc: `fbwg1.jpg`,
    name: `Fireboy and Watergirl 1`,
    developer: `Oslo Albet`,
    desc: `Fireboy and Watergirl 1 is the first cooperative platformer game in the Fireboy and Watergirl series. In this adventure, you explore 32 levels of the Forest Temple, controlling both the Fireboy and Watergirl characters through various puzzles.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`fight`, `mp`, 'shoot'],
    link: `1v1-lol`,
    imgsrc: `1v1-lol.png`,
    name: `1v1.lol`,
    developer: `Unknown`,
    desc: `Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!`,
    controls: [`Keyboard/Mouse/Controller`]
  },
  {
    filter: [`plat`],
    link: `tunnelrush`,
    imgsrc: `tunnelrush.jpg`,
    name: `Tunnel Rush`,
    developer: `Deer Cat`,
    desc: `Tunnel Rush online is the ultimate 3D single-player experience. Blaze your way through caves and tunnels. Each Tunnel Rush level drops you into a whirling kaleidoscope of hazards and 3D tunnels. Play Tunnel Rush to dodge barriers using just your wits and your keyboard.`,
    controls: [`AD/Arrow Keys: Control movement`, `Space: Pause/Restart`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life`,
    imgsrc: `ducklife.png`,
    name: `Duck Life`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-2`,
    imgsrc: `ducklife2.png`,
    name: `Duck Life 2`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-3`,
    imgsrc: `ducklife3.png`,
    name: `Duck Life 3`,
    developer: `Wix Games`,
    desc: `The latest installment of the Duck Life franchise is here! Train your little duck into a lean, mean, racing machine. Practice running, swimming, flying, and climbing to work your way to the top. 
    Compete in different competitions, chow down on some seed to gain up energy, then see if your duck can come out on top!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-4`,
    imgsrc: `ducklife4.png`,
    name: `Duck Life 4`,
    developer: `Wix Games`,
    desc: `Ducklife 4 is here, so get ready to race your ducks! In the near future, genetically engineered ducks have been banned from the races. It's up to you to make an elite duck who is capable of winning any race!
    Go through vigorous training sequences to build up speed and agility! Do you have the skills to win against all the other ducks? Good luck!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`mp`, `puzzle`],
    link: `among-us`,
    imgsrc: `among-us.jpg`,
    name: `Among Us (Fan Made)`,
    developer: `1tim`,
    desc: `Among Us is a multiplayer game where 10 players get dropped into an alien spaceship, sky headquarters or planet base, where each player is designated with a private role of either a “crewmate” and an “impostor.” This is an online multiplayer social deduction game, and a player can either be a crewmate or an imposter`,
    controls: [`Arrow Keys/WASD/Mouse`]
  },
  {
    filter: [`misc`],
    link: `ball-blast`,
    imgsrc: `ball-blast.png`,
    name: `Ball Blast`,
    developer: `fluci2010`,
    desc: `UNOFFICIAL GAME: Ball Blast is the best ball shooting game you have never seen before. It has the mix fun of shooting and dodge. Your task is to shoot things in your sight and break them as many as you can. Keep moving and avoid hitting the drops. The more you break, the more you earn.`,
    controls: [`Mouse`]
  },
  {
    filter: [`sport`,'mp','fight'],
    link: `soccer-random`,
    imgsrc: `soccer-random.png`,
    name: `Soccer Random`,
    developer: `RHM Interactive`,
    desc: `ootball is here with its most funny and random way. In Soccer Random game, try to score a goal by using only one key with different variations from each other! Sometimes you will play on a iced field or you will play on a beach. The goal of the game is, to score five goals and win the game even the balls, players or goal posts change! You can play Soccer Random game either against CPU or against a friend in 2 player gaming mode! Let the soccer match begin!`,
    controls: [`W/Up Arrow`]
  },
  {
    filter: [`misc`],
    link: `rolly-vortex`,
    imgsrc: `rolly-vortex.jpg`,
    name: `Rolly Vortex`,
    developer: `Voodoo`,
    desc: `Roll quickly, be alert, manage your way through the obstacles, score high and challenge friends`,
    controls: [`Mouse/Arrow Keys`]
  },
  {
    filter: [`misc`, `fight`],
    link: `sans-fight`,
    imgsrc: `sans-fight.jpg`,
    name: `Sans Fight`,
    developer: `Jcw87`,
    desc: `Undertale Sans Fight Clone; "do you wanna have a bad time? 'cause if you visit this page... you are REALLY not going to like what happens next."`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`plat`, `puzzle`, `flash`],
    link: `bloxorz`,
    imgsrc: `bloxorz.jpg`,
    name: `Bloxorz`,
    developer: `Damian Clarke`,
    desc: `Bloxorz is a brain twisting puzzle game of rolling blocks and switching bridges. You'll be rolling round in circles over the course of the 33 levels.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars`,
    imgsrc: `raftwars.jpg`,
    name: `Raft Wars`,
    developer: `Martijn Kunst`,
    desc: `Fight against the pirates in the raft wars and win the treasure in the game. The two heroes have cannons which can shoot very far. However this requires a very accurate shooting. Aim well and hit all the pirates in order to win the game.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars2`,
    imgsrc: `raftwars2.jpg`,
    name: `Raft Wars 2`,
    developer: `Martijn Kunst`,
    desc: `Fight in the raft wars and hit all the targets to sabotage the business of the complex and get back the treasure that is buried in the ground. Defeat all enemies and pass all levels in the game. In the end you can submit your game score.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift`,
    imgsrc: `shift.png`,
    name: `Shift`,
    developer: `Antony Lavelle`,
    desc: `Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift-2`,
    imgsrc: `shift-2.png`,
    name: `Shift 2`,
    developer: `Antony Lavelle`,
    desc: `The sequel to The Shift! Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer, part 2!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `portal-flash`,
    imgsrc: `portal-flash.jpg`,
    name: `Portal Flash`,
    developer: `We Create Stuff`,
    desc: `Portal: The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, 
    in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer. 
    The game also includes a console to mess around with after finishing the game, or just being frustrated by thinking with portals!`,
    controls: [`WAD: Control movement`, `Q: Open a blue portal`, `E: Open a yellow portal`, `R: Close portals`, `F: Pick up object`, `Esc/P: Pause game`]
  },
  {
    filter: [`plat`, `flash`],
    link: `alien-hominid`,
    imgsrc: `alien-hominid.png`,
    name: `Alien Hominid`,
    developer: `The Behemoth`,
    desc: `Alien Hominid is a side-scrolling shooter in a similar vein to games such as Metal Slug, where one hit instantly kills and has a two-player simultaneous play. 
    Players take over as the titular hominid, who has to fend off waves of secret agents. 
    His main arsenal is a blaster, while players can also melee close-up enemies and use a limited number of grenades to attack. 
    Advanced moves include rolling under shots, jumping on and biting off enemies' heads, temporarily scaring other enemies, and digging underground to drag enemies down with them.`,
    controls: [`Arrow Keys: Control movement`, `A: Shoot`, `S: Jump`]
  },
  {
    filter: [`sport`,'mp'],
    link: `basketball-stars`,
    imgsrc: `bbstars.png`,
    name: `Basketball Stars`,
    developer: `MadPuffers`,
    desc: `Basketball Stars is a 2-player basketball game created by Madpuffers. You can play solo or with a friend as a variety of legendary basketball players. 
    Shoot basketball with the likes of LeBron James, James Harden, and Stephen Curry in Basketball Stars!`,
    controls: [`WASD/Arrow Keys: Control movement`, `B/L: Shoot/Steal`, `S/↓: Pump fake/block`, `Double-Tap A/D/←/→: Sprint`, `K/V: Super shot`]
  },
  {
    filter: [`driver`,'mp'],
    link: `smash-karts`,
    imgsrc: `smash-karts.png`,
    name: `Smash Karts`,
    developer: `Tall Team`,
    desc: `Smash Karts is a free io Multiplayer Kart Battle Arena game. Drive fast. Fire rockets. Make big explosions.`,
    controls: [`Forward: W or Up.
    Backward: S or Back.
    Left: A or Left.
    Right: D or Right.
    Fire: Space.`]
  },
  {
    filter: ['runner'],
    link: `temple-run-2`,
    imgsrc: `temple-run-2.png`,
    name: `Temple Run 2`,
    developer: `Keith Shepherd`,
    desc: `Temple Run 2 is an endless running video game developed and published by Imangi Studios. A sequel to Temple Run, the game was produced, designed and programmed by husband and wife team Keith Shepherd and Natalia Luckyanova, with art by Kiril Tchangov.`,
    controls: [`WASD/Arrow Keys/Mouse`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-burgeria`,
    imgsrc: `papas-burgeria.jpg`,
    name: `Papa's Burgeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Burgeria is a game in the Papa Louie series. It's the second cooking simulator game (aka "Gameria") in the seires, and is the sequel to Papa's Pizzeria. It revolves around making burgers for the various customers that visit the establishment.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-pizzeria`,
    imgsrc: `papas-pizzeria.jpg`,
    name: `Papa's Pizzeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Pizzeria is the first game in the Papa Louie time-management restaurant series, and was officially released on August 7, 2007. Papa's Pizzeria takes place in Tastyville, with Roy as the sole worker in the game.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-pancakeria`,
    imgsrc: `papas-pancakeria.jpg`,
    name: `Papa's Pancakeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Pancakeria is a game in the Papa Louie series. It's the fifth cooking simulator game (aka "Gameria") in the series, and is the sequel to Papa's Freezeria. It involves making pancakes and drinks for the various customers that visit the establishment.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-scooperia`,
    imgsrc: `papas-scooperia.jpg`,
    name: `Papa's Scooperia`,
    developer: `Flipline Studios`,
    desc: `You've been stranded in a town without much money. However, Papa Louie has an idea. Stay in this town and open up an ice-cream shop! Bake cookies, sell ice-cream and make money!`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-cupcakeria`,
    imgsrc: `papas-cupcakeria.jpg`,
    name: `Papa's Cupcakeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Cupcakeria is a game in the Papa Louie series. It's the eighth cooking simulator game (aka "Gameria") in the series, and is the sequel to Papa's Hot Doggeria. It involves making cupcakes for the various customers that visit the establishment.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-pastaria`,
    imgsrc: `papas-pastaria.jpg`,
    name: `Papa's Pastaria`,
    developer: `Flipline Studios`,
    desc: `Papa's Pastaria is a game in the Papa Louie series. It's the ninth cooking simulator game (aka "Gameria") in the seires, and is the sequel to Papa's Cupcakeria. It involves making pasta and bread for the various customers that visit the establishment.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-sushiria`,
    imgsrc: `papas-sushiria.jpg`,
    name: `Papa's Sushiria`,
    developer: `Flipline Studios`,
    desc: `Papa's Sushiria is the thirteenth game in the Papa Louie restaurant management series. The game was first announced on October 25, 2016. Matt and Clover are the default workers in this game, as they were the winners of Papa's Next Chefs 2016. The game takes place in Sakura Bay.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-donuteria`,
    imgsrc: `papas-donuteria.jpg`,
    name: `Papa's Donuteria`,
    developer: `Flipline Studios`,
    desc: `Papa's Donuteria is a game in the Papa Louie series. It's the tenth cooking simulator game (aka "Gameria") in the seires, and is the sequel to Papa's Pastaria. It involves making donuts for the various customers that visit the establishment.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-wingeria`,
    imgsrc: `papas-wingeria.jpg`,
    name: `Papa's Wingeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Wingeria is the sixth game in the Papa Louie restaurant management series released by Flipline Studios on June 13, 2012. Chuck and Mandi are the default workers in the game. Custom workers, characters that are designed by the players, are introduced in this game.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-hotdogeria`,
    imgsrc: `papas-hotdogeria.jpg`,
    name: `Papa's Hotdogeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Hot Doggeria is the seventh game in the Papa Louie restaurant management series. The game was first announced on October 25, 2012. Taylor and Peggy are the workers in this game, as they were the winners of Papa's Next Chefs 2012. The game takes place in Griller Stadium, located in Tastyville. The game was officially released on November 19, 2012.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-taco-mia`,
    imgsrc: `papas-taco-mia.jpg`,
    name: `Papa's Taco Mia`,
    developer: `Flipline Studios`,
    desc: `Build the largest and craziest restaurant in town where you'll sell the best tacos the locals have ever eaten! After willing a taco eating competition, you get the keys to Papa's Taco Mia! Good luck, since all of your favorite customers are back together with their friends.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papas-freezeria`,
    imgsrc: `papas-freezeria.jpg`,
    name: `Papa's Freezeria`,
    developer: `Flipline Studios`,
    desc: `Papa's Freezeria is an ocean front ice cream shop that will surely be a relaxing way to spend the summer. That is until Papa Louie takes off, leaving you in charge during the peak of tourist season. Boat loads of customers are coming to Calypso Island in search of the best Freezer treats around.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papa-louie-2`,
    imgsrc: `papa-louie-2.jpg`,
    name: `Papa Louie 2`,
    developer: `Flipline Studios`,
    desc: `Papa Louie 2: When Burgers Attack! Description: This is the long awaited sequel to the hit game Papa Louie: When Pizzas Attack! Marty and Rita's routine work day at the Burgeria turns into a nightmare when a strange portal appears in Papa's Burgeria.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['food','simulator'],
    link: `papa-louie`,
    imgsrc: `papa-louie.jpg`,
    name: `Papa Louie`,
    developer: `Flipline Studios`,
    desc: `Papa Louie: When Pizzas Attack is a platformer that lets you play as Papa Louie himself as he gets transported to worlds within pizza boxes. Your goal is to save the pizzas and free your employees and customers from captivity.`,
    controls: [`Click to Play`]
  },
  {
    filter: ['mp','misc'],
    link: `paper-io-2`,
    imgsrc: `paper-io-2.png`,
    name: `Paper.io 2`,
    developer: `Voodoo`,
    desc: `Paper.io 2 is a fun game which is . io based, that requires players to chomp away at the arena as well as the safe zone of other players within the game. The multi-player chomp game is a fast-paced game which lets players chomp pieces off the field and turn those pieces to their perspective colors.`,
    controls: [`Click to Play`]
  },
  {
    filter: [`misc`, `flash`],
    link: `btd`,
    imgsrc: `btd.jpg`,
    name: `Bloons Tower Defense`,
    developer: `Ninja Kiwi`,
    desc: `Bloons Tower Defense. Stop any bloons from escaping the maze by building and upgrading bloons popping towers. Towers can throw darts, tacks, bombs, and ice.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`misc`, `flash`],
    link: `bloons-td-2`,
    imgsrc: `bloons-td-2.png`,
    name: `Bloons Tower Defense 2`,
    developer: `Ninja Kiwi`,
    desc: `Bloons Tower Defense 2. Stop any bloons from escaping the maze by building and upgrading bloons popping towers. Towers can throw darts, tacks, bombs, and ice.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `minesweeper`,
    imgsrc: `minesweeper.png`,
    name: `Minesweeper`,
    developer: `PicturElements`,
    desc: `Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.`,
    controls: [`Left Click: Reveal tile`, `Right Click: Flag`, `Smiley Face: Reset game`]
  },
  {
    filter: [`plat`, `mp`, `fight`, `flash`],
    link: `ssf`,
    imgsrc: `ssf.png`,
    name: `Super Smash Flash`,
    developer: `McLeodGaming`,
    desc: `Choose your characters and options and battle it out with 28 different characters in the original title that started it all – Super Smash Flash!
    This award-winning Super Smash Bros. Fangame is complete with Classic Mode, Adventure Mode, and all of the things that make Smash Bros. 
    Feel like Smash Bros, with characters and content you’d never expect sprinkled about. Have fun!`,
    controls: [`Arrow Keys/WASD: Control movement`, `O/G: Jump`, `P/F: Attack`, `Backspace: Pause`]
  },
  {
    filter: [`plat`, `flash`],
    link: `flood-runner-2`,
    imgsrc: `fr2.jpg`,
    name: `Flood Runner 2`,
    developer: `Ben Rad Vinyl`,
    desc: `A fast paced run-for-your-life game.

    Goal is to outrun the giant wave and survive. This game is played with only one button, get your timing right and set a top score!`,
    controls: [`Click/Space: Jump/glide`]
  },
  {
    filter: [`misc`],
    link: `stack`,
    imgsrc: `stack.png`,
    name: `Stack`,
    developer: `Steve Gardner`,
    desc: `Stack is a fun and simple game with a simple goal. Keep stacking up the blocks as high as you can! Just make sure you don't run out of blocks...`,
    controls: [`Click/Space: Place blocks`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `linerider`,
    imgsrc: `linerider.jpg`,
    name: `Line Rider`,
    developer: `Emergent Studios`,
    desc: `Line Rider is a classic sandbox game where you draw a track for the sledder to ride on. Simple concept, endless possibilities, oddly addicting!`,
    controls: [`Click and hold to draw`]
  },
  {
    filter: [`plat`],
    link: `spelunky`,
    imgsrc: `spelunky.png`,
    name: `Spelunky`,
    developer: `Derek Yu`,
    desc: `Spelunky is a cave exploration / treasure-hunting game inspired by classic platform games and roguelikes, where the goal is to grab as much treasure from the cave as possible. 
    Every time you play the cave's layout will be different. Use your wits, your reflexes, and the items available to you to survive and go ever deeper! 
    Perhaps at the end you may find what you're looking for...`,
    controls: [`←/→: Control movement`, `↑: Look up/climb`, `↓: Look down/Crouch/Climb/Run`, `X: Action`, `Z: Jump`, `C: Cycle Item`, `Shift: Run`]
  },
  {
    filter: [`drive`, `misc`],
    link: `tanuki-sunset`,
    imgsrc: `tanuki.png`,
    name: `Tanuki Sunset`,
    developer: `Rewind Games`,
    desc: `Tanuki Sunset Classic is a third-person longboard-skating game where players play as a raccoon skating downhill on a procedurally generated synthwave-themed seaside road.

    Drift your way around the narrow corners, gather Tanuki Bits to fill up your Bonus Roulette Meter and try and gather as many points as you can.
    
    Drift often. Get some air-time and avoid cars and obstacles while pushing your luck close to the walls and edges to get near-miss moments and tight-squeezes to maximize your score.
    
    Get the full game on Steam: https://store.steampowered.com/app/1251460/Tanuki_Sunset/`,
    controls: [`W: Speed Stance (Hold)`, `AD/←/→: Control movement`, `S: 180 Slide`, `Space: Drift`, `Esc: Pause`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz`,
    imgsrc: `tiq.png`,
    name: `The Impossible Quiz`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz is an online quiz game that is… Almost impossible. The questions are all difficult to answer and require lateral thinking. 
    There are 110 questions to get through and you only have three lives, so make sure you’re ready to think creatively! `,
    controls: [`Click: Interact`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz-2`,
    imgsrc: `tiq2.png`,
    name: `The Impossible Quiz 2`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz 2 is the second installment of the most annoying quiz on the internet. Although not entirely impossible, you must navigate through a series of illogical questions and hope to answer them correctly. 
    Each wrong answer costs you a life, so memorize your answers and try again to get further!`,
    controls: [`Click: Interact`]  
  },
  {
    filter: [`drive`],
    link: `motox3m`,
    imgsrc: `motox3m.png`,
    name: `Moto X3M`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`drive`],
    link: `moto-x3m-2`,
    imgsrc: `moto-x3m-2.jpg`,
    name: `Moto X3M 2`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`drive`],
    link: `moto-x3m-pool-party`,
    imgsrc: `moto-x3m-pool-party.jpg`,
    name: `Moto X3M Pool Party`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`drive`],
    link: `moto-x3m-spooky`,
    imgsrc: `moto-x3m-spooky.jpeg`,
    name: `Moto X3M Spooky`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`misc`, `flash`],
    link: `learn-to-fly`,
    imgsrc: `learntofly.png`,
    name: `Learn To Fly`,
    developer: `lightbringer777`,
    desc: `One Penguin Takes it personally when he is surfing the web and stumbles upon a web site telling him that he cant fly, 
    after that he sets his mind to research and practice flying until he can prove the world that he can.. Learn to Fly!`,
    controls: [`←/→: Adjust angle`, `Space: Rockets`]
  },
  {
    filter: [`misc`, `flash`],
    link: `learn-to-fly-2`,
    imgsrc: `learn-to-fly-2.jpg`,
    name: `Learn To Fly 2`,
    developer: `lightbringer777`,
    desc: `One Penguin Takes it personally when he is surfing the web and stumbles upon a web site telling him that he cant fly, 
    after that he sets his mind to research and practice flying until he can prove the world that he can.. Learn to Fly!`,
    controls: [`←/→: Adjust angle`, `Space: Rockets`]
  },
  {
    filter: [`shoot`, `plat`, `flash`],
    link: `binding-of-isaac`,
    imgsrc: `boi.png`,
    name: `Binding of Isaac`,
    developer: `Edmund McMillen, Florian Himsl`,
    desc: `When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.
    The Binding of Isaac is a randomly generated action RPG shooter with heavy Rogue-like elements. 
    Following Isaac on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety.
    
    Full version on Steam: https://store.steampowered.com/app/113200/The_Binding_of_Isaac/`,
    controls: [`WASD: Control movement`, `Arrow Keys: Control shooting`]
  },
  {
    filter: [`emu`,`shoot`],
    link: `doom`,
    imgsrc: `doom.png`,
    name: `Doom`,
    developer: `id Software, GT Interactive`,
    desc: `Doom is a 1993 first-person shooter game developed by id Software. Players assume the role of a space marine, popularly known as Doomguy, fighting their way through hordes of invading demons from Hell.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`],
    link: `jimothy-piggerton`,
    imgsrc: `jimpig.png`,
    name: `Jimothy Piggerton`,
    developer: `Niborious7`,
    desc: `Run and Jump to Save Piggerton from the deadly Butcher!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game`,
    imgsrc: `whg.png`,
    name: `World's Hardest Game`,
    developer: `Stephen Critoph`,
    desc: `This is the self-proclaimed World's Hardest Game. Don't play it; it's too difficult! It really is! Wow this game has to be one of the most challenging but addictive games ever to be made! 
    The aim is simple: all you have to do is guide your red block from one end of the level to the other and collect any yellow circles on the way. This might sound easy, but believe us when we say it isn't!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game-2`,
    imgsrc: `whg2.png`,
    name: `World's Hardest Game 2`,
    developer: `Stephen Critoph`,
    desc: `World's Hardest Game 2 is the second episode of the self-proclaimed world's hardest game series! 
    Hone your reflexes and accuracy as you try to move your little block to the end of each stage without touching the obstacles. 
    Doing so will bring you back to the start so you can try again. 
    The difficulty goes up after every stage, so keep your focus and see how far you can get in the World's Hardest Game 2.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`flash`, `misc`],
    link: `douchebag-workout-2`,
    imgsrc: `dw2.jpg`,
    name: `Douchebag Workout 2`,
    developer: `Pyrozen`,
    desc: `Another Douche wanna be! Help this poor weak guy get into shape, start a social life, get some awesome swag to finally get with the ladies! 
    Do you have what it takes to become big, tanned and ripped? A hilarious game of upgrades and deep social exploration!`,
    controls: [`Click: Interact`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
