import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
let tableData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  let [sortBy, setSortBy] = useState("");
  let [tableView, setTableView] = useState([]);
  let printTabel = (data) => {
    let abc = data.map((ele) => {
      return (
        <tr>
          <td>{ele.date}</td>
          <td>{ele.views}</td>
          <td>{ele.article}</td>
        </tr>
      );
    });
    setTableView(abc);
  };
  useEffect(() => {
    if (sortBy) {
      if (sortBy === "by-date") {
        tableData.sort((a, b) => {
          let date1 = new Date(a.date);
          let date2 = new Date(b.date);

          if (date1 > date2) {
            return -1;
          } else {
            return 1;
          }
        });
        printTabel(tableData);
      } else if (sortBy === "by-views") {
        tableData.sort((a, b) => {
          return b.views - a.views;
        });
        printTabel(tableData);
      }
    } else {
      printTabel(tableData);
    }
  }, [sortBy]);
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button
        type="button"
        onClick={(e) => {
          setSortBy("by-date");
        }}
      >
        Sort by Date
      </button>
      <button
        type="button"
        onClick={(e) => {
          setSortBy("by-views");
        }}
      >
        Sort by Views
      </button>
      <table>
        <thead>
          <th>Dates</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>{tableView}</tbody>
      </table>
    </div>
  );
}

export default App;
