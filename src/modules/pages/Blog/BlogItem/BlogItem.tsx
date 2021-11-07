import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useCallback, useState } from 'react';
import { BlogType } from '../../../../store/blog-reducers';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import BlogPopUp from '../../../components/BlogPopUp/BlogPopUp';
import { BlogItemInfo } from './BlogItemInfo/BlogItemInfo';
import { BlogItemEdit } from './BlogItemEdit/BlogItemEdit';

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

  const imageHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setimage(event.target.value);
    },
    [setimage]
  );

  const subTitleHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setsubtitle(event.target.value);
    },
    [setsubtitle]
  );

  const titleHandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      settitle(event.target.value);
    },
    [settitle]
  );

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
        <BlogItemInfo
          image={props.blog.image}
          title={props.blog.title}
          subtitle={props.blog.subtitle}
        />

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
              <BlogItemEdit
                image={image}
                imageHandleChange={imageHandleChange}
                title={title}
                titleHandleChange={titleHandleChange}
                subtitle={subtitle}
                subTitleHandleChange={subTitleHandleChange}
              />

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
