import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  // const [deleteallpehle,deleteallbdmein] = ();

  let add = () => {
    list.push(text);
    setList([...list]);
  };

  let delall = () => {
    setList([]);
  };

  let del = (i) => {
    let abc = list.filter((x, o) => {
      // console.log(x, o);
      return o != i;
    });
    // console.log(abc);
    setList(abc);
  };

  let edit = (i) => {
    // console.log(i);
    console.log(list[i]);
    var userInp = prompt();
    list[i] = userInp;
    // console.log(list);
    setList([...list]);
  };
  // let del = () => {

  // }

  return (
    <div className="Main">
      <p className="fw-bold display-1 text-center">ToDo App</p>
      <div className="w-100 text-center">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border border-dark border-2 p-2 my-3 rounded"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={add}
          className="btn btn-warning ms-2 fw-semibold px-4 py-2 "
        >
          Add
        </button>
        <button
          onClick={delall}
          className="btn btn-warning ms-2 fw-semibold px-4 py-2 "
        >
          Delete All
        </button>
      </div>

      <div className="w-100 border border-bottom my-2"></div>

      <div className="">
        {list.map((x, i) => (
          <div key={i} className="d-flex justify-content-center">
            <ul>
              <li key={i}>
                {x}{" "}
                <button
                  className="btn btn-warning ms-2 fw-semibold px-4 py-2"
                  onClick={() => del(i)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning ms-2 fw-semibold px-4 py-2"
                  onClick={() => edit(i)}
                >
                  Edit
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
