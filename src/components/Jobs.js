import { useEffect, useState } from "react";
import Entry from "./Entry";
import './Jobs.css';

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      cname={entry.company}
      location={entry.location}
      role={entry.designation}
      skills={entry.skills}
      experience={entry.min_experience}
    />
  );
}

const JobsDiv = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/job/openings")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="jobs-div">
      <h1>Job Openings</h1>
      {loading && <div>Loading...</div>}

      {!loading && error && <div>{error}</div>}

      {!loading && data && <div className="jobs">{data.map(createEntry)}</div>}
    </div>
  );
};

export default JobsDiv;
