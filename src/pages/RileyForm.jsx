import PageNav from '../components/PageNav';
import styles from './RileyForm.module.css';

function RileyForm() {
  return (
    <div className={styles.rileyForm}>
      <h1 className={styles.rileyFormText}>The Life of Riley Survey Form</h1>
      <p className={`${styles.description} ${styles.rileyFormText}`}>
        Please fill out this form, to help us understand who exactly is Riley,
        what is this life he/she/them/it is living, and how we can get us one.
      </p>
      <form id="survey-form" className={styles.surveyForm}>
        <fieldset>
          <label htmlFor="name" id="name-label">
            Name:{' '}
            <input
              id="name"
              className={styles.fullWidth}
              type="text"
              placeholder="e.g. Icarus Reby"
              required
            />
          </label>
          <label htmlFor="email" id="email-label">
            Email:{' '}
            <input
              id="email"
              className={styles.fullWidth}
              type="email"
              pattern="[a-z0-9]{8,}"
              placeholder=" e.g.icarus_flies@email.com"
              required
            />
          </label>
          <label htmlFor="number" id="number-label">
            On a scale of 1 to 10, where do you feel your life sits, on the
            Riley measure?{' '}
            <input
              id="number"
              className={styles.fullWidth}
              type="number"
              min="1"
              max="10"
              placeholder="from 1-10"
            />
          </label>
        </fieldset>
        <fieldset className={styles.dropdown}>
          <label htmlFor="dropdown">
            <select id="dropdown" className={styles.fullWidth}>
              <option>Choose one option</option>
              <option>A. More wishes</option>
              <option>B. Endless wealth</option>
              <option>C. Eternal youth and beauty</option>
              <option>D. World peace</option>
            </select>
          </label>
          <p>
            If your genie wish was option D. please confirm below if this is
            your actual answer, or the thing that you thought you ought to say
          </p>
          <label htmlFor="honest-truth" className={styles.inline}>
            <input name="truth" type="radio" id="honest-truth" value="truth" />{' '}
            Yes, it's the honest truth
          </label>
          <label htmlFor="outright-lie" className={styles.inline}>
            <input name="truth" type="radio" id="outright-lie" value="lie" />{' '}
            No, it's an outright lie
          </label>
        </fieldset>
        <fieldset>
          <p>What things would you like more of in your life?</p>
          <label htmlFor="check-sleep" className={styles.inline}>
            <input id="check-sleep" type="checkbox" value="1" /> More sleep
          </label>
          <label htmlFor="check-belongings" className={styles.inline}>
            <input id="check-belongings" type="checkbox" value="2" /> More
            belongings
          </label>
          <label htmlFor="check-quiet" className={styles.inline}>
            <input id="check-quiet" type="checkbox" value="3" /> More quiet
          </label>
          <label htmlFor="check-sun" className={styles.inline}>
            <input id="check-sun" type="checkbox" value="4" /> More sunshine
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="comments">
            Describe in 500 words or less, your dream life of Riley
            <textarea
              id="comments"
              className={styles.fullWidth}
              rows="4"
              cols="35"
            ></textarea>
          </label>
        </fieldset>
        <div className={styles.rileyButtons}>
          <input id="submit" type="submit" />
          <PageNav />
        </div>
      </form>
    </div>
  );
}

export default RileyForm;
