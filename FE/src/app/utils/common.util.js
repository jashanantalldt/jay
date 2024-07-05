import { toast } from "sonner";

export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};


export const generateColumns = (data) => {
  const columns = [];

  if (data?.length > 0) {
    const firstItem = data[0];
    Object.keys(firstItem).forEach((key) => {
      columns.push({
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1).replace("_", " "),
        cell: ({ row }) => <div>{row.getValue(key)}</div>,
      });
    });
  }

  return columns;
};

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
