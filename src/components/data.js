import cryptochecker from '../images/cryptochecker.png';
import foodrecipesapp from '../images/foodrecipesapp.png';
import starwarsapp from '../images/starwarsapp.jpg';
import newsapp1 from '../images/newsapp1.png';
import newsapp2 from '../images/newsapp2.png';
import memegenerator from '../images/memegenerator.png';
import weatherapp from '../images/weatherapp.png';
import passwordmanagerapp from '../images/passwordmanagerapp.png';

const exported = [
  {
    id: 1,
    title: 'CryptoChecker',
    coverImg: cryptochecker,
    description:
      'This is a desktop web application that allows you to check the current price, volume, marketcap and changes in the past 24hrs of any cryptocurrency. It is built with React and uses the CoinMarketCap API to get the data.',
    url: 'https://elohim2598.github.io/crypto-checker-app/',
  },
  {
    id: 2,
    title: 'Food Recipe App',
    coverImg: foodrecipesapp,
    description:
      'This is a fully responsive web application that allows you to search for recipes based on the ingredients you have. It is built with React and uses the Edamam API to get the data.',
    url: 'https://elohim2598.github.io/recipes-app/',
  },
  {
    id: 3,
    title: 'News App',
    coverImg: newsapp1,
    coverImg2: newsapp2,
    description:
      'This is a fully responsive web application that allows you to search for news based on the topic you have. It is built with React and uses the News API to get the data. Unfortunately it only displays the data on Localhost, because of the API free plan restrictions.',
    url: 'https://elohim2598.github.io/news-app/',
  },
  {
    id: 4,
    title: 'Meme Generator',
    coverImg: memegenerator,
    description:
      'This is a fully responsive web application that allows you to generate your very own memes. It is built with React and uses the Img Flip API to get the memes templates.',
    url: 'https://elohim2598.github.io/meme-generator/',
  },
  {
    id: 5,
    title: 'Weather App',
    coverImg: weatherapp,
    description:
      'This is a fully responsive web application that allows you to check the current weather in any city. It is built with React and uses the OpenWeather API to get the data.',
    url: 'https://elohim2598.github.io/weather-app/',
  },
  {
    id: 6,
    title: 'Star Wars Characters',
    coverImg: starwarsapp,
    description:
      'This is a fully responsive web application that allows you to search and see stats of all Star Wars characters. Leveraging Next.js and the Star Wars character API',
    url: 'https://starwars-characters-rose.vercel.app/',
  },
  {
    id: 7,
    title: 'Password Manager',
    coverImg: passwordmanagerapp,
    description:
      'This is a fully responsive web application that allows you to save passwords, edit them and delete them, it saves data in local storage. It is built with React and uses the Clearbit API to get the logos.',
    url: 'https://elohim2598.github.io/password-manager2/',
  },
];
export default exported;
