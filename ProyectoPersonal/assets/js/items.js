const categoriaItem = [
  "helmet",
  "armours",
  "legs",
  "boots",
  "shields",
  "sp-books",
  "nekcs",
  "rings",
  "oh-hand",
  "th-hand",
  "ranged",
  "wand-rod",
  "ammunition",
  "pots",
];

const itemList = [
  {
    image: "./assets/img/items/leather-helmet.png",
    name: "Leather Helmet",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/studded-helmet.png",
    name: "Studded Helmet",
    levelRequired: "None",
    value: "2 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/brass-helmet.png",
    name: "Brass Helmet",
    levelRequired: "None",
    value: "3 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/blue-hat.png",
    name: "Blue Hat",
    levelRequired: "None",
    value: "4 armor",
    description: "+1 magic level skill",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/soldier-helmet.png",
    name: "Soldier Helmet",
    levelRequired: "None",
    value: "5 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/steel-helmet.png",
    name: "Steel Helmet",
    levelRequired: "None",
    value: "6 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/crown-helmet.png",
    name: "Crown Helmet",
    levelRequired: "None",
    value: "7 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/terra-hood.png",
    name: "Terra Hood",
    levelRequired: "None",
    value: "7 armor",
    description: "+1 magic level skill",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/exaltation-helmet.png",
    name: "Exaltation Helmet",
    levelRequired: 120,
    value: "8 armor",
    description: "+2 distance level skill. Absorbs +2% to all elements.",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/helmet-of-destiny.png",
    name: "Helmet of Destiny",
    levelRequired: "Unknown",
    value: "8 armor",
    description: "Unknown",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/royal-helmet.png",
    name: "Royal Helmet",
    levelRequired: "None",
    value: "9 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/demon-helmet.png",
    name: "Demon Helmet",
    levelRequired: "None",
    value: "10 armor",
    description: "",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/helmet-of-life.png",
    name: "Helmet of Life",
    levelRequired: "None",
    value: "8 armor",
    description: "+4% Life Leech",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/helmet-of-energy.png",
    name: "Helmet of Energy",
    levelRequired: "None",
    value: "8 armor",
    description: "+4% Mana Leech",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/helmet-of-elements.png",
    name: "Helmet of Elements",
    levelRequired: "None",
    value: "8 armor",
    description: "Absorbs +2% to all elements",
    category: categoriaItem[0],
  },
  {
    image: "./assets/img/items/studded-armor.png",
    name: "Studded Armor",
    levelRequired: "None",
    value: "5 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/chain-armor.png",
    name: "Chain Armor",
    levelRequired: "None",
    value: "6 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/brass-armor.png",
    name: "Brass Armor",
    levelRequired: "None",
    value: "8 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/focus-robe.png",
    name: "Focus Robe",
    levelRequired: "None",
    value: "8 armor",
    description: "+1 magic level skill.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/plate-armor.png",
    name: "Plate Armor",
    levelRequired: "None",
    value: "10 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/blue-robe.png",
    name: "Blue Robe",
    levelRequired: "None",
    value: "11 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/knight-armor.png",
    name: "Kight Armor",
    levelRequired: "None",
    value: "12 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/paladin-armor.png",
    name: "Paladin Armor",
    levelRequired: "None",
    value: "12 armor",
    description: "+2 distance level skill.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/crown-armor.png",
    name: "Crown Armor",
    levelRequired: "None",
    value: "13 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/golden-armor.png",
    name: "Golden Armor",
    levelRequired: "None",
    value: "14 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/dragon-scale-armor.png",
    name: "Dragon Scale Armor",
    levelRequired: "None",
    value: "15 armor",
    description: "Absorbs +2% to all elements.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/rangers-cloak.png",
    name: "Ranger's Cloak",
    levelRequired: "None",
    value: "15 armor",
    description: "+3 distance level skill. Absorbs +3% to all elements.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/demon-armor.png",
    name: "Demon Armor",
    levelRequired: "None",
    value: "16 armor",
    description: "Absorb +4% to all elements.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/salvation-armor.png",
    name: "Salvation Armor",
    levelRequired: "None",
    value: "21 armor",
    description: "",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/darksoul-armor.png",
    name: "Darksoul Armor",
    levelRequired: 200,
    value: "21 armor",
    description: "Absorbs +5% to all elements.",
    category: categoriaItem[1],
  },
  {
    image: "./assets/img/items/leather-legs.png",
    name: "Leather Legs",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/chain-legs.png",
    name: "Chain Legs",
    levelRequired: "None",
    value: "2 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/brass-legs.png",
    name: "Brass Legs",
    levelRequired: "None",
    value: "3 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/plate-legs.png",
    name: "Plate Legs",
    levelRequired: "None",
    value: "4 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/knight-legs.png",
    name: "Knight Legs",
    levelRequired: "None",
    value: "5 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/red-dragonshanks.png",
    name: "Red Dragonshanks",
    levelRequired: 60,
    value: "6 armor",
    description: "+1 magic level skill.",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/blue-skirt.png",
    name: "Blue Skirt",
    levelRequired: "None",
    value: "8 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/crown-legs.png",
    name: "Crown Legs",
    levelRequired: "None",
    value: "9 armor",
    description: "",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/dark-legs.png",
    name: "Dark Legs",
    levelRequired: 120,
    value: "9 armor",
    description: "+2 magic level skill.",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/pharaoh-leg.png",
    name: "Pharaoh Legs",
    levelRequired: 120,
    value: "11 armor",
    description: "Absorbs +3% to all elements.",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/golden-legs.png",
    name: "Golden Legs",
    levelRequired: 120,
    value: "12 armor",
    description: "Absorbs +2% to all elements.",
    category: categoriaItem[2],
  },
  {
    image: "./assets/img/items/leather-boots.png",
    name: "Leather Boots",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[3],
  },
  {
    image: "./assets/img/items/boots-of-haste.png",
    name: "Boots of Haste",
    levelRequired: "None",
    value: "1 armor",
    description: "+15 speed",
    category: categoriaItem[3],
  },
  {
    image: "./assets/img/items/steel-boots.png",
    name: "Steels Boots",
    levelRequired: "None",
    value: "3 armor",
    description: "",
    category: categoriaItem[3],
  },
  {
    image: "./assets/img/items/valoria-boots.png",
    name: "Valoria Boots",
    levelRequired: "None",
    value: "3 armor",
    description: "+1recovery each 1 second +30 speed",
    category: categoriaItem[3],
  },
  {
    image: "./assets/img/items/wood-shield.png",
    name: "Wood Shield",
    levelRequired: "None",
    value: "15 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/studded-shield.png",
    name: "Wood Shield",
    levelRequired: "None",
    value: "16 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/brass-shield.png",
    name: "Wood Shield",
    levelRequired: "None",
    value: "17 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/copper-shield.png",
    name: "Wood Shield",
    levelRequired: "None",
    value: "19 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/plate-shield.png",
    name: "Plate Shield",
    levelRequired: "None",
    value: "21 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/dwarf-shield.png",
    name: "Wood Shield",
    levelRequired: "None",
    value: "26 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/ancient-shield.png",
    name: "Ancient Shield",
    levelRequired: "None",
    value: "30 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/dragon-shield.png",
    name: "Dragon Shield",
    levelRequired: "None",
    value: "31 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/tower-shield.png",
    name: "Tower Shield",
    levelRequired: "None",
    value: "32 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/demon-shield.png",
    name: "Demon Shield",
    levelRequired: "None",
    value: "36 armor",
    description: "",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/glorious-shield.png",
    name: "Glorious Shield",
    levelRequired: 120,
    value: "38 armor",
    description: "+4 shielding level skill.",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/salvation-shield.png",
    name: "Salvation Shield",
    levelRequired: 150,
    value: "40 armor",
    description: "+4 shielding level skill. Absorbs +2% to all elements.",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/darksoul-shield.png",
    name: "Darksoul Shield",
    levelRequired: 200,
    value: "45 armor",
    description: "+8 shielding level skill. Absorbs +4% to all elements.",
    category: categoriaItem[4],
  },
  {
    image: "./assets/img/items/apprentice-spellbook.png",
    name: "Apprentice Spellbook",
    levelRequired: "None",
    value: "16 armor",
    description: "+1 magic level skill.",
    category: categoriaItem[5],
  },
  {
    image: "./assets/img/items/mindset-spellbook.png",
    name: "Mindset Spellbook",
    levelRequired: 70,
    value: "10 armor",
    description: "+3 magic level skill.",
    category: categoriaItem[5],
  },
  {
    image: "./assets/img/items/magma-spellbook.png",
    name: "Magma Spellbook",
    levelRequired: 120,
    value: "19 armor",
    description: "+2 magic level skill. Absorbs +1% to all elements.",
    category: categoriaItem[5],
  },
  {
    image: "./assets/img/items/terra-amulet.png",
    name: "Terra Amulet",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[6],
  },
  {
    image: "./assets/img/items/plate-amulet.png",
    name: "Plate Amulet",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[6],
  },
  {
    image: "./assets/img/items/valoria-neck.png",
    name: "Terra Amulet",
    levelRequired: "None",
    value: "5 armor",
    description: "+1 recovery each 1 second.",
    category: categoriaItem[6],
  },
  {
    image: "./assets/img/items/plate-ring.png",
    name: "Plate Ring",
    levelRequired: "None",
    value: "1 armor",
    description: "",
    category: categoriaItem[7],
  },
  {
    image: "./assets/img/items/valoria-ring.png",
    name: "Valoria Ring",
    levelRequired: "None",
    value: "2 armor",
    description: "+1 recovery each 1 second",
    category: categoriaItem[7],
  },
  {
    image: "./assets/img/items/valoria-heart.png",
    name: "Valoria Heart",
    levelRequired: "None",
    value: "Unknown",
    description: "Unknown",
    category: categoriaItem[7],
  },
  {
    image: "./assets/img/items/knife.png",
    name: "Knife",
    levelRequired: "None",
    value: "5 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/sabre.png",
    name: "Knife",
    levelRequired: "None",
    value: "12 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/adventurer-sword.png",
    name: "Adventurer Sword",
    levelRequired: "None",
    value: "15 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/mace.png",
    name: "Mace",
    levelRequired: "None",
    value: "16 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/katana.png",
    name: "Katana",
    levelRequired: "None",
    value: "17 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/long-sword.png",
    name: "Long Sword",
    levelRequired: "None",
    value: "19 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/serpentine-sword.png",
    name: "Serpentine Sword",
    levelRequired: "None",
    value: "24 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/knight-axe.png",
    name: "Knight Axe",
    levelRequired: 25,
    value: "33 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/fire-sword.png",
    name: "Fire Sword",
    levelRequired: 30,
    value: "36 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/fire-axe.png",
    name: "Fire Axe",
    levelRequired: 40,
    value: "38 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/bonebreaker-club.png",
    name: "BoneBreaker Club",
    levelRequired: 50,
    value: "40 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/lava-sword.png",
    name: "Lava Sword",
    levelRequired: 60,
    value: "42 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/glorious-axe.png",
    name: "Glorious Axe",
    levelRequired: 80,
    value: "45 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/demoniac-sword.png",
    name: "Demoniac Sword",
    levelRequired: 120,
    value: "49 attack",
    description: "",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/pharaoh-sword.png",
    name: "Pharaoh Sword",
    levelRequired: 120,
    value: "53 attack",
    description: "+4 melee level skill.",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/nightmare-blade.png",
    name: "Nightmare Blade",
    levelRequired: 150,
    value: "60 attack",
    description: "+5 melee level skill. Damage taken +2%.",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/darksoul-mace.png",
    name: "Darksoul Mace",
    levelRequired: 200,
    value: "64 attack",
    description: "+6 melee level skill. +5% Life Leech.",
    category: categoriaItem[8],
  },
  {
    image: "./assets/img/items/battle-axe.png",
    name: "Battle Axe",
    levelRequired: "None",
    value: "37 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/broadsword.png",
    name: "Broadsword",
    levelRequired: 25,
    value: "41 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/halberd.png",
    name: "Halberd",
    levelRequired: 43,
    value: "38 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/dragonslayer.png",
    name: "Halberd",
    levelRequired: 45,
    value: "49 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/giant-sword.png",
    name: "Giant Sword",
    levelRequired: 55,
    value: "51 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/guardian-halberd.png",
    name: "Guardian Halberd",
    levelRequired: 65,
    value: "53 attack",
    description: "",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/soulcutter-axe.png",
    name: "Soulcutter Axe",
    levelRequired: 100,
    value: "58 attack",
    description: "+4 melee level skill.",
    category: categoriaItem[9],
  },
  {
    image: "./assets/img/items/bow.png",
    name: "Bow",
    levelRequired: "None",
    value: "1 attack",
    description: "",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/crossbow.png",
    name: "Crossbow",
    levelRequired: "None",
    value: "10 attack",
    description: "",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/royal-bow.png",
    name: "Royal Bow",
    levelRequired: 50,
    value: "10 attack",
    description: "",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/iron-crossbow.png",
    name: "Iron Crossbow",
    levelRequired: 50,
    value: "15 attack",
    description: "",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/venomspitter-crossbow.png",
    name: "Venomspitter Crossbow",
    levelRequired: 120,
    value: "20 attack",
    description: "+3 distance level skill",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/pharaoh-bow.png",
    name: "Pharaoh Bow",
    levelRequired: 120,
    value: "20 attack",
    description: "+4 distance level skill",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/plague-bow.png",
    name: "Plague Bow",
    levelRequired: 150,
    value: "25 attack",
    description: "+6 distance level skill. Damage taken +1%.",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/darksoul-crossbow.png",
    name: "Darksoul Crossbow",
    levelRequired: 200,
    value: "30 attack",
    description: "+4 distance level skill",
    category: categoriaItem[10],
  },
  {
    image: "./assets/img/items/vortex-wand.png",
    name: "Vortex Wand",
    levelRequired: 8,
    value: "1 attack",
    description: "",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/dragonbreath-wand.png",
    name: "Dragonbreath Wand",
    levelRequired: 13,
    value: "2 attack",
    description: "",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/cosmic-wand.png",
    name: "Cosmic Wand",
    levelRequired: 26,
    value: "3 attack",
    description: "",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/inferno-wand.png",
    name: "Inferno Wand",
    levelRequired: 33,
    value: "4 attack",
    description: "+1 magic level skill.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/holy-rod.png",
    name: "Holy Rod",
    levelRequired: 44,
    value: "5 attack",
    description: "+2 magic level skill.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/magic-wand.png",
    name: "Magic Wand",
    levelRequired: 110,
    value: "6 attack",
    description: "+6 magic level skill.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/pharaoh-wand.png",
    name: "Pharaoh Wand",
    levelRequired: 120,
    value: "7 attack",
    description: "+7 magic level skill.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/underworld-wand.png",
    name: "Underworld Wand",
    levelRequired: 150,
    value: "8 attack",
    description: "+8 magic level skill. Damage taken +2%.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/darksoul-wand.png",
    name: "Darksoul Wand",
    levelRequired: 200,
    value: "7 attack",
    description: "+8 magic level skill. +2% Mana Leech.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/darksoul-wand.png",
    name: "Darksoul Wand",
    levelRequired: 200,
    value: "7 attack",
    description: "+8 magic level skill. +2% Mana Leech.",
    category: categoriaItem[11],
  },
  {
    image: "./assets/img/items/spear.png",
    name: "Spear",
    levelRequired: "None",
    value: "25 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/arrow.png",
    name: "Arrow",
    levelRequired: "None",
    value: "25 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/bolt.png",
    name: "Spear",
    levelRequired: "None",
    value: "30 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/royal-spear.png",
    name: "Royal Spear",
    levelRequired: 25,
    value: "32 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/enchanted-spear.png",
    name: "Enchanted Spear",
    levelRequired: 42,
    value: "45 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/power-bolt.png",
    name: "Power Bolt",
    levelRequired: 55,
    value: "52 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/assassin-star.png",
    name: "Assassin Star",
    levelRequired: 80,
    value: "80 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/infernal-bolt.png",
    name: "Infernal Bolt",
    levelRequired: 90,
    value: "78 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/assassin-arrow.png",
    name: "Assassin Arrow",
    levelRequired: 120,
    value: "75 attack",
    description: "",
    category: categoriaItem[12],
  },
  {
    image: "./assets/img/items/spectral-arrow.png",
    name: "Spectral Arrow",
    levelRequired: 150,
    value: "30 attack",
    description: "",
    category: categoriaItem[12],
  },
];

