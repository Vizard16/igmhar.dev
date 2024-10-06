export default function TechIcon(props: {
  link: string | undefined;
  name: string;
  padding: string;
  src: string | undefined;
}) {
  return (
    <div className="relative overflow-hidden aspect-square cursor-pointer">
      {/* Icon Image */}
      <img
        alt={props.name}
        className={`w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-90 ${props.padding}`}
        src={props.src}
      />
      {/* Hover Overlay */}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-40"
      >
        {/* Overlay text with very white color */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{props.name}</span>
        </div>
      </a>
    </div>
  );
}
