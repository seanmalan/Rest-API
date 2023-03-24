import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Job from "./components/Job";
import CreateJob from "./components/CreateJob";
import QuoteForm from "./components/QuoteForm";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/jobs" element={<ProtectedRoute />}>
        <Route path="/jobs" element={<JobList />} />
        </Route>
        <Route path="/jobs/:id" element={<ProtectedRoute />}>
          <Route path="/jobs/:id" element={<Job />} />
        </Route>

        <Route path="/add" element={<ProtectedRoute />}>
            <Route path="/add" element={<CreateJob />} />
          </Route>

            <Route path="/quote" element={<QuoteForm />} />

          {/* <Route path="/jobs/:id/edit" element={<ProtectedRoute />}>
            <Route path="/jobs/:id/edit" element={<EditJob />} />
          </Route> */}
      </Routes>
    </div>
  );
}

export default App;
