// import styles from './Tribute.module.css';

function Tribute() {
  return (
    <div>
      <main id="main">
        <header>
          <h1 id="title">Grace Hopper</h1>
          <h3 id="subtitle">1906-1992</h3>
          <h2 id="subtitle">
            Computer Scientist, Mathematician and US Navy Rear Admiral
          </h2>
        </header>

        <div id="img-div">
          <img
            src="../grace-hopper.jpg"
            id="image"
            alt="Photograph of Grace Hopper, adjusting an early electronic computer"
          />
          <div id="img-caption">
            <p>
              Grace Hopper early pioneer in computer Science. Photograph
              courtesy of the Computer History Museum and{' '}
              <a
                href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
                id="tribute-link"
                target="_blank"
              >
                Yale News
              </a>{' '}
            </p>
          </div>
        </div>
        <div id="tribute-info">
          <div className="quote">
            <p>
              “The most dangerous phrase in the language is, ‘We’ve always done
              it this way.’”
            </p>
          </div>

          <section id="early-years">
            <h3>Origins and Early Years</h3>
            <ul className="info-list">
              <li>
                Grace Hopper was born Grace Brewster Murray, the eldest of
                three, to parents Walter Fletcher Murray and Mary Campbell Van
                Horne. Her place of birth was New York, where her father was the
                owner of an insurance company.
              </li>
              <li>
                In 1928 she graduated from Vassar College, with degrees in
                mathematics and physics, and in 1930 received her masters in
                Mathematics from Yale. Vassar College in New York State, was the
                second ever degree granting higher institution for women in the
                United States.{' '}
              </li>
              <li>
                1930 also saw her marriage to Vincent Foster Hopper, a professor
                at New York University, who she subsequently divorced in 1945.
              </li>
              <li>
                The following year, Hopper began teaching mathematics at Vassar
                whilst continuing her studies in mathematics. By 1934, she had
                completed her PhD, under the direction of Norwegian
                Mathematician, Øystein Ore.{' '}
              </li>
              <li></li>
            </ul>
          </section>
          <section id="war-years">
            <h3>The War Years</h3>
            <ul className="info-list">
              <li>
                Hopper strove to join the war effort in the early years of the
                conflict, but was initially rejected due to her age of 34, and
                her small stature. She was also deemed too valuable, due both to
                her job as a mathematics professor, and her strength of
                knowledge in this field.{' '}
              </li>

              <li>
                When the United States joined World War II, after the bombing of
                Pearl Harbour however, Hopper took a leave of absence from
                Vassar, and was able to join the Royal Navy Women’s Reserves,
                also known as WAVES.
              </li>
              <li>
                Graduating first in her class, in 1944, she was then assigned to
                the Bureau of Ships Computation Project at Harvard University
                working with the Mark I computer programming staff.{' '}
              </li>
              <li>
                The Mark I was also known as the IBM Automatic Sequence
                Controlled Calculator (ASCC), one of the earliest
                general-purpose electromechanical computers. Hopper’s work
                included responsibility for programming the machine, and
                punching the machine instructions, as well as writing the
                extensive user manual.{' '}
              </li>
              <div className="quote">
                <p>
                  “One accurate measurement is worth a thousand expert
                  opinions.”
                </p>
              </div>
              <li>
                The officers of the Harvard lab were also responsible for
                carrying out vital top-secret calculations, such as trajectories
                and calibrations, for weapons utilised by the force.
              </li>
              <li>
                At the end of the war, Hopper’s request to join the regular Navy
                was refused on grounds of age, but she continued to serve in the
                Navy Reserve, remaining at the Harvard Computation lab until
                1949.{' '}
              </li>
            </ul>
          </section>
          <section id="post-war-contributions">
            <h3>The Pioneer</h3>
            <ul className="info-list">
              <li>
                Hopper moved on to become a senior mathematician in the team
                developing UNIVAC I at the Eckert-Mauchly Computer Corporation.
                This was the first large-scale electronic computer for business
                application on sale in the US.{' '}
              </li>
              <li>
                It was here that Hopper began to recommend the development of a
                new programming language, using English words instead of
                symbols. Although her idea was not welcomed at first.{' '}
              </li>
              <div className="quote">
                <p>
                  “If it's a good idea, go ahead and do it. It is much easier to
                  apologize than it is to get permission.”
                </p>
              </div>
              <li>
                The company was taken over by the Remington Rand corporation,
                and in 1954, Hopper became the company’s first director of
                automatic programming. Here, her first compiler work was done,
                with a program known as the A compiler, and with her department
                releasing some of the first compiler-based programming
                languages, including MATH-MATIC and FLOW-MATIC.
              </li>
              <li>
                Hopper continued to call for human readable programs, which the
                computers would translate into machine code. She became one of
                the core contributors to COBOL, a computer language for data
                processors, but also friendly to humans.
              </li>
              <li>
                Created as extension of the FLOW-MATIC language, with ideas from
                IBM’s CONTRAN, COBOL is an abbreviation for Common Business
                Oriented Language. It went on to become the most widely used
                business language, to date. It even remains the main language
                used in data processing, to this day.
              </li>
              <li>
                Over the course of the 1970s, Hopper was also a great proponent
                for replacing the large centralised systems they had developed,
                with small, distributed computer networks. She developed
                standards for testing computer systems and components, which
                tests were subsumed by the administration that later became the
                National Institute of Standards and Technology.{' '}
              </li>
            </ul>
          </section>
          <section id="retirement-years">
            <h3>Retirement is for Sissies</h3>
            <ul className="info-list">
              <li>
                Hopper, by now a Commander, retired from the Naval Reserve aged
                60, in 1966, as regulations required. But within a year, she had
                been recalled to active duty, retiring again in 1971, and being
                recalled again in 1972, and promoted to captain the following
                year.{' '}
              </li>
              <div className="quote">
                <p>
                  “Don't try to manage people; you manage things; you lead
                  people.”
                </p>
              </div>
              <li>
                In 1983, she was promoted to commodore, remaining on active
                duty, by special approval of congress. The rank of commodore was
                later renamed rear admiral, and Hopper was one of the few women
                in the Navy to hold the admiral rank.{' '}
              </li>

              <li>
                At the time of her final retirement, in 1986, aged 79, she was
                the oldest serving member of the Navy, following a career of
                over 40 years.{' '}
              </li>
              <li>
                She was awarded the Defence Distinguished Service Medal, the
                highest possible decoration conferred by the department of
                defence, for non-combat work.{' '}
              </li>
              <div className="quote">
                <p>
                  “Humans are allergic to change. They love to say, 'We've
                  always done it this way.' I try to fight that. That's why I
                  have a clock on my wall that runs counter-clockwise.”
                </p>
              </div>

              <li>
                This retirement opened Hopper up to further opportunities, and
                she was hired as a full time Principle Corporate Consulting
                Engineer for the Digital Equipment Corporation (DEC), holding
                that position until the time of her death, aged 85, in 1992.{' '}
              </li>
            </ul>
          </section>
          <section id="postscript">
            <h3>An Undeniable Legacy</h3>
            <ul className="info-list">
              <li>
                The Smithsonian Institute’s National Museum of American History
                houses a debugging relic from Hopper’s Harvard team. Working on
                the Mark II computer at the University, in 1947, her associates
                discovered a moth stuck in a relay, and obstructing computer
                operations. This was taped to a log sheet, with the comment
                “First actual case of bug being found” and was later preserved
                as a historical debugging case. Hopper was later credited for
                the term “debugging” taking hold in computing.{' '}
              </li>
              <li>
                Hopper also considered one of her greatest achievements was her
                continuing focus on the education of others. It remained a
                lifelong passion, and when receiving the National Medal of
                Technology in 1991, she said, “If you ask me what accomplishment
                I’m most proud of, the answer would be all the young people I’ve
                trained over the years; that’s more important than writing the
                first compiler.”
              </li>
              <li>
                In 2016 Hopper was posthumously awarded the Presidential Medal
                of Freedom, in recognition of her contributions to the field of
                computer science.{' '}
              </li>

              <li></li>
              <li></li>
            </ul>
          </section>
        </div>
        <div className="divider"></div>
        <div id="footer">
          <p className="bold">
            If you have enjoyed reading about the life of <em>amazing Grace</em>{' '}
            here, please check out the links below for further insights on her
            life and lasting legacy:{' '}
          </p>
          <br />
          <p className="link">
            <a
              href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
              id="tribute-link"
              target="_blank"
            >
              Grace Murray Hopper 1906-1992, Legacy, Innovation and Service,{' '}
            </a>
            Yale News, 2017
          </p>
          <p className="link">
            The{' '}
            <a
              href="https://www.famousscientists.org/grace-murray-hopper/"
              id="tribute-link"
              target="_blank"
            >
              Grace Murray Hopper{' '}
            </a>
            page on famousscientists.org
          </p>
          <p className="link">
            The
            <a
              href="https://en.wikipedia.org/wiki/Grace_Hopper"
              id="tribute-link"
              target="_blank"
            >
              {' '}
              Grace Hopper
            </a>
            page on wikipedia
          </p>
        </div>
      </main>
    </div>
  );
}

export default Tribute;
