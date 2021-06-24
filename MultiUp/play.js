var element = document.querySelector(".theoplayer-container");
var player = new THEOplayer.Player(element, {
    libraryLocation: "https://cdn.myth.theoplayer.com/94978029-4377-4d24-8a28-bc1b44788aa2",
    license: "sZP7IYe6T6P6IDIK0lbz0OkgTuUlFSx60ue-TSar3ZkeIQ0o0S5cIl5_Tuh6FOPlUY3zWokgbgjNIOf9fl5Z0KBr3uaoFSggCS0-3QXlImzrClRcFSCzCSac0QhkCLC_3OfVfK4_bQgZCYxNWoryIQXzImf90SCZTSbrTSfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3lfz3Sho3ueLTS0oFOPeWok1dDrLYtA1Ioh6TgV6UQ1gWtAVCYggb6rlWoz6FOPVWo31WQ1qbta6FOfJfgzVfKxqWDXNWG3ybojkbK3gflNWfGxEIDjiWQXrIYfpCoj-f6i6WQjlCDcEWt3zf6i6v6PUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz"

});

// OPTIONAL CONFIGURATION
// Customized video player parameters
player.source = {
    sources: [{
        "src": "https://chand.warish.workers.dev/3:/FamilySwap.21.06.12.Charly.Summer.And.Katie.Monroe.XXX.1080p.MP4-WRB.mp4",
        "type": "video/mp4"
    }]

};

player.preload = 'auto';

// Related content configuration
player.related.sources = [{
    "image": "//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg",
    "title": "Big buck bunny",
    "duration": "9:57",
    "source": {
        "sources": [{
            "src": "//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8",
            "type": "application/x-mpegurl"
        }]
    }
}, {
    "image": "//cdn2.hubspot.net/hubfs/2163521/Demo_zone/CaminandesLlamaDramaPoster.jpg",
    "title": "4K Streaming with THEOplayer",
    "duration": "1:30",
    "source": {
        "sources": [{
            "src": "//amssamples.streaming.mediaservices.windows.net/634cd01c-6822-4630-8444-8dd6279f94c6/CaminandesLlamaDrama4K.ism/manifest(format=m3u8-aapl)",
            "type": "application/x-mpegurl"
        }]
    }
}, {
    "image": "//cdn.theoplayer.com/video/sintel/poster.jpg",
    "title": "Sintel",
    "duration": "14:47",
    "source": {
        "sources": [{
            "src": "https://cdn.theoplayer.com/video/sintel/nosubs.m3u8",
            "type": "application/x-mpegurl"
        }]
    }
}, {
    "image": "//cdn2.hubspot.net/hubfs/2163521/Demo_zone/tears_of_steel_poster.jpg",
    "title": "Tears of steel",
    "duration": "14:47",
    "source": {
        "sources": [{
            "src": "https://cdn.theoplayer.com/video/elephants-dream/playlist-single-audio.m3u8",
            "type": "application/x-mpegurl"
        }]
    }
}];
// Up next configuration
player.upnext.bar.offset = 100;
player.upnext.source = {
    "image": "//cdn.theoplayer.com/video/big_buck_bunny/poster.jpg",
    "title": "Big buck bunny",
    "duration": "9:57",
    "link": "#"
};
// Social configuration
player.social.url = "http://demo.theoplayer.com/social-sharing";
player.social.items = [{
    "label": "Facebook",
    "icon": "https://en.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png",
    "src": "http://www.facebook.com/sharer/sharer.php?u=<URL>"
}, {
    "label": "Twitter",
    "icon": "https://s-media-cache-ak0.pinimg.com/originals/f3/6f/51/f36f511b261596a2debe85d844bb1b87.png",
    "src": "http://twitter.com/intent/tweet?url=<URL>"
}, {
    "label": "Reddit",
    "icon": "https://vignette3.wikia.nocookie.net/hayday/images/1/10/Reddit.png/revision/latest?cb=20160713122603",
    "src": "http://www.reddit.com/submit?url=<URL>"
}, {
    "label": "Direct link",
    "src": "http://demo.theoplayer.com/social-sharing"
}, {
    "label": "Embed",
    "text": "<iframe width=\"640\" height=\"360\" src=\"http://demo.theoplayer.com/social-sharing\" frameborder=\"0\" allowfullscreen>\n</iframe>"
}];
