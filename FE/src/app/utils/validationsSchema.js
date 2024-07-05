import * as Yup from "yup";

export const movieUploadInitialValues = {
  movie_name: "",
  description: "",
  image_url: "",
};

export const MovieUploadSchema = Yup.object({
  movie_name: Yup.string().required("Movie name is required"),
  description: Yup.string().required("Description is required"),
  image_url: Yup.string()
    .url("Invalid URL format")
    .matches(/^https?:\/\//, "URL must start with http:// or https://")
    .required("Image URL is required"),
});
