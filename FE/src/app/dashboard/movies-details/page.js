"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../layout/layout";
import { movieData } from "../../utils/data";
import { errorMessage, generateColumns, successMessage } from "@/app/utils/common.util";
import { TableCom } from "@/app/components/common/Table/Table";
import UploadMovieModal from "../components/modals/UploadMovieModal";
import { useState } from "react";
import Button from "@/app/components/common/Button/Button";
import { deleteRequest, getRequest } from "@/app/Instances";

const MoviePage = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false)
  const queryClient = useQueryClient();

  const getMovieDetails = async () => {
    try {
      const response = await getRequest("/movie/v1/get-movie");
      return response.data.data;
    } catch (error) {
      errorMessage("Failed to get Movies data. Please try again later.");
      console.log(error)
      throw new Error("Failed to fetch movies data");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["movieData"],
    queryFn: getMovieDetails,
  });



  const handleMovieDelete = async (data) => {
    try {  
      setIsDeleteLoading(true)
      await deleteRequest(`/movie/v1/remove/${data?.original?._id}`);
      queryClient.invalidateQueries('movieData');
      successMessage("video Deleted Successfully")
    } catch (error) {
      errorMessage('Failed to delete video!')
      console.error('Failed to delete video:', error);
    } finally {
      setIsDeleteLoading(false)
    }
  };

  const handleModal = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <AdminLayout>
      <div>
        <TableCom
          columns={generateColumns(data)}
          // setUserId={setUserId}
          data={data}
          isLoading={isLoading}
          loadingAction={isDeleteLoading}
          handleActionClick={handleMovieDelete}
          actionValue={{
            variant: "danger",
            actionValue: "Delete",
          }}
          actionModel={<Button onClick={handleModal}>Add Movie</Button>}
        />
      </div>
      <UploadMovieModal isOpen={isOpen} onClose={handleModal}  />
    </AdminLayout>
  );
};

export default MoviePage;
