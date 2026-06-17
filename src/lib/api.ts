import type { Lang } from "../i18n/translations";

// Same-origin deploy: React and Laravel served from the same domain via
// .htaccess. Relative paths work in both dev (Vite proxy) and prod (cPanel).
const API_BASE = "";

const LANG_CODE: Record<Lang, 1 | 2 | 3> = { sr: 1, en: 2, ru: 3 };

export interface Food {
  id: number;
  naziv: string;
  cena: string;
  tipjela: string;
  jezik: number;
}

export interface Wine {
  id: number;
  name: string;
  type: string;
  price: string;
  description: string | null;
  tipvina: string;
  tipvinaeng: string;
  tipvinarus: string;
}

export interface Celebration {
  id: number;
  hrana: string;
  pice: string;
  jezik: number;
}

export interface TextRow {
  id: number;
  Text: string;
}

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json();
}

export const fetchFoods = (lang: Lang) =>
  getJson<Food[]>(`/get-foods?lang=${LANG_CODE[lang]}`);

export const fetchWines = () => getJson<Wine[]>("/get-vine");

export const fetchCelebrations = () =>
  getJson<Celebration[]>("/get-celebrations");

export const fetchTexts = () => getJson<TextRow[]>("/get-texts");

export const langCode = (l: Lang) => LANG_CODE[l];

export interface ReservationPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  persons: number;
  message?: string;
}

export interface ReservationResult {
  success: boolean;
  error?: string;
}

export async function postReservation(
  payload: ReservationPayload,
): Promise<ReservationResult> {
  const res = await fetch(`${API_BASE}/reserve`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return { success: false, error: `HTTP ${res.status}` };
  }
  const data = (await res.json().catch(() => ({}))) as ReservationResult;
  return data;
}
