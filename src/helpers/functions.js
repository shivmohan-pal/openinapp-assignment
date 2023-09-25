export const NoOfCatagory = (data, catagoryKey, catagoryValue) =>// return the field where the key matches and it's value
  data?.filter((key) => key[catagoryKey] === catagoryValue).length;

export const DataBetweenDates = (data, startDate, endDate) =>//  eg: startDate = 'Jan 1, 2020' eg endDate = 'Mar 29, 2020'
  data?.filter(
    (obj) =>
     // Convert all date values to javascript dates using new Date(value)
     // Get the number of milliseconds using getTime() then Compare the milliseconds values
      new Date(obj.date).getTime() >= new Date(startDate).getTime() &&
      new Date(obj.date).getTime() <= new Date(endDate).getTime()
  );


const percentage = (number,total) => Math.round((number/total)*100);

export const chartDataPercentage = (...args) =>{
  const sum = [...args].reduce((acc,cur)=>acc+cur,0);
  return  [...args].map((arg)=>percentage(arg,sum));
}