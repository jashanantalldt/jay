"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../layout/layout";
import { CommentsData, movieData } from "../../utils/data";
import { errorMessage, generateColumns, successMessage } from "@/app/utils/common.util";
import { TableCom } from "@/app/components/common/Table/Table";
import UploadMovieModal from "../components/modals/UploadMovieModal";
import { useState } from "react";
import Button from "@/app/components/common/Button/Button";
import { deleteRequest, getRequest } from "@/app/Instances";

const CommentsDetails = () => {
//   const [isOpen,setIsOpen] = useState(false)

  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
  const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
      queryKey: "commentsData",
      queryFn: () => getComments(),
    });

    const getComments =  async () => {
      try {
          const response = await getRequest("/movie/v1/get-comments");
          return response.data.data;
      } catch (error) {
          errorMessage("Failed to get Movies data. Please try again later.");
      }
  };


  const handleCommentDelete = async (data) => {
    try {  
      setIsDeleteLoading(true)
      await deleteRequest(`/movie/v1/remove-comment/${data?.original?.id}`);
      queryClient.invalidateQueries('commentsData');
      successMessage("Comment Deleted Successfully")
    } catch (error) {
      errorMessage('Failed to delete comment!')
      console.error('Failed to delete comment:', error);
    } finally {
      setIsDeleteLoading(false)
    }
  };

//   const handleModal = ()=>{
//     setIsOpen(!isOpen)
//   }

  return (
    <AdminLayout>
      <div>
        <TableCom
          columns={generateColumns(data)}
          // setUserId={setUserId}
          data={data}
          isLoading={isLoading}
          loadingAction={isDeleteLoading}
          handleActionClick={handleCommentDelete}
          actionValue={{
            variant: "danger",
            actionValue: "Delete",
          }}
        //   actionModel={<Button onClick={handleModal}>Add Movie</Button>}
        />
      </div>
    </AdminLayout>
  );
};

export default CommentsDetails;
