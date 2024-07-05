"use client";
import { useState } from "react";
import { useFormik } from "formik";
import {
  movieUploadInitialValues,
  MovieUploadSchema,
} from "../../../utils/validationsSchema";
import { postRequest } from "@/app/Instances";
import { successMessage } from "@/app/utils/common.util";
import { useQueryClient } from "@tanstack/react-query";

const UploadMovieModal = ({ isOpen, onClose }) => {
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const formik = useFormik({
    initialValues: movieUploadInitialValues,
    validationSchema: MovieUploadSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("movie_name", values.movie_name);
        formData.append("image_url", values.image_url);
        formData.append("description", values.description);
        const options = {
            headers: {
                // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                'Content-Type': 'multipart/form-data'
            }
        };

        await postRequest(`/movie/v1/add`, formData, options);
        queryClient.invalidateQueries('movieData');
        successMessage("Successfully uploaded movie data");
        handleClose();
      } catch (error) {
        console.error("Error uploading movie data:", error);
        errorMessage("Failed to upload movie data.");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleClose = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-gray-500 dark:bg-gray-800 z-[-99] opacity-75"></div>
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-lg w-full mx-auto p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Upload Movie Data
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4">
              <label
                htmlFor="movie_name"
                className="block text-gray-700 dark:text-gray-300"
              >
                Movie Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="movie_name"
                name="movie_name"
                placeholder="Movie Name"
                onChange={formik.handleChange}
                value={formik.values.movie_name}
                className="border-gray-300 dark:border-gray-700 border p-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {formik.errors.movie_name && formik.touched.movie_name && (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.movie_name}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="image_url"
                className="block text-gray-700 dark:text-gray-300"
              >
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="image_url"
                name="image_url"
                placeholder="Image URL"
                onChange={formik.handleChange}
                value={formik.values.image_url}
                className="border-gray-300 dark:border-gray-700 border p-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {formik.errors.image_url && formik.touched.image_url && (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.image_url}
                </p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block text-gray-700 dark:text-gray-300"
              >
                Description <span className="text-red-500">*</span> 
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                onChange={formik.handleChange}
                minLength="30"
                maxLength="400"
                value={formik.values.description}
                className="border-gray-300 outline-none h-[10rem] resize-none dark:border-gray-700 border p-2 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {formik.errors.description && formik.touched.description && (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.description}
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                onClick={formik?.handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                disabled={isLoading}
              >
                {isLoading ? "Uploading..." : "Upload"}
              </button>
              <button
                type="button"
                className="ml-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
                onClick={handleClose}
                disabled={isLoading}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMovieModal;
