declare module "next/image" {
  const Image: React.ComponentType<{
    src: string;
    alt?: string;
    className: string;
    width: number;
    height: number;
    priority?: boolean;
  }>;
  export default Image;
}
