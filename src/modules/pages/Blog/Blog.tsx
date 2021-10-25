import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import {
  addBlogTC,
  BlogType,
  deleteBlogTC,
  getBlogTC,
  updateBlogTC,
} from '../../../store/blog-reducers';
import { AppRootStateType } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import './Blog.scss';
import { BlogItem } from './BlogItem/BlogItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@material-ui/core/Button';
import LoadingButton from '@mui/lab/LoadingButton';

export const Blog = () => {
  const blog = useSelector<AppRootStateType, Array<BlogType>>(state => state.blog.blog);
  const [title, settitle] = useState<string>('');
  const [subtitle, setsubtitle] = useState<string>('');
  const [image, setimage] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogTC());
  }, []);

  const imageHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setimage(event.target.value);
  };

  const subTitleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsubtitle(event.target.value);
  };
  const titleHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settitle(event.target.value);
  };

  const addBlogCancel = () => {
    setimage('');
    settitle('');
    setsubtitle('');
  };

  const oncklickAddBlockHandler = () => {
    dispatch(addBlogTC(title, image, subtitle));
    setimage('');
    settitle('');
    setsubtitle('');
  };

  const updateBlogHandler = (id: string, title: string, image: string, subtitle: string) => {
    dispatch(updateBlogTC(id, title, image, subtitle));
  };

  const deleteBlogHandler = (id: string) => {
    dispatch(deleteBlogTC(id));
  };
  return (
    <Container fixed>
      <Grid container spacing={5}>
        <Grid item className="blog">
          <Paper elevation={5} className="blog__paper">
            <h1>Add New Post</h1>
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
              <Button variant="contained" color="secondary" onClick={addBlogCancel}>
                Cancel
              </Button>
              <LoadingButton
                color="secondary"
                onClick={oncklickAddBlockHandler}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="contained"
              ></LoadingButton>
            </div>
          </Paper>
        </Grid>
        {blog.map(blog => {
          return (
            <BlogItem
              key={blog.id}
              blog={blog}
              updateBlogHandler={updateBlogHandler}
              deleteBlogHandler={deleteBlogHandler}
            />
          );
        })}
      </Grid>
    </Container>
  );
};
