/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function Cooking({ item, index }) {
  const { title, preparing_time, calories } = item;
  return (
    <tr className="bg-gray-100">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
}

export default Cooking;
