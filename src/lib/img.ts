const base = import.meta.env.BASE_URL;

/** Resolve a bundled image in /public/images to a base-aware URL. */
export const img = (name: string) => `${base}images/${name}.webp`;

/** Resolve a video file in /public/images/videos to a base-aware URL. */
export const video = (name: string) => `${base}images/videos/${name}.mp4`;

/**
 * Galerija items — 6 fresh food/dish photos + 6 atmosphere/character DSC
 * shots + 6 video clips, mixed naturally.  Videos are prefixed with
 * "video:" and render as autoplay portrait clips (no controls).
 */
export const GALLERY = [
  "gallery/new-1",        // risotto with asparagus
  "video:video1",
  "gallery/new-2",        // glazed pork w/ potato + beetroot
  "gallery/dsc_0863",     // river view through window
  "gallery/new-3",        // creamy meat + cheese close-up
  "video:video2",
  "gallery/dsc_0867",     // dining hall with lamps
  "gallery/new-4",        // red wine being poured
  "gallery/dsc_0884",     // candelabra + pineapple banquet
  "gallery/dsc_0871",     // table setting, teal wall
  "gallery/new-5",        // pasta with burrata + tomato
  "video:video3",
  "gallery/dsc_0875",     // banquet goblets close
  "gallery/new-6",        // pljeskavica + ajvar
  "gallery/dsc_0887",     // bar with bottles
  "gallery/dsc_0860",     // chandelier interior alt
  "video:video4",
  "gallery/dsc_0890",     // dried peppers + jars (detail)
  "video:video5",
  "gallery/dsc_0893",     // dining hall at night
  "video:video6",
];

/** True if a GALLERY item refers to a video clip. */
export const isVideo = (name: string) => name.startsWith("video:");
/** Strip the "video:" prefix to get the file slug. */
export const videoName = (name: string) => name.replace(/^video:/, "");

/**
 * Portrait images that should span 2 rows in the gallery grid so they
 * display in their natural orientation without heavy cropping.
 */
const TALL_PHOTOS = new Set([
  "gallery/new-1",
  "gallery/new-2",
  "gallery/new-3",
  "gallery/new-4",
  "gallery/new-5",
  "gallery/new-6",
  "gallery/dsc_0867",
  "gallery/dsc_0875",
]);

/** Whether a GALLERY item should occupy 2 grid rows (video or portrait photo). */
export const isTall = (name: string) =>
  isVideo(name) || TALL_PHOTOS.has(name);
