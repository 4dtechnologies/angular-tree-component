var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Renderer, TemplateRef, ViewContainerRef } from '@angular/core';
var EASE_ACCELERATION = 1.005;
var TreeAnimateOpenDirective = (function () {
    function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TreeAnimateOpenDirective.prototype, "isOpen", {
        set: function (value) {
            if (value) {
                this._show();
                if (this.isEnabled && this._isOpen === false) {
                    this._animateOpen();
                }
            }
            else {
                this.isEnabled ? this._animateClose() : this._hide();
            }
            this._isOpen = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TreeAnimateOpenDirective.prototype._show = function () {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    };
    TreeAnimateOpenDirective.prototype._hide = function () {
        this.viewContainerRef.clear();
        this.innerElement = null;
    };
    TreeAnimateOpenDirective.prototype._animateOpen = function () {
        var _this = this;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var maxHeight = 0;
        // set height to 0
        this.renderer.setElementStyle(this.innerElement, 'max-height', "0");
        // increase maxHeight until height doesn't change
        setTimeout(function () {
            var i = setInterval(function () {
                if (!_this._isOpen || !_this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                var roundedMaxHeight = Math.round(maxHeight);
                _this.renderer.setElementStyle(_this.innerElement, 'max-height', roundedMaxHeight + "px");
                var height = _this.innerElement.getBoundingClientRect().height; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    _this.renderer.setElementStyle(_this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    };
    TreeAnimateOpenDirective.prototype._animateClose = function () {
        var _this = this;
        if (!this.innerElement)
            return;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        var i = setInterval(function () {
            if (_this._isOpen || !_this.innerElement)
                return clearInterval(i);
            height -= delta;
            _this.renderer.setElementStyle(_this.innerElement, 'max-height', height + "px");
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                _this.viewContainerRef.clear();
                _this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    };
    return TreeAnimateOpenDirective;
}());
__decorate([
    Input('treeAnimateOpenSpeed'),
    __metadata("design:type", Number)
], TreeAnimateOpenDirective.prototype, "animateSpeed", void 0);
__decorate([
    Input('treeAnimateOpenAcceleration'),
    __metadata("design:type", Number)
], TreeAnimateOpenDirective.prototype, "animateAcceleration", void 0);
__decorate([
    Input('treeAnimateOpenEnabled'),
    __metadata("design:type", Boolean)
], TreeAnimateOpenDirective.prototype, "isEnabled", void 0);
__decorate([
    Input('treeAnimateOpen'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TreeAnimateOpenDirective.prototype, "isOpen", null);
TreeAnimateOpenDirective = __decorate([
    Directive({
        selector: '[treeAnimateOpen]'
    }),
    __metadata("design:paramtypes", [Renderer,
        TemplateRef,
        ViewContainerRef])
], TreeAnimateOpenDirective);
export { TreeAnimateOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1hbmltYXRlLW9wZW4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2RpcmVjdGl2ZXMvdHJlZS1hbmltYXRlLW9wZW4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFnQixRQUFRLEVBQy9CLFdBQVcsRUFBRSxnQkFBZ0IsRUFDdkMsTUFBTSxlQUFlLENBQUM7QUFFdkIsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFLaEMsSUFBYSx3QkFBd0I7SUFzQm5DLGtDQUNVLFFBQWtCLEVBQ2xCLFdBQTZCLEVBQzdCLGdCQUFrQztRQUZsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQWpCaEQsc0JBQUksNENBQU07YUFBVixVQUFXLEtBQWM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFTTSx3Q0FBSyxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMs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SSxJQUFJLGlCQUFpQixDQUFDO1lBRTFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixrREFBa0Q7Z0JBQ2xELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTdGRCxJQTZGQztBQTFGZ0M7SUFBOUIsS0FBSyxDQUFDLHNCQUFzQixDQUFDOzs4REFBc0I7QUFDZDtJQUFyQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O3FFQUE2QjtBQUNqQztJQUFoQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7OzJEQUFvQjtBQUdwRDtJQURDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7O3NEQVd4QjtBQWxCVSx3QkFBd0I7SUFIcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtLQUM5QixDQUFDO3FDQXdCb0IsUUFBUTtRQUNMLFdBQVc7UUFDTixnQkFBZ0I7R0F6QmpDLHdCQUF3QixDQTZGcEM7U0E3Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyLCBFbGVtZW50UmVmLFxyXG4gIERvQ2hlY2ssIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5jb25zdCBFQVNFX0FDQ0VMRVJBVElPTiA9IDEuMDA1O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdHJlZUFuaW1hdGVPcGVuXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoJ3RyZWVBbmltYXRlT3BlblNwZWVkJykgYW5pbWF0ZVNwZWVkOiBudW1iZXI7XHJcbiAgQElucHV0KCd0cmVlQW5pbWF0ZU9wZW5BY2NlbGVyYXRpb24nKSBhbmltYXRlQWNjZWxlcmF0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCd0cmVlQW5pbWF0ZU9wZW5FbmFibGVkJykgaXNFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoJ3RyZWVBbmltYXRlT3BlbicpXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3Nob3coKTtcclxuICAgICAgaWYgKHRoaXMuaXNFbmFibGVkICYmIHRoaXMuX2lzT3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzRW5hYmxlZCA/IHRoaXMuX2FuaW1hdGVDbG9zZSgpIDogdGhpcy5faGlkZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNPcGVuID0gISF2YWx1ZTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGlubmVyRWxlbWVudDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgcHJpdmF0ZSBfc2hvdygpIHtcclxuICAgIGlmICh0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBjaGlsZCB2aWV3XHJcbiAgICB0aGlzLmlubmVyRWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZikucm9vdE5vZGVzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZSgpIHtcclxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgdGhpcy5pbm5lckVsZW1lbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZU9wZW4oKSB7XHJcbiAgICBsZXQgZGVsdGEgPSB0aGlzLmFuaW1hdGVTcGVlZDtcclxuICAgIGxldCBlYXNlID0gdGhpcy5hbmltYXRlQWNjZWxlcmF0aW9uO1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgLy8gc2V0IGhlaWdodCB0byAwXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgMGApO1xyXG5cclxuICAgIC8vIGluY3JlYXNlIG1heEhlaWdodCB1bnRpbCBoZWlnaHQgZG9lc24ndCBjaGFuZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBBbGxvdyBpbm5lciBlbGVtZW50IHRvIGNyZWF0ZSBpdHMgY29udGVudFxyXG4gICAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuIHx8ICF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaSk7XHJcblxyXG4gICAgICAgIG1heEhlaWdodCArPSBkZWx0YTtcclxuICAgICAgICBjb25zdCByb3VuZGVkTWF4SGVpZ2h0ID0gTWF0aC5yb3VuZChtYXhIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgJHtyb3VuZGVkTWF4SGVpZ2h0fXB4YCk7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBUQkQgdXNlIHJlbmRlcmVyXHJcblxyXG4gICAgICAgIGRlbHRhICo9IGVhc2U7XHJcbiAgICAgICAgZWFzZSAqPSBFQVNFX0FDQ0VMRVJBVElPTjtcclxuICAgICAgICBpZiAoaGVpZ2h0IDwgcm91bmRlZE1heEhlaWdodCkge1xyXG4gICAgICAgICAgLy8gTWFrZSBtYXhIZWlnaHQgYXV0byBiZWNhdXNlIGFuaW1hdGlvbiBmaW5pc2hlZCBhbmQgY29udGFpbmVyIG1pZ2h0IGNoYW5nZSBoZWlnaHQgbGF0ZXIgb25cclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIG51bGwpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDE3KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZUNsb3NlKCkge1xyXG4gICAgaWYgKCF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBkZWx0YSA9IHRoaXMuYW5pbWF0ZVNwZWVkO1xyXG4gICAgbGV0IGVhc2UgPSB0aGlzLmFuaW1hdGVBY2NlbGVyYXRpb247XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5pbm5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0OyAvLyBUQkQgdXNlIHJlbmRlcmVyXHJcblxyXG4gICAgLy8gc2xvd2x5IGRlY3JlYXNlIG1heEhlaWdodCB0byAwLCBzdGFydGluZyBmcm9tIGN1cnJlbnQgaGVpZ2h0XHJcbiAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5faXNPcGVuIHx8ICF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaSk7XHJcblxyXG4gICAgICBoZWlnaHQgLT0gZGVsdGE7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAke2hlaWdodH1weGApO1xyXG4gICAgICBkZWx0YSAqPSBlYXNlO1xyXG4gICAgICBlYXNlICo9IEVBU0VfQUNDRUxFUkFUSU9OO1xyXG5cclxuICAgICAgaWYgKGhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgLy8gYWZ0ZXIgYW5pbWF0aW9uIGNvbXBsZXRlIC0gcmVtb3ZlIGNoaWxkIGVsZW1lbnRcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlubmVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTcpO1xyXG4gIH1cclxufVxyXG4iXX0=