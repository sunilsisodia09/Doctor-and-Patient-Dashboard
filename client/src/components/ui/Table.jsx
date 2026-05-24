const Table = ({
  columns = [],
  data = [],
}) => {
  return (
    <div className="overflow-x-auto bg-slate-900 rounded-2xl border border-slate-800">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-left p-4 text-pink-500"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-800 hover:bg-slate-800"
            >
              {Object.values(row).map(
                (value, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-4"
                  >
                    {value}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;