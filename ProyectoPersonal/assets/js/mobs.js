const categoriaMob = ["low", "medium", "high"];

const monsterList = [
  {
    image: "./assets/img/mobs/rat.png",
    name: "Rat",
    hp: 20,
    location: "Tutorial",
    experience: 5,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/monk.png",
    name: "Monk",
    hp: 100,
    location: "Mainland",
    experience: 5,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/snake.png",
    name: "Snake",
    hp: 15,
    location: "Everywhere",
    experience: 10,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/spider.png",
    name: "Spider",
    hp: 20,
    location: "Everywhere",
    experience: 12,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/wolf.png",
    name: "Wolf",
    hp: 25,
    location: "Everywhere",
    experience: 18,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/troll.png",
    name: "Troll",
    hp: 50,
    location: "Turorial, Mainland",
    experience: 20,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/orc.png",
    name: "Orc",
    hp: 75,
    location: "Tutorial",
    experience: 25,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/skeleton.png",
    name: "Skeleton",
    hp: 50,
    location: "Tutorial, Mainland, Jungla, Raamuzah",
    experience: 30,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/bear.png",
    name: "Bear",
    hp: 80,
    location: "Dragona",
    experience: 35,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/goblin.png",
    name: "Goblin",
    hp: 50,
    location: "Mainland",
    experience: 40,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/worm.gif",
    name: "Worm",
    hp: 60,
    location: "Tutorial, Mainland",
    experience: 40,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/larva.png",
    name: "Larva",
    hp: 60,
    location: "Raamuzah",
    experience: 44,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/dwarf.png",
    name: "Dwarf",
    hp: 90,
    location: "Mainland",
    experience: 45,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/mino.png",
    name: "Minotaur",
    hp: 100,
    location: "Tutorial, Mainland, Dragona",
    experience: 50,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/monkey.png",
    name: "Monkey",
    hp: 225,
    location: "Jungla",
    experience: 70,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/wild-warrior.png",
    name: "Wild Warrior",
    hp: 135,
    location: "Dragona, Jungla, Raamuzah",
    experience: 75,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/dwarf-soldier.png",
    name: "Dwarf Soldier",
    hp: 135,
    location: "Mainland, Dragona",
    experience: 90,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/arch-mino.png",
    name: "Minotaur Archer",
    hp: 185,
    location: "Mainland, Dragona",
    experience: 95,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/mino-mage.png",
    name: "Minotaur Mage",
    hp: 155,
    location: "Mainland, Dragona",
    experience: 150,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/kongro.png",
    name: "Kongro",
    hp: 225,
    location: "Jungla",
    experience: 150,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/cyclop.png",
    name: "Cyclop",
    hp: 260,
    location: "Mainland, Dragona",
    experience: 175,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/mino-guardian.png",
    name: "Minotaur Guardian",
    hp: 185,
    location: "Mainland, Dragona",
    experience: 180,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/dwarf-guard.png",
    name: "Dwarf Guard",
    hp: 245,
    location: "Mainland, Dragona",
    experience: 205,
    category: categoriaMob[0],
  },
  {
    image: "./assets/img/mobs/mummy.png",
    name: "Mummy",
    hp: 240,
    location: "Mainland, Raamuzah",
    experience: 150,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/vampire.png",
    name: "Vampire",
    hp: 475,
    location: "Jungla, Raamuzah",
    experience: 305,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/orc-berserk.png",
    name: "Orc Berserk",
    hp: 700,
    location: "Jungla",
    experience: 650,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/ancient-scarab.png",
    name: "Ancient Scarab",
    hp: 1000,
    location: "Raamuzah",
    experience: 750,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/dragon.png",
    name: "Dragon",
    hp: 1000,
    location: "Mainland, Dragona",
    experience: 700,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/vampire-bat.png",
    name: "Vampire Bat",
    hp: 1100,
    location: "Jungla",
    experience: 800,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/orc-leader.png",
    name: "Orc Leader",
    hp: 1150,
    location: "Jungla",
    experience: 900,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/bear.png",
    name: "Bloody Bear",
    hp: 1150,
    location: "Raamuzah",
    experience: 1000,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/giant-spider.png",
    name: "Giant Spider",
    hp: 1300,
    location: "Jungla",
    experience: 1200,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/hero.png",
    name: "Hero",
    hp: 1400,
    location: "Dragona",
    experience: 1200,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/lizzard-priest.png",
    name: "Lizzard Priest",
    hp: 1320,
    location: "Jungla",
    experience: 1500,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/sandrake.png",
    name: "Sandrake",
    hp: 1825,
    location: "Raamuzah",
    experience: 1550,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/lizzard-elite.png",
    name: "Lizzard Elite",
    hp: 2100,
    location: "Jungla",
    experience: 1800,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/dragon-lord.png",
    name: "Dragon Lord",
    hp: 2350,
    location: "Dragona, Jungla",
    experience: 2100,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/hero.png",
    name: "Hero",
    hp: 1400,
    location: "Dragona",
    experience: 1200,
    category: categoriaMob[1],
  },
  {
    image: "./assets/img/mobs/outlaw-soldier.png",
    name: "Outlaw Soldier",
    hp: 1800,
    location: "Dragona",
    experience: 1600,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/hydra.png",
    name: "Hydra",
    hp: 2350,
    location: "Catacombs",
    experience: 2100,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/behemoth.png",
    name: "Behemoth",
    hp: 4000,
    location: "Dragona, Catacombs",
    experience: 2500,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/nightmare.png",
    name: "Nightmare",
    hp: 2700,
    location: "Inferna",
    experience: 2650,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/venomous-spawn.png",
    name: "Venomous Spawn",
    hp: 3000,
    location: "Catacombs",
    experience: 3050,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/souleater.png",
    name: "Souleater",
    hp: 2800,
    location: "Inferna",
    experience: 3200,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/warlock.png",
    name: "Warlock",
    hp: 3500,
    location: "Dragona, Raamuzah",
    experience: 4000,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/medusa.png",
    name: "Medusa",
    hp: 4500,
    location: "Catacombs",
    experience: 4050,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/cursed-hand.png",
    name: "Cursed Hand",
    hp: 6600,
    location: "Inferna",
    experience: 5000,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/cerberus.png",
    name: "Cerberus",
    hp: 5500,
    location: "Inferna",
    experience: 5440,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/reaper.png",
    name: "Reaper",
    hp: 3900,
    location: "Jungla",
    experience: 5500,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/demon.png",
    name: "Demon",
    hp: 8200,
    location: "Dragona",
    experience: 6000,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/destroyer.png",
    name: "Destroyer",
    hp: 5200,
    location: "Inferna",
    experience: 7000,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/plaguebringer.png",
    name: "Plaguebringer",
    hp: 8250,
    location: "Inferna",
    experience: 8500,
    category: categoriaMob[2],
  },
  {
    image: "./assets/img/mobs/torturer.png",
    name: "Torturer",
    hp: 7350,
    location: "Inferna",
    experience: 8650,
    category: categoriaMob[2],
  },
];

 const lowTable = document.getElementById("mob-low").getElementsByTagName("tbody")[0];

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[0]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("th");
    const img = document.createElement("img");
    img.src = monster.image;
    img.alt = monster.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = monster.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = monster.hp;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = monster.location;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = monster.experience;
    row.appendChild(descCell);

    lowTable.appendChild(row);
  }
});

