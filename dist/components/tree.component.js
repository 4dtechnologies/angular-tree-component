var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, Renderer, ElementRef, ViewEncapsulation, ContentChild, TemplateRef, HostListener, ViewChild } from '@angular/core';
import { TreeModel } from '../models/tree.model';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
import { TreeOptions } from '../models/tree-options.model';
import { TreeViewportComponent } from './tree-viewport.component';
import { deprecatedSelector } from '../deprecated-selector';
import * as _ from 'lodash';
var includes = _.includes, pick = _.pick;
var TreeComponent = (function () {
    function TreeComponent(treeModel, treeDraggedElement, renderer, elementRef) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        this.renderer = renderer;
        this.elementRef = elementRef;
        deprecatedSelector('Tree', 'tree-root', elementRef);
        treeModel.eventNames.forEach(function (name) { return _this[name] = new EventEmitter(); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        var insideClick = this.renderer.invokeElementMethod($event.target, 'closest', ['Tree']);
        if (!insideClick) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        this.treeModel.setData({
            options: changes.options && changes.options.currentValue,
            nodes: changes.nodes && changes.nodes.currentValue,
            events: pick(this, this.treeModel.eventNames)
        });
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    return TreeComponent;
}());
__decorate([
    ContentChild('loadingTemplate'),
    __metadata("design:type", TemplateRef)
], TreeComponent.prototype, "loadingTemplate", void 0);
__decorate([
    ContentChild('treeNodeTemplate'),
    __metadata("design:type", TemplateRef)
], TreeComponent.prototype, "treeNodeTemplate", void 0);
__decorate([
    ContentChild('treeNodeWrapperTemplate'),
    __metadata("design:type", TemplateRef)
], TreeComponent.prototype, "treeNodeWrapperTemplate", void 0);
__decorate([
    ContentChild('treeNodeFullTemplate'),
    __metadata("design:type", TemplateRef)
], TreeComponent.prototype, "treeNodeFullTemplate", void 0);
__decorate([
    ViewChild('viewport'),
    __metadata("design:type", TreeViewportComponent)
], TreeComponent.prototype, "viewportComponent", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], TreeComponent.prototype, "nodes", null);
__decorate([
    Input(),
    __metadata("design:type", TreeOptions),
    __metadata("design:paramtypes", [TreeOptions])
], TreeComponent.prototype, "options", null);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TreeComponent.prototype, "focused", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onToggleExpanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onActivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onDeactivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onFocus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onBlur", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onUpdateData", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onInitialized", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onMoveNode", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onLoadChildren", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onChangeFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "onEvent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "toggleExpanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "activate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "deactivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "focus", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "blur", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "updateData", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "initialized", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "moveNode", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "loadChildren", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "changeFilter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "event", void 0);
__decorate([
    HostListener('body: keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeComponent.prototype, "onKeydown", null);
__decorate([
    HostListener('body: mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeComponent.prototype, "onMousedown", null);
TreeComponent = __decorate([
    Component({
        selector: 'Tree, tree-root',
        encapsulation: ViewEncapsulation.None,
        providers: [TreeModel],
        styles: [
            '.tree-children { padding-left: 20px }',
            '.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }',
            ".tree {\n      width: 100%;\n      position:relative;\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none;   /* Chrome/Safari/Opera */\n      -khtml-user-select: none;    /* Konqueror */\n      -moz-user-select: none;      /* Firefox */\n      -ms-user-select: none;       /* IE/Edge */\n      user-select: none;           /* non-prefixed version, currently not supported by any browser */\n    }"
        ],
        template: "\n    <tree-viewport #viewport>\n      <div\n        class=\"tree\"\n        [class.node-dragging]=\"treeDraggedElement.isDragging()\">\n        <tree-node-collection\n          *ngIf=\"treeModel.roots\"\n          [nodes]=\"treeModel.roots\"\n          [treeModel]=\"treeModel\"\n          [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n        </tree-node-collection>\n        <tree-node-drop-slot\n          class=\"empty-tree-drop-slot\"\n          *ngIf=\"treeModel.isEmptyTree()\"\n          [dropIndex]=\"0\"\n          [node]=\"treeModel.virtualRoot\">\n        </tree-node-drop-slot>\n      </div>\n    </tree-viewport>\n  "
    }),
    __metadata("design:paramtypes", [TreeModel,
        TreeDraggedElement,
        Renderer,
        ElementRef])
], TreeComponent);
export { TreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50cy90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQ3ZFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUNwQixJQUFBLHFCQUFRLEVBQUUsYUFBSSxDQUFRO0FBZ0Q5QixJQUFhLGFBQWE7SUEyQ3hCLHVCQUNTLFNBQW9CLEVBQ3BCLGtCQUFzQyxFQUNyQyxRQUFrQixFQUNsQixVQUFzQjtRQUpoQyxpQkFRQztRQVBRLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFNUIsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FB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dXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBSZW5kZXJlciwgRWxlbWVudFJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvbiwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xyXG5pbXBvcnQgeyBUcmVlVmlld3BvcnRDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtdmlld3BvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmNvbnN0IHsgaW5jbHVkZXMsIHBpY2sgfSAgPSBfO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdUcmVlLCB0cmVlLXJvb3QnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbVHJlZU1vZGVsXSxcclxuICBzdHlsZXM6IFtcclxuICAgICcudHJlZS1jaGlsZHJlbiB7IHBhZGRpbmctbGVmdDogMjBweCB9JyxcclxuICAgICcuZW1wdHktdHJlZS1kcm9wLXNsb3QgLm5vZGUtZHJvcC1zbG90IHsgaGVpZ2h0OiAyMHB4OyBtaW4td2lkdGg6IDEwMHB4IH0nLFxyXG4gICAgYC50cmVlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xyXG4gICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7ICAgIC8qIEtvbnF1ZXJvciAqL1xyXG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgICAvKiBJRS9FZGdlICovXHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICAgLyogbm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGFueSBicm93c2VyICovXHJcbiAgICB9YFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDx0cmVlLXZpZXdwb3J0ICN2aWV3cG9ydD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwidHJlZVwiXHJcbiAgICAgICAgW2NsYXNzLm5vZGUtZHJhZ2dpbmddPVwidHJlZURyYWdnZWRFbGVtZW50LmlzRHJhZ2dpbmcoKVwiPlxyXG4gICAgICAgIDx0cmVlLW5vZGUtY29sbGVjdGlvblxyXG4gICAgICAgICAgKm5nSWY9XCJ0cmVlTW9kZWwucm9vdHNcIlxyXG4gICAgICAgICAgW25vZGVzXT1cInRyZWVNb2RlbC5yb290c1wiXHJcbiAgICAgICAgICBbdHJlZU1vZGVsXT1cInRyZWVNb2RlbFwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVzXT1cIntcclxuICAgICAgICAgICAgbG9hZGluZ1RlbXBsYXRlOiBsb2FkaW5nVGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRyZWVOb2RlVGVtcGxhdGU6IHRyZWVOb2RlVGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiB0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdHJlZU5vZGVGdWxsVGVtcGxhdGU6IHRyZWVOb2RlRnVsbFRlbXBsYXRlXHJcbiAgICAgICAgICB9XCI+XHJcbiAgICAgICAgPC90cmVlLW5vZGUtY29sbGVjdGlvbj5cclxuICAgICAgICA8dHJlZS1ub2RlLWRyb3Atc2xvdFxyXG4gICAgICAgICAgY2xhc3M9XCJlbXB0eS10cmVlLWRyb3Atc2xvdFwiXHJcbiAgICAgICAgICAqbmdJZj1cInRyZWVNb2RlbC5pc0VtcHR5VHJlZSgpXCJcclxuICAgICAgICAgIFtkcm9wSW5kZXhdPVwiMFwiXHJcbiAgICAgICAgICBbbm9kZV09XCJ0cmVlTW9kZWwudmlydHVhbFJvb3RcIj5cclxuICAgICAgICA8L3RyZWUtbm9kZS1kcm9wLXNsb3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90cmVlLXZpZXdwb3J0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF9ub2RlczogYW55W107XHJcbiAgX29wdGlvbnM6IFRyZWVPcHRpb25zO1xyXG5cclxuICBAQ29udGVudENoaWxkKCdsb2FkaW5nVGVtcGxhdGUnKSBsb2FkaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZCgndHJlZU5vZGVUZW1wbGF0ZScpIHRyZWVOb2RlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZCgndHJlZU5vZGVXcmFwcGVyVGVtcGxhdGUnKSB0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKCd0cmVlTm9kZUZ1bGxUZW1wbGF0ZScpIHRyZWVOb2RlRnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCd2aWV3cG9ydCcpIHZpZXdwb3J0Q29tcG9uZW50OiBUcmVlVmlld3BvcnRDb21wb25lbnQ7XHJcblxyXG4gIC8vIFdpbGwgYmUgaGFuZGxlZCBpbiBuZ09uQ2hhbmdlc1xyXG4gIEBJbnB1dCgpIHNldCBub2Rlcyhub2RlczogYW55W10pIHsgfTtcclxuICBASW5wdXQoKSBzZXQgb3B0aW9ucyhvcHRpb25zOiBUcmVlT3B0aW9ucykgeyB9O1xyXG5cclxuICBASW5wdXQoKSBzZXQgZm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXModmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG9uVG9nZ2xlRXhwYW5kZWQ7XHJcbiAgQE91dHB1dCgpIG9uQWN0aXZhdGU7XHJcbiAgQE91dHB1dCgpIG9uRGVhY3RpdmF0ZTtcclxuICBAT3V0cHV0KCkgb25Gb2N1cztcclxuICBAT3V0cHV0KCkgb25CbHVyO1xyXG4gIEBPdXRwdXQoKSBvblVwZGF0ZURhdGE7XHJcbiAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQ7XHJcbiAgQE91dHB1dCgpIG9uTW92ZU5vZGU7XHJcbiAgQE91dHB1dCgpIG9uTG9hZENoaWxkcmVuO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUZpbHRlcjtcclxuICBAT3V0cHV0KCkgb25FdmVudDtcclxuXHJcbiAgQE91dHB1dCgpIHRvZ2dsZUV4cGFuZGVkO1xyXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZTtcclxuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZTtcclxuICBAT3V0cHV0KCkgZm9jdXM7XHJcbiAgQE91dHB1dCgpIGJsdXI7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZURhdGE7XHJcbiAgQE91dHB1dCgpIGluaXRpYWxpemVkO1xyXG4gIEBPdXRwdXQoKSBtb3ZlTm9kZTtcclxuICBAT3V0cHV0KCkgbG9hZENoaWxkcmVuO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VGaWx0ZXI7XHJcbiAgQE91dHB1dCgpIGV2ZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbCxcclxuICAgIHB1YmxpYyB0cmVlRHJhZ2dlZEVsZW1lbnQ6IFRyZWVEcmFnZ2VkRWxlbWVudCxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblxyXG4gICAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWUnLCAndHJlZS1yb290JywgZWxlbWVudFJlZik7XHJcbiAgICAgIHRyZWVNb2RlbC5ldmVudE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHRoaXNbbmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYm9keToga2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKCRldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLnRyZWVNb2RlbC5pc0ZvY3VzZWQpIHJldHVybjtcclxuICAgIGlmIChpbmNsdWRlcyhbJ2lucHV0JywgJ3RleHRhcmVhJ10sXHJcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZm9jdXNlZE5vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xyXG5cclxuICAgIHRoaXMudHJlZU1vZGVsLnBlcmZvcm1LZXlBY3Rpb24oZm9jdXNlZE5vZGUsICRldmVudCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdib2R5OiBtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2Vkb3duKCRldmVudCkge1xyXG4gICAgY29uc3QgaW5zaWRlQ2xpY2sgPSB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QoJGV2ZW50LnRhcmdldCwgJ2Nsb3Nlc3QnLCBbJ1RyZWUnXSk7XHJcblxyXG4gICAgaWYgKCFpbnNpZGVDbGljaykge1xyXG4gICAgICB0aGlzLnRyZWVNb2RlbC5zZXRGb2N1cyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XHJcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXREYXRhKHtcclxuICAgICAgb3B0aW9uczogY2hhbmdlcy5vcHRpb25zICYmIGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUsXHJcbiAgICAgIG5vZGVzOiBjaGFuZ2VzLm5vZGVzICYmIGNoYW5nZXMubm9kZXMuY3VycmVudFZhbHVlLFxyXG4gICAgICBldmVudHM6IHBpY2sodGhpcywgdGhpcy50cmVlTW9kZWwuZXZlbnROYW1lcylcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2l6ZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLnZpZXdwb3J0Q29tcG9uZW50LnNldFZpZXdwb3J0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==