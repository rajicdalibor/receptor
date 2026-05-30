import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useI18n } from "../i18n/context";
import type { Lang } from "../i18n/translations";
import {
  fetchFoods,
  fetchWines,
  fetchCelebrations,
  fetchTexts,
  type Food,
  type Wine,
  type Celebration,
  type TextRow,
} from "./api";

interface DataState {
  foods: Food[];
  wines: Wine[];
  celebrations: Celebration[];
  texts: TextRow[];
  loading: { foods: boolean; wines: boolean; celebrations: boolean; texts: boolean };
  error: { foods?: string; wines?: string; celebrations?: string; texts?: string };
}

const initial: DataState = {
  foods: [],
  wines: [],
  celebrations: [],
  texts: [],
  loading: { foods: true, wines: true, celebrations: true, texts: true },
  error: {},
};

const DataContext = createContext<DataState>(initial);

export function DataProvider({ children }: { children: ReactNode }) {
  const { lang } = useI18n();
  const [state, setState] = useState<DataState>(initial);

  // Cache foods per language so switching back is instant.
  const foodsCache = useRef<Partial<Record<Lang, Food[]>>>({});

  const loadFoods = useCallback(
    async (l: Lang) => {
      const cached = foodsCache.current[l];
      if (cached) {
        setState((s) => ({
          ...s,
          foods: cached,
          loading: { ...s.loading, foods: false },
          error: { ...s.error, foods: undefined },
        }));
        return;
      }
      setState((s) => ({ ...s, loading: { ...s.loading, foods: true } }));
      try {
        const foods = await fetchFoods(l);
        foodsCache.current[l] = foods;
        setState((s) => ({
          ...s,
          foods,
          loading: { ...s.loading, foods: false },
          error: { ...s.error, foods: undefined },
        }));
      } catch (e) {
        setState((s) => ({
          ...s,
          loading: { ...s.loading, foods: false },
          error: { ...s.error, foods: String(e) },
        }));
      }
    },
    [],
  );

  // Re-fetch foods whenever the language changes.
  useEffect(() => {
    loadFoods(lang);
  }, [lang, loadFoods]);

  // One-time fetches for everything else.
  useEffect(() => {
    fetchWines()
      .then((wines) =>
        setState((s) => ({
          ...s,
          wines,
          loading: { ...s.loading, wines: false },
        })),
      )
      .catch((e) =>
        setState((s) => ({
          ...s,
          loading: { ...s.loading, wines: false },
          error: { ...s.error, wines: String(e) },
        })),
      );

    fetchCelebrations()
      .then((celebrations) =>
        setState((s) => ({
          ...s,
          celebrations,
          loading: { ...s.loading, celebrations: false },
        })),
      )
      .catch((e) =>
        setState((s) => ({
          ...s,
          loading: { ...s.loading, celebrations: false },
          error: { ...s.error, celebrations: String(e) },
        })),
      );

    fetchTexts()
      .then((texts) =>
        setState((s) => ({
          ...s,
          texts,
          loading: { ...s.loading, texts: false },
        })),
      )
      .catch((e) =>
        setState((s) => ({
          ...s,
          loading: { ...s.loading, texts: false },
          error: { ...s.error, texts: String(e) },
        })),
      );
  }, []);

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
