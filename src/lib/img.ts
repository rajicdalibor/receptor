const base = import.meta.env.BASE_URL;

/** Resolve a bundled image in /public/images to a base-aware URL. */
export const img = (name: string) => `${base}images/${name}.webp`;

/** Resolve a video file in /public/images/videos to a base-aware URL. */
export const video = (name: string) => `${base}images/videos/${name}.mp4`;

/**
 * Galerija items — photos and videos mixed.
 * Videos are prefixed with "video:" and naturally occupy a tall (2-row) slot
 * because the source clips are portrait-oriented.
 */
export const GALLERY = [
  "gallery/dsc_0858",
  "video:video1",
  "gallery/dsc_0859",
  "gallery/dsc_0860",
  "gallery/dsc_0861",
  "gallery/dsc_0862",
  "gallery/dsc_0863",
  "gallery/dsc_0864",
  "video:video2",
  "gallery/dsc_0865",
  "gallery/dsc_0866",
  "gallery/dsc_0867",
  "gallery/dsc_0868",
  "gallery/dsc_0869",
  "gallery/dsc_0870",
  "gallery/dsc_0871",
  "gallery/dsc_0872",
  "video:video3",
  "gallery/dsc_0873",
  "gallery/dsc_0874",
  "gallery/dsc_0875",
  "gallery/dsc_0876",
  "gallery/dsc_0877",
  "gallery/dsc_0878",
  "gallery/dsc_0879",
  "gallery/dsc_0880",
  "gallery/dsc_0881",
  "video:video4",
  "gallery/dsc_0882",
  "gallery/dsc_0883",
  "gallery/dsc_0884",
  "gallery/dsc_0885",
  "gallery/dsc_0886",
  "gallery/dsc_0887",
  "gallery/dsc_0888",
  "gallery/dsc_0889",
  "video:video5",
  "gallery/dsc_0890",
  "gallery/dsc_0891",
  "gallery/dsc_0892",
  "gallery/dsc_0893",
  "gallery/dsc_0894",
  "gallery/dsc_0895",
  "gallery/dsc_0896",
  "gallery/dsc_0897",
  "video:video6",
  "gallery/dsc_0898",
  "gallery/dsc_0899",
  "gallery/dsc_0900",
  "gallery/dsc_0901",
  "gallery/dsc_0902",
  "gallery/dsc_0903",
  "gallery/dsc_0904",
  "gallery/dsc_0905",
  "gallery/dsc_0906",
  "gallery/dsc_0907",
  "gallery/dsc_0908",
  "gallery/dsc_0909",
  "gallery/dsc_0910",
  "gallery/dsc_0911",
  "gallery/dsc_0912",
  "gallery/dsc_0913",
  "gallery/dsc_0914",
  "gallery/dsc_0915",
  "gallery/dsc_0916",
  "gallery/dsc_0917",
  "gallery/dsc_0918",
];

/** True if a GALLERY item refers to a video clip. */
export const isVideo = (name: string) => name.startsWith("video:");
/** Strip the "video:" prefix to get the file slug. */
export const videoName = (name: string) => name.replace(/^video:/, "");
