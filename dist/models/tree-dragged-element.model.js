var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var TreeDraggedElement = (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    return TreeDraggedElement;
}());
TreeDraggedElement = __decorate([
    Injectable()
], TreeDraggedElement);
export { TreeDraggedElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsSUFBYSxrQkFBa0I7SUFEL0I7UUFFRSxvQkFBZSxHQUFRLElBQUksQ0FBQztJQWE5QixDQUFDO0lBWEMsZ0NBQUcsR0FBSCxVQUFJLGNBQW1CO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQ0FBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGtCQUFrQjtJQUQ5QixVQUFVLEVBQUU7R0FDQSxrQkFBa0IsQ0FjOUI7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ2dlZEVsZW1lbnQge1xyXG4gIF9kcmFnZ2VkRWxlbWVudDogYW55ID0gbnVsbDtcclxuXHJcbiAgc2V0KGRyYWdnZWRFbGVtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX2RyYWdnZWRFbGVtZW50ID0gZHJhZ2dlZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnZ2VkRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGlzRHJhZ2dpbmcoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmdldCgpO1xyXG4gIH1cclxufVxyXG4iXX0=