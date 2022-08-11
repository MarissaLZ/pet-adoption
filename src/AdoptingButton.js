import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import AdoptionForm from './AdoptionForm';

const AdoptingButton = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={handleClickOpen}>
                Adopt Me
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <AdoptionForm handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AdoptingButton