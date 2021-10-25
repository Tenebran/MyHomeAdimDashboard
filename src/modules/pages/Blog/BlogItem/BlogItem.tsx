import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { BlogType } from '../../../../store/blog-reducers';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import BlogPopUp from '../../../components/BlogPopUp/BlogPopUp';

export const BlogItem = (props: BlogItemProps) => {
  const [edit, setedit] = useState<boolean>(false);
  const [title, settitle] = useState<string>(props.blog.title);
  const [subtitle, setsubtitle] = useState<string>(props.blog.subtitle);
  const [image, setimage] = useState<string>(props.blog.image);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);

  const openEditHandler = () => {
    if (!edit) {
      setedit(true);
    } else {
      setedit(false);
    }
  };

  const imageHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setimage(event.target.value);
  };

  const subTitleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsubtitle(event.target.value);
  };
  const titleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settitle(event.target.value);
  };

  const onUpdateHandler = () => {
    props.updateBlogHandler(props.blog.id, title, image, subtitle);
    setedit(false);
  };
  return (
    <Grid item key={props.blog.id} className="blog">
      <Paper elevation={5} className="blog__paper">
        <BlogPopUp
          open={popupOpen}
          setOpen={setPopupOpen}
          title={props.blog.title}
          id={props.blog.id}
          deleteBlogHandler={props.deleteBlogHandler}
        />
        <img src={props.blog.image} className="blog__image" />
        <div>
          <span className="blog__title">Title:</span> {props.blog.title}
        </div>
        <div>
          <span>
            <span className="blog__title">Subtitle:</span> {props.blog.subtitle}
          </span>
        </div>

        <div className="blog__button_edit">
          {!edit ? (
            <div className="blog__button-wrapper">
              <Button variant="contained" color="secondary" onClick={() => setPopupOpen(true)}>
                Delete
              </Button>
              <Button variant="contained" color="primary" onClick={openEditHandler}>
                Edit
              </Button>
            </div>
          ) : (
            ''
          )}

          {edit ? (
            <>
              <div className="blog__editplace">
                <TextField
                  id="standard-basic"
                  label="image"
                  variant="filled"
                  value={image}
                  multiline
                  fullWidth
                  onChange={imageHandleChange}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="title"
                  variant="filled"
                  multiline
                  fullWidth
                  value={title}
                  onChange={titleHandleChange}
                />
                <TextField
                  id="standard-basic"
                  label="subtitle"
                  variant="filled"
                  multiline
                  fullWidth
                  value={subtitle}
                  onChange={subTitleHandleChange}
                />
              </div>
              <div className="blog__button-wrapper">
                <Button variant="contained" color="secondary" onClick={openEditHandler}>
                  Cancel
                </Button>
                <LoadingButton
                  color="secondary"
                  onClick={onUpdateHandler}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                  variant="contained"
                >
                  Save
                </LoadingButton>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </Paper>
    </Grid>
  );
};

type BlogItemProps = {
  blog: BlogType;
  updateBlogHandler: (id: string, title: string, image: string, subtitle: string) => void;
  deleteBlogHandler: (id: string) => void;
};
