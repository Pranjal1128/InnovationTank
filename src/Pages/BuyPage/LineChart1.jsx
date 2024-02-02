import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { backend_url } from "../../config";
import { useSelector } from "react-redux";

function generateTimeIntervals(currentTime) {
  const endDate = new Date(`2024-02-01 ${currentTime}`);
  return endDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const LineChart1 = ({ portfolio_id,socket }) => {
  const [label, setLabel] = useState([]);
  const [lineLabel, setLineLabel] = useState([]);



  console.log("lable is ", label);
  console.log("lineLable is ", lineLabel);




  // for making fetch request
  useEffect(() => {
    axios.post(`${backend_url}/portfolios/data/line-chart`, {
      portfolio_id
    }).then(({ data }) => {
      setLabel(data.x);
      setLineLabel(data.lineData)
    })
  }, [])
  
  // for making socket connection
  useEffect(() => {

    const generateLable = (data) => {
      // data -> avg stock / user
      const curr = new Date(Date.now());
      const currTime = `${curr.getHours()}:${curr.getMinutes()}`;
      let interval = generateTimeIntervals(currTime);
  

      setLabel((x) => {
        if (interval == x[x.length - 1]) {
          setLineLabel((prevLine) => {
            let lineLableCopy = [...prevLine];
            lineLableCopy[lineLableCopy.length - 1] = data;
            return lineLableCopy;
          })
          return [...x];
        }
        else {
          setLineLabel((prev) => {
            return [...prev, data];
          })
          return [...x, interval]
        }
      });
      
    };
    socket.on("line-chart-data", generateLable);
    return () => {
      // socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Line
        datasetIdKey="id"
        data={{
          labels: label,
          datasets: [
            {
              id: 1,
              label: "",
              data: lineLabel,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart1;
