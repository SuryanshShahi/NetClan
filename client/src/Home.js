import React, { useState, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
// import Data from "./jsondata";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart, registerables } from "chart.js";
import { Divider } from "@mui/material";
import axios from "axios";
Chart.register(...registerables);

function Home() {
  const [userData, setUserData] = useState([]);
  const MongoData = () => {
    axios
      .get("http://localhost:5000/users")
      .then((dataM) => {
        setUserData(dataM.data);
        console.log(dataM.data);
      })
      .catch((err) => console.log(err));
  };
  
  
  const [items, setItems] = useState(userData);
  const [topics, setTopic] = useState(userData);
  const [sector, setSector] = useState(userData);
  const [region, setRegion] = useState(userData);
  const [pestle, setPestle] = useState(userData);
  const [source, setSource] = useState(userData);
  const [years, setYear] = useState(userData);
  // console.log(items.map((e) => e.end_year));
  const data1 = {
    datasets: [
      {
        label: "My First Dataset",
        data: items.map((e) => e.likelihood),
        // data: [50, 42, 60],

        backgroundColor: ["purple", "#dc3545", "rgba(13, 124, 228, 0.808)"],
        hoverOffset: 4,
      },
    ],
  };
  const data = {
    labels: items.map((e) => e.country),
    datasets: [
      {
        label: "Intensity",
        // data: [1.5, 3, 3.2, 2.3, 4, 4.5, 3],
        data: items.map((e) => e.intensity),
        borderColor: ["rgba(194, 44, 44, 0.87)"],
        backgroundColor: ["maroon"],
        pointBackgroundColor: [
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "white",
        ],

        fontColor: ["White"],
        fill: {
          target: "origin",
          above: "rgba(197, 60, 60, 0.596)",
        },
      },
    ],
    fontColor: "white",
  };
  const data2 = {
    labels: topics.map((e) => e.topic),
    datasets: [
      {
        label: "Likelihood",
        // data: [1.5, 3, 3.2, 2.3, 4, 4.5, 3],
        data: topics.map((e) => e.likelihood),
        borderColor: ["rgba(194, 44, 44, 0.87)"],
        backgroundColor: ["blue"],
        pointBackgroundColor: [
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "rgba(194, 44, 44, 0.87)",
          "white",
        ],

        fontColor: ["White"],
        fill: {
          target: "origin",
          above: "rgba(197, 60, 60, 0.596)",
        },
      },
    ],
    fontColor: "white",
  };
  const data3 = {
    labels: items.map((e) => e.country),
    datasets: [
      {
        label: "Relevance",
        // data: [1.5, 3, 3.2, 2.3, 4, 4.5, 3],
        data: items.map((e) => e.relevance),
        borderColor: ["rgba(194, 44, 44, 0.87)"],
        backgroundColor: ["orange"],

        fontColor: ["White"],
        fill: {
          target: "origin",
          above: "rgba(197, 60, 60, 0.596)",
        },
      },
    ],
    fontColor: "white",
  };

  
// const Data1 = userData;
  // const MongoData = async () => {
  //   try {
  //     const res = await fetch("/users", {
  //       method: "GET",
  //       headers: {
  //         Accept: "applications/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const dataM = await res.json();
  //     console.log(dataM);
  //     setUserData(dataM);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    MongoData();
  }, []);
  // const [items, setItems] = useState(Data1);
  const filterItem = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.country === categItem;
    });
    setItems(updatedItems);
  };
  const filterYear = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.end_year === categItem;
    });
    setYear(updatedItems);
  };
  const filterTopic = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.topic === categItem;
    });
    setTopic(updatedItems);
  };
  const filterSector = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.sector === categItem;
    });
    setSector(updatedItems);
  };
  const filterRegion = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.region === categItem;
    });
    setRegion(updatedItems);
  };
  const filterPestle = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.pestle === categItem;
    });
    setPestle(updatedItems);
  };
  const filterSource = (categItem) => {
    const updatedItems = userData.filter((curElem) => {
      return curElem.source === categItem;
    });
    setSource(updatedItems);
  };

  const show = () => {
    document.getElementById("countries").style.display = "block";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "none";
  };
  const show1 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "block";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "none";
  };
  const show2 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "block";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "none";
  };
  const show3 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "block";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "none";
  };
  const show4 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "block";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "none";
  };
  const show5 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "block";
    document.getElementById("year").style.display = "none";
  };
  const show6 = () => {
    document.getElementById("countries").style.display = "none";
    document.getElementById("topics").style.display = "none";
    document.getElementById("sector").style.display = "none";
    document.getElementById("region").style.display = "none";
    document.getElementById("pestle").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("year").style.display = "block";
  };

  // const navbtn = () => {
  //   var a = document.getElementById("navbarSupportedContent");
  //   if (a.style.display === "none") {
  //     a.style.display = "block";
  //   } else {
  //     a.style.display = "none";
  //   }
  // };
  return (
    <div>
      
      <div
        className="col-sm-auto position-fixed sticky-top"
        style={{
          height: "100vh",
          width: "200px",
          background: "#150f16",
          // overflowY: "scroll",
          boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
        }}
      >
        <div>
          <div className="">
            <h3 className="text-center py-2 text-white">DashBoard</h3>
            
            </div>
            <hr style={{background:"white"}} className="text-white"></hr>
        </div>
        <div className="dashboardScroll" style={{overflowY:"scroll", height:"90vh"}}>
        <h5 className="text-white text-center">Visualize Data</h5>
          <Accordion>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="text-white w-100 align-items-center d-flex"> Countries<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none ">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setItems(userData)}
                        />
                        <label className="pl-2" for="All">
                          All
                        </label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("United States of America")}
                        />
                        <label className="pl-2">United States of America</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Mexico")}
                        />
                        <label className="pl-2">Mexico</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Australia")}
                        />
                        <label className="pl-2">Australia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Russia")}
                        />
                        <label className="pl-2">Russia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Austria")}
                        />
                        <label className="pl-2">Austria</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Argentina")}
                        />
                        <label className="pl-2">Argentina</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("India")}
                        />
                        <label className="pl-2">India</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Iran")}
                        />
                        <label className="pl-2">Iran</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Indonesia")}
                        />
                        <label className="pl-2">Indonesia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Jordan")}
                        />
                        <label className="pl-2">Jordan</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Gabon")}
                        />
                        <label className="pl-2">Gabon</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Spain")}
                        />
                        <label className="pl-2">Spain</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("China")}
                        />
                        <label className="pl-2">China</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Turkey")}
                        />
                        <label className="pl-2">Turkey</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("United Kingdom")}
                        />
                        <label className="pl-2"> United Kingdom</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Saudi Arabia")}
                        />
                        <label className="pl-2">Saudi Arabia</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Topics<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setTopic(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("gas")}
                        />
                        <label className="pl-2">gas</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("oil")}
                        />
                        <label className="pl-2">oil</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("consumption")}
                        />
                        <label className="pl-2">consumption</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("market")}
                        />
                        <label className="pl-2">market</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("gdp")}
                        />
                        <label className="pl-2">gdp</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("war")}
                        />
                        <label className="pl-2">war</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("production")}
                        />
                        <label className="pl-2">production</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("export")}
                        />
                        <label className="pl-2">export</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("battery")}
                        />
                        <label className="pl-2">battery</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("biofuel")}
                        />
                        <label className="pl-2">biofuel</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("policy")}
                        />
                        <label className="pl-2">policy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("economy")}
                        />
                        <label className="pl-2">economy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("strategy")}
                        />
                        <label className="pl-2">strategy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("robot")}
                        />
                        <label className="pl-2">robot</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("growth")}
                        />
                        <label className="pl-2">growth</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("energy")}
                        />
                        <label className="pl-2">energy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("demand")}
                        />
                        <label className="pl-2">demand</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("economic growth")}
                        />
                        <label className="pl-2">economic growth</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("unemployment")}
                        />
                        <label className="pl-2">unemployment</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("administration")}
                        />
                        <label className="pl-2">administration</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <hr style={{background:"white"}} className="text-white"></hr>
          <h5 className="text-white text-center">Filter Data</h5>
          <Accordion onClick={show}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Countries<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none ">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setItems(userData)}
                        />
                        <label className="pl-2" for="All">
                          All
                        </label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("United States of America")}
                        />
                        <label className="pl-2">United States of America</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Mexico")}
                        />
                        <label className="pl-2">Mexico</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Australia")}
                        />
                        <label className="pl-2">Australia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Russia")}
                        />
                        <label className="pl-2">Russia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Austria")}
                        />
                        <label className="pl-2">Austria</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Argentina")}
                        />
                        <label className="pl-2">Argentina</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("India")}
                        />
                        <label className="pl-2">India</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Iran")}
                        />
                        <label className="pl-2">Iran</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Indonesia")}
                        />
                        <label className="pl-2">Indonesia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Jordan")}
                        />
                        <label className="pl-2">Jordan</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Gabon")}
                        />
                        <label className="pl-2">Gabon</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Spain")}
                        />
                        <label className="pl-2">Spain</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("China")}
                        />
                        <label className="pl-2">China</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Turkey")}
                        />
                        <label className="pl-2">Turkey</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("United Kingdom")}
                        />
                        <label className="pl-2"> United Kingdom</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterItem("Saudi Arabia")}
                        />
                        <label className="pl-2">Saudi Arabia</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion onClick={show1}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Topics<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setTopic(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("gas")}
                        />
                        <label className="pl-2">gas</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("oil")}
                        />
                        <label className="pl-2">oil</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("consumption")}
                        />
                        <label className="pl-2">consumption</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("market")}
                        />
                        <label className="pl-2">market</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("gdp")}
                        />
                        <label className="pl-2">gdp</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("war")}
                        />
                        <label className="pl-2">war</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("production")}
                        />
                        <label className="pl-2">production</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("export")}
                        />
                        <label className="pl-2">export</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("battery")}
                        />
                        <label className="pl-2">battery</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("biofuel")}
                        />
                        <label className="pl-2">biofuel</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("policy")}
                        />
                        <label className="pl-2">policy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("economy")}
                        />
                        <label className="pl-2">economy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("strategy")}
                        />
                        <label className="pl-2">strategy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("robot")}
                        />
                        <label className="pl-2">robot</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("growth")}
                        />
                        <label className="pl-2">growth</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("energy")}
                        />
                        <label className="pl-2">energy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("demand")}
                        />
                        <label className="pl-2">demand</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("economic growth")}
                        />
                        <label className="pl-2">economic growth</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("unemployment")}
                        />
                        <label className="pl-2">unemployment</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterTopic("administration")}
                        />
                        <label className="pl-2">administration</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          
          <Accordion onClick={show2}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Sector<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setSector(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Energy")}
                        />
                        <label className="pl-2">Energy</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Environment")}
                        />
                        <label className="pl-2">Environment</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Financial services")}
                        />
                        <label className="pl-2">Financial services</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Retail")}
                        />
                        <label className="pl-2">Retail</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Support services")}
                        />
                        <label className="pl-2">Support services</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Information Technology")}
                        />
                        <label className="pl-2">Information Technology</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSector("Manufacturing")}
                        />
                        <label className="pl-2">Manufacturing</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion onClick={show3}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Region<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setRegion(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Northern America")}
                        />
                        <label className="pl-2">Northern America</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("World")}
                        />
                        <label className="pl-2">World</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Western Asia")}
                        />
                        <label className="pl-2">Western Asia</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Central Africa")}
                        />
                        <label className="pl-2">Central Africa</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Northern Africa")}
                        />
                        <label className="pl-2">Northern Africa</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Southern Africa")}
                        />
                        <label className="pl-2">Southern Africa</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Southern Asia")}
                        />
                        <label className="pl-2">Southern Asia</label>
                      </a>
                    </li>

                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Eastern Europe")}
                        />
                        <label className="pl-2">Eastern Europe</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        {" "}
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterRegion("Western Africa")}
                        />
                        <label className="pl-2">Western Africa</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion onClick={show4}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Pestle<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setPestle(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Industries")}
                        />
                        <label className="pl-2">Industries</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Environmental")}
                        />
                        <label className="pl-2">Environmental</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Economic")}
                        />
                        <label className="pl-2">Economic</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Political")}
                        />
                        <label className="pl-2">Political</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Technological")}
                        />
                        <label className="pl-2">Technological</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterPestle("Healthcare")}
                        />
                        <label className="pl-2">Healthcare</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion onClick={show5}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> Source<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setSource(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSource("EIA")}
                        />
                        <label className="pl-2">EIA</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSource("sustainablebrands.com")}
                        />
                        <label className="pl-2">sustainablebrands.com</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSource("SBWire")}
                        />
                        <label className="pl-2">SBWire</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() =>
                            filterSource("DOE EIA 2013 Energy Conference")
                          }
                        />
                        <label className="pl-2">DOE EIA 2013 Energy Conference</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() =>
                            filterSource("International Business Times")
                          }
                        />
                        <label className="pl-2">International Business Times</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSource("AllAfrica")}
                        />
                        <label className="pl-2">AllAfrica</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterSource("Energy.gov Website")}
                        />
                        <label className="pl-2">Energy.gov Website</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() =>
                            filterSource("Convenience Store Decisions")
                          }
                        />
                        <label className="pl-2">Convenience Store Decisions</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion onClick={show6}>
            <AccordionSummary
              style={{ background: "#150f16" }}
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <div className="text-white w-100 align-items-center d-flex"> End Year<span className="fa fa-angle-down pr-3 text-white position-absolute" style={{right:"0px"}}></span></div>
            </AccordionSummary>
            <AccordionDetails style={{ background: "black" }}>
              <div className="">
                <div className="">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a className="active text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => setYear(userData)}
                        />
                        <label className="pl-2">All</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2017)}
                        />
                        <label className="pl-2">2017</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2018)}
                        />
                        <label className="pl-2">2018</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2019)}
                        />
                        <label className="pl-2">2019</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2020)}
                        />
                        <label className="pl-2">2020</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2022)}
                        />
                        <label className="pl-2">2022</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2024)}
                        />
                        <label className="pl-2">2024</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2025)}
                        />
                        <label className="pl-2">2025</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2027)}
                        />
                        <label className="pl-2">2027</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2040)}
                        />
                        <label className="pl-2">2040</label>
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none">
                        <input
                          type="radio"
                          name="btns"
                          onClick={() => filterYear(2200)}
                        />
                        <label className="pl-2">2200</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <hr style={{background:"white"}} className="text-white"></hr>
        </div>
      </div>

      <div className="mr-4 my-3" style={{ marginLeft: "14rem" }}>
        <div
          className="align-items-center d-flex"
          style={{
            width: "100%",
            height: "60px",
            borderRadius: "10px",
            background: "#150f16",
            top: "20px",
            zIndex: "999",
            position: "sticky",
            boxShadow: "0px 0px 6px 2px rgb(228 228 228)",
          }}
        >
          <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent w-100">
            <div className="container-fluid">
              <button
                className="navbar-toggler btn position-absolute"
                style={{ right: "4px" }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-list " style={{ color: "white" }}></span>
              </button>
              <div
                className="collapse navbar-collapse py-3 px-5 px-lg-2"
                id="navbarSupportedContent"
              >
                <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <div className="d-flex justify-content-center justify-content-lg-start py-lg-0 py-3">
                    <div className="fa fa-calendar text-white pr-2"></div>
                    <div className="fa fa-comment text-white px-2"></div>
                    <div className="fa fa-envelope text-white px-2"></div>
                    <div className="fa fa-list text-white px-2"></div>
                    <div className="fa fa-star text-white px-2"></div>
                  </div>
                </div>
                <div className="justify-content-end align-items-center d-flex w-100">
                  <div className="align-items-center d-flex">
                    <div className="fa fa-flag text-white px-2"></div>
                    <div className="dropdown px-2">
                      <div
                        className=" bg-transparent text-white text-decoration-none"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </div>
                      <ul
                        className="country dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <div className="dropdown-item">India</div>
                        </li>
                        <li>
                          <div className="dropdown-item">French</div>
                        </li>
                        <li>
                          <div className="dropdown-item">German</div>
                        </li>
                      </ul>
                    </div>
                    <div className="fa fa-moon-o text-white px-2"></div>
                    <div className="fa fa-search text-white px-2"></div>
                    <div className="fa fa-cart-arrow-down text-white px-2"></div>
                    <div className="fa fa-bell text-white px-2"></div>
                    <div className="dropdown pl-2">
                      <a
                        className=" bg-transparent text-white text-decoration-none"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center pl-2">
                          <div className="">
                            <div className="">John Doe</div>
                            <div
                              className="justify-content-end d-flex"
                              style={{ fontSize: "10px" }}
                            >
                              <div>admin</div>
                            </div>
                          </div>
                          <div className="fa fa-user-circle-o fa-2x pl-2 text-white"></div>
                        </div>
                      </a>
                      <ul
                        className="dropdown-menu"
                        style={{ minWidth: "9rem" }}
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <div className="dropdown-item" href="#">
                            <span className="fa fa-user pr-2"></span>Profile
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-envelope pr-2"></span>Inbox
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-list pr-2"></span>Task
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-comment pr-2"></span>Chat
                          </div>
                        </li>
                        <Divider className="my-2"></Divider>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-gear pr-2"></span>Setting
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-money pr-2"></span>Pricing
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-question-circle-o pr-2"></span>
                            FAQ
                          </div>
                        </li>
                        <li>
                          <div className="dropdown-item">
                            <span className="fa fa-sign-out pr-2"></span>Logout
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="row my-4">
          <div className="col-lg-4 col-md-4 col-12 mb-3">
            <div
              className="pb-2"
              style={{
                borderRadius: "10px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <Doughnut data={data1} />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-12 mb-3 px-3">
            <div
              className="px-3 py-3"
              style={{
                borderRadius: "10px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <Line data={data3} />
            </div>
          </div>

          <div className="col-12 px-3">
            <div
              className="px-3 py-3"
              style={{
                borderRadius: "10px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              {" "}
              <Bar className="chart" data={data} />
            </div>
          </div>
          <div className="col-12 my-3 px-3">
            <div
              className="px-3 py-3"
              style={{
                borderRadius: "10px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <Bar className="chart" data={data2} />
            </div>
          </div>

          <div className="col-12 my-4" id="countries">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {items.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>

          <div className="col-12 my-4" id="year">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {years.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>

          <div className="col-12 my-4" id="topics">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {topics.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="col-12 my-4" id="sector">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {sector.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="col-12 my-4" id="region">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {region.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>

          <div className="col-12 my-4" id="pestle">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {pestle.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="col-12 my-4" id="source">
            <div
              className="table"
              style={{
                overflow: "scroll",
                maxHeight: "800px",
                background: "#150f16",
                boxShadow: "rgb(59 59 59) 0px 0px 7px 1px",
              }}
            >
              <table border="1px">
                <tr
                  className="text-white"
                  style={{
                    top: "0",
                    position: "sticky",
                    background: "#172337",
                  }}
                >
                  <th>End year</th>
                  <th>Intensity</th>
                  <th>Sector</th>
                  <th>Topic</th>
                  <th>Insight</th>
                  <th>Region</th>
                  <th>Start Year</th>
                  <th>Impact</th>
                  <th>Added</th>
                  <th>Published</th>
                  <th>Country</th>
                  <th>Relevance</th>
                  <th>Pestle</th>
                  <th>Source</th>
                  <th>Title</th>
                  <th>Likelihood</th>
                </tr>
                {source.map((e) => {
                  return (
                    <tr>
                      <td>{e.end_year}</td>
                      <td>{e.intensity}</td>
                      <td>{e.sector}</td>
                      <td>{e.topic}</td>
                      <td>{e.insight}</td>
                      <td>{e.region}</td>
                      <td>{e.start_year}</td>
                      <td>{e.impact}</td>
                      <td>{e.added}</td>
                      <td>{e.published}</td>
                      <td>{e.country}</td>
                      <td>{e.relevance}</td>
                      <td>{e.pestle}</td>
                      <td>{e.source}</td>
                      <td>{e.title}</td>
                      <td>{e.likelihood}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// {userData.map((e) => {
//   return (
//     <div className="justify-content-center d-flex">
//       <div>{e.intensity}</div>
//       <div>{e.end_year}</div>
//     </div>
//   );
// })}