# ROADMAP.md

> **Current Phase**: 1
> **Milestone**: v1.0.1 - Content Standardization

## Must-Haves (from SPEC)

- [x] Convert "10 to 12" to "Ten to Twelve"
- [x] Convert other ranges for consistency (e.g., "2 to 3")

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
