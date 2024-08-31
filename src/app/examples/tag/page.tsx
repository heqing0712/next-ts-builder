import { Tag } from "@/components/ui/tag";
import "./index.scss";
import { Cross1Icon } from "@radix-ui/react-icons";
import { CloseIcon, StarIcon } from "@/assets/icons";

export default function TagPage() {
  return (
    <div className="tag-container">
      <Tag>
        <div className="tag-icon">
          <StarIcon />
        </div>
        <div className="tag-main">11</div>
        <div className="tag-close">
          <CloseIcon />
        </div>
      </Tag>
    </div>
  );
}
