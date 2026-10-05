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

const localVideosList = Object.entries(localVideoFiles).map(([path, src], index) => {
    const filename = path.split("/").pop().replace(/\.[^/.]+$/, "");
    return {
        id: `local-vid-${index}`,
        src: src,
        name: filename
    };
});

// Fallback project videos if no local videos exist
const fallbackProjectVideos = [
    { id: "proj-1", youtubeId: "fMZNogHoeFw" },
    { id: "proj-2", youtubeId: "mR72Z20l4CA" },
    { id: "proj-3", youtubeId: "yi7i39PidLU" }
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
