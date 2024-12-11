const categoria = ["knight", "paladin", "sorcerer", "druid", "all"];

const spellList = [
  {
    name: "Whirlwind Slash",
    description:
      "Throw your weapon to your target to inflict physicall damage.",
    mlRequired: 2,
    mana: 40,
    category: categoria[0],
  },
  {
    name: "Challenge",
    description: "Get the monster's attention to you and protect your friends.",
    mlRequired: 5,
    mana: 40,
    category: categoria[0],
  },
  {
    name: "Berserk",
    description:
      "Stomp the floor with your weapon to inflict some physicall damage.",
    mlRequired: 5,
    mana: 135,
    category: categoria[0],
  },
  {
    name: "Charge",
    description:
      "Buff your damage during 10 seconds to deal a 35% extra damage.",
    mlRequired: 7,
    mana: 250,
    category: categoria[0],
  },
  {
    name: "Critical Blow",
    description: "Stomp the floor with a full weapon damage.",
    mlRequired: 9,
    mana: 450,
    category: categoria[0],
  },
  {
    name: "Conjuring Wooden Arrow",
    description: "Craft 15 extremely weak arrows.",
    mlRequired: 0,
    mana: 5,
    category: categoria[1],
  },
  {
    name: "Conjuring Arrow",
    description: "Craft 15 arrows.",
    mlRequired: 2,
    mana: 40,
    category: categoria[1],
  },
  {
    name: "Ethereal Spear",
    description:
      "Shoots an enchanted spear dealing physical damage to your target.",
    mlRequired: 2,
    mana: 25,
    category: categoria[1],
  },
  {
    name: "Greater Healing",
    description: "Heals an average ammount of health points.",
    mlRequired: 2,
    mana: 70,
    category: categoria[1],
  },
  {
    name: "Divine Strike",
    description:
      "Shoot a light strike with divine damage. Powerfull to undeads. Unblockable.",
    mlRequired: 4,
    mana: 20,
    category: categoria[1],
  },
  {
    name: "Conjure Bolt",
    description: "Craft 10 Bolts.",
    mlRequired: 6,
    mana: 70,
    category: categoria[1],
  },
  {
    name: "Mana Shield",
    description:
      "The damage received burn mana instead of health for a short period of time.",
    mlRequired: 6,
    mana: 50,
    category: categoria[1],
  },
  {
    name: "Ultimate Healing",
    description: "Heals an insane ammount of health points.",
    mlRequired: 8,
    mana: 160,
    category: categoria[1],
  },
  {
    name: "Divine Explosion",
    description:
      "Inflict divine damage in a given area. Powerfull against undeads.",
    mlRequired: 10,
    mana: 170,
    category: categoria[1],
  },
  {
    name: "Enchanting Spear",
    description: "Craft 1 enchanted spear. Requires 1 spear per cast.",
    mlRequired: 12,
    mana: 350,
    category: categoria[1],
  },
  {
    name: "Conjure Power Bolt",
    description: "Craft 7 Power Bolts.",
    mlRequired: 16,
    mana: 200,
    category: categoria[1],
  },
  {
    name: "Sharpshoot",
    description:
      "Buff your distance during 10 seconds to deal a 40% extra damage. While this spell is in use, our speed is lowered and we can't use any support spell.",
    mlRequired: 20,
    mana: 450,
    category: categoria[1],
  },
  {
    name: "Salvation",
    description:
      "Recovers a large amount of life points when the situation could be extremely risky.",
    mlRequired: 25,
    mana: 210,
    category: categoria[1],
  },
  {
    name: "Conjure Spectral Arrow",
    description: "Craft 10 Spectral Arrows.",
    mlRequired: 30,
    mana: 500,
    category: categoria[1],
  },
  {
    name: "Greater Healing",
    description: "Heals an average ammount of health points.",
    mlRequired: 2,
    mana: 70,
    category: categoria[2],
  },
  {
    name: "Greater Healing",
    description: "Heals an average ammount of health points.",
    mlRequired: 2,
    mana: 70,
    category: categoria[3],
  },
  {
    name: "Energy Strike",
    description: "Shoots an energy strike to your target. Unblockable.",
    mlRequired: 2,
    mana: 20,
    category: categoria[2],
  },
  {
    name: "Energy Strike",
    description: "Shoots an energy strike to your target. Unblockable.",
    mlRequired: 2,
    mana: 20,
    category: categoria[3],
  },
  {
    name: "Cursed Strike",
    description: "Shoots a death strike to your target. Unblockable.",
    mlRequired: 3,
    mana: 30,
    category: categoria[2],
  },
  {
    name: "Cursed Strike",
    description: "Shoots a death strike to your target. Unblockable.",
    mlRequired: 3,
    mana: 30,
    category: categoria[3],
  },
  {
    name: "Conjuring Fireball Rune",
    description: "Craft 2 fireball runes.",
    mlRequired: 5,
    mana: 250,
    category: categoria[2],
  },
  {
    name: "Mana Shield",
    description:
      "The damage received burn mana instead of health for a short period of time.",
    mlRequired: 6,
    mana: 50,
    category: categoria[2],
  },
  {
    name: "Mana Shield",
    description:
      "The damage received burn mana instead of health for a short period of time.",
    mlRequired: 6,
    mana: 50,
    category: categoria[3],
  },
  {
    name: "Ultimate Healing",
    description: "Heals an insane ammount of health points.",
    mlRequired: 8,
    mana: 160,
    category: categoria[2],
  },
  {
    name: "Conjuring Magic Wall",
    description: "Create a magic wall in the next-tapping of the player.",
    mlRequired: 9,
    mana: 350,
    category: categoria[2],
  },
  {
    name: "Conjuring Magic Wall",
    description: "Create a magic wall in the next-tapping of the player.",
    mlRequired: 9,
    mana: 350,
    category: categoria[3],
  },
  {
    name: "Strong Haste",
    description: "Increase you movement speed for a medimum period of time.",
    mlRequired: 10,
    mana: 100,
    category: categoria[2],
  },
  {
    name: "Strong Haste",
    description: "Increase you movement speed for a medimum period of time.",
    mlRequired: 10,
    mana: 100,
    category: categoria[3],
  },
  {
    name: "Conjuring Death Rune",
    description: "Craft 3 death runes.",
    mlRequired: 15,
    mana: 995,
    category: categoria[2],
  },
  {
    name: "Great Energy Beam",
    description: "An energy beam with a large distance.",
    mlRequired: 20,
    mana: 110,
    category: categoria[2],
  },
  {
    name: "Energy Wave",
    description: "A wave of energy very strong.",
    mlRequired: 30,
    mana: 210,
    category: categoria[2],
  },
  {
    name: "Thunderstorm",
    description: "Electrify your enemies with a big explosion.",
    mlRequired: 40,
    mana: 1200,
    category: categoria[2],
  },
  {
    name: "Conjuring Avalanche Rune",
    description: "Craft 2 avalanche runes.",
    mlRequired: 5,
    mana: 250,
    category: categoria[3],
  },
  {
    name: "Healing Friend",
    description: "Heals a friend. To use: /heal Character.",
    mlRequired: 7,
    mana: 100,
    category: categoria[3],
  },
  {
    name: "Massive Healing",
    description: "Heals everyone in a given radius.",
    mlRequired: 25,
    mana: 160,
    category: categoria[3],
  },
  {
    name: "Ice Wave",
    description: "A wave of ice strong.",
    mlRequired: 30,
    mana: 210,
    category: categoria[3],
  },
  {
    name: "Winter Explosion",
    description: "Freeze your enemies with a big explosion of icebergs.",
    mlRequired: 30,
    mana: 1050,
    category: categoria[3],
  },
  {
    name: "Paralyse",
    description: "Make your enemy movement slower. Players only.",
    mlRequired: 55,
    mana: 1400,
    category: categoria[3],
  },
  {
    name: "Minor Healing",
    description: "Heals a little ammount of health points.",
    mlRequired: 0,
    mana: 5,
    category: categoria[4],
  },
  {
    name: "Light Healing",
    description: "Heals some ammount of health points.",
    mlRequired: 1,
    mana: 25,
    category: categoria[4],
  },
  {
    name: "Haste",
    description: "Increase your movement speed for short period of time.",
    mlRequired: 4,
    mana: 60,
    category: categoria[4],
  },
];

