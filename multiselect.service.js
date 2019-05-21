import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService() {
        this.filteredData = [];
        this.subject = new Subject();
    }
    DataService.prototype.setData = function (data) {
        this.filteredData = data;
        this.subject.next(data);
    };
    DataService.prototype.getData = function () {
        return this.subject.asObservable();
    };
    DataService.prototype.getFilteredData = function () {
        if (this.filteredData && this.filteredData.length > 0) {
            return this.filteredData;
        }
        else {
            return [];
        }
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return []; };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=multiselect.service.js.map