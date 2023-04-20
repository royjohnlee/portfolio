import portfolioImg01 from "../images/studioHsu.png";
import portfolioImg02 from "../images/no-badbeats.jpg";
import portfolioImg03 from "../images/minesweeper.JPG";
import portfolioImg04 from "../images/recomatoes.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Ux",
    title: "StudioHsu Photography",
    description:
      "A real estate photography portfolio. Showcases high-quality photos of property for sale or rent. It includes information about the photographer's services, pricing, and contact information.",
    technologies: ["HTML5", "CSS", "Javascript", "React", "MongoDB"],
    siteUrl1: "https://studiohsu.herokuapp.com/",
    siteUrl2: "https://github.com/royjohnlee/studioHsu",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "No Bad Beats",
    description:
      "A web application that allows users to check NBA basketball moneyline prices, comment on the game posts, and make imaginary bets. This was a team project with three total members.",
    technologies: ["HTML5", "CSS", "Python", "Django", "PostgreSQL", "Odd-API"],
    siteUrl1: "https://no-bad-beat.herokuapp.com/",
    siteUrl2: "https://github.com/richardmundyiii/no_bad_beat",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Minesweeper Clone",
    description:
      "A web application that allows users to play “Minesweeper”.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    siteUrl1: "https://royjohnlee.github.io/Minesweeper/",
    siteUrl2: "https://github.com/royjohnlee/Minesweeper",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Recomatoes",
    description:
      "A restaurant recommending app designed to help users discover new restaurants based on recommendations from other users. This app allows users to rate restaurants they have visited and share their experience with others by writing reviews. Other users can then read these reviews and use them to make informed decisions about where to dine.",
    technologies: ["HTML", "CSS", "Javascript", "Express", "NodeJS", "MongoDB"],
    siteUrl1: "https://restaurant-rec.herokuapp.com/",
    siteUrl2: "https://github.com/royjohnlee/Restaurant",
  },
];

export default portfolios;
