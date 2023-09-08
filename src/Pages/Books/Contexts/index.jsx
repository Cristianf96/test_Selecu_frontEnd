import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

export const BooksContext = createContext({});

const BooksProvider = ({ children }) => {

    const [dataBooks, setDataBooks] = useState([])
    const [dataBooksSearch, setDataBooksSearch] = useState([])
    const [openDialogView, setOpenDialogView] = useState(false)
    const [idFind, setIdFind] = useState(0)
    const [edit, setEdit] = useState(false)
    const [reload, setReload] = useState(false)
    const [openDialogCreate, setOpenDialogCreate] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (reload) {
                    setReload(false)
                }
                const token = localStorage.getItem('token') ?? '';
                const response = await axios.get(import.meta.env.VITE_URL_BOOKS, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setDataBooks(response.data);
                setDataBooksSearch(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [reload]);

    const hasReload = () => {
        setReload(true)
        setIdFind(0)
        setOpenDialogView(false)
        setEdit(false)
    }

    const filterSearch = (term) => {

        if (!term || term === '') return setDataBooksSearch(dataBooks)

        const filteredBooks = dataBooks.filter(book =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term) ||
            book.publisher.toLowerCase().includes(term)
        );

        setDataBooksSearch(filteredBooks);
    }

    const createBook = async (newBook) => {
        try {
            const token = localStorage.getItem('token') ?? '';
            const response = await axios.post(import.meta.env.VITE_URL_BOOKS, newBook, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDataBooks([...dataBooks, response.data]);
            hasReload()
        } catch (error) {
            console.error('Error creating book:', error);
        }
    };

    const updateBook = async (bookId, updatedBook) => {
        try {
            const token = localStorage.getItem('token') ?? '';
            const updatedBookWithoutIdAndDeleteAt = { ...updatedBook };
            delete updatedBookWithoutIdAndDeleteAt.id;
            delete updatedBookWithoutIdAndDeleteAt.deletedAt;
            const response = await axios.patch(`${import.meta.env.VITE_URL_BOOKS}/${bookId}`, updatedBookWithoutIdAndDeleteAt, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDataBooks(dataBooks.map(book => (book.id === bookId ? response.data : book)));
            hasReload()
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const deleteBook = async (bookId) => {
        try {
            const token = localStorage.getItem('token') ?? '';
            await axios.delete(`${import.meta.env.VITE_URL_BOOKS}/${bookId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setDataBooks(dataBooks.filter(book => book.id !== bookId));
            hasReload()
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <BooksContext.Provider value={{
            dataBooks,
            dataBooksSearch,
            createBook,
            updateBook,
            deleteBook,
            openDialogView,
            setOpenDialogView,
            idFind,
            setIdFind,
            edit,
            setEdit,
            openDialogCreate,
            setOpenDialogCreate,
            filterSearch
        }}>
            {children}
        </BooksContext.Provider>
    )
}

BooksProvider.propTypes = {
    children: PropTypes.node,
};

export default BooksProvider;
