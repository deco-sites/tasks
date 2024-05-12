import { clx } from "../sdk/clx.ts";

export interface Props {
  /** 
   * @format rich-text
   * @default Conteúdo
   */
  title: string;
  style?: string;
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  style
}: Props) {
  return (
    <div>
      <div class={clx("flex flex-col m-4", style)}>
        <div
            dangerouslySetInnerHTML={{
            __html: title,
            }}
        >
        </div>
      </div>
    </div>
  );
}
