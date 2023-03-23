import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./JobList.css";
import { useAuth0 } from "@auth0/auth0-react";
// import { formatDate } from "../util/formatDate";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchJobs = async () => {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`https://api-juaz.onrender.com/jobs`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        }, 
      });



      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();
      setJobs(data);
      setLoading(false);
    };
    fetchJobs();
  }, [getAccessTokenSilently]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (jobs.length < 1) {
    setIsNotFound(true);
  }

  console.log(jobs);
  if (isNotFound) {
    return <div>Not found</div>;
  }

  return (
    <>
      <div>
        <h1 className="container-title">Job List</h1>
        <ul className="JobList">
          {jobs.map((job) => {
            return (
              <div key={job.id} className="job">
                <li>
                  <h2>{job.title}</h2>
                  <p>
                    Customer Name: <span>{job.clientname}</span>
                  </p>
                  <p>
                    Site Address: <span>{job.location}</span>
                  </p>
                  <div className="job-description">
                    <p>Job Description:</p>
                    <p>{job.description}</p>
                  </div>
                  <div>
                    <p>Client Phone Number:</p>
                    <p>{job.clientphonenumber}</p>
                  </div>
                  <p>
                    Job Status: <span>{job.jobstatus}</span>
                  </p>
                  <div>
                    <p>Job Notes:</p>
                    <p>{job.jobnotes}</p>
                  </div>
                  <div>
                    <p>Job Date:</p>
                    <p>{job.jobdate}</p>
                  </div>

                  <Link to={`jobs/${job.id}`}> Check out Job &rarr;</Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default JobList;
