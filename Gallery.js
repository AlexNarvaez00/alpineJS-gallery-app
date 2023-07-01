import service from "./MortyService";
/**
 * Gallery component
 */
document.addEventListener("alpine:init", () => {
  /**
   * Gallery component
   */
  Alpine.data("gallery", () => ({
    elements: [],
    page: 1,
    init() {
      service.getAllItems().then((res) => {
        const { data } = res;
        this.elements = data;
      });
    },
    next(event) {
      event.preventDefault();

      service.getAllItems(this.page + 1).then((res) => {
        const { data } = res;
        this.elements = data;
      });
      this.page++;
    },
    prev(event) {
      event.preventDefault();
      if (this.page == 1) {
        return;
      }
      service.getAllItems(this.page - 1).then((res) => {
        const { data } = res;
        this.elements = data;
      });
      this.page--;
    },
  }));
});
