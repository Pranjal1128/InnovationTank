import { useState } from "react";
import "./UserProfile.css";
import { Data, generateRandomColor, tableData } from "./utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useTable, useSortBy, usePagination } from "react-table";

Chart.register(...registerables);
ChartJS.register(ArcElement, Tooltip, Legend);

const columns = [
  {
    Header: "S.NO. ",
    accessor: "sno",
    disableSortBy: true,
  },
  {
    Header: "Startups",
    accessor: "startup",
    disableSortBy: true,
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Percent",
    accessor: "percent",
  },
  {
    Header: "Multiplier",
    accessor: "multiplier",
    disableSortBy: true,
  },
  {
    Header: "Curr_Worth",
    accessor: "curr_worth",
  },
];

const UserProfile = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: generateRandomColor(Data.length),
        hoverOffset: 4,
      },
    ],
  });

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex },
    pageCount,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="user-profile">
      <h1>Your Profile</h1>
      <div className="user-profile-chart-container">
        <div className="doughnut-chart">
          <Doughnut options={{ responsive: true }} data={chartData} />
        </div>
        <div className="bar-chart">
          <Bar options={{ maintainAspectRatio: false }} data={chartData} />
        </div>
      </div>

      <div className="user-profile-table">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span>{column.isSortedDesc ? "↑" : "↓"}</span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btn-container">
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Prev
        </button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>

      <div className="user-profile-details">
        <div>
          <p>Final Worth - 34$</p>
        </div>
        <div>
          <p>money invested - 34$</p>
          <p>Total Stocks - 34$</p>
        </div>
        <div>
          <p className="profit">Profit - 34$</p>
          <p className="loss">Loss - 34$</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
