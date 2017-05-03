
// Pokemon adventure!
yourName = prompt("Hello there! Welcome to the world of Pokemon! My name is Prof. Oak! What is your name?");
answer = prompt("Right, so your name is " + yourName + ". Your very own Pokemon legend is about to unfold. A world of Pokemon and adventure awaits. Are you ready? (y/n)");

if (answer === 'y') {
  prompt("Alright, let's go!");
  answer = prompt("You appear in your room filled with tons of Pokemon memorabilia. There is a stairway out of your house. Do you want to look around your room(r) or go downstairs? (d)");

  // Your Room
  if (answer === 'r') {
    room = prompt("You look around your room and see some things. Do you want to check out the TV (1), Poster (2), or Nintendo (3)?");

    if (room === '1') {
      prompt("You see a TV Show of a Nidorino fighting a Gengar. Looks like a fierce match! You end up watching TV all day and forget about your incredible journey");
    } else if (room === '2') {
      prompt("It's a Poster of the Elite 4. You think to yourself that maybe someday, you will be like them. You end up day dreaming all day and never leave.");

    // Video Game Years
    } else if (room === '3') {
      var yearGames = prompt("You see some Nintendo game consoles and realize there are so many to choose from.  Between what years did you play video games as a kid? (Years between 1980-2017)");
      yearGames = parseInt(yearGames);
      switch (true) {
        case (yearGames < 1990):
          prompt("You get stuck in the nostalgia and end up playing on the NES, forgetting about your legendary journey.");
          break;
        case (1989 < yearGames  && yearGames < 1995):
          prompt("You get stuck in the nostalgia and end up playing on the Super Nintendo, forgetting about your legendary journey.");
          break;
        case (1996 < yearGames && yearGames < 2000):
          prompt("You get stuck in the nostalgia and end up playing on the Nintendo 64, forgetting about your legendary journey.");
          break;
        case (2001 < yearGames && yearGames < 2016):
          prompt("You get stuck in the nostalgia and end up playing on the Wii, forgetting about your legendary journey.");
          break;
        case (yearGames === 2017):
          prompt("You get stuck playing on the Nintendo Switch, forgetting about your legendary journey.");
          break;
        case (yearGames > 2017):
          prompt("We aren't in the future yet!");
          break;
      }
    }
  // Mom
  } else {
    mom = prompt("You go downstairs and see Mom there. Do you talk to her? (y/n)");
    if (mom === 'y') {
      chores = prompt("Right. All boys leave home some day. Professor Oak is next door and is looking for you. Before you go, did you do your chores yet? (y/n)");
        if (chores === 'n') {
          prompt("You can't go without doing your chores " +yourName + "! Get to work!");

        // Go Outside
        } else if (chores === 'y') {
            prompt("Great. You can go now!");
            prompt("You go outside and try to walk in the grass");
            prompt("A voice yells from behind, 'Hey! It's unsafe!' says Professor Oak. 'Wild Pokemon walk in the grass. You need your own Pokemon. Follow me!'");
            prompt("You follow Professor Oak to his lab");

          // Choose starter Pokemon
          startPokemon = prompt("Alright, " + yourName + ". There are 3 Pokemon here. They are inside these Poke balls. In my old age, I have 3 left, but you can only have one! Which do you choose? Charmandar (c) - the fire type Squirtle (s) - the water type - Bulbasaur (b) - the grass type.");

            if (startPokemon === 'c') {
              prompt("So! You want Charmandar as your first Pokemon? Very well!");
              prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Squirtle!");
              prompt("You turn to walk away.");
              prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");

            //  Battle with Gary
            var hp = 21;
            while (hp > 0) {
              attack = prompt("Charmandar can use Scratch (s) or Tail Whip (t). What do you use?  ");
              if (attack === 's') {
                prompt("Charmandar used Scratch!");
                hp = hp-7;
                prompt("Squirtle takes 7 damage. Squirtle has " + hp +" HP left!");
              } else if (attack === 't') {
                  prompt("Charmandar used Tail Whip!");
                  prompt("It wasn't very effective. Squirtle has " + hp +" HP left!");
                  hp = hp-0;
              }
            }
            prompt("Enemy Squirtle fainted! Charmandar gains 45 experience points! " + yourName + " defeated Gary!");
            prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");

          // Squirtle
          } else if (startPokemon === 's') {
              prompt("So! You want Squirtle as your first Pokemon? Very Well!");
              prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Bulbasaur!");
              prompt("You turn to walk away.");
              prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");

          // Battle with Gary
          var hp = 21;
          while (hp > 0) {
            attack = prompt("Squirtle can use Tackle (t) or Tail Whip (w). What do you use?  ");
          if (attack === 't') {
              prompt("Squirtle used Tackle!");
              hp = hp-7;
              prompt("Charmandar takes 7 damage. Charmandar has " + hp +" HP left!");
            } else if (attack === 't') {
                prompt("Squirtle used Tail Whip!");
                prompt("It wasn't very effective. Charmandar has " + hp +" HP left!");
                hp = hp-0;
            }
          }
          prompt("Enemy Charmandar fainted! Squirtle gains 45 experience points! " + yourName + " defeated Gary!");
          prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");

          // Bulbasaur
        } else if (startPokemon === 'b') {
            prompt("So! You want Bulbasaur as your first Pokemon? Very Well!");
            prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Charmandar!");
            prompt("You turn to walk away.");
            prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");

          // Battle with Gary
          var hp = 21;
          while (hp > 0) {
            attack = prompt("Bulbasaur can use Tackle (t) or Growl (g). What do you use?  ");
            if (attack === 't') {
              prompt("Bulbasaur used Tackle!");
              hp = hp-7;
              prompt("Charmandar takes 7 damage. Charmandar has " + hp +" HP left!");
            } else if (attack === 'g') {
                prompt("Bulbasaur used Growl!");
                hp = hp-0;
                prompt("It wasn't very effective. Charmandar has " + hp +" HP left!");
            }
          }
          prompt("Enemy Charmandar fainted! Bulbasaur gains 45 experience points! " + yourName + " defeated Gary!");
          prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");
        }
    }
    // Professor Oak
    } else {
        prompt("You go outside and try to walk in the grass");
        prompt("A voice yells from behind, 'Hey! It's unsafe!' says Professor Oak. 'Wild Pokemon walk in the grass. You need your own Pokemon. Follow me!'");
        prompt("You follow Professor Oak to his lab");

      // Choose starter Pokemon
      startPokemon = prompt("Alright, " + yourName + ". There are 3 Pokemon here. They are inside these Poke balls. In my old age, I have 3 left, but you can only have one! Which do you choose? Charmandar - the fire type (c) Squirtle (s) - the water type - Bulbasaur (b) - the grass type.");

        // Charmandar
        if (startPokemon === 'c') {
          prompt("So! You want Charmandar as your first Pokemon? Very well!");
          prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Squirtle!");
          prompt("You turn to walk away.");
          prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");

          // Battle with Gary
          var hp = 21;
          while (hp > 0) {
            attack = prompt("Charmandar can use Scratch (s) or Tail Whip (t). What do you use?  ");
            if (attack === 's') {
              prompt("Charmandar used Scratch!");
              hp = hp-7;
              prompt("Squirtle takes 7 damage. Squirtle has " + hp +" HP left!");
            } else if (attack === 't') {
                prompt("Charmandar used Tail Whip!");
                prompt("It wasn't very effective. Squirtle has " + hp +" HP left!");
                hp = hp-0;
            }
          }
          prompt("Enemy Squirtle fainted! Charmandar gains 45 experience points! " + yourName + " defeated Gary!");
          prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");

        // Squirtle
        } else if (startPokemon === 's') {
            prompt("So! You want Squirtle as your first Pokemon? Very Well!");
            prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Bulbasaur!");
            prompt("You turn to walk away.");
            prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");
          // Battle with Gary
          var hp = 21;
          while (hp > 0) {
            attack = prompt("Squirtle can use Tackle (t) or Tail Whip (w). What do you use?  ");
            if (attack === 't') {
              prompt("Squirtle used Tackle!");
              hp = hp-7;
              prompt("Bulbasaur takes 7 damage. Bulbasaur has " + hp +" HP left!");
            } else if (attack === 'w') {
                prompt("Squirtle used Tail Whip!");
                hp = hp-0;
                prompt("It wasn't very effective. Bulbasaur has " + hp +" HP left!");
            }
          }
          prompt("Enemy Bulbasaur fainted! Squirtle gains 45 experience points! " + yourName + " defeated Gary!");
          prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");

        // Bulbasaur
        } else if (startPokemon === 'b') {
            prompt("So! You want Bulbasaur as your first Pokemon? Very Well!");
            prompt("Gary comes from behind. 'I'll take this one then!' Gary received a Charmandar!");
            prompt("You turn to walk away.");
            prompt("Gary: Wait " + yourName + "! Let's check out our Pokemon. Come on! Let's battle!");

          // Battle with Gary
          var hp = 21;
          while (hp > 0) {
            attack = prompt("Bulbasaur can use Tackle (t) or Growl (g). What do you use?  ");
            if (attack === 't') {
              prompt("Bulbasaur used Tackle!");
              hp = hp-7;
              prompt("Charmandar takes 7 damage. Charmandar has " + hp +" HP left!");
            } else if (attack === 'g') {
                prompt("Bulbasaur used Growl!");
                hp = hp-0;
                prompt("It wasn't very effective. Charmandar has " + hp +" HP left!");
            }
          }
          prompt("Enemy Charmandar fainted! Bulbasaur gains 45 experience points! " + yourName + " defeated Gary!");
          prompt("Gary: Hmph. Beginner's Luck! Smell ya later 'pal!");
        }
    }
  }
} else {
  prompt("Ok well, come back when you are ready.");
}
