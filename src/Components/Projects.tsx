import newsAppPhoto from "../img/sc_news_app.png";
import bookSearchAppPhoto from "../img/sc_book_search_app.png";
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
  const goToNewsAppGitHub = () => {
    window.open("https://github.com/Emiri-i/news-app");
  };
  const goToBookSearchAppGitHub = () => {
    window.open("https://github.com/Emiri-i/book-search-app");
  };

  return (
    <>
      <div className="projects-section-wrapper">
        <div className="projects-title" ref={projectTitle}>
          Projects
        </div>
        <div
          className="projects-each-content-wrapper odd-number-project"
          ref={firstProjectElement}>
          <img src={newsAppPhoto} alt="news app image" />
          <div className="project-explanation-wrapper">
            <div className="project-each-title">NEWS APP</div>
            <div className="project-explanation">
              This is an app that you can find the latest news by filtering
              category, country, and keyword.
            </div>
            <div className="skills-used">
              React, Typescript, Javascript, HTML, CSS, SASS
            </div>
            <div className="project-github-link" onClick={goToNewsAppGitHub}>
              <FaGithub className="skill-icon" size="1.5em" title={"GitHub"} />
              <div className="project-github-icon">Go to Github Page</div>
            </div>
          </div>
        </div>

        <div
          className="projects-each-content-wrapper even-number-project"
          ref={secondProjectElement}>
          <>
            <div className="project-explanation-wrapper">
              <div className="project-each-title">BOOK SEARCH APP</div>
              <div className="project-explanation">
                This is an app that you can find books, and keep the record of
                the books you finished reading.
              </div>
              <div className="skills-used">
                Vue, Vuetify, Typescript, Javascript, HTML, CSS, LocalStorage
              </div>
              <div
                className="project-github-link second-project"
                onClick={goToBookSearchAppGitHub}>
                <FaGithub
                  className="skill-icon"
                  size="1.5em"
                  title={"GitHub"}
                />
                <div className="project-github-icon">Go to Github Page</div>
              </div>
            </div>
            <img src={bookSearchAppPhoto} alt="book search app image" />
          </>
        </div>
      </div>
    </>
  );
}
export default Projects;
