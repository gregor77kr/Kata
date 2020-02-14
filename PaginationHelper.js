/**
 * @link {https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript}
 */

// The constructor takes in an array of items and a integer indicating how many items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    if(!(this instanceof PaginationHelper)) { 
        return new PaginationHelper(collection, itemsPerPage); 
    }

    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount()/this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let maxPageIndex = this.pageCount() - 1;
    if (this.itemCount() == 0 || pageIndex > maxPageIndex || pageIndex < 0) {
        return -1;
    } 

    return (pageIndex < maxPageIndex) ? this.itemsPerPage : (this.itemCount() % this.itemsPerPage);
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    let itemCount = this.itemCount();
    if (itemCount == 0 || itemIndex > itemCount || itemIndex < 0) {
        return - 1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
}