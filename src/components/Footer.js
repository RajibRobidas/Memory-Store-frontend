import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/photos" className="hover:text-gray-400">Photos</a>
                    <a href="/video" className="hover:text-gray-400">Video</a>
                    <a href="/contact" className="hover:text-gray-400">Contact</a>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                </div>
                <p className="text-sm">About MemoryStore. Additional Resources.</p>
            </div>
        </footer>
    );
}

export default Footer;