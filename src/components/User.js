import { useState, useEffect } from "react";
import './User.css';

const User = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://refertest.pythonanywhere.com/user/data")
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
    <div>
      {loading && <div>Loading...</div>}

      {!loading && error && <div>{error}</div>}

      {!loading && data && (
        <div className="user">
          <div>
            <img src={data.pictureUrl} alt="profile-pic" />
          </div>
          <div>
            <h1>{data.name}</h1>
            <p>{data.college}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
