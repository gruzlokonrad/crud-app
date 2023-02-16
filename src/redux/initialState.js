const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'News',
      author: 'John Doe'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Movies',
      author: 'John Doe'
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
  ],
  categories: ["Sport", "News", "Movies"],
}

export default initialState