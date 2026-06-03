const base = import.meta.env.BASE_URL;

/** Resolve a bundled image in /public/images to a base-aware URL. */
export const img = (name: string) => `${base}images/${name}.webp`;

/** Resolve a video file in /public/images/videos to a base-aware URL. */
export const video = (name: string) => `${base}images/videos/${name}.mp4`;

/**
 * Galerija — 80 fresh photos from the April / May shoot, with 6 video
 * clips interspersed throughout. Most photos are portrait (4:5) — those
 * span 2 rows in the grid; landscape ones (g03, g08) use a single row.
 */
export const GALLERY = [
  "gallery/g01",
  "gallery/g02",
  "gallery/g03",
  "gallery/g04",
  "gallery/g05",
  "gallery/g06",
  "gallery/g07",
  "gallery/g08",
  "gallery/g09",
  "gallery/g10",
  "gallery/g11",
  "gallery/g12",
  "gallery/g13",
  "video:video1",
  "gallery/g14",
  "gallery/g15",
  "gallery/g16",
  "gallery/g17",
  "gallery/g18",
  "gallery/g19",
  "gallery/g20",
  "gallery/g21",
  "gallery/g22",
  "gallery/g23",
  "gallery/g24",
  "gallery/g25",
  "gallery/g26",
  "gallery/g27",
  "video:video2",
  "gallery/g28",
  "gallery/g29",
  "gallery/g30",
  "gallery/g31",
  "gallery/g32",
  "gallery/g33",
  "gallery/g34",
  "gallery/g35",
  "gallery/g36",
  "gallery/g37",
  "gallery/g38",
  "gallery/g39",
  "gallery/g40",
  "video:video3",
  "gallery/g41",
  "gallery/g42",
  "gallery/g43",
  "gallery/g44",
  "gallery/g45",
  "gallery/g46",
  "gallery/g47",
  "gallery/g48",
  "gallery/g49",
  "gallery/g50",
  "gallery/g51",
  "gallery/g52",
  "gallery/g53",
  "video:video4",
  "gallery/g54",
  "gallery/g55",
  "gallery/g56",
  "gallery/g57",
  "gallery/g58",
  "gallery/g59",
  "gallery/g60",
  "gallery/g61",
  "gallery/g62",
  "gallery/g63",
  "gallery/g64",
  "gallery/g65",
  "gallery/g66",
  "gallery/g67",
  "video:video5",
  "gallery/g68",
  "gallery/g69",
  "gallery/g70",
  "gallery/g71",
  "gallery/g72",
  "gallery/g73",
  "gallery/g74",
  "gallery/g75",
  "gallery/g76",
  "gallery/g77",
  "gallery/g78",
  "gallery/g79",
  "gallery/g80",
  "video:video6",
];

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
