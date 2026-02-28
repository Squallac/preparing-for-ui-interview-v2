# Typeahead (Autocomplete)

**Difficulty**: `Medium`

## Goal

Implement a robust Typeahead (Autocomplete) component that efficiently handles asynchronous API interactions. The component should handle fetching, displaying loading states, and allowing the user to select suggestions via mouse or keyboard.

## Requirements

### Core Functionality

1.  **Async Data Fetching**: Fetch suggestions from a backend API (`/api/typeahead`) as the user types.
2.  **Responsiveness**: Avoid spamming the API and ensure the UI remains responsive (e.g., using debouncing or `useDeferredValue`).
3.  **Race Condition Handling**: Ensure that results from older, slower network requests do not overwrite results from newer, faster requests (e.g., using `AbortController`).
4.  **Loading State**: Display a loading indicator while fetching data.
5.  **Keyboard Navigation**: Allow users to navigate results with Arrow Up/Down and select with Enter/Space. Support Escape to close the list.
6.  **Click Outside**: Close the suggestions list when clicking outside the component.

### API Integration

- **Endpoint**: `GET /api/typeahead`
- **Parameters**: `?query={string}`
- **Behavior**: Returns a JSON array of matching entries, with a simulated network delay.

### Accessibility (A11y)

1.  **ARIA Roles**: Use the `combobox` design pattern.
    - Input: `role="combobox"`, `aria-autocomplete="list"`, `aria-expanded`, `aria-controls`.
    - List: `role="listbox"`.
    - Option: `role="option"`.
2.  **Live Region**: Use a visually hidden `div` with `role="status"` and `aria-live="polite"` to announce the number of results to screen readers.
3.  **Visual Feedback**: Ensure focus states and hover effects are clear.

## Solution Approach

### 1. React Implementation

- **Hooks**: `useState`, `useEffect`, `useRef`, `useDeferredValue`.
- **Keyboard & Blur**: Attach event listeners for `keydown` and manage focus/click outside.
- **Race Conditions**: Use `AbortController` in the `useEffect` cleanup function to cancel stale API requests.

### 3. Vanilla Implementation

- **Class-based Component**: Extend a base `Component` class.
- **Event Handling**: Register `input` listeners via the constructor configuration.
- **DOM Manipulation**: Manually manage the DOM nodes for the list and live region updates.

## Verification

1.  **Typing**: Type "ap" -> expect "apple", "apricot", etc.
2.  **Network**: Rapidly type "apple" -> expect previous network requests to be canceled or ignored.
3.  **Race Condition**: Type "a" (slow response) then "ab" (fast response) -> ensure results for "ab" are shown, not "a".
4.  **Keyboard**: Type to get results, use Arrow Down to select, hit Enter -> input should be populated.
5.  **Click Outside**: Open suggestions, click elsewhere -> list should close.
6.  **Accessiblity**: Use a screen reader (or inspect DOM) to verify `aria-live` announces result counts.
