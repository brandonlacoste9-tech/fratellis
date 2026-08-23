export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  extras?: string[];
  items: MenuItem[];
};

/** Transcribed from the dine-in board they publish on fratellikanata.ca (snapshot 23 Aug 2026). */
export const menuSections: MenuSection[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    items: [
      { name: "Zuppa del giorno", price: "10" },
      {
        name: "Carpaccio",
        price: "24",
        note: "Sliced beef tenderloin, capers, mustard mayo, parmesan, extra virgin olive oil. Add arugula & sautéed mushrooms 29.",
      },
      { name: "Zucchini fritti", price: "20" },
      { name: "Calamari fritti", price: "20" },
      { name: "Parmesan fries", price: "15" },
      {
        name: "Deep fried ravioli",
        price: "22",
        note: "Ricotta, mozzarella, hot honey.",
      },
      {
        name: "Calabrese sausage",
        price: "22",
        note: "Olives, pepperoncini, red pepper, chili oil, diced tomato.",
      },
      {
        name: "Mushroom bruschetta",
        price: "19",
        note: "Shaved parmesan.",
      },
      {
        name: "Italian salumi board",
        price: "24 / 40 for 2",
        note: "Imported meat, cheese, olives, eggplant, spicy ’nduja crostini.",
      },
      {
        name: "Sambuca shrimp",
        price: "23",
        note: "Six tiger shrimp, purple onion, sambuca cream.",
      },
      {
        name: "House smoked salmon",
        price: "22",
        note: "Capers, purple onion, mustard mayo, goat cheese.",
      },
      {
        name: "Homemade meatballs",
        price: "18",
        note: "Beef & pork, San Marzano tomato sauce, parmesan.",
      },
      {
        name: "Mussels",
        price: "27",
        note: "Garlic, white wine & tomato sauce.",
      },
    ],
  },
  {
    id: "insalate",
    title: "Insalate",
    extras: [
      "Add blackened or grilled: chicken breast 14 · salmon 15 · six shrimp 15 · 5 oz flat iron steak 20",
      "Salad split for two 2",
    ],
    items: [
      {
        name: "Caesar",
        price: "19",
        note: "Pancetta, garlic croutons, parmesan, house-made Caesar dressing.",
      },
      {
        name: "Arugula",
        price: "25",
        note: "Pecans, seasonal fruit, shaved parmesan, maple lemon vinaigrette.",
      },
      {
        name: "Mista",
        price: "17",
        note: "Mixed greens, olives, cherry tomato, red wine vinaigrette.",
      },
      {
        name: "Caprese",
        price: "19",
        note: "Sliced tomato, fior di latte, basil, extra virgin olive oil.",
      },
      {
        name: "Beet salad",
        price: "19",
        note: "Mixed greens, sliced beets, goat cheese, crispy prosciutto, balsamic vinaigrette.",
      },
      {
        name: "Kale Caesar",
        price: "19",
        note: "Pancetta, garlic croutons, pecorino, lemon anchovy vinaigrette.",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    intro: "I’d rather eat pasta and drink wine than be a size zero. — Sophia Loren, 1965",
    extras: ["Substitute gluten-free corn penne 4"],
    items: [
      {
        name: "Spaghetti pomodoro",
        price: "21",
        note: "Tomato basil sauce. With meatballs or beef bolognese 27.",
      },
      {
        name: "Four cheese ravioli",
        price: "28",
        note: "Mushrooms, roasted red peppers, sun-dried tomato pesto cream.",
      },
      {
        name: "Linguine pescatore",
        price: "38",
        note: "Mussels, shrimp, scallops, roasted garlic white wine & cream sauce.",
      },
      {
        name: "Spaghetti carbonara",
        price: "27",
        note: "Egg, pancetta, pecorino.",
      },
      { name: "Gnocchi pomodoro", price: "28" },
      { name: "Gnocchi gorgonzola", price: "29" },
      {
        name: "Penne Pasquale",
        price: "27",
        note: "Grilled chicken, roasted red peppers, rosé sauce.",
      },
      {
        name: "Fettuccine primavera",
        price: "29",
        note: "Zucchini, red peppers, onions, broccoli, tomatoes, pesto, goat cheese.",
      },
      {
        name: "Rigatoni genovese",
        price: "29",
        note: "Grilled chicken, black olives, sun-dried tomato, basil pesto rosé sauce.",
      },
      {
        name: "Rigatoni diavola",
        price: "29",
        note: "Sliced sausage, onions, olives, tomatoes, spicy tomato sauce.",
      },
      {
        name: "Fettuccine Sila",
        price: "29",
        note: "Mixed mushrooms, Parma prosciutto, porcini cream sauce.",
      },
      { name: "Homemade lasagna", price: "28" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    intro:
      "Artisan dough, “00” Caputo flour. Hand stretched. Wood fired. Topped with our favourite ingredients.",
    extras: [
      "Substitute gluten-free cauliflower crust 7",
      "Add meat 5 · add vegetables 4 · chili oil 2",
    ],
    items: [
      {
        name: "Margherita",
        price: "24",
        note: "Mozzarella, fior di latte, basil. Add anchovies 5.",
      },
      {
        name: "Juventino",
        price: "29",
        note: "Roasted red pepper, onion, mushroom, zucchini, goat cheese, mozzarella.",
      },
      {
        name: "Alessandro",
        price: "29",
        note: "Grilled chicken, bacon, mushroom, grilled onion, mozzarella.",
      },
      {
        name: "Roberto",
        price: "30",
        note: "Mixed mushrooms, pancetta, parmesan, mozzarella, black truffle pesto base.",
      },
      { name: "Luca", price: "26", note: "Pepperoni, mozzarella." },
      {
        name: "Enzo",
        price: "28",
        note: "Pepperoni, sausage, soppressata, mozzarella.",
      },
      {
        name: "Pirlo",
        price: "27",
        note: "Prosciutto, arugula, shaved parmesan.",
      },
      {
        name: "Giacomo",
        price: "28",
        note: "Prosciutto, figs, mozzarella, honey.",
      },
      {
        name: "Mangia cake",
        price: "28",
        note: "Pepperoni, green peppers, mushrooms, olives, mozzarella.",
      },
      {
        name: "Genoa",
        price: "29",
        note: "Grilled chicken, olives, roasted peppers, mozzarella, pesto.",
      },
      {
        name: "Bianco",
        price: "29",
        note: "House smoked salmon, red onion, capers, mozzarella, goat cheese, béchamel.",
      },
      {
        name: "Louisa",
        price: "29",
        note: "Grilled chicken, sliced tomato, goat cheese, mozzarella, basil pesto base.",
      },
      {
        name: "Quattro stagioni",
        price: "28",
        note: "Prosciutto, mushrooms, artichoke, olives, mozzarella.",
      },
    ],
  },
  {
    id: "meat",
    title: "Meat",
    items: [
      {
        name: "Chicken gorgonzola",
        price: "36",
        note: "Spinach, gorgonzola cream sauce, pecans, roasted vegetables & potato.",
      },
      {
        name: "Veal pizzaiola",
        price: "35",
        note: "Tomatoes, garlic & white wine, roasted vegetables & potato.",
      },
      {
        name: "Chicken parmigiana",
        price: "35",
        note: "Spaghetti pomodoro.",
      },
      {
        name: "Veal marsala",
        price: "36",
        note: "Marsala wine & mushrooms, fettuccine alfredo.",
      },
      {
        name: "Chicken limone",
        price: "36",
        note: "White wine, lemon & butter reduction, fettuccine alfredo.",
      },
      {
        name: "Filet mignon",
        price: "58",
        note: "Mushrooms, porcini jus, roasted vegetables & potato. Add 6 grilled shrimp 15.",
      },
    ],
  },
  {
    id: "pesce",
    title: "Pesce",
    items: [
      {
        name: "Roasted salmon",
        price: "36",
        note: "Roasted bell pepper cream sauce, roasted vegetables & potato.",
      },
      {
        name: "Pan roasted cod",
        price: "35",
        note: "Onions, capers, black olives, diced tomato, spaghetti aglio olio.",
      },
      {
        name: "Fish soup",
        price: "38",
        note: "Mixed seafood, salmon, tomato & white wine.",
      },
    ],
  },
];
