export type WMenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type WMenuSection = {
  id: string;
  title: string;
  extras?: string[];
  items: WMenuItem[];
};


export const westboroLunch: WMenuSection[] = [
  {
    id: "insalate",
    title: "Insalate",
    extras: [
      "Add Chicken +$12.00 | Add Steak +$18.00 | Add Shrimp +$12.00 | Add Salmon +$14.00",
    ],
    items: [
      {
        name: "Caesar",
        price: "$17.00",
        note: "Romaine, pancetta, garlic croutons & parmigiano.",
      },
      {
        name: "Verde",
        price: "$16.00",
        note: "Raddichio, Arugula & Romaine with Shaved Parmigiano and a Lemon and Olive Oil Vinaigrette",
      },
      {
        name: "Arugula",
        price: "$16.00",
        note: "Shaved parmigiano, pecans, balsamic vinaigrette.",
      },
      {
        name: "Kale Caesar",
        price: "$17.00",
        note: "Garlic croutons, pancetta, lemon anchovie & parmigiano vinaigrette.",
      },
      {
        name: "Chickpea",
        price: "$17.00",
        note: "Mixed greens, pickled onion, pesto, roasted red peppers, goat cheese.",
      },
      {
        name: "Caprese",
        price: "$18.00",
        note: "Tomatoes, Bocconcinni, Basil and Olive Oil",
      },
    ],
  },
  {
    id: "antipasti",
    title: "Antipasti",
    extras: [
      "The first basket of bread is on us, refills are +$3.00",
    ],
    items: [
      {
        name: "Smoked Salmon",
        price: "$18.00",
        note: "Capers, pickled onions, dijon mayo, goat cheese, crostini.",
      },
      {
        name: "Homemade Meatballs",
        price: "$16.00",
        note: "Roma tomato sauce.",
      },
      {
        name: "Sambuca Shrimp",
        price: "$19.00",
        note: "Pan-seared shrimp, purple onions, sambuca cream sauce, crostini.",
      },
      {
        name: "Mussels",
        price: "$18.00",
        note: "White wine, Roma tomato broth & grilled bread.",
      },
      {
        name: "Zucchini Fritti",
        price: "$16.00",
        note: "Breaded zucchini, three herb aioli.",
      },
      {
        name: "Italian Salumi Board",
        price: "$22.00/FOR 1",
        note: "Local & imported salumi, cheese, olives, spicy nduja crostini.",
      },
      {
        name: "Calamari Fritti",
        price: "$17.00",
        note: "Roasted red pepper aioli.",
      },
      {
        name: "Burrata",
        price: "$19.00",
        note: "With bruschetta tomatoes, balsamic syrup & grilled bread",
      },
      {
        name: "Roasted Beets",
        price: "$18.00",
        note: "With whipped goat cheese, fresh basil, arugula, balsamic syrup & crispy prosciutto",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    extras: [
      "Gluten Free Corn Pasta +$2.00",
    ],
    items: [
      {
        name: "Penne Pasquale",
        price: "$24.00",
        note: "Grilled chicken, roasted red peppers, rose & Parmigiano sauce.",
      },
      {
        name: "Fusilli Genovese",
        price: "$24.00",
        note: "Grilled chicken, black olives, sundried tomatoes, basil pesto, rose sauce.",
      },
      {
        name: "Spaghetti & Gamberetto",
        price: "$25.00",
        note: "Grilled shrimp, red onion, arugula, spicy aglio olio.",
      },
      {
        name: "Gluten Free Ravioli",
        price: "$24.00",
        note: "Butternut squash stuffed, brown butter cream sauce.",
      },
      {
        name: "Chicken Agnolotti",
        price: "$26.00",
        note: "Chicken stuffed, sundried tomato, Alfredo sauce, spinach.",
      },
      {
        name: "Linguine Primavera",
        price: "$22.00",
        note: "Roasted red pepper, zucchini, chickpeas, basil pesto, broccoli & goat cheese.",
      },
      {
        name: "Home Made Gnocchi",
        price: "$25.00",
        note: "Beef bolognese, Roma tomato sauce, mozzarella, asiago.",
      },
      {
        name: "Spaghetti & Smoked Salmon",
        price: "$26.00",
        note: "Crispy capers, onions, lemon & goat cheese cream sauce.",
      },
      {
        name: "Pappardelle Sila",
        price: "$24.00",
        note: "Prosciutto, wild mushrooms, porcini cream sauce.",
      },
      {
        name: "Spaghetti & Homemade Meatballs",
        price: "$23.00",
        note: "Roma tomato sauce.",
      },
      {
        name: "Linguine Piccante",
        price: "$23.00",
        note: "Sausage, red onions, black olives, roasted cherry tomatoes, spicy aglio olio.",
      },
    ],
  },
  {
    id: "pizze-bianche",
    title: "Pizze Bianche",
    extras: [
      "Wood fired, hand rolled, \"00\" Caputo flour, San Marzano tomato | Gluten Free Cauliflower Crust +$5.00 | Vegan Cheese +$5.00 | Three Herb Aioli +$3.00 | Roasted Red Pepper Aioli +$3.00 | Whipped Ricotta +$5.00",
    ],
    items: [
      {
        name: "Bria",
        price: "$25.00",
        note: "House-smoked salmon, pickled onions, capers, goat cheese, and mozzarella.",
      },
      {
        name: "Roberto",
        price: "$24.00",
        note: "Pancetta, wild mushrooms, black truffle & porcini paste, mozzarella, Parmigiano.",
      },
      {
        name: "Giacomo",
        price: "$23.00",
        note: "Prosciutto, figs, honey, mozzarella.",
      },
      {
        name: "Louisa",
        price: "$23.00",
        note: "Grilled chicken, roasted cherry tomatoes, basil pesto, mozzarella, goat cheese.",
      },
      {
        name: "Carne",
        price: "$27.00",
        note: "Grilled steak, spinach, roasted red peppers, pickled onions, mozzarella.",
      },
      {
        name: "Juventino",
        price: "$22.00",
        note: "Herb ricotta, zucchini, spinach, red onion, roasted cherry tomatoes, mozzarella.",
      },
    ],
  },
  {
    id: "pizze-rosse",
    title: "Pizze Rosse",
    extras: [
      "Wood fired, hand rolled, \"00\" Caputo flour, San Marzano tomato | Gluten Free Cauliflower Crust +$5.00 | Vegan Cheese +$5.00 | Three Herb Aioli +$3.00 | Roasted Red Pepper Aioli +$3.00 | Whipped Ricotta +$5.00",
    ],
    items: [
      {
        name: "Margherita",
        price: "$19.00",
        note: "Roma tomato sauce, fior di latte, mozzarella, basil | Add Anchovies +$4.00",
      },
      {
        name: "Azzuri",
        price: "$22.00",
        note: "Artichokes, prosciutto cotto, black olives, mushrooms, mozzarella.",
      },
      {
        name: "Luca",
        price: "$22.00",
        note: "Pepperoni, mozzarella.",
      },
      {
        name: "Pirlo",
        price: "$23.00",
        note: "Prosciutto, arugula, mozzarella, Parmigiano.",
      },
      {
        name: "Mangia Cake",
        price: "$24.00",
        note: "Pepperoni, green peppers, mushrooms, black olives, mozzarella.",
      },
      {
        name: "Enzo",
        price: "$25.00",
        note: "Pepperoni, soppresatta, sausage, mozzarella, fior di latte.",
      },
      {
        name: "Grilled Salmon",
        price: "$29.00",
        note: "Greens, chickpeas, pickled onion, tomato, olives, pepperoncini, creamy herb dressing.",
      },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    items: [
      {
        name: "Pan Seared Sausage",
        price: "$23.00",
        note: "Arugula, olives, spicy & roasted red peppers, tomato, onion, zucchini, mushrooms.",
      },
      {
        name: "Grilled Chicken Salad",
        price: "$26.00",
        note: "Greens, spicy eggplant, roasted red peppers, asiago, toasted pecans.",
      },
      {
        name: "Steak Salad",
        price: "$33.00",
        note: "Spinach, sauteed mushrooms, onions, gorgonzola dressing.",
      },
    ],
  },
];

export const westboroDinner: WMenuSection[] = [
  {
    id: "insalate",
    title: "Insalate",
    extras: [
      "Add Chicken +$12.00 | Add Steak +$18.00 | Add Shrimp +$12.00 | Add Salmon +$14.00",
    ],
    items: [
      {
        name: "Caesar",
        price: "$17.00",
        note: "Romaine, pancetta, garlic, croutons, parmigiano.",
      },
      {
        name: "Verde",
        price: "$16.00",
        note: "Raddichio, Romaine & Arugula with Shaved Parmigiano and a Lemon and Olive Oil Vinaigrette",
      },
      {
        name: "Arugula",
        price: "$16.00",
        note: "Shaved Parmigiano, pecans, balsamic vinaigrette.",
      },
      {
        name: "Kale Caesar",
        price: "$17.00",
        note: "Garlic croutons, Pancetta, lemon anchovie & parmigiano vinaigrette.",
      },
      {
        name: "Chickpea",
        price: "$17.00",
        note: "Mixed greens, pickled onion, pesto, roasted red peppers, goat cheese.",
      },
      {
        name: "Caprese",
        price: "$18.00",
        note: "Tomatoes, Bocconcinni, Basil and Olive Oil",
      },
    ],
  },
  {
    id: "antipasti",
    title: "Antipasti",
    extras: [
      "The first basket of bread is on us, refills are +$3.00",
    ],
    items: [
      {
        name: "Warm Mixed Olives",
        price: "$7.00",
      },
      {
        name: "Smoked Salmon",
        price: "$18.00",
        note: "Capers, pickled onions, dijon mayo, goat cheese, crostini.",
      },
      {
        name: "Homemade Meatballs",
        price: "$16.00",
        note: "Roma tomato sauce.",
      },
      {
        name: "Calabrese Sausage",
        price: "$17.00",
        note: "Olives, pepperoncini, roasted red peppers, diced tomatoes, chili oil.",
      },
      {
        name: "Sambuca Shrimp",
        price: "$19.00",
        note: "Pan-seared shrimp, purple onions, sambuca cream sauce, crostini.",
      },
      {
        name: "Mussels",
        price: "$18.00",
        note: "White wine, Roma tomato broth & grilled bread.",
      },
      {
        name: "Zucchini Fritti",
        price: "$16.00",
        note: "Breaded zucchini, three herb aioli.",
      },
      {
        name: "Italian Salumi Board",
        price: "$22.00/FOR 1",
        note: "Local & imported salumi, cheese, olives, spicy nduja crostini.",
      },
      {
        name: "Calamari Fritti",
        price: "$17.00",
        note: "Roasted red pepper aioli.",
      },
      {
        name: "Burrata",
        price: "$19.00",
        note: "With bruschetta tomatoes, balsamic syrup & grilled bread.",
      },
      {
        name: "Roasted Beets",
        price: "$18.00",
        note: "With whipped goat cheese, fresh basil, arugula, balsamic syrup & crispy prosciutto",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    extras: [
      "Gluten Free Corn Pasta +$2.00",
    ],
    items: [
      {
        name: "Penne Pasquale",
        price: "$24.00",
        note: "Grilled chicken, roasted red peppers, rose & Parmigiano sauce.",
      },
      {
        name: "Fusilli Genovese",
        price: "$24.00",
        note: "Grilled chicken, black olives, sundried tomatoes, basil pesto, rose sauce.",
      },
      {
        name: "Gluten Free Ravioli",
        price: "$24.00",
        note: "Butternut squash stuffed, brown butter cream sauce.",
      },
      {
        name: "Chicken Agnolotti",
        price: "$26.00",
        note: "Chicken stuffed, sundried tomato, Alfredo sauce, spinach.",
      },
      {
        name: "Linguine Primavera",
        price: "$22.00",
        note: "Roasted red pepper, zucchini, chickpeas, basil pesto, broccoli & goat cheese.",
      },
      {
        name: "Home Made Gnocchi",
        price: "$26.00",
        note: "Crispy capers, onions, lemon & goat cheese cream sauce.",
      },
      {
        name: "Pappardelle Sila",
        price: "$25.00",
        note: "Prosciutto, wild mushrooms, porcini cream sauce.",
      },
      {
        name: "Spaghetti & Homemade Meatballs",
        price: "$23.00",
        note: "Roma tomato sauce.",
      },
      {
        name: "Linguine Piccante",
        price: "$23.00",
        note: "Sausage, red onions, black olives, roasted cherry tomatoes, spicy aglio olio.",
      },
      {
        name: "Lasagna",
        price: "$25.00",
        note: "Beef Bolognese, Roma Tomato Sauce, Mozzarella and Parmigiano",
      },
      {
        name: "Linguine Pescatore",
        price: "$33.00",
        note: "Shrimp, scallops, salmon & mussels with white wine and roasted garlic cream sauce",
      },
    ],
  },
  {
    id: "pizze-bianche",
    title: "Pizze Bianche",
    extras: [
      "Wood fired, hand rolled, \"00\" Caputo flour, San Marzano tomato | Gluten Free Cauliflower Crust +$5.00 | Vegan Cheese +$5.00 | Three Herb Aioli +$3.00 | Roasted Red Pepper Aioli +$3.00 | Whipped Ricotta +$5.00",
    ],
    items: [
      {
        name: "Bria",
        price: "$25.00",
        note: "House-smoked salmon, pickled onions, capers, goat cheese, and mozzarella.",
      },
      {
        name: "Roberto",
        price: "$24.00",
        note: "Pancetta, wild mushrooms, black truffle & porcini paste, mozzarella, Parmigiano.",
      },
      {
        name: "Giacomo",
        price: "$23.00",
        note: "Prosciutto, figs, honey, mozzarella.",
      },
      {
        name: "Louisa",
        price: "$23.00",
        note: "Grilled chicken, roasted cherry tomatoes, basil pesto, mozzarella, goat cheese.",
      },
      {
        name: "Carne",
        price: "$27.00",
        note: "Grilled steak, spinach, roasted red peppers, pickled onions, mozzarella.",
      },
      {
        name: "Juventino",
        price: "$22.00",
        note: "Herb ricotta, zucchini, spinach, red onion, roasted cherry tomatoes, mozzarella.",
      },
    ],
  },
  {
    id: "pizze-rosse",
    title: "Pizze Rosse",
    extras: [
      "Wood fired, hand rolled, \"00\" Caputo flour, San Marzano tomato | Gluten Free Cauliflower Crust +$5.00 | Vegan Cheese +$5.00 | Three Herb Aioli +$3.00 | Roasted Red Pepper Aioli +$3.00 | Whipped Ricotta +$5.00",
    ],
    items: [
      {
        name: "Margherita",
        price: "$19.00",
        note: "Roma tomato sauce, fior di latte, mozzarella, basil | Add Anchovies +$4.00",
      },
      {
        name: "Azzuri",
        price: "$22.00",
        note: "Artichokes, prosciutto cotto, black olives, mushrooms, mozzarella.",
      },
      {
        name: "Luca",
        price: "$22.00",
        note: "Pepperoni, mozzarella.",
      },
      {
        name: "Pirlo",
        price: "$23.00",
        note: "Prosciutto, arugula, mozzarella, Parmigiano.",
      },
      {
        name: "Mangia Cake",
        price: "$24.00",
        note: "Pepperoni, green peppers, mushrooms, black olives, mozzarella.",
      },
      {
        name: "Enzo",
        price: "$25.00",
        note: "Pepperoni, soppresatta, sausage, mozzarella, fior di latte.",
      },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    items: [
      {
        name: "Chicken Parmigiana",
        price: "$29.00",
        note: "Breaded chicken cutlet, mozzarella, spaghetti with Roma tomato sauce.",
      },
      {
        name: "Salmon Piccata",
        price: "$31.00",
        note: "Lemon & white wine sauce, capers, seasonal vegetables, roasted potatoes.",
      },
      {
        name: "Veal Chop",
        price: "$46.00",
        note: "Local artisan mushrooms, marsala wine sauce, roasted potatoes, and seasonal vegetables.",
      },
      {
        name: "Grilled Chicken Gorgonzola",
        price: "$29.00",
        note: "Pecans, spinach, gorgonzola sauce, roasted potatoes, seasonal vegetables.",
      },
      {
        name: "Fish Soup",
        price: "$33.00",
        note: "Shrimp, scallops, salmon, mussels, seasonal vegetables, Roma tomato & white wine broth.",
      },
    ],
  },
];

export const westboroDessert: WMenuSection[] = [
  {
    id: "dessert",
    title: "Dessert",
    items: [
      {
        name: "Panna Cotta",
        price: "$13.00",
        note: "Classic vanilla with a brulee top",
      },
      {
        name: "Nutella Cake",
        price: "$14.00",
        note: "Warm brownie, hazelnut drizzle, chocolate hazelnut gelato",
      },
      {
        name: "Sticky Toffee Pudding",
        price: "$14.00",
        note: "Warm toffee cake, vanilla gelato",
      },
      {
        name: "Shortbread Tart",
        price: "$13.00",
        note: "Lemon Curd and Mascarpone Cream. Gluten free $14.00",
      },
      {
        name: "Cannoli",
        price: "$6.00",
        note: "Classic filling with Chocolate Chips",
      },
      {
        name: "Cheese Plate",
        price: "$15.00",
        note: "Assorted cheese, fruit, nuts and crostini",
      },
      {
        name: "Scoop of Gelato",
        price: "$5.00",
        note: "Seasonal flavours",
      },
    ],
  },
];

export const westboroSpecials: WMenuSection[] = [
  {
    id: "specials",
    title: "Dinner Specials",
    items: [
      {
        name: "Pan Seared Red Snapper",
        price: "$40.00",
        note: "Served with Potatoes and a warm Pancetta with Green Peas and Mint Salad",
      },
      {
        name: "Pizza",
        price: "$12.00",
        note: "Asiago, Mozzarella, Zucchini and Ricotta with Pesto and Grated Lemon Zest",
      },
    ],
  },
];
