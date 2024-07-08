import {
  AlignHorizontallyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  AlignVerticallyIcon,
  AlignBottomIcon,
  DistributeHorizontallyIcon,
  DistributeVerticallyIcon,
} from "@/assets/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Alignment() {
  return (
    <TooltipProvider>
      <div className="s-brick brick-align">
        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignLeftIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Left</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignHorizontallyIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Horizontally</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignRightIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Right</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignTopIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Top</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignVerticallyIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Vertically </p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignBottomIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Align Bottom </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <DistributeHorizontallyIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Distribute Horizontally </p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="align-item">
          <Tooltip>
            <TooltipTrigger asChild>
              <DistributeVerticallyIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Distribute Vertically </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
