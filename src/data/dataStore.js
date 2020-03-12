export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    icon:'cat',
  },
};
export const faq = {
  title: 'FAQ',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: [
    {
      key: 0,
      question: 'Is FAQ a list?',
      content: 'A FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Answered Questions).',
    },
    {
      key: 1,
      question: 'Is the format often used in articles?',
      content: 'The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.',
    },
    {
      key: 2,
      question: 'Is the purpose of an FAQ generally to provide information?',
      content: 'The purpose of an FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called an FAQ regardless of whether the questions are actually frequently asked.',
    },
    {
      key: 3,
      question: 'Is provide information?',
      content: 'The purpose of an FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called an FAQ regardless of whether the questions are actually frequently asked.',
    },
  ],
};
export const info = {
  title: 'Info',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  content: 'It is info about this site',
};
export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};
export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  }, 
  {
    id: 'list-2',
    title: 'Things I like ',
    description: 'Things I want to do soon!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things I want ',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-4',
    title: 'Things I can',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-6',
    listId: 'list-3',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-7',
    listId: 'list-4',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Bud Jamison',
  },
  {
    id: 'card-7',
    columnId: 'column-5',
    title: 'Harold Lloyd',
  },
  {
    id: 'card-8',
    columnId: 'column-5',
    title: 'James Parrott',
  },
  {
    id: 'card-9',
    columnId: 'column-6',
    title: 'Why Pick on Me',
  },
  {
    id: 'card-10',
    columnId: 'column-6',
    title: 'Out of the Inkwell',
  },
  {
    id: 'card-11',
    columnId: 'column-7',
    title: 'The House of Mirth',
  },
  {
    id: 'card-12',
    columnId: 'column-7',
    title: 'The Ghost of Slumber Mountain',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  faq: {...faq},
  info: {...info},
};

export default initialStoreData;


