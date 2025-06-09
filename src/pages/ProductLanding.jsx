function ProductLanding() {
  return (
    <>
      <header id="header">
        <nav id="nav-bar">
          <img
            id="header-img"
            src="https://www.canva.com/design/DAFyXSCxAPg/tnw8kWGlBsrjAdLGjmdCXg/screen"
            alt="group of decorative bottles"
          />
          <div className="nav-titles">
            <h2 className="nav-name">{"Jeanie's Apothecary"}</h2>
            <h3 className="nav-quote">
              If things do not turn out as we wish, we should wish for them as
              they turn out
            </h3>
            <ul className="nav-list">
              <li>
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#Packages">
                  Packages
                </a>
              </li>
              <li>
                <a className="nav-link" href="#Registration">
                  Join us
                </a>
              </li>
              <li>
                <a className="nav-link" href="#Testimonials">
                  Testimonals
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section id="About">
          <h2 className="about-h2"></h2>
          <div className="about-box">
            <div className="about-text">
              <p className="about-first">
                Jeanie utilises skills, passed through her family for
                generations, in consort with rare expertise developed with
                ordinators from the realm of djinns, to harness the purest genie
                wish fulfilment tools.{' '}
              </p>
              <p>
                Every unique bottle features enchantments knitted into the
                hand-blown glass, by master maginators, each a high trained
                expert in revelincture aspinationum. This ensures no genie
                cruelty or entrapments are involved in the creation of any of
                our finely augured vessels.{' '}
              </p>
              <p>
                In addition, the stopper release system, with closures available
                in a range of beautiful, jinni-sculpted alloys, employs{' '}
                {'Jeanie’s'} patented entranced syphon technology, to ensure the
                decantation can only be triggered by the legitimate owner, and
                in careful fulfilment of the chosen apothecary package.{' '}
              </p>
              <p>
                Please see our packages below, for inklings of the desires you
                no longer need only dream of.
              </p>
            </div>
            <div className="about-video">
              <div className="video-box">
                <iframe
                  id="video"
                  src="https://www.youtube.com/embed/HyVErp-YQQU"
                  title="Inside A Master Glass Blower&#39;s Studio Making Unique Works Of Art | Architectural Digest"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="about-video-caption">
                A dazzling demonstration from master glass blower Deborah
                Czeresko
              </p>
            </div>
          </div>
        </section>
        <section id="Packages">
          <h2>Packages</h2>
          <div className="package-box">
            <div className="package">
              <div className="package-img-div">
                <img
                  className="package-img"
                  src="https://image.invaluable.com/housePhotos/houseofwhitley/44/733944/H20767-L306226804.jpg"
                  alt="two rectangular glass bottles with decorative stoppers"
                />
              </div>
              {/* <!-- <div className="package-name">
            <h4>Package 1.</h4> 
            <p>If Wishes Were Fishes we'd all swim in riches</p>
          </div> --> */}
              <div className="package-details">
                <p className="detail-italic">The lucky dip option</p>
                <p className="detail-bold">Package 1 includes: </p>
                <ul className="package-list">
                  <li>Lucky dip wish fulfilment</li>
                  <li>Buy one get one free</li>
                  <li>Complimentary bottle of prosecco</li>
                </ul>
                <p className="detail-cost">£10,000</p>
                <a className="detail-terms" href="#Terms">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="package">
              <div className="package-img-div">
                <img
                  className="package-img"
                  src="https://image.invaluable.com/housePhotos/jeffreysevans/91/552791/H4034-L61711379.jpg"
                  alt="Czech glass perfume bottles"
                />
              </div>
              {/* <!-- <div className="package-name">
            <h4>Package 2.</h4>
            <p>We often confuse what we wish for with what is</p>
          </div> --> */}
              <div className="package-details">
                <p className="detail-italic">Our most popular package</p>
                <p className="detail-bold">Package 2 includes: </p>
                <ul className="package-list">
                  <li>A new wish every five years</li>
                  <li>Pre-wish consultancy service</li>
                  <li>Exclusive Genie timeshare selection</li>
                </ul>
                <p className="detail-cost">£200,000 a year </p>
                <a className="detail-terms" href="#Terms">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="package">
              <div className="package-img-div">
                <img
                  className="package-img"
                  src="https://image.invaluable.com/housePhotos/jeffreysevans/53/670353/H4034-L206230292.jpg"
                  alt="Czech glass perfume bottles"
                />
              </div>
              {/* <!-- <div className="package-name">
            <h4>Package 3.</h4>
            <p>...everything is relative, but wishes. Tell me what you want, and I'll tell
              you who you are</p> 
          </div>--> */}
              <div className="package-details">
                <p className="detail-italic">The gift of a lifetime!</p>
                <p className="detail-bold">Package 3 includes: </p>
                <ul className="package-list">
                  <li>Unlimited wishes</li>
                  <li>Complimentary advice service</li>
                  <li>Lifetime wish management service</li>
                </ul>
                <p className="detail-cost">£ One mortal human soul</p>
                <a className="detail-terms" href="#Terms">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="Registration">
          <h2>Join us</h2>
          <div className="form-box">
            <p>
              Intrigued, but undecided? Please add your email below to register
              your details for further offers and updates, and to keep up with
              our news and developments
            </p>
            <form id="form" action="https://www.freecodecamp.com/email-submit">
              <input
                id="email"
                placeholder="e.g. christie.aguilera@bottlemail.com"
                type="email"
                size="35"
                name="email"
              ></input>
              <br />
              <input id="submit" type="submit" value="Register" />
            </form>
          </div>
        </section>

        <section id="Testimonials">
          <div className="testimonials-div">
            <h2>Testimonials</h2>
            <div className="background-box">
              <div className="testimonial-text">
                <div className="testimonial-card testimonial-left">
                  <p className="testimonial-quote ">
                    "For years I filled a notebook with beautiful lies and
                    impossible hopes. When I found a genie, I simply said, I
                    wish it were all true"
                    <span className="testimonial-source">
                      {' '}
                      T.R. Darling, Fez{' '}
                    </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-right">
                  <p className="testimonial-quote ">
                    "Holy smokes!"{' '}
                    <span className="testimonial-source ">
                      {' '}
                      Ala-al-Din, Nova Scotia{' '}
                    </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-left">
                  <p className="testimonial-quote ">
                    "Everything I could wish for"
                    <span className="testimonial-source">
                      Angel Delight, Croydon{' '}
                    </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-right">
                  <p className="testimonial-quote">
                    "The Gods have finally listened to my everlasting pleas. I
                    hit the jackpot. You're going to fulfil all my wishes! "
                    <span className="testimonial-source">Varun, Kerala </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-left">
                  <p className="testimonial-quote">
                    "Once you open the top on this thing, the genie won't get
                    back in the bottle"
                    <span className="testimonial-source">
                      Mark, Philadelphia{' '}
                    </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-right">
                  <p className="testimonial-quote">
                    "Dandelions are the Genies of the plant world."
                    <span className="testimonial-source">
                      Devon Voyles, Zurich{' '}
                    </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-left">
                  <p className="testimonial-quote">
                    "You can't blame that genie for hating everyone. Remember
                    how you felt, shut in that dungeon"{' '}
                    <span className="testimonial-source">Sophie, Calgary </span>
                  </p>
                </div>
                <div className="testimonial-card testimonial-right">
                  <p className="testimonial-quote">
                    "People's desires were easy to read, clear as bottled glass
                    and just as sturdy."{' '}
                    <span className="testimonial-source">Jared, Pune </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="footer-references">
          <h4 className="footer">References & Sources</h4>
          <ul className="references">
            {/* <!-- <li>Navigation Bar quotation: Aristotle</li>
      <li>Package 1 quotation: Old proverb</li>
      <li>Package 2 quotation: Neil Gaiman, <em>Mirror Man</em></li>
      <li>Package 3 quotation: Anton chekov, <em>Selected Stories</em></li> --> */}
            <li></li>
            <li>Package images: www.invaluable.com</li>
            <li>Testimonials image: Gérard Griffay on Unsplash.com</li>
            <li>Testimonial 4. Time Crawlers, Varun Sayal</li>
            <li>Testimonial 5. The Secret History of Twin Peaks, Mark Frost</li>
            <li>Testimonial 7. Castle in the Air, Diana Wynne Jones</li>
            <li>
              Testimonial 8.{' '}
              <span>The Djinn Falls in Love & Other Stories,</span> ed. Marvesh
              Murad & Jared Shurin
            </li>
          </ul>
        </div>
        <div className="footer-terms">
          <h4 id="Terms">Terms & Conditions</h4>
          <p className="mauve left">
            Be careful what you wish for. Be careful what
          </p>
          <p className="purple left">
            you wish for. Be careful what you wish for. Be{' '}
          </p>
          <p className="pink right">
            {' '}
            careful what you wish for. Be careful what you{' '}
          </p>
          <p className="pinkish ">
            {' '}
            wish for. Be careful what you wish for. Be careful
          </p>
          <p className="mauve left">
            {' '}
            what you wish for. Be careful what you wish for.
          </p>
          <p className="purple">
            {' '}
            Be careful what you wish for. Be careful what{' '}
          </p>
          <p className="pink left">you wish for. Be careful what you wish </p>
          <p className="purple">for. Be careful what you wish for. Be.</p>
          <p className="mauve"> careful what you wish </p>
          <p className="pinkish right"> for. Be careful what</p>
          <p className="pink right">You wish for be careful</p>
          <p className="pinkish"> what you wish for. Be </p>
          <p className="purple"> careful what you </p>
          <p className="mauve"> wish for. Be care</p>
          <p className="pinkish left">ful what you</p>
          <p className="pink left">wish for.</p>
          <p className="mauve">Be care</p>
          <p className="pinkish right">ful what</p>
          <p className="purple">you wish</p>
          <p className="pink right">for. Be</p>
          <p className="pinkish">careful</p>
          <p className="mauve">what</p>
          <p className="pink left">you</p>
          <p className="pinkish left">wish</p>
          <p className="pink">for.</p>
        </div>
      </footer>
    </>
  );
}

export default ProductLanding;
