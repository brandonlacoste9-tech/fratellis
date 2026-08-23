type Props = {
  src: string;
  poster: string;
  alt: string;
  className?: string;
};

export function HeroFilm({
  src,
  poster,
  alt,
  className = "relative h-full min-h-[22rem] overflow-hidden md:min-h-[28rem]",
}: Props) {
  return (
    <div className={className}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
