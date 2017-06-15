var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
var TreeNodeWrapperComponent = (function () {
    function TreeNodeWrapperComponent() {
    }
    return TreeNodeWrapperComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], TreeNodeWrapperComponent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TreeNodeWrapperComponent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeNodeWrapperComponent.prototype, "templates", void 0);
TreeNodeWrapperComponent = __decorate([
    Component({
        selector: 'tree-node-wrapper',
        encapsulation: ViewEncapsulation.None,
        styles: [
            ".node-content-wrapper {\n      display: inline-block;\n      padding: 2px 5px;\n      border-radius: 2px;\n      transition: background-color .15s,box-shadow .15s;\n    }",
            '.node-wrapper {display: flex; align-items: flex-start;}',
            ".node-content-wrapper-active,\n     .node-content-wrapper.node-content-wrapper-active:hover,\n     .node-content-wrapper-active.node-content-wrapper-focused {\n        background: #beebff;\n     }",
            '.node-content-wrapper-focused { background: #e7f4f9 }',
            '.node-content-wrapper:hover { background: #f7fbff }',
            ".node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n      box-shadow: inset 0 0 1px #999;\n    }",
            '.node-content-wrapper.is-dragging-over { background: #ddffee; box-shadow: inset 0 0 1px #999; }',
            '.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }'
        ],
        template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n        <tree-node-expander [node]=\"node\"></tree-node-expander>\n        <div class=\"node-content-wrapper\"\n          [class.node-content-wrapper-active]=\"node.isActive\"\n          [class.node-content-wrapper-focused]=\"node.isFocused\"\n          (click)=\"node.mouseAction('click', $event)\"\n          (dblclick)=\"node.mouseAction('dblClick', $event)\"\n          (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n          (treeDrop)=\"node.onDrop($event)\"\n          (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n          (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n          (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n          [treeAllowDrop]=\"node.allowDrop\"\n          [treeDrag]=\"node\"\n          [treeDragEnabled]=\"node.allowDrag()\">\n\n          <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n          </tree-node-content>\n        </div>\n      </div>\n      <ng-container \n        [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\" \n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n      </ng-container>\n    "
    }),
    __metadata("design:paramtypes", [])
], TreeNodeWrapperComponent);
export { TreeNodeWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXNEckQsSUFBYSx3QkFBd0I7SUFNbkM7SUFBZ0IsQ0FBQztJQUVuQiwrQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBTlU7SUFBUixLQUFLLEVBQUU7OEJBQU8sUUFBUTtzREFBQztBQUNmO0lBQVIsS0FBSyxFQUFFOzt1REFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzsyREFBZ0I7QUFKYix3QkFBd0I7SUFwRHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsTUFBTSxFQUFFO1lBQ04sNEtBS0U7WUFDRix5REFBeUQ7WUFDekQsc01BSUc7WUFDSCx1REFBdUQ7WUFDdkQscURBQXFEO1lBQ3JELDBJQUVFO1lBQ0YsaUdBQWlHO1lBQ2pHLGtFQUFrRTtTQUNuRTtRQUNELFFBQVEsRUFBRSx5eUNBeUJQO0tBQ0osQ0FBQzs7R0FFVyx3QkFBd0IsQ0FRcEM7U0FSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLXdyYXBwZXInLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgLm5vZGUtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyxib3gtc2hhZG93IC4xNXM7XHJcbiAgICB9YCxcclxuICAgICcubm9kZS13cmFwcGVyIHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDt9JyxcclxuICAgIGAubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlLFxyXG4gICAgIC5ub2RlLWNvbnRlbnQtd3JhcHBlci5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmU6aG92ZXIsXHJcbiAgICAgLm5vZGUtY29udGVudC13cmFwcGVyLWFjdGl2ZS5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmVlYmZmO1xyXG4gICAgIH1gLFxyXG4gICAgJy5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkIHsgYmFja2dyb3VuZDogI2U3ZjRmOSB9JyxcclxuICAgICcubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjdmYmZmIH0nLFxyXG4gICAgYC5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmUsIC5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2VkLCAubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5OTk7XHJcbiAgICB9YCxcclxuICAgICcubm9kZS1jb250ZW50LXdyYXBwZXIuaXMtZHJhZ2dpbmctb3ZlciB7IGJhY2tncm91bmQ6ICNkZGZmZWU7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzk5OTsgfScsXHJcbiAgICAnLm5vZGUtY29udGVudC13cmFwcGVyLmlzLWRyYWdnaW5nLW92ZXItZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjUgfSdcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgKm5nSWY9XCIhdGVtcGxhdGVzLnRyZWVOb2RlV3JhcHBlclRlbXBsYXRlXCIgY2xhc3M9XCJub2RlLXdyYXBwZXJcIiBbc3R5bGUucGFkZGluZy1sZWZ0XT1cIm5vZGUuZ2V0Tm9kZVBhZGRpbmcoKVwiPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtZXhwYW5kZXIgW25vZGVdPVwibm9kZVwiPjwvdHJlZS1ub2RlLWV4cGFuZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub2RlLWNvbnRlbnQtd3JhcHBlclwiXHJcbiAgICAgICAgICBbY2xhc3Mubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlXT1cIm5vZGUuaXNBY3RpdmVcIlxyXG4gICAgICAgICAgW2NsYXNzLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWRdPVwibm9kZS5pc0ZvY3VzZWRcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm5vZGUubW91c2VBY3Rpb24oJ2NsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAoZGJsY2xpY2spPVwibm9kZS5tb3VzZUFjdGlvbignZGJsQ2xpY2snLCAkZXZlbnQpXCJcclxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJub2RlLm1vdXNlQWN0aW9uKCdjb250ZXh0TWVudScsICRldmVudClcIlxyXG4gICAgICAgICAgKHRyZWVEcm9wKT1cIm5vZGUub25Ecm9wKCRldmVudClcIlxyXG4gICAgICAgICAgKHRyZWVEcm9wRHJhZ092ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ092ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcERyYWdMZWF2ZSk9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnTGVhdmUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICh0cmVlRHJvcERyYWdFbnRlcik9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnRW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIFt0cmVlQWxsb3dEcm9wXT1cIm5vZGUuYWxsb3dEcm9wXCJcclxuICAgICAgICAgIFt0cmVlRHJhZ109XCJub2RlXCJcclxuICAgICAgICAgIFt0cmVlRHJhZ0VuYWJsZWRdPVwibm9kZS5hbGxvd0RyYWcoKVwiPlxyXG5cclxuICAgICAgICAgIDx0cmVlLW5vZGUtY29udGVudCBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy50cmVlTm9kZVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8L3RyZWUtbm9kZS1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBcclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVXcmFwcGVyVGVtcGxhdGVcIiBcclxuICAgICAgICBbbmdPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXggfVwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=