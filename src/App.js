import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignUpPage";
import UploadPage from "./components/upload/UploadPage";
import Photos from "./components/media/Photos";
import VideoPage from "./components/videos/components/VideoPage";
// src/App.js
import ProtectedRoute from "./components/ProtectedRoute";
import VideoPlayer from "./components/videos/components/VideoPlayer";
import LandingPage from "./components/pages/LandingPage";
import Video from "./components/videos/components/Video";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="min-h-[75vh]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Protected routes */}
            <Route path="/photos" element={
              <ProtectedRoute>
                <Photos />
              </ProtectedRoute>
            } />
            <Route path="/add" element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            } />
            <Route path="/video" element={
              <ProtectedRoute>
                <VideoPage />
              </ProtectedRoute>
            } />
            <Route path="/videoPlay" element={
              <ProtectedRoute>
                <VideoPlayer />
              </ProtectedRoute>
            } />
            <Route path="/videos" element={
              <ProtectedRoute>
                <Video />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
