import { useState } from "react"
import { BookType } from "../../types/book/book.type";
import axios from "axios";

const useGetBooks = () => {
  const [bookData, setBookData] = useState<BookType[]>([]);
  const getBooks = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/suggests/books`);
    console.log(res.data);
    setBookData(res.data);
  }

  return{
    bookData,
    getBooks
  }
}

export default useGetBooks