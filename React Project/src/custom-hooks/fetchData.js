import { useEffect, useState } from "react";

const useFetch = ({ url }, dependencies) => {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("loading"); // loading, error, success
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!url) {
            setStatus("error");
            return;
        }
        setStatus("loading");
        async function getData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const data = await response.json();
                setData(data);
                setStatus("success");
            } catch (error) {
                setStatus("error");
                setError(error.message);
            }
        }
        getData();
    }, dependencies);

    return { data, status, error };
}

const isLoading = (status) => status === "loading";
const isSuccess = (status) => status === "success";
const isError = (status) => status === "error";

export { useFetch, isLoading, isSuccess, isError };