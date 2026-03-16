import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  height?: string;
}

export default function SafeImage({ src, alt, height = "300px" }: Props) {
  return (
    <div style={{ position: 'relative', width: '100%', height: height, overflow: 'hidden' }}>
      <Image 
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA6ic9gQAAAABJRU5ErkJggg==" 
      />
    </div>
  );
}