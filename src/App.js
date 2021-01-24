//1. import counter component

import Counter from "./Components/Counter";
import Switch from "./Components/Switch";
import Votes from "./Components/Votes";
import Weather from "./Components/Weather";
import Quotes from "./Components/Quotes";

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [weatherList, setWeatherList] = useState([
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ]);
  const [quotesList, setQuotesList] = useState([]);

  // {
  //   author: "Nelson Mandela",
  //   text: "It always seems impossible until it’s done.",
  //   date: "2001"
  // },
  // {
  //   author: "Yoda",
  //   text: "Do. Or do not. There is no try.",
  //   date: "A long time ago"
  // },
  // { author: "Bugs Bunny", text: "What's up, doc?" }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotesList(data);
      });
  }, []);

  return (
    <div className="App">
      {weatherList.map((wx) => (
        <Weather
          key={wx.time}
          time={wx.time}
          tempF={wx.highF}
          conditions={wx.conditions}
        />
      ))}

      {/* <Weather time= "Today" conditions="Overcast" tempF={28}/> */}
      <Counter />
      <Switch />
      <Votes />
      {quotesList.map((ql) => (
        <Quotes
          key={ql.text}
          text={ql.text}
          author={ql.author}
          date={ql.date}
        />
      ))}
      {/* 2.insert counter component*/}
      {/* <Quotes text= "It always seems impossible until it's done" author = "Nelson Mendela" date = "2001"/>
      <Quotes text= "Do. Or do not. There is no try." author = "Yoda" date = "A long time ago..."/>
      <Quotes text= "What's up Doc" author = "Bugs Bunny" date /> */}
    </div>
  );
}
