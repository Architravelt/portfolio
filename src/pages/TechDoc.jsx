function TechDoc() {
  return (
    <div>
      <nav id="navbar">
        <header>
          <h2>Hello World Documentation</h2>
        </header>
        <ul>
          <li>
            <a class="nav-link" href="#Introduction">
              Introduction
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Target_Audience">
              Target Audience
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_in_Ruby">
              Hello World in Ruby
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_in_Java">
              Hello World in Java
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_in_JavaScript">
              Hello World in JavaScript
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_Capitalised">
              Hello World Capitalised
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_Counted">
              Hello World Counted
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_Reversed">
              Hello World Reversed
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Hello_World_Word_swap">
              Hello World Word Swap
            </a>
          </li>
          <li>
            <a class="nav-link" href="#Reference">
              Reference
            </a>
          </li>
        </ul>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>
            <h2>Introduction</h2>
          </header>
          <p>
            Hello World! is a phrase that any new programmer will quickly become
            familiar with, used as it is, in many simple introductions to
            programming languages for beginners.{' '}
          </p>
          <p>
            A "Hello, World!" program is a very simple one, usually without any
            inputs, only outputting some version of the phrase.
          </p>
          <p>
            TTHW, AKA <em>Time to Hello World</em>, is a measure of how long it
            will take a user to create a Hello World program, for a given
            language. For some languages, it's a matter of a simple, short
            statement - some of which can be seen below. For other languages,
            more statements, or even software libraries, may be required.{' '}
          </p>
          <p>
            {' '}
            There is also, of course, the question of presentation, and whether
            capitals or punctuation are included. A few examples of how to find,
            enumerate and possibly lose your <em>hello worlds</em>, can also be
            found in this documentation.
          </p>
        </section>
        <section className="main-section" id="Target_Audience">
          <header>
            <h2>Target Audience</h2>
          </header>
          <p>
            This is a general knowledge documentation piece, with the
            recommendation that readers:
          </p>
          <ul>
            <li>Have familiarity with the world wide web</li>
            <li>
              Have an interest in, and some basic knowledge of, programming
              languages
            </li>
            <li>Have some familiarity with programming terminology</li>
            <li>
              Have access to an IDE - an integrated development environment - if
              wishing to run some code
            </li>
          </ul>
          <br />
          <p>
            However if all this seems interesting but a little daunting - or
            gives an appetite for finding out more - the links at the bottom can
            also provide assistance with setting up the necessary environments
            and exploring further.
          </p>
        </section>
        <section className="main-section" id="Hello_World_in_Ruby">
          <header>
            <h2>
              <span className="hello">Hello World</span> in Ruby
            </h2>
          </header>
          <p>
            Creator of Ruby, Yukihiro "Matz" Matsumoto, wanted to make a
            programming language that was very natural and readable for the
            human user. In his own words, by “trying to make Ruby natural, not
            simple,” in a way that mirrors life.
          </p>
          <p>
            {' '}
            Matz also wished for it to be “ a scripting language that was more
            powerful than Perl, and more object-oriented than Python.” <br />
            In fact, Ruby is an object-oriented language where everything is
            treated as an object, even elements commonly considered primitive
            types, like numbers.
          </p>
          <p>In Hello World terms, Ruby allows for a very simple program:</p>
          <div className="code-block">
            <code>puts 'Hello World!'</code>
          </div>
          <p>
            In fact, it even allows the user to quickly create a whole run of
            Hello Worlds:
          </p>
          <div className="code-block">
            <code>{"5.times { puts 'Hello World!' }"}\</code>
          </div>
          <p>
            The command <span className="bold">puts</span> is utilised to print
            something, and then move the cursor to a new line. To stay in the
            same line, the command <span className="bold">print</span> can be
            used instead.
          </p>
        </section>
        <section className="main-section" id="Hello_World_in_Java">
          <header>
            <h2>
              <span className="hello">Hello World</span> in Java
            </h2>
          </header>
          <p>
            The Java programming language is a high level, class based
            object-oriented language, and one of the most popular languages in
            use. The language uses a compiler to translate the code from human
            readable, to computer readable. This means it can be run on any
            platform that support Java, without further need to recompile.{' '}
          </p>
          <p>
            All code written in Java, must be written in a Java class. So this
            means the Hello World program is necessarily a little more complex.
            The class also needs to be saved in a file of the same name, which
            becomes very useful as soon as programs become more intricate. In
            order to run the code without any objects, or instances, a static
            method is required, as in the below example. Void allows the method
            to run, without returning anything. And so our Hello World can be
            printed to the console.
          </p>
          <div className="code-block">
            <code>{'public class Main {'}</code>
            <br />
            <code className="indent-two">
              {'public static void main(String[] args) {'}
            </code>
            <br />
            <code className="indent-four">
              {'System.out.println("Hello World!"); '}
              <span className="comment-string">
                {'// Prints the string to the console.'}
              </span>
            </code>
            <br />
            <code className="indent-two">{'}'}</code>
            <br />
          </div>
        </section>
        <section className="main-section" id="Hello_World_in_JavaScript">
          <header>
            <h2>
              <span className="hello">Hello World</span> in JavaScript
            </h2>
          </header>
          <p>
            JavaScript is an object oriented scripting language. Having
            witnessed the popularity and success of the Java programming
            language, the creators decided to give their new language an
            associated name, to help gain it some attention. <br />
            Whilst the two languages have some commonalities, overall, they have
            different syntaxes, semantics, and use, and should not be considered
            connected.
          </p>
          <p>
            JavaScript can be used as both a back and front-end language, but is
            particularly popular for creating client-side dynamic features on
            webpages. <br />
            Many popular JavaScript libraries and web-frameworks for client-side
            scripting have also been developed, such as JQuery, React, Angular.
          </p>
          <p>
            The JavaScript Hello World program is also delightfully brief.
            Javascript utilises console.log() to print something to the console
          </p>
          <code>console.log("Hello, World!");</code>
        </section>
        <section className="main-section" id="Hello_World_Capitalised">
          <header>
            <h2>
              <span className="hello">Hello World</span> Capitalised
            </h2>
          </header>
          <p>
            Continuing now with JavaScript. There are many handy shortcuts that
            the language provides for repetitive tasks, that it makes no sense
            for a developer to use up their time on. Things like capitalisation,
            or removing unnecessary white space, or accessing part of a word, or
            a sentence.{' '}
          </p>
          <p>
            The simple syntax for changing something to upper case is as
            follows:
          </p>
          <div className="code-block">
            <code>"hello world".toUpperCase()</code>
          </div>
          <p>Or in more detail, as a small program:</p>
          <div className="code-block">
            <code>let capitaliseTheWorld = "Hello World!"</code>
            <br />
            <code>console.log(capitaliseTheWorld.toUpperCase())</code>
            <br />
            <br />
            <code className="output">Output: HELLO WORLD!</code>
          </div>
        </section>
        <section className="main-section" id="Hello_World_Counted">
          <header>
            <h2>
              <span className="hello">Hello World</span> Counted
            </h2>
          </header>
          <p>
            Another such helper method is .length, which will count the length
            of the string in question.
          </p>
          <div className="code-block">
            <code>let countTheWorld = "Hello World!"</code>
            <br />
            <code>console.log(countTheWorld.length)</code>
            <br />
            <br />
            <code className="output">Output: 12</code>
          </div>
        </section>
        <section className="main-section" id="Hello_World_Reversed">
          <header>
            <h2>
              <span className="hello">Hello World</span> Reversed
            </h2>
          </header>
          <p>
            These helper methods can also save no end of time, when utilised in
            functions. <br />
            Here, we can see a very simple function, <em>worldReverse</em>, that
            takes in a string, worldForwards, and returns it reversed, as the
            string worldBackwards.
          </p>
          <p>
            Using a loop, combined with the string method string.charAt(index)
            allows us to access each element of the string, starting from the
            end. <br />
            The elements can then be combined in reverse order, to create our
            new worldBackwards string.
          </p>
          <p>
            Here, we use a simple += to keep adding to the reversed string. But,
            of course, there's also a method for that, shown in the next
            example.
          </p>
          <div className="code-block">
            <code>{'function worldReverse (worldForwards) {'}</code>
            <br />
            <br />
            <code className="indent-two">let worldBackwards = "";</code>
            <br />
            <br />
            <code className="indent-two">
              {'for (let i=worldForwards.length-1; i>=0; i--) {'}
            </code>
            <br />
            <code className="indent-four">
              worldBackwards += worldForwards.charAt(i);
            </code>
            <br />
            <code className="indent-two">{'}'}</code>
            <br />
            <br />
            <code className="indent-two">return worldBackwards;</code>
            <br />
            <code>{'}'}</code>
            <br />
            <br />
            <code>let worldString = "Hello World! Time to turn around!"</code>
            <br />
            <code>console.log(worldReverse(worldString));</code>
            <br />
            <br />
            <code className="output">
              output: !dnuora nrut ot emiT !dlroW olleH
            </code>
          </div>
        </section>
        <section className="main-section" id="Hello_World_Word_Swap">
          <header>
            <h2>
              <span className="hello">Hello World</span> Word Swap
            </h2>
          </header>
          <p>
            {' '}
            In this example, we combine a few different simple methods, to get
            our output.
          </p>
          <p>
            As with the example above, we use a loop, to access all of our
            elements in reverse. But as we want to swap the words, but not the
            characters, we need to take a few more steps as well.
          </p>
          <p>
            The array method .split() allows us to separate the string every
            time there is a space, so splitting all the words into an array.{' '}
            <br />
            We can then use the loop to iterate over the array words.
          </p>
          <p>
            Starting from the last word, it's a simple case of using .concat()
            to build up the new string, adding back the spaces between the
            words, that the .split() method removed. <br />
            Then a trimEnd() removes the extra space from the end of the
            sentence, before we return it.
          </p>
          <p>
            With the string methods, it is important to remember that strings
            are immutable. <br />
            This means that they hold on to their original form, unless
            explicitly told otherwise. If we don't save the original string,
            along with each element we add to it, we will end up just returning
            the original string, which in this case would be "". <br />
            This is why we use worldOutput = worldOutput.concat(), instead of
            simply worldOutput.concat().
          </p>
          <div className="code-block">
            <code className="space-below">
              {'function worldWordSwap (worldInput) {'}
            </code>
            <br />
            <br />
            <code className="indent-two">let worldOutput = "";</code>
            <br />
            <code className="indent-two space-below">
              let worldArray = worldInput.split(" ");
            </code>
            <br />
            <br />
            <code className="indent-two">
              {'for (let i=worldArray.length-1; i>=0; i--) {'}
            </code>
            <br />
            <code className="indent-four">
              worldOutput = worldOutput.concat(worldArray[i] + " ");
            </code>
            <code className="indent-two space-below">{'}'}</code>
            <br />
            <br />
            <code className="indent-two">return worldOutput.trimEnd();</code>
            <br />
            <code className="space-below">{'}'}</code>
            <br />
            <br />
            <code>let helloString = "Hello World! How are you today?";</code>
            <br />
            <code>console.log(worldWordSwap(helloString));</code>
            <br />
            <br />
            <code className="output">
              Output: today? you are How World! Hello
            </code>
          </div>
        </section>
        <section className="main-section" id="Reference">
          <header>
            <h2>Reference</h2>
          </header>
          <ul>
            <li>
              For more on "Hello, World!" check out good old{' '}
              <a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program">
                Wikipedia
              </a>
              , with links to <em>Hello Worlds</em> in many many programming
              languages.
            </li>
            <li>
              Further information on the Ruby programming language can be found{' '}
              <a href="https://www.ruby-lang.org/en/about/">here</a>
            </li>
            <li>
              For information on JavaScript, see MDN documentation{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                here
              </a>
            </li>
            <li>
              For information on Java, see the documentation{' '}
              <a href="https://dev.java/">here</a>
            </li>
          </ul>
          <p className="small-print">
            [disclaimer] Worldly thoughts in this documentation are taken from
            the meanderings of my brain, combined with the voice of the
            universe, aka Google. Factual verification scant and questionable.
            Follow at your peril.
          </p>
        </section>
      </main>
    </div>
  );
}

export default TechDoc;
