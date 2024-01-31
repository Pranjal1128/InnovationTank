import React, { useEffect, useState, useRef } from "react";
import "./BuyPage.css";
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPortfolio } from "../../actions/portfolio";
import Navbar from "../Navbar/Navbar";

import { ToastCallError, ToastCallSuccess } from "../../ReactToast";
import { io } from "socket.io-client";
import { backend_url } from "../../config";

const comp2 = () => {
  return <p>hi there.</p>;
};

const displayStock = (stock) => {
  let div = document.getElementById("stock");
  div.textContent = stock;
};
let socket;
let userId;

const BuyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio);
  const [currProject, setCurrProject] = useState();
  const [bio, setBio] = useState();
  const [name, setName] = useState();
  const [leader, setLeader] = useState();
  const [stocks, setStocks] = useState();

  const comp1 = () => {
    return <p style={{ textAlign: "center" }}>{bio}</p>;
  };

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  const buyRef = useRef("");

  const handleBuy = () => {
    let buyProd = buyRef.current.value;
    if (!buyProd || buyProd <= 0) {
      ToastCallError("Invalid Input");
      return;
    }

    socket.volatile.emit("buy", id, userId, buyProd);
  };

  useEffect(() => {
    socket = io(backend_url);
    // socket = io("http://localhost:5000");
    console.log("useeffect");

    // userId = localStorage.getItem("icell_pitcher_userId")
    //   ? JSON.parse(localStorage.getItem("icell_pitcher_userId"))
    //   : null;

    userId = "65b4dc4977e3ce51c67cc98d";
    console.log(userId);
    socket.on("connect", () => {
      console.log("Socket is connected (frontend)");
    });
    socket.emit("join-room", id);
    socket.emit("getStock", id, userId, (getData) => {
      displayStock(getData[0]);
      console.log("init stocks ", getData[0])
      setStocks(getData[0]);
    });

    socket.on("show-stock", (stock) => {
      console.log("show-stock ", stock);
      displayStock(stock[0]);
    });

    socket.on("stock-empty", () => {
      console.log("stock empty working");
      ToastCallError("stock empty");
    });
    socket.on("userStock-empty", () => {
      console.log("stock empty working");
      ToastCallError("Dont have enough Stock ");
    });

    socket.on("successfully-purchased", (purchasedProd) => {
      ToastCallSuccess(`Successfully Purchased ${purchasedProd} stocks`);
    });

    socket.on("disconnect", function () {
      console.log("Got disconnect!");
      // setInterval(() => {
      //   console.log("set interval");
      // }, 5000);
      navigate("/portfolios");
    });
    return () => {
      console.log("socket disconnecg");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Check if projects is not empty and has at least one element
    if (projects && projects.length > 0) {
      var project = projects[0];

      for (var i = 0; i < project.length; i++) {
        if (project[i]._id === id) {
          setCurrProject(project[i]);
          setName(project[i].name);
          setBio(project[i].about);
          setLeader(project[i].leader);
          setStocks(project[i].stock);
          break; // Once the project is found, exit the loop
        }
      }
    }
  }, [id, projects]);

  const carouselItems = [comp1(), comp2()];

  return (
    <div className="buy-page">
      <Navbar />
      <div className="buy-page-details">
        <h2>{name}</h2>
        {/* <p>{bio}</p>
        <p>{leader}</p> */}
        <Carousel items={carouselItems} />
      </div>
      <p id="stock">12</p>
      <div className="buy-page-input">
        <p>
          <input
            type="text"
            placeholder={`Enter Amount/${stocks}`}
            className="buy-amount"
            ref={buyRef}
          />
        </p>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

export default BuyPage;
