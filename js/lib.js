function print(message, tag = 'pre') {
  var element = document.createElement(tag);
  element.innerHTML = message;
  console.log('PRINT:', message);
  document.getElementById('main').appendChild(element);
}

function makeGitHubLink(currentUrl, filePath) {
  var prefix = currentUrl.split('//')[0];
  var domainComponents = currentUrl.split('//')[1].split('/')[0].split('.');
  var basePath = currentUrl.split('//')[1].split('/')[1];
  basePath = '/' + basePath + (basePath.length ? '/' : '');
  var targetDomain = (domainComponents.length > 1)
    ? 'github.com/' + domainComponents[0]
    : domainComponents[0];
  return prefix + '//' + targetDomain + basePath + (domainComponents.length > 1 ? 'blob/gh-pages/' : '') + filePath;
}

(function (elementId) {
  var element = document.getElementById(elementId);
  element.href = makeGitHubLink(location.href, 'index.js');
})('source-code');

const dog = {
  species: 'dog',
  name: 'Sonya',
  gender: 'female',
  legs: 4,
  hands: 0,
  saying: 'Woof!',
}

const cat = {
  species: 'cat',
  name: 'Terra',
  gender: 'Female',
  legs: 4,
  hands: 0,
  saying: 'Meow!',
}

const woman = {
  species: 'human',
  name: 'Anna',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'Have a nice day!',
}

const man = {
  species: 'human',
  name: 'Mickle',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'You look so good!',
}

const catWoman = {
  species: 'cat-woman',
  name: 'Mira',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: cat.saying,
}

const inhabitants = [man, woman, cat, dog, catWoman];
const properties = ['species', 'name', 'gender', 'legs', 'hands', 'saying', 'friend'];

inhabitants.forEach(inhabitant => {
  inhabitant.friend = inhabitants[Math.floor(Math.random() * inhabitants.length)].name
  print(properties.map(property =>
    inhabitant[property]).join(';')
  )
})


