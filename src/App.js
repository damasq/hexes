import styles from './App.module.scss';
import { Sandbox } from './modules/test-no-formula/Sandbox';
// import { Sandbox } from './modules/vh/Sandbox';


function App() {
  let array = [
    {
      location: "Стадион",
      date: {
        day: 1,
        month: "июня",
      },
      time: "01:00",
      rival_1: "Соперник №1",
      rival_2: "Соперник №2"
    },
    {
      location: "Арена",
      date: {
        day: 2,
        month: "июня",
      },
      time: "02:00",
      rival_1: "Соперник №3",
      rival_2: "Соперник №4"
    },
    {
      location: "Стадион",
      date: {
        day: 3,
        month: "cenyujik",
      },
      time: "03:00",
      rival_1: "Соперник №5",
      rival_2: "Соперник №6"
    },
    {
      location: "ДК",
      date: {
        day: 4,
        month: "июня",
      },
      time: "04:00",
      rival_1: "Соперник №7",
      rival_2: "Соперник №8"
    },
    {
      location: "Стадион",
      date: {
        day: 5,
        month: "июня",
      },
      time: "05:00",
      rival_1: "Соперник №9",
      rival_2: "Соперник №10"
    }
  ]

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.container}>
        <Event />
      </div> */}
      <Sandbox array={array} />
    </div>
  );
}

export default App;
