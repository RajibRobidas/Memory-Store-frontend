import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import VideoUpload from './VideoUpload';

function UploadPage() {
    const [activeTab, setActiveTab] = useState('photos');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Add Your Memories
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Upload photos and videos to preserve your precious moments
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-2xl p-2 shadow-lg">
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setActiveTab('photos')}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    activeTab === 'photos'
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                            >
                                📸 Photos
                            </button>
                            <button
                                onClick={() => setActiveTab('videos')}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    activeTab === 'videos'
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                                }`}
                            >
                                🎥 Videos
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {activeTab === 'photos' ? <ImageUpload /> : <VideoUpload />}
                </div>
            </div>
        </div>
    );
}

export default UploadPage;