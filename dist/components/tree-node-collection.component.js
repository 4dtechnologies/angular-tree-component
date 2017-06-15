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
import { reaction } from 'mobx';
import { observable, computed, action } from 'mobx-angular';
import { TreeModel } from '../models/tree.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeCollectionComponent = (function () {
    function TreeNodeCollectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._dispose = [];
        deprecatedSelector('TreeNodeCollection', 'tree-node-collection', elementRef);
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this.setNodes(nodes); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = firstNode ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            reaction(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            reaction(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    return TreeNodeCollectionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TreeNodeCollectionComponent.prototype, "nodes", null);
__decorate([
    Input(),
    __metadata("design:type", TreeModel)
], TreeNodeCollectionComponent.prototype, "treeModel", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "templates", void 0);
__decorate([
    observable,
    __metadata("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate([
    computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeNodeCollectionComponent.prototype, "setNodes", null);
TreeNodeCollectionComponent = __decorate([
    Component({
        selector: 'tree-node-collection, TreeNodeCollection',
        encapsulation: ViewEncapsulation.None,
        template: "\n    <ng-container *mobxAutorun>\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [ElementRef])
], TreeNodeCollectionComponent);
export { TreeNodeCollectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFxQixVQUFVLEVBQ25FLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW1CNUQsSUFBYSwyQkFBMkI7SUFzQnRDLHFDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRjFDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHWixrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBdEJELHNCQUFJLDhDQUFLO2FBQVQsY0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkMsVUFBVSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQURQO0lBV3pCLHNCQUFJLGtEQUFTO2FBQWI7WUFDUixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUzSCxNQUFNLENBQUksZ0JBQWdCLE9BQUksQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQVFPLDhDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw4Q0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxzREFBc0Q7WUFDdEQsUUFBUSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQzNFLENBQUMsRUFBRSxVQUFDLFdBQVc7Z0JBQ1gsS0FBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztZQUM3RCxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUN0RDtZQUNELFFBQVEsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUUsVUFBQyxLQUFLO2dCQUMvQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxpREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUUsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsK0NBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxJQUFJO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFSCxrQ0FBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUFwREM7SUFEQyxLQUFLLEVBQUU7Ozt3REFDMkI7QUFHMUI7SUFBUixLQUFLLEVBQUU7OEJBQVksU0FBUzs4REFBQztBQUVsQjtJQUFYLFVBQVU7OzJEQUFRO0FBRVY7SUFBUixLQUFLLEVBQUU7OzhEQUFXO0FBRVA7SUFBWCxVQUFVOztrRUFBMkI7QUFFNUI7SUFBVCxRQUFROzs7NERBS1I7QUFRTztJQUFQLE1BQU07Ozs7MkRBRU47QUE1QlUsMkJBQTJCO0lBakJ2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMENBQTBDO1FBQ3BELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLFFBQVEsRUFBRSx3VkFZVDtLQUNGLENBQUM7cUNBdUJnQyxVQUFVO0dBdEIvQiwyQkFBMkIsQ0FzRHZDO1NBdERZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlYWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb24gfSBmcm9tICdtb2J4LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4uL21vZGVscy90cmVlLXZpcnR1YWwtc2Nyb2xsLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcclxuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbGxlY3Rpb24sIFRyZWVOb2RlQ29sbGVjdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBbc3R5bGUubWFyZ2luLXRvcF09XCJtYXJnaW5Ub3BcIj5cclxuICAgICAgICA8dHJlZS1ub2RlXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiB2aWV3cG9ydE5vZGVzOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja05vZGVcIlxyXG4gICAgICAgICAgW25vZGVdPVwibm9kZVwiXHJcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cInRlbXBsYXRlc1wiPlxyXG4gICAgICAgIDwvdHJlZS1ub2RlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIGdldCBub2RlcygpIHsgcmV0dXJuIHRoaXMuX25vZGVzOyB9XHJcbiAgc2V0IG5vZGVzKG5vZGVzKSB7IHRoaXMuc2V0Tm9kZXMobm9kZXMpOyB9XHJcblxyXG4gIEBJbnB1dCgpIHRyZWVNb2RlbDogVHJlZU1vZGVsO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBfbm9kZXM7XHJcbiAgcHJpdmF0ZSB2aXJ0dWFsU2Nyb2xsOiBUcmVlVmlydHVhbFNjcm9sbDsgLy8gQ2Fubm90IGluamVjdCB0aGlzLCBiZWNhdXNlIHdlIG1pZ2h0IGJlIGluc2lkZSB0cmVlTm9kZVRlbXBsYXRlRnVsbFxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlcztcclxuXHJcbiAgQG9ic2VydmFibGUgdmlld3BvcnROb2RlczogVHJlZU5vZGVbXTtcclxuXHJcbiAgQGNvbXB1dGVkIGdldCBtYXJnaW5Ub3AoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IHRoaXMudmlld3BvcnROb2RlcyAmJiB0aGlzLnZpZXdwb3J0Tm9kZXMubGVuZ3RoICYmIHRoaXMudmlld3BvcnROb2Rlc1swXTtcclxuICAgIGNvbnN0IHJlbGF0aXZlUG9zaXRpb24gPSBmaXJzdE5vZGUgPyBmaXJzdE5vZGUucG9zaXRpb24gLSBmaXJzdE5vZGUucGFyZW50LnBvc2l0aW9uIC0gZmlyc3ROb2RlLnBhcmVudC5nZXRTZWxmSGVpZ2h0KCkgOiAwO1xyXG5cclxuICAgIHJldHVybiBgJHtyZWxhdGl2ZVBvc2l0aW9ufXB4YDtcclxuICB9XHJcblxyXG4gIF9kaXNwb3NlID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUNvbGxlY3Rpb24nLCAndHJlZS1ub2RlLWNvbGxlY3Rpb24nLCBlbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIEBhY3Rpb24gc2V0Tm9kZXMobm9kZXMpIHtcclxuICAgIHRoaXMuX25vZGVzID0gbm9kZXM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudmlydHVhbFNjcm9sbCA9IHRoaXMudHJlZU1vZGVsLnZpcnR1YWxTY3JvbGw7XHJcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xyXG4gICAgICAvLyByZXR1cm4gbm9kZSBpbmRleGVzIHNvIHdlIGNhbiBjb21wYXJlIHN0cnVjdHVyYWxseSxcclxuICAgICAgcmVhY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGwuZ2V0Vmlld3BvcnROb2Rlcyh0aGlzLm5vZGVzKS5tYXAobiA9PiBuLmluZGV4KTtcclxuICAgICAgfSwgKG5vZGVJbmRleGVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZpZXdwb3J0Tm9kZXMgPSBub2RlSW5kZXhlcy5tYXAoKGkpID0+IHRoaXMubm9kZXNbaV0pO1xyXG4gICAgICAgIH0sIHsgY29tcGFyZVN0cnVjdHVyYWw6IHRydWUsIGZpcmVJbW1lZGlhdGVseTogdHJ1ZSB9XHJcbiAgICAgICksXHJcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMubm9kZXMsIChub2RlcykgPT4ge1xyXG4gICAgICAgIHRoaXMudmlld3BvcnROb2RlcyA9IHRoaXMudmlydHVhbFNjcm9sbC5nZXRWaWV3cG9ydE5vZGVzKG5vZGVzKTtcclxuICAgICAgfSlcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2Rpc3Bvc2UuZm9yRWFjaChkID0+IGQoKSk7XHJcbiAgfVxyXG5cclxuICB0cmFja05vZGUoaW5kZXgsIG5vZGUpIHtcclxuICAgIHJldHVybiBub2RlLmlkO1xyXG4gIH1cclxuXHJcbn1cclxuIl19