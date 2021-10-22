import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_VERSIONS } from "../gql/query";

import Description from "./description";

const Versions = () => {
  const [versions, setVersion] = useState(null);
  const [openTab, setOpenTab] = useState(1);
  const { data, loading } = useQuery(GET_VERSIONS);

  useEffect(() => {
    if (data) {
      setVersion(data.versions);
    }
  }, [data]); //Setting the useState hook with all the version once component is rendered.

  let date = ""; // We will use this below in JSX to parse string as date.

  return (
    <>
      {loading && <h1 className="text-white">Loading...</h1>}
      {versions &&
        !loading &&
        versions
          .map((data, index) => {
            return (
              <li
                className="-mb-px mr-2 last:mr-0 bg-gray-50 text-center"
                key={index}
              >
                <a
                  className={
                    "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal w-48 text-sm " +
                    (openTab === index + 1)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={`#link${index + 1}`}
                  role="tablist"
                >
                  {data.version}
                  <br />
                  {
                    ((date = data.date),
                    (date = new Date(data.date)),
                    date.toDateString()) // Here we are parsing string as date
                  }
                </a>
              </li>
            );
          })
          .reverse()}
      <Description openedTab={openTab} />
    </>
  );
};

export default Versions;
