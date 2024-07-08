import cx from "classnames";
import { useCjEditorStore } from "../store/editor";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { getEditorContext } from "@/libs/craftjs/core/editor/EditorContext";
import { ButtonDemo } from "@/components/selectors/ButtonDemo";
import { Text } from "@/components/selectors/Text";
export function ComponentsPannel() {
  const { showComponentsPannel, setShowComponentsPannel } = useCjEditorStore();

  function handleAdd() {
    const context = getEditorContext();
    // context.actions.addx(
    //   <Text fontSize="12" textAlign="left" text="Hi there" />
    // );
    context.actions.addTest(<ButtonDemo />);
  }

  return (
    <>
      <div
        onClick={() => {
          setShowComponentsPannel(false);
        }}
        className={cx({
          "click-capture": true,
          "is-show": showComponentsPannel,
        })}
      ></div>
      <div
        className={cx([
          {
            "components-panel": true,
            "is-show": showComponentsPannel,
          },
        ])}
      >
        <div className="pannel-header">
          <div className="pannel-title">组件库</div>
          <div
            className="pannel-close"
            onClick={() => {
              setShowComponentsPannel(false);
            }}
          >
            <Cross1Icon />
          </div>
        </div>
        <div className="pannel-body">
          <div className="components-list">
            <div className="item">
              <Button
                onClick={() => {
                  handleAdd();
                }}
              >
                按钮
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
