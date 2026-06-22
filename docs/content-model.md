# Content Model

## Profile (`lib/profile.ts`)

### `ProfileIdentity`

- `fullName`
- `roleLabel`
- `headline`
- `location`
- `email`
- `website`
- `summary`
- `openTo`
- `languages`

### `ProfileMetric`

- `label`
- `value`
- `context`
- `status` (`pending` | `verified`)

### `ExperienceItem`

- `company`
- `role`
- `period`
- `location`
- `highlights[]`
- `activeInProduction?`
- `statusNote?`

### `ActivePlatformItem`

- `name`
- `status` (`Active in Production`)
- `note`

### `CaseStudyHighlight`

- `slug`
- `title`
- `summary`
- `outcome`
- `impactMetrics[]`
- `evidenceStatus`

### `ContactChannel`

- `type` (`email` | `linkedin` | `github`)
- `label`
- `href`
- `status`
- `primary?`

## Proof (`lib/proof.ts`)

### `ProofStatus`

- `pending`
- `verified`

### `ProofItem`

- `id`
- `label`
- `status`
- `href?`
- `note`
- `source?`

Validation rule:

- `verified` proof entries must include a valid `href` (`https://` or `mailto:`).

Current public configuration:

- Portfolio content is published with verified proof values.
- `pending` remains available for future compatibility.

## Case Studies (`lib/caseStudies.ts`)

`CaseStudyMetadata` includes:

- `impactMetrics[]`
- `stack[]`
- `evidenceStatus`
- `activeInProduction?`

MDX body convention:

1. Context
2. Problem
3. Constraints
4. Approach
5. Results
6. Learnings

## External Links (`lib/links.ts`)

- Stores all public-facing channels with proof status.
- Current verified store links:
  - Google Play: `https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419`
  - App Store (Bolivia): `https://apps.apple.com/bo/app/digiapp-bolivia/id1527479911`
