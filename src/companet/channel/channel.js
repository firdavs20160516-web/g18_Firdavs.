import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../api-service/api-service";
import {Container, Stack} from "@mui/material";
import ChannelCard from "../channel-card/channel-card";
import Video from "../video/video";
import Box from "@mui/material/Box";


const Channel = () => {
    const {id} = useParams()
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideos, setChannelVideo] = useState([])


    useEffect(() => {
        ApiService.fetching(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data.items[0]))
        ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(dataVideo => setChannelVideo(dataVideo.items))
    }, [id])


    return (
        <Box minHeight={'95vh'}>
            <Box>
                <Box width={'100%'}
                     height={'200px'}
                     zIndex={10}
                     sx={{
                         backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         display: 'flex',
                         justifyContent: 'center',
                         objectFit: 'cover',
                         backgroundRepeat: 'no-repeat'
                     }}
                >
                    <ChannelCard channel={channelDetail} marginTop={'60px'} marginL={'40px'}/>
                </Box>
                <Container maxWidth={'100%'} sx={{marginTop: '200px',}}>
                    <Video data={channelVideos}/>
                </Container>
            </Box>
        </Box>
    );
}

export default Channel;