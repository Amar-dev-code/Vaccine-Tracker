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
    case "Jan":
      month = "01";
      break;
    case "Feb":
      month = "02";
      break;
    case "Mar":
      month = "03";
      break;
    case "Apr":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "Jun":
      month = "06";
      break;
    case "Jul":
      month = "07";
      break;
    case "Aug":
      month = "08";
      break;
    case "Sep":
      month = "09";
      break;
    case "Oct":
      month = "10";
      break;
    case "Nov":
      month = "11";
      break;
    case "Dec":
      month = "12";
      break;
  }
  return dateArray[2]+ "-"+month+"-" + dateArray[3];
}
