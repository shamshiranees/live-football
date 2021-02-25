import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import NavBar from '../Components/NavBar'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../Redux/Reducers';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }))
function ViewPlayerView() {
    let parmas: any = useParams();
    const footballData = useSelector((state: AppState) => state.home.sortedData);
    return (
        <div>
            <NavBar />
            <div >
                <div dangerouslySetInnerHTML={{ __html: footballData[parmas.videoId].embed }}></div>
            </div>
        </div>
    )
}

export default ViewPlayerView
