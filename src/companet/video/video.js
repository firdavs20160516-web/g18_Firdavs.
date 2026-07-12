import React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import VideoCard from "../video-card/video-card";
import Box from "@mui/material/Box";
import Channel from "../channel/channel";
import ChannelCard from "../channel-card/channel-card";

const Video = ({data}) => {
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            gap={1}
        >
            {data.map((item, idx) => (
                <Box key={idx}>
                    {item.id?.videoId && <VideoCard video={item}/>}
                    {item.id?.channelId && <ChannelCard channel={item}/>}
                </Box>
            ))}
        </Stack>
    );
}
export default Video;