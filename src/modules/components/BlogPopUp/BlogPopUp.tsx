import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './BlogPopUp.scss';

export default function AlertDialog(props: PopUpPropsType) {
  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.deleteBlogHandler(props.id);
    props.setOpen(false);
  };

  const handleOnlyClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete This Post?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The post <span className="popUp__title">"{props.title}"</span> will be deleted
            permanently. Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnlyClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

type PopUpPropsType = {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  deleteBlogHandler: (id: string) => void;
  id: string;
};
