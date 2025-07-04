import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

let backendUrl;
try {
  backendUrl = import.meta.env.VITE_BACKEND_URL;
  if (!backendUrl) {
    backendUrl = "https://memory-store-backend.onrender.com";
  }
} catch (envError) {
  console.warn("Environment variable not found, using fallback:", envError);
  backendUrl = "https://memory-store-backend.onrender.com";
}

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      const userEmail = localStorage.getItem("userEmail");
      const token = localStorage.getItem("token");
      if (!userEmail || !token) {
        setError("You must be logged in to view this video. Please log in again.");
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${backendUrl}/videos/${id}`,
          {
            headers: {
              'User-Email': userEmail,
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setVideo(response.data);
        setLoading(false);
      } catch (err) {
        setError("Video not found");
        setLoading(false);
        console.error("Error fetching video:", err);
      }
    };

    fetchVideo();
  }, [id]);

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  if (loading) return <div className="text-center py-8">Loading video...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl relative">
      <button 
        onClick={handleBack}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
      >
        {/* <FaTimes size={24} /> */}
      </button>
      
      <div className="bg-black rounded-lg overflow-hidden mt-8">
        <video
          src={video.url}
          controls
          className="w-full"
          autoPlay
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>File: {video.fileName}</p>
        <p>Uploaded: {new Date(video.uploadedAt).toLocaleString()}</p>
        <p>File size: {(video.fileSize / (1024 * 1024)).toFixed(2)} MB</p>
      </div>
    </div>
  );
};

export default VideoPlayer;