import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Portfolio</h1>

      <Link to="/form">Life of Riley Form</Link>
      <Link to="/tribute">Tribute Page</Link>
      <Link to="/product">Product Landing Page</Link>
      <Link to="/documentation">Technical Documentation Page</Link>
      <Link to="/cycleLanes">CycleLanes</Link>
      <Link to="/birthday">BirthdayPlotter</Link>
      <Link to="/algorithm">AlgorithmArcade</Link>

      <navbar id="navbar">
        <ul class="nav-list">
          <li>
            <a class="nav-link" href="#about-section">
              About
            </a>
          </li>
          <li>
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </navbar>
      <main>
        <section id="welcome-section">
          <div class="welcome-text">
            <h1>Atelier Amos</h1>
            <h2>Web Development</h2>
          </div>
        </section>
        <section id="about-section">
          <div class="about">
            <p class="about-text about-header">
              The below are sample CSS and responsive web design projects,
              created by Atelier Amos, aka web developer Clare Amos.
            </p>
            <p class="about-text">
              Each of these projects was completed as a part of the freeCodeCamp
              Responsive Web Design certification, for which this portfolio is
              the final project piece. Each tile includes a link to the original
              brief, for an insight into the parameters and requirements.
            </p>
          </div>
        </section>
        <section id="projects">
          <div class="project-gallery">
            <div class="project-tile">
              <div class="project-img-div survey">
                <h1 class="riley-header">The Life of Riley?</h1>
                <div class="riley-form">
                  <div class="riley-field-box one">
                    <p>why?</p>
                    <div class="riley-field"></div>
                  </div>
                  <div class="riley-field-box two">
                    <p>what?</p>
                    <div class="riley-field"></div>
                  </div>
                  <div class="riley-field-box three">
                    <p>where?</p>
                    <div class="riley-field"></div>
                  </div>
                  <div class="riley-field-box four">
                    <p>who?</p>
                    <div class="riley-field"></div>
                  </div>
                </div>
                {/* <!-- riley form div --> */}
              </div>
              {/* <!-- project img div riley --> */}

              <div class="project-text-box">
                <p class="project-name">The Life of Riley</p>
                <Link to="/form">Life of Riley Form</Link>
                {/* <a class="project-link" id="profile-link" target="_blank"
              href="https://www.freecodecamp.org/certification/fcc5cc0983c-3c6f-4d4c-887f-66fd1560f6eb/responsive-web-design">A
              Survey
              Form</a> */}
                <a
                  class="project-brief-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form"
                >
                  View the project brief
                </a>
              </div>
              {/* <!-- project text box --> */}
            </div>
            {/* <!-- project tile riley --> */}

            <div class="project-tile">
              <img
                src="https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg?itok=4HL3ETlO"
                id="image"
                alt="Photograph of Grace Hopper, adjusting an early electronic computer"
              />
              <div class="project-text-box">
                <p class="project-name">Grace Hopper</p>
                <Link to="/tribute">Tribute Page</Link>
                {/* <a class="project-link" id="profile-link" target="_blank"
              href="https://www.freecodecamp.org/certification/fcc5cc0983c-3c6f-4d4c-887f-66fd1560f6eb/responsive-web-design">A
              Tribute
              Page</a> */}
                <a
                  class="project-brief-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page"
                >
                  View the project brief
                </a>
              </div>
              {/* <!-- project text box --> */}
            </div>
            {/* <!-- project tile Grace Hopper --> */}

            <div class="project-tile">
              <div class="project-img-div world">
                <p>hello world</p>
              </div>
              <div class="project-text-box">
                <p class="project-name">Hello World!</p>
                <Link to="/product">Product Landing Page</Link>
                {/* <a
                  class="project-link"
                  id="profile-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/certification/fcc5cc0983c-3c6f-4d4c-887f-66fd1560f6eb/responsive-web-design"
                >
                  A Technical Documentation Page
                </a> */}
                <a
                  class="project-brief-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page"
                >
                  View the project brief
                </a>
              </div>
              {/* <!-- project text box --> */}
            </div>
            {/* <!-- project tile hello world --> */}

            <div class="project-tile">
              <img
                src="https://image.invaluable.com/housePhotos/jeffreysevans/53/670353/H4034-L206230292.jpg"
                alt="assorted Czech glass bottles on a shelf"
              />
              <div class="project-text-box">
                <p class="project-name">Jeanie's Apothecary</p>
                <Link to="/product">Product Landing Page</Link>
                {/* <a
                  class="project-link"
                  id="profile-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/certification/fcc5cc0983c-3c6f-4d4c-887f-66fd1560f6eb/responsive-web-design"
                >
                  A Product Landing Page
                </a> */}
                <a
                  class="project-brief-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page"
                >
                  View the project brief
                </a>
              </div>
              {/* <!-- project text box --> */}
            </div>
            {/* <!-- project tile --> */}
          </div>
          {/* <!-- project gallery --> */}
        </section>

        <section id="contact">
          <h1>Find me here</h1>
          <div class="contact-list">
            <ul>
              <li>
                <i class="fa-brands fa-github"></i>
                <a
                  id="contact-link"
                  target="_blank"
                  href="https://github.com/Architravelt"
                >
                  {' '}
                  GitHub
                </a>
              </li>
              <li>
                <i class="fa-brands fa-free-code-camp"></i>{' '}
                <a
                  id="contact-link"
                  target="_blank"
                  href="https://www.freecodecamp.org/fcc5cc0983c-3c6f-4d4c-887f-66fd1560f6eb"
                >
                  freeCodeCamp
                </a>
              </li>
              <li>
                <i class="fa-brands fa-linkedin"></i>
                <a
                  id="contact-link"
                  target="_blank"
                  href="www.linkedin.com/in/clare-amos"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer id="footer">
        <h3>© Atelier Amos 2024</h3>
      </footer>
    </div>
  );
}

export default Homepage;
