import React, { useEffect } from "react";
import Axios from "axios";

export function Home() {
  let results: string = "";
  useEffect(() => {
    Axios.get(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=821109&date=10-05-2021"
    ).then(
      (response) => {
        results = response.data.sessions[0].vaccine;
      },
      () => {}
    );
  }, [results]);
  return (
    <div>
      <div>Vaccine Tracker</div>
      <div>
        <input type="textbox"></input>
      </div>
      <div>
        <input type="textbox"></input>
      </div>
      <div>
        <button>Search</button>
      </div>
      <div>{results}</div>
    </div>
  );
}
