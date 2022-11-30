import axios from "axios";

export const getData = async (url: string, setState, setIsLoading) => {

    let config = {
        headers: {
            accept: "application/json",
            ContentType: "application/json"
        }
    };

    const { data } = await axios.get(url, config);
    setState(data);
    setIsLoading(false)
}