var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, TemplateRef, ElementRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';
import { deprecatedSelector } from '../deprecated-selector';
var TreeNodeContent = (function () {
    function TreeNodeContent(elementRef) {
        this.elementRef = elementRef;
        deprecatedSelector('TreeNodeContent', 'tree-node-content', elementRef);
    }
    return TreeNodeContent;
}());
__decorate([
    Input(),
    __metadata("design:type", TreeNode)
], TreeNodeContent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TreeNodeContent.prototype, "index", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TreeNodeContent.prototype, "template", void 0);
TreeNodeContent = __decorate([
    Component({
        selector: 'TreeNodeContent, tree-node-content',
        encapsulation: ViewEncapsulation.None,
        template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
    }),
    __metadata("design:paramtypes", [ElementRef])
], TreeNodeContent);
export { TreeNodeContent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudHMvdHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBWTVELElBQWEsZUFBZTtJQUsxQix5QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVBVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFFBQVE7NkNBQUM7QUFDZjtJQUFSLEtBQUssRUFBRTs7OENBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs4QkFBVyxXQUFXO2lEQUFNO0FBSHpCLGVBQWU7SUFWM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9DQUFvQztRQUM5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxRQUFRLEVBQUUsaU5BS007S0FDakIsQ0FBQztxQ0FNZ0MsVUFBVTtHQUwvQixlQUFlLENBUTNCO1NBUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xyXG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVDb250ZW50LCB0cmVlLW5vZGUtY29udGVudCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCI+e3sgbm9kZS5kaXNwbGF5RmllbGQgfX08L3NwYW4+XHJcbiAgPG5nLWNvbnRhaW5lclxyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxyXG4gICAgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSwgbm9kZTogbm9kZSwgaW5kZXg6IGluZGV4IH1cIj5cclxuICA8L25nLWNvbnRhaW5lcj5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDb250ZW50IHtcclxuICBASW5wdXQoKSBub2RlOiBUcmVlTm9kZTtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVDb250ZW50JywgJ3RyZWUtbm9kZS1jb250ZW50JywgZWxlbWVudFJlZik7XHJcbiAgfVxyXG59XHJcbiJdfQ==