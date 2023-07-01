import tailwindIcon from "./public/icons/tailwind.svg";
import alpineJSIcon from "./public/icons/alpineJs.svg";
import axiosIcon from "./public/icons/axios.svg";

document.addEventListener("alpine:init", () => {
  /**
   * Technologies component
   */
  Alpine.data("technologies", () => ({
    elements: [
      {
        img: tailwindIcon,
        label: "Tailwind CSS",
      },
      {
        img: alpineJSIcon,
        label: "Alpine JS",
      },
      {
        img: axiosIcon,
        label: "Axios JS",
      },
    ],
  }));
});
