const base = import.meta.env.BASE_URL;

/** Resolve a bundled image in /public/images to a base-aware URL. */
export const img = (name: string) => `${base}images/${name}.webp`;

/** Ordered gallery set (mixed orientations) used by the Gallery page. */
export const GALLERY = [
  "food-sharing",
  "cocktail-2",
  "dining-evening",
  "food-plate",
  "wine-flight",
  "interior-brasserie",
  "food-main",
  "cocktail-1",
  "table-detail",
  "food-flatbread",
  "chef-detail",
  "bar-moody",
];
