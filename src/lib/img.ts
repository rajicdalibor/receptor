const base = import.meta.env.BASE_URL;

/** Resolve a bundled image in /public/images to a base-aware URL. */
export const img = (name: string) => `${base}images/${name}.webp`;

/** Resolve a video file in /public/images/videos to a base-aware URL. */
export const video = (name: string) => `${base}images/videos/${name}.mp4`;

/**
 * Galerija — emptied pending the new photoshoot. Old-site photos and
 * videos were removed; only the home hero image is kept. Repopulate this
 * array (e.g. "gallery/g01", "video:video1") once new media is added to
 * /public/images/gallery and /public/images/videos.
 */
export const GALLERY: string[] = [];

/** True if a GALLERY item refers to a video clip. */
export const isVideo = (name: string) => name.startsWith("video:");
/** Strip the "video:" prefix to get the file slug. */
export const videoName = (name: string) => name.replace(/^video:/, "");

/** The only landscape photos in this batch — everything else is portrait. */
const LANDSCAPE_PHOTOS = new Set(["gallery/g03", "gallery/g08"]);

/**
 * Whether a GALLERY item should occupy 2 grid rows.
 * Videos and portrait photos are tall; the 2 landscape photos are not.
 */
export const isTall = (name: string) => {
  if (isVideo(name)) return true;
  return !LANDSCAPE_PHOTOS.has(name);
};
