import { useI18n } from "../i18n/context";

export function Logo() {
  const { t } = useI18n();
  return (
    <span className="logo">
      <span className="logo-mark">{t.brand.name}</span>
      <span className="logo-sub">{t.brand.tagline}</span>
    </span>
  );
}
