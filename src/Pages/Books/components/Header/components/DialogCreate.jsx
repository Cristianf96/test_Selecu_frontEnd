import { useContext, useState } from 'react'; // Asegúrate de importar React y useState
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

const DialogCreate = () => {
    const { openDialogCreate, setOpenDialogCreate, createBook } = useContext(BooksContext);

    const [formData, setFormData] = useState({
        serie: '',
        title: '',
        publisher: '',
        author: '',
        gender: '',
        synopsis: ''
    });

    const handleClose = () => {
        setOpenDialogCreate(false);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: id === 'serie' ? parseInt(value) < 0 ? parseInt(value) * -1 : parseInt(value) : value
        });
    };

    const handleCreate = () => {

        if (!Number.isInteger(Number(formData.serie))) {
            alert('Por favor, ingresa un número entero en el campo Serial.');
            return;
        }

        if (formData.title.trim() === '' || formData.publisher.trim() === '' || formData.author.trim() === '') {
            alert('Por favor, completa los campos obligatorios (Titulo, Editorial y Autor).');
            return;
        }

        console.log({ formData })

        createBook(formData);

        setFormData({
            serie: '',
            title: '',
            publisher: '',
            author: '',
            gender: '',
            synopsis: ''
        });

        handleClose();
    };

    return (
        <Dialog scroll='body' fullWidth open={openDialogCreate} onClose={handleClose}>
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
                        value={formData.serie}
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
                        value={formData.title}
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
                        value={formData.publisher}
                        onChange={handleInputChange}
                    />
                </Box>
                <Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="author"
                        label="Autor*"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.author}
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
                        value={formData.gender}
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
                        value={formData.synopsis}
                        onChange={handleInputChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleCreate}>Crear</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogCreate;
