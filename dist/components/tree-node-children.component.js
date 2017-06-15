var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeChildrenComponent = (function () {
    function TreeNodeChildrenComponent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeChildren', 'tree-node-children', elementRef);
    }
    return TreeNodeChildrenComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], TreeNodeChildrenComponent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeNodeChildrenComponent.prototype, "templates", void 0);
TreeNodeChildrenComponent = __decorate([
    Component({
        selector: 'TreeNodeChildren, tree-node-children',
        encapsulation: ViewEncapsulation.None,
        styles: [
            '.tree-children.tree-children-no-padding { padding-left: 0 }',
            '.tree-children { padding-left: 20px; overflow: hidden }'
        ],
        template: "\n    <ng-container *mobxAutorun>\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateExpand;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [ElementRef])
], TreeNodeChildrenComponent);
export { TreeNodeChildrenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNoaWxkcmVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1DNUQsSUFBYSx5QkFBeUI7SUFJcEMsbUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFOVTtJQUFSLEtBQUssRUFBRTs4QkFBTyxRQUFRO3VEQUFDO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OzREQUFnQjtBQUZiLHlCQUF5QjtJQWpDckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNDQUFzQztRQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUU7WUFDTiw2REFBNkQ7WUFDN0QseURBQXlEO1NBQzFEO1FBQ0QsUUFBUSxFQUFFLDI0QkF3QlQ7S0FDRixDQUFDO3FDQUtnQyxVQUFVO0dBSi9CLHlCQUF5QixDQU9yQztTQVBZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUcmVlTm9kZUNoaWxkcmVuLCB0cmVlLW5vZGUtY2hpbGRyZW4nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICAnLnRyZWUtY2hpbGRyZW4udHJlZS1jaGlsZHJlbi1uby1wYWRkaW5nIHsgcGFkZGluZy1sZWZ0OiAwIH0nLFxyXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4OyBvdmVyZmxvdzogaGlkZGVuIH0nXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XHJcbiAgICAgIDxkaXYgW2NsYXNzLnRyZWUtY2hpbGRyZW5dPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbY2xhc3MudHJlZS1jaGlsZHJlbi1uby1wYWRkaW5nXT1cIm5vZGUub3B0aW9ucy5sZXZlbFBhZGRpbmdcIlxyXG4gICAgICAgICAgKnRyZWVBbmltYXRlT3Blbj1cIlxyXG4gICAgICAgICAgICBub2RlLmlzRXhwYW5kZWQ7XHJcbiAgICAgICAgICAgIHNwZWVkOm5vZGUub3B0aW9ucy5hbmltYXRlRXhwYW5kO1xyXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246bm9kZS5vcHRpb25zLmFuaW1hdGVBY2NlbGVyYXRpb247XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6bm9kZS5vcHRpb25zLmFuaW1hdGVFeHBhbmRcIj5cclxuICAgICAgICA8dHJlZS1ub2RlLWNvbGxlY3Rpb25cclxuICAgICAgICAgICpuZ0lmPVwibm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbbm9kZXNdPVwibm9kZS5jaGlsZHJlblwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiXHJcbiAgICAgICAgICBbdHJlZU1vZGVsXT1cIm5vZGUudHJlZU1vZGVsXCI+XHJcbiAgICAgICAgPC90cmVlLW5vZGUtY29sbGVjdGlvbj5cclxuICAgICAgICA8dHJlZS1sb2FkaW5nLWNvbXBvbmVudFxyXG4gICAgICAgICAgW3N0eWxlLnBhZGRpbmctbGVmdF09XCJub2RlLmdldE5vZGVQYWRkaW5nKClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJ0cmVlLW5vZGUtbG9hZGluZ1wiXHJcbiAgICAgICAgICAqbmdJZj1cIiFub2RlLmNoaWxkcmVuXCJcclxuICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZXMubG9hZGluZ1RlbXBsYXRlXCJcclxuICAgICAgICAgIFtub2RlXT1cIm5vZGVcIlxyXG4gICAgICAgID48L3RyZWUtbG9hZGluZy1jb21wb25lbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgdGVtcGxhdGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUNoaWxkcmVuJywgJ3RyZWUtbm9kZS1jaGlsZHJlbicsIGVsZW1lbnRSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=