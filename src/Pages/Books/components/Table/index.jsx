import { useContext } from 'react'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BooksContext } from '../../Contexts';
import DialogView from './components/DialogView';

const TableBooks = () => {

    const { dataBooksSearch, setOpenDialogView, setIdFind, setEdit, deleteBook } = useContext(BooksContext)

    const hasDialogViewOpen = (id) => {
        setOpenDialogView(true);
        setIdFind(id)
    }

    const hasDialogEditOpen = (id) => {
        setOpenDialogView(true);
        setEdit(true)
        setIdFind(id)
    }

    return (
        <>
            <DialogView />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Serial</TableCell>
                            <TableCell align='center'>Titulo</TableCell>
                            <TableCell align='center'>Editorial</TableCell>
                            <TableCell align="center">Autor</TableCell>
                            <TableCell align="center">Genero</TableCell>
                            <TableCell align="center">Sinopsis</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataBooksSearch.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.serie}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.publisher}</TableCell>
                                <TableCell align="left">{row.author}</TableCell>
                                <TableCell align="left">{row.author}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.synopsis}</TableCell>
                                <TableCell align="left">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 1
                                        }}
                                    >
                                        <Box>
                                            <IconButton onClick={() => hasDialogViewOpen(row.id)}>
                                                <VisibilityIcon color='info' />
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            <IconButton onClick={() => hasDialogEditOpen(row.id)}>
                                                <EditIcon color='success' />
                                            </IconButton>
                                        </Box>
                                        <Box>
                                            <IconButton onClick={() => deleteBook(row.id)}>
                                                <DeleteIcon color='error' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableBooks