export const openClaudde = () => {
  if (typeof window === "undefined") return;

  window.Claudde?.open();

  if (!window.Claudde) {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }
};
