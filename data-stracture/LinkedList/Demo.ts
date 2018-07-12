/**
 * Demo
 */

import LinkedList from './LinkedList';

const languages: LinkedList = new LinkedList();

languages.insert('Typescript', 'head');
languages.insert('Python', 'Typescript');
languages.insert('PHP', 'Typescript');
languages.display();

console.log('------🤭------');

languages.insert('Java', 'Python');
languages.remove('Python');
languages.display();
