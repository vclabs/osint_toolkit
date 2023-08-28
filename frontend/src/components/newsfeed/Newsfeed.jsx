import React from "react";
import { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import api from "../../api";
import he from "he";

import { newsfeedState } from "../../App";

import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grow from "@mui/material/Grow";
import Pagination from "@mui/material/Pagination";
import RefreshIcon from "@mui/icons-material/Refresh";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import useTheme from "@mui/material/styles/useTheme";

export default function Newsfeed() {
  const theme = useTheme();

  const newsfeed = useRecoilValue(newsfeedState);
  const setNewsfeed = useSetRecoilState(newsfeedState);

  const [result, setResult] = useState(" ");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = React.useState(1);
  const pageSize = 5;
  const handlePageChange = (event, value) => {
    scrollToTop();
    setPage(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 120,
      behavior: "smooth", // use 'auto' for instant scrolling
    });
  };

  const showSkeletons = () => {
    return [...Array(pageSize)].map((e, i) => (
      <span key={i}>
        <Grow in={true} key={"grow-loading-" + i}>
          <Card
            sx={{
              m: 2,
              p: 2,
              borderRadius: 5,
              backgroundColor: theme.palette.background.card,
              boxShadow: 0,
            }}
            key={"card-loading-" + i}
          >
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <Skeleton
                  variant="circular"
                  animation="wave"
                  width={50}
                  height={50}
                />
                <Stack spacing={0} width={"30%"}>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={"60%"}
                    sx={{ fontSize: "1rem" }}
                  />
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width={"100%"}
                    sx={{ fontSize: "1rem" }}
                  />
                </Stack>
              </Stack>
              <Skeleton
                variant="text"
                animation="wave"
                width={"60%"}
                sx={{ fontSize: "3rem" }}
              />
              <Skeleton
                variant="rounded"
                animation="wave"
                width={"100%"}
                height={120}
              />
            </Stack>
          </Card>
        </Grow>
      </span>
    ));
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setNewsfeed([]);
      setPage(1);

      const url = "/api/newsfeed";
      api.get(url).then((response) => {
        const result = response.data;
        setResult(result);
        setNewsfeed(result);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (newsfeed.length === 0) {
      fetchData();
    }
    if (newsfeed.length > 0) {
      setResult(newsfeed);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <br />
      <Button onClick={() => fetchData()} sx={{ float: "right", mr: 2 }}>
        {" "}
        <RefreshIcon /> Update feed
      </Button>
      <br />
      {loading ? (
        <>{showSkeletons()}</>
      ) : result.length > 0 ? (
        result
          .slice((page - 1) * pageSize, page * pageSize) // slice list of items to get items for current page
          .map((item, index) => {
            return (
              <Grow in={true} key={"grow-" + index}>
                <Card
                  sx={{
                    m: 2,
                    p: 2,
                    borderRadius: 5,
                    backgroundColor: theme.palette.background.card,
                    boxShadow: 0,
                  }}
                  key={"card-" + index}
                >
                  <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                    <Avatar
                      alt={`${item.title} icon`}
                      src={`feedicons/${item.icon}.png`}
                      sx={{ width: 45, height: 45 }}
                    />
                    <Stack>
                      <b>{item.feedname}</b>
                      {item.date}
                    </Stack>
                  </Stack>
                  <h2>{item.title}</h2>
                  <p>
                    {item.summary
                      ? he.decode(item.summary)
                      : "No summary available for this article."}
                  </p>
                  <br />
                  <Button
                    sx={{ borderRadius: 5 }}
                    disableElevation
                    href={item.link}
                    target="_blank"
                  >
                    Go to article
                  </Button>
                </Card>
              </Grow>
            );
          })
      ) : null}
      <Pagination
        count={Math.ceil(newsfeed.length / pageSize)}
        page={page}
        color="primary"
        shape="rounded"
        size="large"
        showFirstButton
        showLastButton
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
}
