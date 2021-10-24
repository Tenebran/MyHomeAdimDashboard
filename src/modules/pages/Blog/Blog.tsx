import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export const Blog = () => {
  return (
    <Container fixed>
      {/* <Grid container className="add-todolist">
<AddItemForm addItem={addTodoList} classTitle={'add-item-form'} />
</Grid> */}

      <Grid container spacing={5}>
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
