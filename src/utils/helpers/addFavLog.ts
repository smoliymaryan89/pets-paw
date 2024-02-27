const addFavLog = (action: string, id: string): void => {
  if (typeof window !== "undefined") {
    const favHistory = JSON.parse(
      window.localStorage.getItem("fav-history") || "[]"
    );

    favHistory.push({
      action,
      id,
      created_at: new Date(),
    });

    window.localStorage.setItem("fav-history", JSON.stringify(favHistory));
  }
};

export default addFavLog;
