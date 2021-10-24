import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { BlogType, getBlogTC } from '../../../store/blog-reducers';
import { AppRootStateType } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';

export const Blog = () => {
  const blog = useSelector<AppRootStateType, Array<BlogType>>(state => state.blog.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogTC());
  }, []);

  console.log(blog);

  return (
    <Container fixed>
      {/* <Grid container className="add-todolist">
<AddItemForm addItem={addTodoList} classTitle={'add-item-form'} />
</Grid> */}

      <Grid container spacing={5}>
        {blog.map(blog => {
          return (
            <Grid item key={blog.id}>
              <Paper elevation={5}>
                <div>{blog.title}</div>
              </Paper>
            </Grid>
          );
        })}
        {/* {todolist.map(list => {
  return (
    <Grid item key={list.id}>
      <Paper className="paper-wrapepr" elevation={5}>
       
      </Paper>
    </Grid>
  );
})} */}
      </Grid>
    </Container>
  );
};
