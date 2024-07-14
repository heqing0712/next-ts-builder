import { cn } from "@/utils";
import { Slider } from "@/components/ui/slider";
import "./index.scss";

export default function SliderDemo() {
  return (
    <div className="flex p-5">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]")}
      />
    </div>
  );
}
