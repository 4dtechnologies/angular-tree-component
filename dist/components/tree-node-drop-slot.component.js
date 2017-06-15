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
var TreeNodeDropSlot = (function () {
    function TreeNodeDropSlot(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeDropSlot', 'tree-node-drop-slot', elementRef);
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    return TreeNodeDropSlot;
}());
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], TreeNodeDropSlot.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TreeNodeDropSlot.prototype, "dropIndex", void 0);
TreeNodeDropSlot = __decorate([
    Component({
        selector: 'TreeNodeDropSlot, tree-node-drop-slot',
        encapsulation: ViewEncapsulation.None,
        styles: [
            '.node-drop-slot { display: block; height: 2px }',
            '.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }'
        ],
        template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\">\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [ElementRef])
], TreeNodeDropSlot);
export { TreeNodeDropSlot };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWRyb3Atc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLW5vZGUtZHJvcC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBaUI1RCxJQUFhLGdCQUFnQjtJQUkzQiwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDcEIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWpCVTtJQUFSLEtBQUssRUFBRTs4QkFBTyxRQUFROzhDQUFDO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O21EQUFtQjtBQUZoQixnQkFBZ0I7SUFmNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVDQUF1QztRQUNqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxNQUFNLEVBQUU7WUFDTixpREFBaUQ7WUFDakQsa0dBQWtHO1NBQ25HO1FBQ0QsUUFBUSxFQUFFLGtKQU1UO0tBQ0YsQ0FBQztxQ0FLZ0MsVUFBVTtHQUovQixnQkFBZ0IsQ0FrQjVCO1NBbEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XHJcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUcmVlTm9kZURyb3BTbG90LCB0cmVlLW5vZGUtZHJvcC1zbG90JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgJy5ub2RlLWRyb3Atc2xvdCB7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDJweCB9JyxcclxuICAgICcubm9kZS1kcm9wLXNsb3QuaXMtZHJhZ2dpbmctb3ZlciB7IGJhY2tncm91bmQ6ICNkZGZmZWU7IGhlaWdodDogMjBweDsgYm9yZGVyOiAycHggZG90dGVkICM4ODg7IH0nXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm5vZGUtZHJvcC1zbG90XCJcclxuICAgICAgKHRyZWVEcm9wKT1cIm9uRHJvcCgkZXZlbnQpXCJcclxuICAgICAgW3RyZWVBbGxvd0Ryb3BdPVwiYWxsb3dEcm9wLmJpbmQodGhpcylcIj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlRHJvcFNsb3Qge1xyXG4gIEBJbnB1dCgpIG5vZGU6IFRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIGRyb3BJbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVEcm9wU2xvdCcsICd0cmVlLW5vZGUtZHJvcC1zbG90JywgZWxlbWVudFJlZik7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoJGV2ZW50KSB7XHJcbiAgICB0aGlzLm5vZGUubW91c2VBY3Rpb24oJ2Ryb3AnLCAkZXZlbnQuZXZlbnQsIHtcclxuICAgICAgZnJvbTogJGV2ZW50LmVsZW1lbnQsXHJcbiAgICAgIHRvOiB7IHBhcmVudDogdGhpcy5ub2RlLCBpbmRleDogdGhpcy5kcm9wSW5kZXggfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhbGxvd0Ryb3AoZWxlbWVudCwgJGV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2RlLm9wdGlvbnMuYWxsb3dEcm9wKGVsZW1lbnQsIHsgcGFyZW50OiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9LCAkZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=