/* const lowMobileContainer = document.getElementById("mob-low1");

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[0]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = [
      "Image",
      "Name",
      "Health Points",
      "Location",
      "Experience",
    ];
    const values = [
      monster.image,
      monster.name,
      monster.hp,
      monster.location,
      monster.experience,
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
        img.alt = monster.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    lowMobileContainer.appendChild(fila);
  }
});

const midTable = document.getElementById("mob-mid").getElementsByTagName("tbody")[0];

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[1]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = monster.image;
    img.alt = monster.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = monster.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = monster.hp;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = monster.location;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = monster.experience;
    row.appendChild(descCell);

    midTable.appendChild(row);
  }
});

const midMobileContainer = document.getElementById("mob-mid1");

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[1]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = [
      "Image",
      "Name",
      "Health Points",
      "Location",
      "Experience",
    ];
    const values = [
      monster.image,
      monster.name,
      monster.hp,
      monster.location,
      monster.experience,
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
        img.alt = monster.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    midMobileContainer.appendChild(fila);
  }
}); 

const highTable = document.getElementById("mob-high").getElementsByTagName("tbody")[0];

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[2]) {
    const row = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = monster.image;
    img.alt = monster.name;
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = monster.name;
    row.appendChild(nameCell);

    const levelCell = document.createElement("td");
    levelCell.textContent = monster.hp;
    row.appendChild(levelCell);

    const valueCell = document.createElement("td");
    valueCell.textContent = monster.location;
    row.appendChild(valueCell);

    const descCell = document.createElement("td");
    descCell.textContent = monster.experience;
    row.appendChild(descCell);

    highTable.appendChild(row);
  }
});

/* const highMobileContainer = document.getElementById("mob-high1");

monsterList.forEach((monster) => {
  if (monster.category === categoriaMob[2]) {
    const fila = document.createElement("div");
    fila.className = "fila";

    const columns = [
      "Image",
      "Name",
      "Health Points",
      "Location",
      "Experience",
    ];
    const values = [
      monster.image,
      monster.name,
      monster.hp,
      monster.location,
      monster.experience,
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
        img.alt = monster.name;
        contenidoDiv.appendChild(img);
      } else {
        contenidoDiv.textContent = values[index];
      }

      columna.appendChild(headerDiv);
      columna.appendChild(contenidoDiv);
      fila.appendChild(columna);
    });

    highMobileContainer.appendChild(fila);
  }
}); */
