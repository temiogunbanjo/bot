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

export const generateIdFromName = (name) => {
  return name
    ?.trim()
    ?.toLowerCase()
    ?.replace(/[^0-9a-z]/gi, "-");
};

export const generateRandomColor = () => {
  const MAX = 205;
  const MIN = 10;
  const redValue = Math.floor(Math.random() * MAX) + MIN; // 10 - 205
  const greenValue = Math.floor(Math.random() * MAX) + MIN; // 10 - 205
  const blueValue = Math.floor(Math.random() * MAX) + MIN; // 10 - 205

  return `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

export const sanitizePayload = (payload) => {
  const sanitizedPayload = {};
  Object.entries(payload).forEach(([key, value]) => {
    if (!!value || typeof value === "boolean") {
      sanitizedPayload[key] = value;
    }
  });
  return sanitizedPayload;
};