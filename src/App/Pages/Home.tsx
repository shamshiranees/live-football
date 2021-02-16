import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFootballData, setsortedData } from '../Redux/Actions/home'
import { AppState } from '../Redux/Reducers/index'
import MediaCard from '../Components/HomeCard'
import { Grid, makeStyles, createStyles, Theme, GridSpacing, Card, CardMedia, Typography, Box, InputBase, Button, AppBar, Toolbar, IconButton } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/SportsSoccer';
import SearchBar from '../Components/SearchBar'
import NavBar from '../Components/NavBar'
import { useHistory } from "react-router-dom";
import { Match } from '../Models/Matches'
function Home(props: any) {
    const dispatch = useDispatch()

    const footballData = useSelector(({ home }: AppState) => home.data);
    const sortedList = useSelector(({ home }: AppState) => home.sortedData);
    const [searchText, setsearchText] = useState('')
    useEffect(() => {
        dispatch(fetchFootballData())
    }, [])

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                // flexGrow: 1,
                //  height: 500,
                // marginLeft: 80,
                // marginRight: 80,
                // [theme.breakpoints.down("sm")]: {
                //     margin: 0
                // }
            }, grid: {
                marginTop: 0
            },
            search: {
                position: "relative",
                borderRadius: 20,
                // backgroundColor: "#FFFFFF",
                marginLeft: 0,
                width: "100%"
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            media: {
                height: 450
                //  objectFit: 'contain',
                // paddingTop: "56.25%",
                // backgroundColor: "rgba(0,0,0,.5)",
                // [theme.breakpoints.down("sm")]: {
                //     height: 200
                // }
            },
            inputRoot: {
                color: "inherit",
                width: "100%",
                [theme.breakpoints.down("sm")]: {
                    width: 270
                }
            },
            inputInput: {
                padding: theme.spacing(1.5, 1.5, 1.5, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                width: "100%"
            },
            button: {
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(0.2)}px)`,
                borderRadius: 20,
                width: 100
            },
            overlay: {
                position: "absolute",
                height: 225,
                padding: 80,
                top: "64px",
                left: "0px",
                 backgroundColor: 'rgba(0,0,0,0.3)',
                [theme.breakpoints.down("sm")]: {
                    top: 60,
                    left: 20,
                    width: "100%"
                }
            },
            title: {
                flexGrow: 1,
            },
        }),
    );
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();
    const onSearch = (text: string) => {
        if (text === '') {
            dispatch(setsortedData(footballData))
        } else {
            const val = JSON.parse(JSON.stringify(footballData))
            const sortedArray = val.filter(({ title }: any) => title.toLowerCase().includes(text.toLowerCase()));
            dispatch(setsortedData(sortedArray))

        }

    };
    const history = useHistory();

    const tapCard = (val: number) => {
        history.push(`/player/${val}`);
    }
    return (
        <div>

            <Card className={classes.root}>
                <NavBar />
                <CardMedia
                    image={'https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg'}
                    className={classes.media}
                />

                <div className={classes.overlay}>
                    <Typography style={{ color: "#FFFFFF" }} component="div">
                        <Box style={{ fontWeight: 800, fontSize: 70 }}>Welcome home</Box>
                        <Box style={{ fontWeight: 600, fontSize: 40, color: 'yellow' }}>
                            Expore the goals and highlights from a number of football leagues and tournaments
            </Box>
                    </Typography>
                    <br></br>
                </div>
            </Card>
            <SearchBar onSearch={onSearch} />
            <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {sortedList.map((value: any, index: number) => (
                            <Grid key={value} item onClick={() => tapCard(index)}>
                                <MediaCard data={value} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
        </div>



    )
}

Home.propTypes = {

}

export default Home

