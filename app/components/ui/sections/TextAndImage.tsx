import { ReactNode } from "react";

type TextAndImageProps = {
  imageAlign?: "left" | "right";
  img?: ReactNode;
  children: ReactNode;
};

export default function TextAndImage({
  imageAlign,
  img,
  children,
}: TextAndImageProps) {
  const textWidth = imageAlign
    ? "is-5-widescreen is-6-desktop"
    : "is-9-widescreen is-10-desktop";
  return (
    <section className="section-sm">
      <div className="container content">
        <div className="columns is-align-items-center is-justify-content-center">
          {imageAlign && (
            <>
              {imageAlign === "left" && (
                <div className="column is-5-widescreen is-6-desktop mb-4 mr-6">
                  <div className="image-wrapper">{img}</div>
                </div>
              )}
            </>
          )}
          <div className={`column ${textWidth}`}>
            <div className="pl-4">{children}</div>
          </div>
          {imageAlign && (
            <>
              {imageAlign === "right" && (
                <div className="column is-5-widescreen is-6-desktop mb-4 ml-6">
                  <div className="image-wrapper">{img}</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
