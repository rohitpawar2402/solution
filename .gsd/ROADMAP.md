# ROADMAP.md

> **Current Phase**: 3
> **Milestone**: v1.0.2 - Repo Upload

## Must-Haves (from SPEC)

- [x] Convert "10 to 12" to "Ten to Twelve"
- [x] Convert other ranges for consistency (e.g., "2 to 3")
- [ ] Push codebase to GitHub

## Phases

### Phase 1: content Standardization

**Status**: ✅ Completed
**Objective**: Update `src/data/serviceData.js` and verify.
**Tasks**:

- [x] Search and replace "10 to 12 Working Days" with "Ten to Twelve Working Days"
- [x] Search and replace other numeric ranges with words
- [x] Verify syntax and consistency

### Phase 2: UI Styling

**Status**: ✅ Completed
**Objective**: Update UI components to show delivery period in black.
**Tasks**:

- [x] Create a new CSS class for delivery period values or update existing ones.
- [x] Update `ServiceDetail.jsx` and `DigitalSignature.jsx`.
- [x] Verify visual consistency.

### Phase 3: Repository Upload

**Status**: 🏗️ In Progress
**Objective**: Commit changes and push to GitHub.
**Tasks**:

- [ ] Stage all modified and new files (including GSD docs).
- [ ] Commit with message describing the standardization and styling changes.
- [ ] Push to `origin master`.
