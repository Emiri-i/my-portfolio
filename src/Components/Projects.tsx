import newsAppPhoto from "../img/sc_news_app.png";
import bookSearchAppPhoto from "../img/sc_book_search_app.png";
import rockPaperScissorsAppPhoto from "../img/sc_rps_app.png";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import "./scss/Projects.scss";

function Projects() {
  const projectTitle = useRef<HTMLInputElement | null>(null);
  useIntersectionObserver(projectTitle);
  const firstProjectElement = useRef<HTMLInputElement | null>(null);
  useIntersectionObserver(firstProjectElement);
  const secondProjectElement = useRef<HTMLInputElement | null>(null);
  useIntersectionObserver(secondProjectElement);
  const thirdProjectElement = useRef<HTMLInputElement | null>(null);
  useIntersectionObserver(thirdProjectElement);
  const openGitHubPage = (e: React.MouseEvent<HTMLElement>, link: string) => {
    window.open(link);
  };
  const projectsInfoArray = [
    {
      id: 1,
      projectTitle: "NEWS APP",
      projectExplanation:
        "This is an app that you can find the latest news by filtering category, country, and keyword.",

      skillUsed: "React, Typescript, Javascript, HTML, CSS, SASS",
      ref: firstProjectElement,
      photo: newsAppPhoto,
      photoAltText: "news app image",
      gitHubPageLink: "https://github.com/Emiri-i/news-app",
    },
    {
      id: 2,
      projectTitle: "ROCK PAPER SCISSORS APP",
      projectExplanation: "This is a rock paper scissors game application.",
      skillUsed: "React, Typescript, Javascript, HTML, CSS, SASS",
      ref: secondProjectElement,
      photo: rockPaperScissorsAppPhoto,
      photoAltText: "rock paper scissors app image",
      gitHubPageLink: "https://github.com/Emiri-i/rock-paper-scissors-game",
    },
    {
      id: 3,
      projectTitle: "BOOK SEARCH APP",
      projectExplanation:
        "This is an app that you can find books, and keep the record of the books you finished reading.",
      skillUsed:
        "Vue, Vuetify, Typescript, Javascript, HTML, CSS, LocalStorage",
      ref: thirdProjectElement,
      photo: bookSearchAppPhoto,
      photoAltText: "book search app image",
      gitHubPageLink: "https://github.com/Emiri-i/book-search-app",
    },
  ];

  return (
    <>
      <div className="projects-section-wrapper">
        <div className="projects-title" ref={projectTitle}>
          Projects
        </div>
        {projectsInfoArray.map((arr) => (
          <div
            className={`projects-each-content-wrapper ${
              arr.id % 2 !== 0 ? "odd" : "even"
            }-number-project`}
            ref={arr.ref}
            key={arr.id}>
            <img src={arr.photo} alt={arr.photoAltText} />
            <div className="project-explanation-wrapper">
              <div className="project-each-title">{arr.projectTitle}</div>
              <div className="project-explanation">
                {arr.projectExplanation}
              </div>
              <div className="skills-used">{arr.skillUsed}</div>
              <div
                className="project-github-link"
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  openGitHubPage(e, arr.gitHubPageLink)
                }>
                <FaGithub
                  className="skill-icon"
                  size="1.5em"
                  title={"GitHub"}
                />
                <div className="project-github-icon">Go to Github Page</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
