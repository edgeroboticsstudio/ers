// Automatically load all workshop photos from src/assets/workshops/
const workshopFiles = import.meta.glob("../assets/workshops/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}", {
    eager: true,
    import: "default"
});

// Curated descriptions for workshop photos
const workshopDescriptions = {
    "Arduino Day 2026": "Hands-on robotics rover prototyping and line-following track testing on Arduino Day 2026.",
    "Training Session At MET Bhujabal": "Robotics programming and embedded systems training session at MET Bhujbal Knowledge City.",
    "Training Session At VNR VJIET": "Robotic arm manipulator kinematics and industrial control session at VNR VJIET."
};

// Workshop Photos - Photo + Single line description (just like Blog cards)
export const workshopPhotos = Object.entries(workshopFiles).map(([path, src], index) => {
    const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
    return {
        id: `ws-${index + 1}`,
        image: src,
        title: filename,
        description: workshopDescriptions[filename] || `${filename} - Edge Robotics Studio workshop session.`
    };
});

// Automatically load all project videos from src/assets/videos/
const localVideoFiles = import.meta.glob("../assets/videos/*.{mp4,MP4,webm,mov,MOV}", {
    eager: true,
    import: "default"
});

// Automatically load all video thumbnails from src/assets/video-thumbnails/
const localThumbnailFiles = import.meta.glob("../assets/video-thumbnails/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}", {
    eager: true,
    import: "default"
});

const thumbnailMap = {};
Object.entries(localThumbnailFiles).forEach(([path, src]) => {
    const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
    thumbnailMap[filename] = src;
});

const localVideosList = Object.entries(localVideoFiles).map(([path, src], index) => {
    const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
    return {
        id: `local-vid-${index}`,
        src: src,
        poster: thumbnailMap[filename] || null,
        name: filename
    };
});

// Fallback project videos if no local videos exist
const fallbackProjectVideos = [
    { id: "proj-1", youtubeId: "fMZNogHoeFw", poster: "https://img.youtube.com/vi/fMZNogHoeFw/maxresdefault.jpg" },
    { id: "proj-2", youtubeId: "mR72Z20l4CA", poster: "https://img.youtube.com/vi/mR72Z20l4CA/maxresdefault.jpg" },
    { id: "proj-3", youtubeId: "yi7i39PidLU", poster: "https://img.youtube.com/vi/yi7i39PidLU/maxresdefault.jpg" }
];

export const projectVideos = localVideosList.length > 0 ? localVideosList : fallbackProjectVideos;

// YouTube Videos - Direct YouTube videos requested by user
export const youtubeVideos = [
    {
        id: "yt-1",
        youtubeId: "mR72Z20l4CA"
    },
    {
        id: "yt-2",
        youtubeId: "yi7i39PidLU"
    },
    {
        id: "yt-3",
        youtubeId: "fMZNogHoeFw"
    }
];
