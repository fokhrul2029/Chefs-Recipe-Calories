/* eslint-disable react/prop-types */
function Result({ items }) {
  const calories = items.reduce((acc, cur) => acc + cur.calories, 0);
  const preparing_time = items.reduce(
    (acc, cur) => acc + cur.preparing_time,
    0
  );
  return (
    <tr className="text-primaryColor font-medium">
      <th></th>
      <td></td>
      <td>Total Time = {preparing_time} minutes</td>
      <td>Total Calories = {calories} calories</td>
    </tr>
  );
}

export default Result;
