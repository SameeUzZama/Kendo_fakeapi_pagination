import * as React from "react";
import { Pager } from "@progress/kendo-react-data-tools";
import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardImage,
  CardBody,
} from "@progress/kendo-react-layout";
import Pagination from "./Pagination";
import { useDispatch } from "react-redux";

function App({ item }) {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setdata(result.data);
  };
  useEffect(() => {
    getApi();
  }, []);

  const [page, setPage] = React.useState({
    skip: 0,
    take: 1,
  });

  const handlePageChange = (event) => {
    setPage({
      skip: event.skip,
      take: event.take,
    });
  };

  // paging
  const indexOfLastPost = currentPage * postPerPage;
  const indexOFFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOFFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="App">
      <div className="main">
        {currentPosts.map((elem) => {
          return (
            <div>
              <Card className="card">
                <CardTitle>ID: {elem.id}</CardTitle>
                <Link to="/detail">
                  <button
                    onClick={() =>
                      dispatch({ type: "Selected-Product", data: elem })
                    }
                  >
                    <CardImage className="image" src={elem.image} />
                  </button>
                </Link>
                <div>
                  <CardHeader>
                    <CardTitle>
                      <b>Title: </b>
                      {elem.title.substr(0, 20) + "..."}
                    </CardTitle>
                    <CardSubtitle>
                      <span className="reviews">
                        <div>
                          <b>Rating:</b> {elem.rating.rate}/5 Count:{" "}
                          {elem.rating.count}
                        </div>
                      </span>
                      <p>
                        <b>Price: </b>
                        {elem.price}
                      </p>
                      <p>
                        <b>Category: </b>
                        {elem.category}
                      </p>
                    </CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <p>
                      <b>Description: </b>
                      {elem.description.substr(0, 100) + "..."}
                    </p>
                  </CardBody>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />

      <Pager
        skip={page.skip}
        take={page.take}
        total={2}
        onPageChange={handlePageChange}
        buttonCount={2}
        info={true}
        previousNext={true}
        type="numeric"
        pageSizes={[1, 2]}
      >
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </Pager>
    </div>
  );
}

export default App;
