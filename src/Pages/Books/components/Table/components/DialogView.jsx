import { useContext, useState, useEffect } from 'react'
import { BooksContext } from '../../../Contexts';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';

const DialogView = () => {

    const { dataBooks, openDialogView, setOpenDialogView, idFind, setIdFind, edit, setEdit, updateBook } = useContext(BooksContext)

    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        const book = dataBooks.find(item => item.id === idFind);
        setEditedData(book);
    }, [idFind, dataBooks]);

    const handleClose = () => {
        setOpenDialogView(false);
        setIdFind(0)
        setEdit(false)
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setEditedData(prevData => ({
            ...prevData,
            [id]: id === 'serie' ? parseInt(value) < 0 ? parseInt(value) * -1 : parseInt(value) : value
        }));
    };

    return editedData && Object.keys(editedData).length > 0 && (
        <Dialog scroll='body' fullWidth open={openDialogView} onClose={handleClose}>
            <DialogTitle textAlign={'center'}>Book</DialogTitle>
            <DialogContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}
            >
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="serie"
                        label="Serial"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={editedData.serie}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Titulo*"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedData.title}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="publisher"
                        label="Editorial*"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedData.publisher}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="author"
                        label="Autor"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedData.author}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="gender"
                        label="Genero"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={editedData.gender}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        multiline
                        autoFocus
                        margin="dense"
                        id="synopsis"
                        label="Sinopsis"
                        fullWidth
                        variant="outlined"
                        value={editedData.synopsis}
                        InputProps={{
                            readOnly: edit ? false : true,
                        }}
                        onChange={handleInputChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color='error' variant='contained' onClick={handleClose}>Cancel</Button>
                {edit && <Button color='success' variant='contained' onClick={() => updateBook(editedData.id, editedData)}>Editar</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default DialogView