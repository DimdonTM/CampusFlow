/* ОСНОВНАЯ РАБОТА: реализуйте переключение темы без библиотеки.
 * "auto" означает отсутствие атрибута data-theme у <html>.
 * В таком случае тёмную тему применяет CSS media query.
 * Настройку нужно сохранять в localStorage (ключ "atlas-theme").
 */
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

function applyTheme(choice) {
  if (choice === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.dataset.theme = choice;
  }
  themeSelect.value = choice;
}

let savedTheme = 'auto';
try {
  savedTheme = localStorage.getItem('atlas-theme');
} catch (error) {
  savedTheme = 'auto';
}
if (!['auto', 'light', 'dark'].includes(savedTheme)) {
  savedTheme = 'auto';
}
applyTheme(savedTheme);

themeSelect.addEventListener('change', () => {
  applyTheme(themeSelect.value);
  try {
    localStorage.setItem('atlas-theme', themeSelect.value);
  } catch (error) {
    // сохранить не получилось, но тема уже переключилась
  }
});


/* Обратная связь от кнопки — уже готова. */
demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});



/* Плотность интерфейса. */
const densitySelect = document.querySelector('#density-select');

function applyDensity(choice) {
  if (choice === 'compact') {
    root.dataset.density = 'compact';
  } else {
    root.removeAttribute('data-density');
  }
  densitySelect.value = choice;
}

let savedDensity = 'normal';
try {
  savedDensity = localStorage.getItem('atlas-density');
} catch (error) {
  savedDensity = 'normal';
}
if (!['normal', 'compact'].includes(savedDensity)) {
  savedDensity = 'normal';
}
applyDensity(savedDensity);

densitySelect.addEventListener('change', () => {
  applyDensity(densitySelect.value);
  try {
    localStorage.setItem('atlas-density', densitySelect.value);
  } catch (error) {
    // сохранить не получилось, но плотность уже переключилась
  }
});