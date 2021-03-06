import {ActionTool, ActionToolView} from "./action_tool"
import * as p from "core/properties"

export class SaveToolView extends ActionToolView {
  model: SaveTool

  doit(): void {
    this.plot_view.save("bokeh_plot")
  }
}

export namespace SaveTool {
  export type Attrs = p.AttrsOf<Props>

  export type Props = ActionTool.Props
}

export interface SaveTool extends SaveTool.Attrs {}

export class SaveTool extends ActionTool {
  properties: SaveTool.Props

  constructor(attrs?: Partial<SaveTool.Attrs>) {
    super(attrs)
  }

  static initClass(): void {
    this.prototype.type = "SaveTool"
    this.prototype.default_view = SaveToolView
  }

  tool_name = "Save"
  icon = "bk-tool-icon-save"
}
SaveTool.initClass()
