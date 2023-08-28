import React from "react";
import api from "../../../../api";
import { useEffect, useState, useRef } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import NoDetails from "../NoDetails";
import ResultRow from "../../ResultRow";

export default function Pulsedive(props) {
  const propsRef = useRef(props);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url =
          "/api/" +
          propsRef.current.type +
          "/pulsedive?ioc=" +
          encodeURIComponent(propsRef.current.ioc);
        const response = await api.get(url);
        setResult(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const details = (
    <>
      {result ? (
        <Box sx={{ margin: 1 }}>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <NoDetails />
          </Grid>
        </Box>
      ) : null}
    </>
  );

  return (
    <>
      <ResultRow
        name="Pulsedive"
        id="pulsedive"
        icon="pulsedive_logo_small"
        loading={loading}
        result={result}
        summary={
          result != null && result["results"][0]
            ? "Risk: " +
              result["results"][0]["risk"].charAt(0).toUpperCase() +
              result["results"][0]["risk"].slice(1)
            : "Not found"
        }
        summary_color={{ color: null }}
        color={
          result != null && result["results"][0]
            ? result["results"][0]["risk"] === "none" ||
              result["results"].length === 0
              ? "green"
              : result["results"][0]["risk"] === "low" ||
                result["results"][0]["risk"] === "medium"
              ? "orange"
              : "red"
            : result != null && result["results"].length === 0
            ? "green"
            : "lightgrey"
        }
        error={error}
        details={details}
      />
    </>
  );
}
