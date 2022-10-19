export const uiTodo = (todo, description) => {
  return `todo: ${todo} - description: ${description}`;
};

export const createEl = (type, text, className) => {
  const newEl = document.createElement(type);
  newEl.classList.add(className);
  newEl.textContent = text;
  return newEl;
};


