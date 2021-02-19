import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton, Box } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayCircleFilledWhite';
import moment from 'moment'

const useStyles = makeStyles({
    root: {
        maxWidth: 300, borderRadius: 10, height: 420, boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)"
    },
    media: {
        height: 200,
    }, menuButton: {
        marginTop: -200, marginLeft: 100
    }, over: {
        marginTop: -200, height: 200,
    }
});

export default function MediaCard(props: any) {
    const classes = useStyles();
    const data = props.data
    const [mousehoverIndex, setmousehoverIndex] = useState(false)
    const mouseEnter = () => {
        setmousehoverIndex(true)
    }
    const mouseLeave = () => {
        setmousehoverIndex(false)
    }
    return (
        <Card className={classes.root} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2FmpiSYp09ysKpNtCy1yGvD1i8jIEyngpA&usqp=CAU'}
                // title="Contemplative Reptile"
                />
                <CardMedia
                    className={classes.over}
                    image={data.thumbnail}
                // title="Contemplative Reptile"
                />
                {mousehoverIndex && <IconButton className={classes.menuButton} >
                    <PlayIcon style={{ height: 80, width: 80, color: 'white', opacity: 0.8 }} />
                </IconButton>}
                <CardContent style={{ height: 130 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                        {data.title}
                    </Typography>
                    <Typography variant="body1"  component="p" style={{marginTop:-5,marginBottom:5,height:22}}>
                    {data.competition.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.
          </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>

                <Box style={{ fontWeight: 800, fontSize: 15, textAlign: 'center', width: '100%', color: 'primary', marginTop: 10 }}> {moment(data.date).format('ddd, MMM D, yyyy, h:mm a')}</Box>

            </CardActions>

        </Card>
    );
}


