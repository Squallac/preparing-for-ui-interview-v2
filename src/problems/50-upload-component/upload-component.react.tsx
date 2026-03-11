import { useRef, useState } from 'react'
import css from './upload-component.module.css'
import flex from '@course/styles'
import cx from '@course/cx'
import { useFileUpload } from '../49-use-file-upload/use-upload'

/**
 * Expected behavior:
 * - "Select File" button triggers hidden file input
 * - On file select, upload starts automatically via useFileUpload hook
 * - Shows file name, speed, remaining time, progress bar
 * - Pause/Resume/Cancel buttons based on upload status
 * - "Upload Another" button after completion
 */

export const UploadComponent = () => {
  // Step 1: Hook & State — useFileUpload() for [uploadState, uploadControls] + useState<File|null> + fileInputRef
  // Step 2: Handlers:
  //   - handleFileChange: get file from input, setFile, call uploadControls.start(file)
  //   - handleCancel: uploadControls.cancel(), setFile(null), reset input value
  //   - handleResume: uploadControls.resume(file) if file exists
  // Step 3: Format helpers — formatSpeed(KB/s → "X KB/s" or "X MB/s"), formatTime(ms → "Xs left" or "Xm Ys left")
  // Step 4: Render:
  //   - Hidden <input type="file"> with ref
  //   - If no file: "Select File" button that clicks the input
  //   - If file selected: file name, speed/status display, ProgressBar component, error display
  //   - Conditional buttons: Pause (uploading), Resume (paused), Cancel (not completed), Upload Another (completed)
  return <div>TODO: Implement</div>
}
