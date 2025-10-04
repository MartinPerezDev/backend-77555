import moment from "moment";

const calculateDays = (newBirthday) => {

  const now = moment();
  const birthDay = moment(newBirthday, "DD-MM-YYYY");

  const days = now.diff( birthDay, "days" );

  return `Desde que naciste hasta hoy, pasaron: ${days} dias.`
}

console.log( calculateDays("06/04/2006") );