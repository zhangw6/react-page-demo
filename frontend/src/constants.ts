
export interface Page {
  title: string;
  content: string;
  index: string;
}



export const pageContent: Page[] = [
  {
    title: 'Declarative',
    content: 'React makes it painless to create interactive UIs. ' +
    'Design simple views for each state in your application, ' +
    'and React will efficiently update and render just ' +
    'the right components when your data changes.',
    index: 'sample-1'

  },
  {
    title: 'Component-Based',
    content: 'Build encapsulated components that manage their own state' +
    ' then compose them to make complex UIs.',
    index: 'sample-2'
  },
  {
    title: 'Learn Once',
    content: 'We don’t make assumptions about the rest of your technology stack, ' +
    'so you can develop new features in React without rewriting existing code.',
    index: 'sample-3'

  },
];



