import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layouts/Layout";
import Freelancerpage from "../Pages/FreelancerPage";
import Apply from "../Pages/Applay";
import Taskmanager from "../Pages/Taskmanager";
import Employerpage from "../Pages/EmployerPage";
import Freelancerdetails from "../components/employer/Freelancerdetails";
import Write from "../Pages/postjob";
import Posthistory from "../Pages/posthistory";
import Applicantsdetails from "../Pages/Applicantsdetails";
import Hire from "../Pages/Hire";
import PrivateRoute from "./PrivateRoute";
import Postdetails from "../Pages/postdetails";
import Messenger from "../Pages/messenger/Messenger";
import Footer from "../Layouts/footer";
import Complaint from "../assets/complaint";
import Offer from "../Pages/offer";
import Interview from "../Pages/interview";
import RoomPage from "../Pages/room";
import InterviewCall from "../Pages/Interviewcall";
import { SocketProvider } from "../provider/socket";
import { PeerProvider } from "../provider/peer";
import Joblist from "../components/Freelancer/JobList";
import Freelancerlist from "../components/employer/freelancerlist";
import Testimony from "../assets/testimony";
import Register from "../assets/register";
import useAuth from "../Hooks/UseAuth";

const AppRoutes = () => {
  const location = useLocation();

  const showFooter = [
    location.pathname !== "/",
    location.pathname !== "/Messenger",
    location.pathname !== "/InterviewCalls",
    location.pathname !== "/Register",
  ];
  const { isLoggedIn } = useAuth();
  const isAuthenticated = isLoggedIn();
  return (
    <>
      <SocketProvider>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/joblist" element={<Joblist />} />
              <Route path="/joblist/apply" element={<Apply />} />
              <Route path="/freelancerlist" element={<Freelancerlist />} />
              <Route
                path="/freelancerlist/Freelancerdetails"
                element={<Freelancerdetails />}
              />
               <Route
                path="/Register"
                element={<Register />}
              />
              <Route
                path="/freelancerpage"
                element={<PrivateRoute element={<Freelancerpage />} />}
              />
              <Route
                path="/employerpage"
                element={<PrivateRoute element={<Employerpage />} />}
              />
              <Route
                path="/freelancerpage/Apply"
                element={<PrivateRoute element={<Apply />} />}
              />
              <Route
                path="/freelancerpage/Taskmanager"
                element={<PrivateRoute element={<Taskmanager />} />}
              />
              <Route
                path="/freelancerpage/Offer"
                element={<PrivateRoute element={<Offer />} />}
              />
              <Route
                path="/Messenger"
                element={<PrivateRoute element={<Messenger />} />}
              />

              <Route
                path="/Interview"
                element={<PrivateRoute element={<Interview />} />}
              />

              <Route
                path="/InterviewCalls"
                element={<PrivateRoute element={<InterviewCall />} />}
              />
              <Route
                path="/room/:roomId"
                element={<PrivateRoute element={<RoomPage />} />}
              />
              <Route
                path="/employerpage/Freelancerdetails"
                element={<PrivateRoute element={<Freelancerdetails />} />}
              />
              <Route
                path="/employerpage/Freelancerdetails/Messenger"
                element={<PrivateRoute element={<Freelancerdetails />} />}
              />
              <Route
                path="/employerpage/Post"
                element={<PrivateRoute element={<Write />} />}
              />
              <Route
                path="/employerpage/Applicantsdetails"
                element={<PrivateRoute element={<Posthistory />} />}
              />
              <Route
                path="/employerpage/Applicantsdetails/more"
                element={<PrivateRoute element={<Applicantsdetails />} />}
              />
              <Route
                path="/employerpage/Applicantsdetails/more/Hire"
                element={<PrivateRoute element={<Hire />} />}
              />
              <Route
                path="/employerpage/Applicantsdetails/postdetails"
                element={<PrivateRoute element={<Postdetails />} />}
              />
              <Route
                path="/complaint"
                element={<PrivateRoute element={<Complaint />} />}
              />
              <Route
                path="/Testimony"
                element={<PrivateRoute element={<Testimony />} />}
              />
            </Route>
          </Routes>
          {showFooter.every(Boolean) && <Footer />}
        </PeerProvider>
      </SocketProvider>
    </>
  );
};

export default function RouthPath() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
