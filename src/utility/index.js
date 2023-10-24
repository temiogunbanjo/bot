export const formatAsMoney = (amount) => {
  return Number(amount).toLocaleString("en-us", {
    compactDisplay: "long",
    currency: "usd",
  });
};

export const mergeClassNames = (...classNames) => {
  return classNames
    .reduce((combined, nextClass) => {
      const uniqueClasses = [];
      combined =
        typeof combined === "string" ? combined.split(/\s+/gi) : combined;

      nextClass =
        typeof nextClass === "string" ? nextClass.split(/\s+/gi) : nextClass;

      nextClass.forEach((stringClass) => {
        if (!combined.includes(stringClass)) {
          uniqueClasses.push(stringClass);
        }
      });

      return combined.concat(uniqueClasses);
    })
    .join(" ");
};

export const getInitials = (phrase) => {
  return phrase.split(/\s+/gi).map((word) =>
    word
      .toUpperCase()
      .replace(/[^A-Z]/gi, "")
      .charAt(0)
  );
};
