import axios from 'axios';
import axiosInstance from "./axiosInstance.ts";

interface DataPayload {
    email?: string;
    password?: string;
    [key: string]: unknown;
}



const makeRequest = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    url: string = '',
    data: DataPayload | null = null,
    formData?: FormData,
) => {
    try {
        return await axiosInstance({
            method: method,
            data: formData || data,
            url: url,
        });
    } catch (error) {
        // Check if it's an AxiosError and throw the complete error, not just the data
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
        }
        else{
            console.log(error);
        }
        throw error;
    }
};

export default makeRequest;
