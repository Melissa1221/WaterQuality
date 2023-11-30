import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { FondoImagen } from "./Components/FondoImagen";
import { GraficaPh } from "./Components/GraficaPh";
import { GraficaTemperaura } from "./Components/GraficaTemperaura";
import { GraficaTurbidez } from "./Components/GraficaTurbidez";
import { Button, Container } from "@mui/material";
import { GraficaSolidos } from "./Components/GraficaSolidos";
import { Titulo } from "./Components/Titulo";
import clientSocket from "./Network";
import dayjs from "dayjs";

function App() {
  const [data, setData] = useState({
    date: [],
    pH: [],
    tds: [],
    temperature: [],
    turbidity: [],
  });

  useEffect(() => {
    clientSocket.on("connect", () => {
      console.log(`Conexión exitosa al servidor`);

      // Emite un evento al servicio externo
      clientSocket.emit("1/initialData");

      // Recibe la data del servicio externo
      clientSocket.on("1/initialData", (data) => {
        setData({
          date: [data.date],
          pH: [data.pH],
          tds: [data.tds],
          temperature: [data.temperature],
          turbidity: [data.turbidity],
        });
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/pH", (pH) => {
        setData((previousData) => {
          if (previousData.pH.length === 0) return previousData;

          return {
            ...previousData,
            pH: [...previousData.pH, pH],
          };
        });
      });

      clientSocket.on("1/date", (date) => {
        setData((previousData) => {
          if (previousData.date.length === 0) return previousData;

          return {
            ...previousData,
            date: [...previousData.date, date],
          };
        });
      });

      clientSocket.on("1/tds", (tds) => {
        setData((previousData) => {
          if (previousData.tds.length === 0) return previousData;

          return {
            ...previousData,
            tds: [...previousData.tds, tds],
          };
        });
      });

      clientSocket.on("1/temperature", (temperature) => {
        setData((previousData) => {
          if (previousData.temperature.length === 0) return previousData;

          return {
            ...previousData,
            temperature: [...previousData.temperature, temperature],
          };
        });
      });

      clientSocket.on("1/turbidity", (turbidity) => {
        setData((previousData) => {
          if (previousData.turbidity.length === 0) return previousData;

          return {
            ...previousData,
            turbidity: [...previousData.turbidity, turbidity],
          };
        });
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <section>
        <FondoImagen />
      </section>
      <Container>
        <section id="GraficaPH">
          <Titulo titulo="pH" />
          <GraficaPh
            data={data.date.map((date, index) => ({
              time: new Date(date).getTime(),
              value: data.pH[index],
            }))}
          />
        </section>
        <section id="GraficaTemp">
          <Titulo titulo="Temperatura" />
          <GraficaTemperaura 
            data={data.date.map((date, index) => ({
            time: new Date(date).getTime(),
            value: data.temperature[index],
            }))}
          />
        </section>
        <section id="GraficaTurb">
          <Titulo titulo="Turbidez" />
          <GraficaTurbidez 
            data={data.date.map((date, index) => ({
              time: new Date(date).getTime(),
              value: parseFloat(data.turbidity[index]),
              }))}
          />
        </section>
        <section id="GraficaSolidos">
          <Titulo titulo="Residuos Sólidos" />
          <GraficaSolidos 
            data={data.date.map((date, index) => ({
              time: new Date(date).getTime(),
              value: data.tds[index],
              }))}
          />
        </section>
      </Container>
    </div>
  );
}

export default App;
