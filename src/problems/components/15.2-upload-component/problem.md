# Upload Component

**Difficulty**: `easy`

## Goal

Build a complete File Upload UI component utilizing a custom hook.

## Requirements

### Core Functionality

1. **Drag & Drop**: Provide a drop zone area that visually reacts when files are dragged over it.
2. **File Selection**: Allow selecting files via a hidden `<input type="file">` triggered by a button.
3. **Progress Indication**: Display a `ProgressBar` while uploading.
4. **State Handling**: Show the current upload speed, estimated time remaining, and allow the user to Pause, Resume, or Cancel the upload.
5. **Hook Integration**: This component should rely _entirely_ on the provided `useFileUpload` hook to manage the upload logic.

### Accessibility (A11y)

1. Ensure the file input is navigable via keyboard.
2. Use ARIA attributes to report upload status changes.

## Hook Dependency

You must import and use the hook from `15.1-use-file-upload`.

## Verification

1. Dragging a file over the drop zone highlights the area.
2. Dropping a file initializes the upload and renders the progress bar.
3. Clicking the pause/resume buttons updates the progress state correctly.
