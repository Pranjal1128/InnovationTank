import React from "react";
import "./AudienceRanking.css";
import { useTable, useSortBy, usePagination } from "react-table";
import { audienceRankingData } from "../UserProfile/utils";

const columns = [
  {
    Header: "Rank",
    accessor: "rank",
  },
  {
    Header: "Name",
    accessor: "name",
    disableSortBy: true,
  },
  {
    Header: "Profit",
    accessor: "profit",
  },
  {
    Header: "Total",
    accessor: "total",
  },
];

const AudienceRanking = () => {
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
      data: audienceRankingData,
      initialState: { pageSize: 10 },
    },
    useSortBy,
    usePagination
  );
  return (
    <div className="audience-ranking">
      <h1>Ranking Page</h1>

      <div className="audience-ranking-table">
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
    </div>
  );
};

export default AudienceRanking;