/* const potList = [
  {
    image: "./assets/img/items/mana-fluid.png",
    name: "Mana Fluid",
    description:
      "Recover between 70 and 115 mana points. Everyone is allowed to use.\nRequire level 1.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/life-fluid.png",
    name: "Life Fluid",
    description:
      "Recover between 125 and 175 life points. Everyone is allowed to use.\nRequire level 1.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/strong-mana-fluid.png",
    name: "Strong Mana Fluid",
    description:
      "Recover between 115 and 185 mana points. Everyone is allowed to use.\nRequire level 50.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/strong-life-fluid.png",
    name: "Strong Life Fluid",
    description:
      "Recover between 250 and 350 life points. Knights, Paladins are allowed to use.\nRequire level 50.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/great-mana-fluid.png",
    name: "Great Mana Fluid",
    description:
      "Recover between 185 and 250 mana points. Sorcerers, Druids, Paladins are allowed to use.\nRequire level 80.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/great-life-fluid.png",
    name: "Great Life Fluid",
    description:
      "Recover between 425 and 575 life points. Knigts are allowed to use.\nRequire level 80.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/great-spirit-fluid.png",
    name: "Great Spirit Fluid",
    description:
      "Recover between 250 and 350 life points. Recover between 100 and 200 mana points.\nPaladins are allowed to use.\nRequire level 80.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/ultimate-life-fluid.png",
    name: "Ultimate Life Fluid",
    description:
      "Recover between 650 and 850 life points. Knights are allowed to use.\nRequire level 130.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/ultimate-mana-fluid.png",
    name: "Ultimate Mana Fluid",
    description:
      "Recover between 275 and 350 mana points. Sorcerers, Druids are allowed to use.\nRequire level 130.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/ultimate-spirit-fluid.png",
    name: "Ultimate Spirit Fluid",
    description:
      "Recover between 420 and 580 life points. Recover between 150 and 250 mana points.\nPaladins are allowed to use.\nRequire level 130.",
    category: categoriaItem[13],
  },
  {
    image: "./assets/img/items/supreme-life-fluid.png",
    name: "Supreme Life Fluid",
    description:
      "Recover between 950 and 1200 life points. Knights are allowed to use.\nRequire level 200.",
    category: categoriaItem[13],
  },
]; */

