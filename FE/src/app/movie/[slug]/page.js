"use client";
import { getRequest, postRequest } from "@/app/Instances";
import SignIn from "@/app/components/auth/SignIn";
import Button from "@/app/components/common/Button/Button";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { errorMessage, successMessage } from "@/app/utils/common.util"; // Make sure to import errorMessage

const MovieDetails = () => {
  // State for managing comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { slug } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  const getMovieDetails = async () => {
    try {
      const response = await getRequest(`/movie/v1/get-movie/${slug}`);
      setComments(response.data.data[0]?.comments || []);
      return response.data.data[0];
    } catch (error) {
      errorMessage("Failed to get Movies data. Please try again later.");
      console.log(error);
      throw new Error("Failed to fetch movies data");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["movieGetById", slug],
    queryFn: getMovieDetails,
    enabled: !!slug,
  });

  const handelLoginForm = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  // Handle form submission for adding new comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    if (!JSON.parse(localStorage.getItem("isLogin"))) {
      handelLoginForm();
      return;
    }

    // Validate comment
    if (newComment.trim() === "") {
      return;
    }

    const newCommentObj = {
      commentedBy: user?.id,
      comment: newComment,
      movie_id: slug,
    };

    try {
      // Post new comment
      const response = await postRequest(`/movie/v1/add-comment`, newCommentObj);
      successMessage("Comment added successfully");

      // Update comments state
      setComments([
        { ...newCommentObj, user: { userName: user?.userName } },
        ...comments,
      ]);

      // Clear comment input
      setNewComment("");
    } catch (error) {
      errorMessage("Failed to add comment. Please try again later.");
      console.error("Error adding comment:", error);
    }
  };




  return (
    <div className="pt-12 lg:pt-24 pl-[30px] md:pl-[2rem] lg:pl-[70px] flex flex-col lg:flex-row gap-12">
      {/* Movie Image */}
      <div className="w-[250px] h-[19rem] relative mt-6 lg:mt-0">
        {isLoginOpen && <SignIn onClose={handelLoginForm} />}
        <Image
          src={data?.image_url}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      {/* Movie Details */}
      <div className="flex flex-col w-full ">
        <h2 className="font-medium text-[20px] mb-2">About Movie</h2>
        <span className="text-black text-4xl mb-4 capitalize">
          {data?.movieName}
        </span>
        <p className="text-sm lg:text-base">{data?.description}</p>

        {/* Comments Section */}
        <div className="mt-8 lg:mt-0 lg:w-[60%]">
          <h2 className="font-medium text-[20px] mb-4 mt-4">Comments</h2>

          {/* Add Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <label className="block mb-1 text-sm font-medium">
              Add a Comment:
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="3"
              value={newComment}
              onClick={(e) => {
                if (JSON.parse(localStorage.getItem("isLogin"))) {
                  return;
                }
                handelLoginForm();
                e.target.blur();
              }}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              variant="primary"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Comment
            </button>
          </form>

          {/* Existing Comments */}
          {comments.length === 0 ? (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment) => (
              <div key={comment?._id} className="flex mb-4">
                <div className="rounded-full overflow-hidden w-10 h-10 flex-shrink-0">
                  <Image
                    src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D`}
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="ml-3 bg-gray-100 p-3 rounded-lg flex-1">
                  <p className="text-sm font-semibold">
                  {comment?.user?.userName || "testname"} 
                  </p>
                  <p className="text-sm">{comment?.comment}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
