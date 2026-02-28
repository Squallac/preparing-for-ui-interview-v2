# File Upload Hook

**Difficulty**: `medium`

## Goal

Build a custom React hook `useFileUpload` that encapsulates the complex logic of managing a chunked file upload. The hook will abstract away `XMLHttpRequest` logic, pausing/resuming, and calculating upload speed and estimated remaining time.

## Requirements

### Core Functionality

1. **State Management**: Track upload `status` (`'idle' | 'uploading' | 'paused' | 'completed' | 'cancelled' | 'error'`), `progress` (0-100), `speed` (KB/s), uploaded `bytes`, `remainingTimeMs`, and an `error` string.
2. **Control Functions**: Provide `start(file)`, `pause()`, `resume(file)`, and `cancel()` functions to imperatively control the upload process.
3. **Resumable Uploads**: The hook should be able to resume an upload from where it left off, by keeping track of the bytes successfully uploaded so far and using `File.slice()`.
4. **XMLHttpRequest integration**: Under the hood, the hook needs to create an `XMLHttpRequest` targeting `http://localhost:3000/api/upload` to send the file data and listen to its `upload.onprogress`, `onload`, `onerror`, and `onabort` events.

## API Design

The hook does not take any configuration object.

It should return the following tuple:

```typescript
[
  state: TUploadState,
  controls: TUploadControls
]
```

### Types

```typescript
export type TUploadStatus = 'idle' | 'uploading' | 'paused' | 'completed' | 'cancelled' | 'error'

type TUploadState = {
  status: TUploadStatus
  progress: number
  speed: number // in KB/s
  bytes: number
  remainingTimeMs: number | null
  error: string | null
}

type TUploadControls = {
  start: (file: File, from?: number) => void
  pause: () => void
  resume: (file: File) => void
  cancel: () => void
}
```

## Setup

Complete the hook implementation in `solution/use-upload.ts`. There are no UI components to render for this problem directly; it's purely a logic exercise.
