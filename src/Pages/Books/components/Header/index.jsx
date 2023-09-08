import { Box, Button, TextField, InputAdornment } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react'
import { BooksContext } from '../../Contexts';
import DialogCreate from './components/DialogCreate';

const HeaderBooks = () => {

    const { setOpenDialogCreate } = useContext(BooksContext)

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: 'center',
                marginBottom: '10px'
            }}
        >
            <DialogCreate />
            <Box>
                <TextField
                    placeholder='Titulo, Autor o Editorial...'
                    size='small'
                    sx={{
                        bgcolor: '#FFF',
                        borderRadius: '15px',
                        boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.15)',
                    }}
                    InputProps={{
                        sx: { borderRadius: '15px' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Box>
                <Button onClick={() => setOpenDialogCreate(true)} variant="contained" color='success' endIcon={<AddIcon />}>
                    Añadir
                </Button>
            </Box>
        </Box>
    )
}

export default HeaderBooks