import React from 'react'
import { makeStyles, createStyles, Theme, fade, InputBase, TextField, Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        inputRoot: {
            //   color: 'inherit',
            width: '70%', margin: 20

        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%', backgroundColor: 'red'

        }, button: { height: 50, marginTop: 20, width: 100 }
    }),
);

 interface Props {
    onSearch: (value: string) => void;
  }
function SearchBar({onSearch}:Props) {
    const classes = useStyles();
    const valueChange=(event: any) => {
console.log(event.target.value);
onSearch(event.target.value)

    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" >
                    <OutlinedInput id="outlined-basic" placeholder="Search a match" className={classes.inputRoot} onChange={valueChange}/>
                    <Button variant="contained" color="primary" placeholder="Search a match" aria-placeholder="inherit" className={classes.button}>Search</Button>
                </Grid>
            </Grid>
         
        </Grid>
    )
}

export default SearchBar
