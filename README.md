# Task Creation Form

Этот проект представляет собой форму для создания задач, использующую Next.js, TypeScript, Vite и Tailwind CSS. Форма отправляет данные на API для создания новых задач, с возможностью настройки автоматических ответов.

## Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/veluat/test-form-capture.git
   cd your-repo-directory
   ```
   
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Запустите проект:**
   ```bash
   npm run dev
   ```
4. **Откройте браузер** и перейдите по адресу http://localhost:3000.

## Использование
- Заполните все обязательные поля формы.
- Включите опцию "Все автоматические ответы", если хотите использовать автоответы.
- Если автоответы отключены, заполните поле с правилами в формате JSON.
- Нажмите кнопку "Отправить", чтобы создать задачу.

## Пример структуры JSON для правил:
   ```json
  {
   "budget_from": 5000,
   "budget_to": 8000,
   "deadline_days": 5,
   "qty_freelancers": 1
}
   ```