const helmetsTable = document
  .getElementById("helmets")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[0]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    helmetsTable.appendChild(row);
  }
});

const helmetsMobileContainer = document.getElementById("helmets1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[0]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    helmetsMobileContainer.appendChild(fila);
  }
});

const ringsTable = document
  .getElementById("rings")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[7]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    ringsTable.appendChild(row);
  }
});


const ringsMobileContainer = document.getElementById("rings1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[7]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    ringsMobileContainer.appendChild(fila);
  }
});

/* const helmetsMobileContainer = document.getElementById("helmets1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[0]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    helmetsMobileContainer.appendChild(fila);
  }
});

const armoursTable = document
  .getElementById("armors")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[1]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    armoursTable.appendChild(row);
  }
});

const armoursMobileContainer = document.getElementById("armors1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[1]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    armoursMobileContainer.appendChild(fila);
  }
});

const legsTable = document
  .getElementById("legs")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[2]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    legsTable.appendChild(row);
  }
});

const legsMobileContainer = document.getElementById("legs1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[2]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    legsMobileContainer.appendChild(fila);
  }
});

const bootsTable = document
  .getElementById("boots")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[3]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    bootsTable.appendChild(row);
  }
});

const bootsMobileContainer = document.getElementById("boots1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[3]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    bootsMobileContainer.appendChild(fila);
  }
});

const shieldsTable = document
  .getElementById("shields")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[4]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    shieldsTable.appendChild(row);
  }
});

const shieldsMobileContainer = document.getElementById("shields1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[4]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    shieldsMobileContainer.appendChild(fila);
  }
});

const spBooksTable = document
  .getElementById("sp-books")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[5]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    spBooksTable.appendChild(row);
  }
});

const spBooksMobileContainer = document.getElementById("sp-books1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[5]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    spBooksMobileContainer.appendChild(fila);
  }
});

const necksTable = document
  .getElementById("necks")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[6]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    necksTable.appendChild(row);
  }
});

const necksMobileContainer = document.getElementById("necks1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[6]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    necksMobileContainer.appendChild(fila);
  }
});

const ringsTable = document
  .getElementById("rings")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[7]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    ringsTable.appendChild(row);
  }
});

const ringsMobileContainer = document.getElementById("rings1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[7]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    ringsMobileContainer.appendChild(fila);
  }
});

const ohWeaponsTable = document
  .getElementById("oh-weapons")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[8]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    ohWeaponsTable.appendChild(row);
  }
});

const ohWeaponsMobileContainer = document.getElementById("oh-weapons1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[8]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    ohWeaponsMobileContainer.appendChild(fila);
  }
});

const thWeaponsTable = document
  .getElementById("th-weapons")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[9]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    thWeaponsTable.appendChild(row);
  }
});

const thWeaponsMobileContainer = document.getElementById("th-weapons1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[9]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    thWeaponsMobileContainer.appendChild(fila);
  }
});

const rWeaponsTable = document
  .getElementById("r-weapons")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[10]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    rWeaponsTable.appendChild(row);
  }
});

const rWeaponsMobileContainer = document.getElementById("r-weapons1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[10]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    rWeaponsMobileContainer.appendChild(fila);
  }
});

const wandsRodsTable = document
  .getElementById("wands-rods")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[11]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    wandsRodsTable.appendChild(row);
  }
});

const wandsRodsMobileContainer = document.getElementById("wands-rods1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[11]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    wandsRodsMobileContainer.appendChild(fila);
  }
});

const municionsTable = document
  .getElementById("municions")
  .getElementsByTagName("tbody")[0];

itemList.forEach((item) => {
  if (item.category === categoriaItem[12]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = item.levelRequired;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = item.value;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = item.description;
    row.appendChild(descCell);

    municionsTable.appendChild(row);
  }
});

const municionsMobileContainer = document.getElementById("municions1");

itemList.forEach((item) => {
  if (item.category === categoriaItem[12]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Level Required", "Value", "Description"];
    const values = [
      item.image,
      item.name,
      item.levelRequired,
      item.value,
      item.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = item.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    municionsMobileContainer.appendChild(fila);
  }
});

const potsTable = document
  .getElementById("pots")
  .getElementsByTagName("tbody")[0];

potList.forEach((pot) => {
  if (pot.category === categoriaItem[13]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = pot.image;
    img.alt = pot.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = pot.name;
    row.appendChild(nameCell);

    const descCell = document.createElement("td");
    descCell.textContent = pot.description;
    row.appendChild(descCell);

    potsTable.appendChild(row);
  }
});

const potsMobileContainer = document.getElementById("pots1");

potList.forEach((pot) => {
  if (pot.category === categoriaItem[13]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Image", "Name", "Description"];
    const values = [
      pot.image,
      pot.name,
      pot.description,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      if (header === "Image") {
        const img = document.createElement("img");
        img.src = values[index];
        img.alt = pot.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    potsMobileContainer.appendChild(fila);
  }
}); */