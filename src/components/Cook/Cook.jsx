/* eslint-disable react/prop-types */
function Cook({ item, index , handleCooking}) {
  const { title, preparing_time, calories } = item;

  return (
    <tr className="bg-gray-100">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button onClick={() => handleCooking(item)} className="btn btn-accent bg-primaryGreen rounded-full font-medium">
          Preparing
        </button>
      </td>
    </tr>
  );
}

export default Cook;
