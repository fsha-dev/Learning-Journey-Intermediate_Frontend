# React Hooks Deep Dive Assignment

## 🎯 Assignment: Live Search with Debounce & Focus Management

This assignment focuses on mastering four essential React hooks by building a practical search component.

## 📚 Learning Objectives

Master the following React hooks through hands-on implementation:

- **useState** - Managing component state
- **useEffect** - Handling side effects and API calls
- **Cleanup Functions** - Preventing memory leaks and race conditions
- **useRef** - DOM manipulation and persistent values across renders

## 🔨 Project Requirements

Build a search input component that searches GitHub users with the following features:

### Core Requirements

1. **State Management (useState)**

   - Track the search input value
   - Store search results
   - Manage loading/error states

2. **Side Effects (useEffect)**

   - Fetch data from GitHub API when user types
   - Implement debouncing (wait 500ms after user stops typing)
   - Handle dependencies correctly

3. **Cleanup Function**

   - Cancel previous API calls if user types again
   - Clear timeouts to prevent memory leaks
   - Ensure no stale data updates

4. **DOM Reference (useRef)**
   - Auto-focus the search input on component mount
   - Store timeout ID without causing re-renders
   - Optionally: track previous search term

### API Endpoint

```
GET https://api.github.com/search/users?q={searchTerm}
```

Response structure:

```json
{
  "total_count": 100,
  "items": [
    {
      "login": "username",
      "avatar_url": "https://...",
      "html_url": "https://github.com/username"
    }
  ]
}
```

## ✨ Bonus Challenges

- [ ] Add a "Clear" button that clears input and refocuses it
- [ ] Display total result count
- [ ] Show user avatars in results
- [ ] Handle empty state with helpful message
- [ ] Add error handling for failed API calls
- [ ] Prevent search for empty or very short queries (< 2 chars)
- [ ] Add keyboard navigation (arrow keys to navigate results)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone this repository

```bash
git clone https://github.com/fsha-dev/Learning-Journey-Intermediate_Frontend.git
cd React\self-assignment\search-app
```

2. Install dependencies

```bash
pnpm install
```

3. Start development server

```bash
pnpm dev
```

4. Open your browser to `http://localhost:5173`

## 🎨 Suggested Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx       # Main search component
│   └── UserList.jsx        # Results display component
├── App.jsx
└── main.jsx
```

## 📝 Implementation Checklist

- [ ] Set up basic component structure
- [ ] Implement useState for input value
- [ ] Add useRef for input focus
- [ ] Create useEffect for API calls
- [ ] Implement debounce logic with setTimeout
- [ ] Add cleanup function to clear timeout
- [ ] Handle API response and update state
- [ ] Display results in a list
- [ ] Add loading state during debounce
- [ ] Test edge cases (empty input, rapid typing)

## 🧪 Testing Your Implementation

Ask yourself:

1. Does the input auto-focus when the component mounts?
2. Does the search wait 500ms after I stop typing?
3. If I type quickly, do old searches get cancelled?
4. Are there any memory leaks or console errors?
5. Does the component handle errors gracefully?

## 📤 Submission

Once completed:

1. Push your code to GitHub
2. Share the repository link
3. Include any notes about challenges faced or solutions found

## 💡 Hints

<details>
<summary>Click to reveal hints if you're stuck</summary>

- Use `setTimeout` inside `useEffect` for debouncing
- Return a cleanup function that calls `clearTimeout`
- Use `useRef` with `.current.focus()` for input focusing
- Remember to add dependencies to the `useEffect` dependency array
- Consider using `AbortController` for cancelling fetch requests (advanced)

</details>

## 📚 Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [GitHub Users Search API](https://docs.github.com/en/rest/search)
- [Understanding useEffect](https://react.dev/reference/react/useEffect)
- [useRef Explained](https://react.dev/reference/react/useRef)

## 🤝 Review Process

After completion, we'll review:

- Correct usage of all four hooks
- Code organization and readability
- Edge case handling
- Best practices and optimization opportunities

---

**Good luck and happy coding! 🚀**

Remember: The goal isn't just to make it work, but to understand _why_ each hook is needed and how they work together.
