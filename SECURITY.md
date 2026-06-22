# Security Policy

## Supported Surface

This project is a static portfolio/starter. The production build has no custom server runtime and no private API routes. Security review still covers dependency updates, public links, contact surfaces, and CI/CD secrets.

## Reporting Issues

Please open a private report if GitHub security advisories are enabled for the repository. If not, contact the maintainer through the public contact channels listed on the live site.

Do not include secrets, private credentials, or personal data in public issues.

## Dependency Advisories

Run:

```bash
npm audit --audit-level=moderate
```

Known current note: npm may report a moderate advisory through Next.js' internal `postcss` dependency even when using the newest published Next.js version available to this project. Do not run `npm audit fix --force` if it proposes downgrading Next.js across major versions. Prefer upgrading to the next patched Next.js release when available.

## Secrets

Required deployment secrets live only in GitHub Actions:

- `FIREBASE_SERVICE_ACCOUNT`
- `FIREBASE_PROJECT_ID`

Do not commit service-account JSON, `.env` files, tokens, private keys, or analytics credentials.
