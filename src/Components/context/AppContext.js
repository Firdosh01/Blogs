import { createContext, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useNavigate } from "react-router-dom";



export const AppContext = createContext()


export default function AppContextProvider({ children }) {

    const [loading, setloading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)
    const navigate = useNavigate()


    async function fetchBlogPosts (page = 1, tag=null, category) {
        setloading(true)

        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category) {
            url += `&category=${category}`
        }

        try{
            const result = await  fetch(url)
            const data = await result.json();
            if(!data.posts || data.posts.lenth == 0)
            throw new Error("Something went wrong");
            console.log("API response", data)
            console.log(data)
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1)
            setPosts([])
            setTotalPages(null)

        }
        setloading(false)
    }

    function handlePageChange(page) {
        navigate({search: `page=${page}`})
        setPage(page);
        // console.log(page);
        // fetchBlogPosts(page);
    }


    const values = {
        loading,
        setloading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }


    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>


}