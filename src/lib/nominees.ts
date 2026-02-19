export interface Category {
  name: string
  nominees: string[]
  points: number
}

export const Categories: Category[] = [
  {
    name: "Best Picture",
    nominees: [
      "Bugonia",
      "F1",
      "Frankenstein",
      "Hamnet",
      "Marty Supreme",
      "One Battle After Another",
      "The Secret Agent",
      "Sentimental Value",
      "Sinners",
      "Train Dreams"
    ],
    points: 10
  },
  {
    name: "Best Director",
    nominees: [
      "Paul Thomas Anderson — One Battle After Another",
      "Ryan Coogler — Sinners",
      "Josh Safdie — Marty Supreme",
      "Joachim Trier — Sentimental Value",
      "Chloé Zhao — Hamnet"
    ],
    points: 8
  },
  {
    name: "Best Actor in a Leading Role",
    nominees: [
      "Timothée Chalamet — Marty Supreme",
      "Leonardo DiCaprio — One Battle After Another",
      "Ethan Hawke — Blue Moon",
      "Michael B. Jordan — Sinners",
      "Wagner Moura — The Secret Agent"
    ],
    points: 8
  },
  {
    name: "Best Actress in a Leading Role",
    nominees: [
      "Jessie Buckley — Hamnet",
      "Rose Byrne — If I Had Legs I'd Kick You",
      "Kate Hudson — Song Sung Blue",
      "Renate Reinsve — Sentimental Value",
      "Emma Stone — Bugonia"
    ],
    points: 8
  },
  {
    name: "Best Actor in a Supporting Role",
    nominees: [
      "Benicio del Toro — One Battle After Another",
      "Jacob Elordi — Frankenstein",
      "Delroy Lindo — Sinners",
      "Sean Penn — One Battle After Another",
      "Stellan Skarsgård — Sentimental Value"
    ],
    points: 6
  },
  {
    name: "Best Actress in a Supporting Role",
    nominees: [
      "Elle Fanning — Sentimental Value",
      "Inga Ibsdotter Lilleaas — Sentimental Value",
      "Amy Madigan — Weapons",
      "Wunmi Mosaku — Sinners",
      "Teyana Taylor — One Battle After Another"
    ],
    points: 6
  },
  {
    name: "Best Original Screenplay",
    nominees: [
      "Blue Moon — Robert Kaplow",
      "It Was Just an Accident — Jafar Panahi",
      "Marty Supreme — Ronald Bronstein and Josh Safdie",
      "Sentimental Value — Eskil Vogt, Joachim Trier",
      "Sinners — Ryan Coogler"
    ],
    points: 5
  },
  {
    name: "Best Adapted Screenplay",
    nominees: [
      "Bugonia — Will Tracy",
      "Frankenstein — Guillermo del Toro",
      "Hamnet — Chloé Zhao and Maggie O'Farrell",
      "One Battle After Another — Paul Thomas Anderson",
      "Train Dreams — Clint Bentley & Greg Kwedar"
    ],
    points: 5
  },
  {
    name: "Best Costume Design",
    nominees: [
      "Avatar: Fire and Ash — Deborah L. Scott",
      "Frankenstein — Kate Hawley",
      "Hamnet — Malgosia Turzanska",
      "Marty Supreme — Miyako Bellizzi",
      "Sinners — Ruth E. Carter"
    ],
    points: 3
  },
  {
    name: "Best Makeup and Hairstyling",
    nominees: [
      "Frankenstein",
      "Kokuho",
      "Sinners",
      "The Smashing Machine",
      "The Ugly Stepsister"
    ],
    points: 3
  },
  {
    name: "Best Cinematography",
    nominees: [
      "Frankenstein — Dan Laustsen",
      "Marty Supreme — Darius Khondji",
      "One Battle After Another — Michael Bauman",
      "Sinners — Autumn Durald Arkapaw",
      "Train Dreams — Adolpho Veloso"
    ],
    points: 4
  },
  {
    name: "Best Visual Effects",
    nominees: [
      "Avatar: Fire and Ash",
      "F1",
      "Jurassic World Rebirth",
      "The Lost Bus",
      "Sinners"
    ],
    points: 3
  },
  {
    name: "Best Sound",
    nominees: [
      "F1",
      "Frankenstein",
      "One Battle After Another",
      "Sinners",
      "Sirāt"
    ],
    points: 2
  },
  {
    name: "Best Film Editing",
    nominees: [
      "F1 — Stephen Mirrione",
      "Marty Supreme — Ronald Bronstein and Josh Safdie",
      "One Battle After Another — Andy Jurgensen",
      "Sentimental Value — Olivier Bugge Coutté",
      "Sinners — Michael P. Shawver"
    ],
    points: 3
  },
  {
    name: "Best Production Design",
    nominees: [
      "Frankenstein",
      "Hamnet",
      "Marty Supreme",
      "One Battle After Another",
      "Sinners"
    ],
    points: 3
  },
  {
    name: "Best Original Score",
    nominees: [
      "Bugonia — Jerskin Fendrix",
      "Frankenstein — Alexandre Desplat",
      "Hamnet — Max Richter",
      "One Battle After Another — Jonny Greenwood",
      "Sinners — Ludwig Göransson"
    ],
    points: 4
  },
  {
    name: "Best Original Song",
    nominees: [
      "Dear Me — Diane Warren: Relentless",
      "Golden — KPop Demon Hunters",
      "I Lied to You — Sinners",
      "Sweet Dreams of Joy — Viva Verdi!",
      "Train Dreams — Train Dreams"
    ],
    points: 3
  },
  {
    name: "Best Animated Feature Film",
    nominees: [
      "Arco",
      "Elio",
      "KPop Demon Hunters",
      "Little Amélie or the Character of Rain",
      "Zootopia 2"
    ],
    points: 5
  },
  {
    name: "Best International Feature Film",
    nominees: [
      "Brazil — The Secret Agent",
      "France — It Was Just an Accident",
      "Norway — Sentimental Value",
      "Spain — Sirāt",
      "Tunisia — The Voice of Hind Rajab"
    ],
    points: 4
  },
  {
    name: "Best Animated Short Film",
    nominees: [
      "Butterfly",
      "Forevergreen",
      "The Girl Who Cried Pearls",
      "Retirement Plan",
      "The Three Sisters"
    ],
    points: 2
  },
  {
    name: "Best Live Action Short Film",
    nominees: [
      "Butcher's Stain",
      "A Friend of Dorothy",
      "Jane Austen's Period Drama",
      "The Singers",
      "Two People Exchanging Saliva"
    ],
    points: 2
  },
  {
    name: "Best Documentary Feature Film",
    nominees: [
      "The Alabama Solution",
      "Come See Me in the Good Light",
      "Cutting Through Rocks",
      "Mr. Nobody Against Putin",
      "The Perfect Neighbor"
    ],
    points: 4
  },
  {
    name: "Best Documentary Short Film",
    nominees: [
      "All the Empty Rooms",
      "Armed Only With a Camera: The Life and Death of Brent Renaud",
      "Children No More: Were and Are Gone",
      "The Devil Is Busy",
      "Perfectly a Strangeness"
    ],
    points: 2
  },
  {
    name: "Best Casting",
    nominees: [
      "Hamnet — Nina Gold",
      "Marty Supreme — Jennifer Venditti",
      "One Battle After Another — Cassandra Kulukundis",
      "The Secret Agent — Gabriel Domingues",
      "Sinners — Francine Maisler"
    ],
    points: 3
  }
];

export const CategoryMap = Categories.reduce((acc, category) => {
  acc[category.name] = category
  return acc
}, {} as Record<string, Category>)
