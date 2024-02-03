import React, { useEffect } from "react";
import "./AudienceRanking.css";
import { useTable, useSortBy, usePagination } from "react-table";
import { audienceRankingData } from "../UserProfile/utils";
import { backend_url } from "../../config";
import { useState } from "react";
import axios from "axios";




// Function to fetch audience ranking
const getAudienceRanking = async (pageSize = 10, pageNumber = 1) => {
  try {
    const response = await axios.get(`${backend_url}/portfolios/audienceRanking`, {
      params: {
        pageSize,
        pageNumber,
      },
    });
    return response.data; // Assuming the response contains the ranking data
  } catch (error) {
    console.error('Error fetching audience ranking:', error.message);
    throw error;
  }
};

// Function to fetch current user's rank
const getCurrUserRank = async (userId) => {
  try {
  
    const response = await axios.get(`${backend_url}/portfolios/currUserRank?userId=${userId}`);
    return response.data; // Assuming the response contains the user's rank data
  } catch (error) {
    console.error('Error fetching current user\'s rank:', error.message);
    throw error;
  }
};

// Example of how to use the functions


















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

  const [audienceRank,setAudienceRank] = useState([]);
  const [currUser,setcurrUser] = useState();

  const fetchData = async () => {
    try {
      // Fetch audience ranking
      const audienceRanking = await getAudienceRanking();

      try {
        const audienceRanking = await getAudienceRanking();
        setAudienceRank(audienceRanking, () => {
          console.log('Audience Rank set:', audienceRank);
        });
      } catch (error) {
        console.error('Error:', error.message);
      }

      setAudienceRank(audienceRanking);
    console.log('Audience Rank set:', audienceRanking);

    const userId = localStorage.getItem('icell_pitcher_userId');
try {
  const currUserRank = await getCurrUserRank(userId);
  setcurrUser(currUserRank);
  console.log('Current User\'s Rank:', currUserRank);
} catch (error) {
  console.error('Error fetching current user\'s rank:', error.message);
}


    
    } catch (error) {
      console.error('Error:', error.message);
    }
  };



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








  useEffect(()=>{ 
    fetchData();
   
  },[])









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
