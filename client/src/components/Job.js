import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Job.css";
// import { formatDate } from "../util/formatDate";
// import EditJob from "./EditJob";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchJob = async () => {
      const accessToken = await getAccessTokenSilently();

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();

      setJob(data);
      setLoading(false);
    };
    fetchJob();
  }, [id, getAccessTokenSilently]);

  if (job === null) {
    setIsNotFound(true);
  }

  if (isNotFound) {
    return (
      <div>
        <h1>Sorry, Job not found</h1>
        <Link to="/jobs">Back to jobs</Link>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // I want to carry the job information across to my edit page
  return (
    <div className="Job-container">
      <div className="Job">
        <h1 title={job.title}>{job.title}</h1>
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
        {/* <p>
          Job Date: <span>{formatDate(job.jobdate)}</span>
        </p> */}

        {/* <div>
          <Link to={`/jobs/${job.id}/edit`} className="Job-buttons">
            Edit Job
          </Link>
        </div> */}
        <div>
          <Link to="/">Back to jobs</Link>
        </div>

        
      </div>
    </div>
  );
};

export default Job;
