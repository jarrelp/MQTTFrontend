import PropTypes from 'prop-types';

// material-ui
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// ==============================|| KANBAN BACKLOGS - STORY DELETE ||============================== //

export default function AlertUserDelete({ title, open, handleClose }) {
    return (
        <Dialog
            open={open}
            onClose={() => handleClose(false)}
            keepMounted
            maxWidth="xs"
            aria-labelledby="item-delete-title"
            aria-describedby="item-delete-description"
        >
            {open && (
                <>
                    <DialogTitle variant="subtitle3">{title} - Are you sure you want to delete?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>By deleting user user, all task inside that user user will also be deleted.</DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ mr: 2 }}>
                        <Button onClick={() => handleClose(false)} color="error">
                            Cancel
                        </Button>
                        <Button variant="contained" size="small" onClick={() => handleClose(true)} autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
}

AlertUserDelete.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    title: PropTypes.string
};
