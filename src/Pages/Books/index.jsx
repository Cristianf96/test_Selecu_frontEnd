import { Box } from "@mui/material"
import NavComponent from "../../components/Nav"
import BooksProvider from "./Contexts"
import HeaderBooks from "./components/Header"
import TableBooks from "./components/Table"

const Books = () => {
    return (
        <Box marginTop={'50px'}>
            <Box>
                <NavComponent />
            </Box>
            <Box>
                <BooksProvider>
                    <HeaderBooks />
                    <TableBooks />
                </BooksProvider>
            </Box>
        </Box>
    )
}

export default Books