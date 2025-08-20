import toast from "react-hot-toast";

const AxiosToastError = (error) => {
  toast.error(error?.responde?.data?.message);
};

export default AxiosToastError;
