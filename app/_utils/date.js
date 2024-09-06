import { toZonedTime } from "date-fns-tz";

export const formatDate = (dateData) => {
  const data = toZonedTime(dateData, "Asia/Tokyo");

  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}.${month < 10 ? "0" + month : month}.${date < 10 ? "0" + date : date}`;
};
