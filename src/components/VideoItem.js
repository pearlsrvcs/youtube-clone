import React from 'react'
import {Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
      <Grid item xs={12}>
        <Paper style={{ diplay: 'flex', alignItems: 'center', cursor: "pointer"}} onClick={() => onVideoSelect(video)}>
          <img style = {{marginRight: '20px'}} alt="thumbnail" src={ video.snippet.thumbnails.medium.url } />
          <Typography varians="subtitle1"><b>{video.snippet.title}</b></Typography>
        </Paper>
      </Grid>
  )
}

export default VideoItem