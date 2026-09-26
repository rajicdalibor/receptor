import { useI18n } from "../i18n/context";
import { useReveal } from "../hooks/useReveal";
import { img, video, GALLERY, isVideo, isTall, videoName } from "../lib/img";
import { PageHero, ReserveBand } from "../components/ui";

export default function Galerija() {
  const { t, lang } = useI18n();
  useReveal([lang]);
  const g = t.galerija;
  const f = t.footer.reserveBand;

  return (
    <>
      <PageHero eyebrow={g.hero.eyebrow} tag={g.hero.tag} title={g.hero.title} sub={g.hero.sub} />

      <section className="section tight">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY.map((name) => {
              // Videos and portrait photos span 2 rows so they fit their
              // natural orientation without heavy cropping.
              const tall = isTall(name);
              return (
                <span className={"ph reveal" + (tall ? " gal-tall" : "")} key={name}>
                  {isVideo(name) ? (
                    <video
                      src={video(videoName(name))}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={img(name)} alt="" loading="lazy" />
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <ReserveBand
        eyebrow={f.eyebrow}
        title={g.cta.text}
        actions={[
          { label: f.ctaReserve, to: "/kontakt", scrollToForm: true, variant: "solid" },
          { label: f.ctaEvents, to: "/proslave", variant: "outline" },
        ]}
      />
    </>
  );
}
