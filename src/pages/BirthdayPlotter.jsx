import styles from './BirthdayPlotter.module.css';

import { useState } from 'react';

const months = [
  { name: 'January', length: 31 },
  { name: 'February', length: 29 },
  { name: 'March', length: 31 },
  { name: 'April', length: 30 },
  { name: 'May', length: 31 },
  { name: 'June', length: 30 },
  { name: 'July', length: 31 },
  { name: 'August', length: 31 },
  { name: 'September', length: 30 },
  { name: 'October', length: 31 },
  { name: 'November', length: 30 },
  { name: 'December', length: 31 },
];

const initialBirthdays = [
  { name: 'Rachel', month: 'February', date: 24, icon: '⭐️' },
  { name: 'Luke', month: 'March', date: 3, icon: '🎂' },
  { name: 'Ahmed', month: 'May', date: 17, icon: '🥳' },
  { name: 'Rula', month: 'July', date: 22, icon: '🪁' },
  { name: 'Kiki', month: 'August', date: 1, icon: '🦑' },
  { name: 'Maeve', month: 'December', date: 14, icon: '🎁' },
  { name: 'Sai', month: 'April', date: 29, icon: '🍭' },
];

export default function BirthdayPlotter() {
  const [showAddBirthdayForm, setShowAddBirthdayForm] = useState(false);

  function handleAddBirthdayForm() {
    setShowAddBirthdayForm((show) => !show);
  }

  return (
    <div className={styles.birthdayApp}>
      <Calendar
        onShowAddBirthday={handleAddBirthdayForm}
        showAddBirthdayForm={showAddBirthdayForm}
        setShowAddBirthdayForm={setShowAddBirthdayForm}
      />
    </div>
  );
}

function Calendar({
  onShowAddBirthday,
  showAddBirthdayForm,
  setShowAddBirthdayForm,
}) {
  const [birthdays, setBirthdays] = useState(initialBirthdays);

  function handleNewBirthday(newBirthday) {
    setBirthdays((birthdays) => [...birthdays, newBirthday]);
    setShowAddBirthdayForm(false);
  }

  return (
    <div>
      <div className={styles.birthdayHeader}>
        <h1>Birthday Plotter</h1>
        {!showAddBirthdayForm && (
          <button className={styles.birthdayBtnAdd} onClick={onShowAddBirthday}>
            Add a Birthday
          </button>
        )}
      </div>

      {showAddBirthdayForm && (
        <div>
          <FormAddBirthday
            onShowAddBirthday={onShowAddBirthday}
            onAddNewBirthday={handleNewBirthday}
          />
        </div>
      )}

      <div className={styles.calendar}>
        {months.map((month, index) => (
          <Month month={month} key={index} birthdays={birthdays} />
        ))}
      </div>
    </div>
  );
}

function Month({ month, birthdays }) {
  return (
    <div className={styles.month}>
      <div className={styles.monthHeader}>
        <h3>{month.name}</h3>
      </div>
      <div className={styles.birthdays}>
        {birthdays.map(
          (birthday) =>
            birthday.month === month.name && (
              <Birthday
                icon={birthday.icon}
                name={birthday.name}
                date={birthday.date}
                key={birthday.name}
              />
            )
        )}
      </div>
    </div>
  );
}

function Birthday({ icon, name, date }) {
  return (
    <p className={styles.birthdayText}>
      {icon}
      <span>
        {date === 1 || date === 21 || date === 31
          ? date + 'st '
          : date === 2 || date === 22
          ? date + 'nd '
          : date === 3 || date === 23
          ? date + 'rd '
          : date + 'th '}
      </span>
      {name}
    </p>
  );
}

function FormAddBirthday({ onShowAddBirthday, onAddNewBirthday }) {
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [icon, setIcon] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !month || !date || !icon) {
      alert('🗓️ Please fill all fields!');
      return;
    }

    const newBirthday = {
      name,
      month,
      date,
      icon,
    };

    onAddNewBirthday(newBirthday);
  }

  return (
    <form className={styles.addBirthdayForm} onSubmit={handleSubmit}>
      <div className={styles.birthdayFormDetails}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Marilyn Monroe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={styles.birthdayFormSpace}>
          <label>Month: </label>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value=""></option>
            {months.map((month) => (
              <option key={month.name} value={month.name}>
                {month.name}
              </option>
            ))}
          </select>

          <label> Date: </label>
          <input
            type="number"
            min={1}
            max={
              month === 'February'
                ? 29
                : month === 'April' ||
                  month === 'June' ||
                  month === 'September' ||
                  month === 'November'
                ? 30
                : 31
            }
            value={date}
            onChange={(e) => setDate(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label>Icon: </label>
          <select value={icon} onChange={(e) => setIcon(e.target.value)}>
            <option value=""></option>
            <option value={'🥳'}>🥳</option>
            <option value={'🎂'}>🎂</option>
            <option value={'🎁'}>🎁</option>
            <option value={'⭐️'}>⭐️</option>
            <option value={'🍭'}>🍭</option>
            <option value={'🪁'}>🪁</option>
            <option value={'🦑'}>🦑</option>
            <option value={'🍀'}>🍀</option>
            <option value={'💝'}>💝</option>
            <option value={'🧞‍♂️'}>🧞‍♂️</option>
          </select>
        </div>
      </div>
      <div
        className={styles.birthdayFormButtonCancel}
        onClick={onShowAddBirthday}
      >
        <button>❌</button>
      </div>
      <div className={styles.birthdayFormButton}>
        <button type="submit">Add Birthday</button>
      </div>
    </form>
  );
}
