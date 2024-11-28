import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-sky-600 mb-6 text-center">
          Book Details
        </h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner />
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <span className="block text-gray-500 font-medium text-lg">ID</span>
                <span className="text-gray-800">{book._id}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-medium text-lg">Title</span>
                <span className="text-gray-800 font-semibold text-xl">{book.title}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-medium text-lg">Author</span>
                <span className="text-gray-800">{book.author}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-medium text-lg">Publish Year</span>
                <span className="text-gray-800">{book.publishYear}</span>
              </div>
              <div>
                <span className="block text-gray-500 font-medium text-lg">Created At</span>
                <span className="text-gray-800">
                  {new Date(book.createdAt).toLocaleString()}
                </span>
              </div>
              <div>
                <span className="block text-gray-500 font-medium text-lg">Last Updated At</span>
                <span className="text-gray-800">
                  {new Date(book.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
