import Axios from "axios";

import { requestPayload } from "../Interfaces/payload";

export async function getVaccineResults(values: requestPayload) {
  const currentDate = new Date().toDateString();
  const dateArray = currentDate.split(" ");
  const dateInFormat = formatDate(dateArray);
  return await Axios.get(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${values.pincode}&date=${dateInFormat}`
  );
}

function formatDate(dateArray: string[]) {
  let month = "";
  switch (dateArray[1]) {
    case "January":
      month = "01";
      break;
    case "February":
      month = "02";
      break;
    case "March":
      month = "03";
      break;
    case "April":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "Jun":
      month = "06";
      break;
    case "July":
      month = "07";
      break;
    case "August":
      month = "08";
      break;
    case "September":
      month = "09";
      break;
    case "October":
      month = "10";
      break;
    case "November":
      month = "11";
      break;
    case "December":
      month = "12";
      break;
  }
  return dateArray[2] + month + dateArray[3];
}
