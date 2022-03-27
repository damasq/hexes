import styles from './App.module.scss';
import { Sandbox } from './modules/test/Sandbox';


function App() {
  let array = [
    {
      location: "Стадион",
      date: "1 июня",
      time: "01:00"
    },
    {
      location: "Арена",
      date: "2 июня",
      time: "02:00"
    },
    {
      location: "Стадион",
      date: "3 июня",
      time: "03:00"
    },
    {
      location: "ДК",
      date: "4 июня",
      time: "04:00"
    },
    {
      location: "Стадион",
      date: "5 июня",
      time: "05:00"
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
