
const language = prompt("Введіть назву мови програмування").trim();

function getLanguage(language) {
  switch (language) {
    case "PHP";
      return ('Расмус Лердорф');
      break;
  
    case "JS";
      return ('Брендан Ейх');
      break
  
    case "Java";
      return ('Джеймс Гослінг');
      break
  
    case "Python";
      return ('Гвідо ван Россум');
      break
    default
      return ('Invalid language');
  }
}
