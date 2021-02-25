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
                // position: "absolute",
                // height: 265,
                // padding: 80, paddingTop: 40,
                // top: "64px",
                // left: "0px",
                padding:30,paddingTop:80,backgroundImage: "url(" + "https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg" + ")",
                // [theme.breakpoints.down("sm")]: {
                //     top: 60,
                //     left: 20,
                //     width: "100%"
                // }
            },
            title: {
                flexGrow: 1,
            },
        }),
    );
function Home(props: any) {
    const dispatch = useDispatch()
    const footballData = useSelector(({ home }: AppState) => home.data);
    const sortedList = useSelector(({ home }: AppState) => home.sortedData);
    const [searchText, setsearchText] = useState('')
    useEffect(() => {
        dispatch(fetchFootballData())
    }, [])

    
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
                {/* <AppTest/> */}
                <NavBar />
                {/* <CardMedia
                    image={'https://images.pexels.com/photos/270085/pexels-photo-270085.jpeg'}
                    className={classes.media}
                /> */}

                <div className={classes.overlay}>
                    <Grid container spacing={3} style={{height:'auto'}}>

                    {/* <div className={classes.overlay}>  */}

                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            <Typography style={{ color: "#FFFFFF" }} component="div">
                                <Box style={{ fontWeight: 800, fontSize: 70, fontFamily: "'Source Sans Pro', sans-serif",lineHeight:1 }}>Welcome home</Box>
                                <Box style={{ fontWeight: 600, fontSize: 40, color: 'yellow', fontFamily: "'Source Sans Pro', sans-serif" ,lineHeight:1}}>
                                    Expore live scores, goals and highlights from a number of football leagues and tournaments
  </Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>

                            <div style={{ height: 300, borderRadius: 8 ,overflow:'hidden',paddingBottom:20}} dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.scorebat.com/embed/livescore/" frameborder="0" width="100%" height="440px" allowfullscreen allow='autoplay; fullscreen' style="width="100%";height="440px";overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>` }}></div>


                        </Grid>
                        {/* </div> */}
                    </Grid>
                </div>
            </Card>



            <SearchBar onSearch={onSearch} />
            <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {sortedList.map((value: any, index: number) => (
                            <Grid key={value.date + index} item onClick={() => tapCard(index)}  >
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