/* const knightTable = document
  .getElementById("knight")
  .getElementsByTagName("tbody")[0];

spellList.forEach((spell) => {
  if (spell.category === categoria[0]) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = spell.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = spell.description;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = spell.mlRequired;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = spell.mana;
    row.appendChild(descCell);

    knightTable.appendChild(row);
  }
}); */

/* const knightMobileContainer = document.getElementById("knight1");

spellList.forEach((spell) => {
  if (spell.category === categoria[0]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Name", "Description", "ML Required", "Mana"];
    const values = [
      spell.name,
      spell.description,
      spell.mlRequired,
      spell.mana,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      contenidoDiv.textContent = values[index];

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    knightMobileContainer.appendChild(fila);
  }
}); */

const paladinTable = document
  .getElementById("paladin")
  .getElementsByTagName("tbody")[0];

spellList.forEach((spell) => {
  if (spell.category === categoria[1]) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("th");
    nameCell.textContent = spell.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = spell.description;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = spell.mlRequired;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = spell.mana;
    row.appendChild(descCell);

    paladinTable.appendChild(row);
  }
});

const paladinMobileContainer = document.getElementById("paladin1");

spellList.forEach((spell) => {
  if (spell.category === categoria[1]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Name", "Description", "ML Required", "Mana"];
    const values = [
      spell.name,
      spell.description,
      spell.mlRequired,
      spell.mana,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      contenidoDiv.textContent = values[index];

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    paladinMobileContainer.appendChild(fila);
  }
});

/* const sorcererTable = document
  .getElementById("sorcerer")
  .getElementsByTagName("tbody")[0];

spellList.forEach((spell) => {
  if (spell.category === categoria[2]) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = spell.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = spell.description;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = spell.mlRequired;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = spell.mana;
    row.appendChild(descCell);

    sorcererTable.appendChild(row);
  }
}); */

/* const sorcererMobileContainer = document.getElementById("sorcerer1");

spellList.forEach((spell) => {
  if (spell.category === categoria[2]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Name", "Description", "ML Required", "Mana"];
    const values = [
      spell.name,
      spell.description,
      spell.mlRequired,
      spell.mana,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      contenidoDiv.textContent = values[index];

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    sorcererMobileContainer.appendChild(fila);
  }
}); */

/* const druidTable = document
  .getElementById("druid")
  .getElementsByTagName("tbody")[0];

spellList.forEach((spell) => {
  if (spell.category === categoria[3]) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = spell.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = spell.description;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = spell.mlRequired;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = spell.mana;
    row.appendChild(descCell);

    druidTable.appendChild(row);
  }
}); */

/* const druidMobileContainer = document.getElementById("druid1");

spellList.forEach((spell) => {
  if (spell.category === categoria[3]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Name", "Description", "ML Required", "Mana"];
    const values = [
      spell.name,
      spell.description,
      spell.mlRequired,
      spell.mana,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      contenidoDiv.textContent = values[index];

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    druidMobileContainer.appendChild(fila);
  }
}); */

/* const allTable = document
  .getElementById("all")
  .getElementsByTagName("tbody")[0];

spellList.forEach((spell) => {
  if (spell.category === categoria[4]) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = spell.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = spell.description;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = spell.mlRequired;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = spell.mana;
    row.appendChild(descCell);

    allTable.appendChild(row);
  }
}); */

/* const allMobileContainer = document.getElementById("all1");

spellList.forEach((spell) => {
  if (spell.category === categoria[4]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = ["Name", "Description", "ML Required", "Mana"];
    const values = [
      spell.name,
      spell.description,
      spell.mlRequired,
      spell.mana,
    ];

    columns.forEach((header, index) => {
      const columna = document.createElement("div");
      columna.className = "columna";

      const headerDiv = document.createElement("div");
      headerDiv.className = "header";
      headerDiv.textContent = header;

      const contenidoDiv = document.createElement("div");
      contenidoDiv.className = "contenido";
      contenidoDiv.textContent = values[index];

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    allMobileContainer.appendChild(fila);
  }
}); */
