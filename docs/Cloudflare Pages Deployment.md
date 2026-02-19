# Deploying the Site via Cloudflare Pages

The site (`site/`) is an Astro 5 static site deployed to Cloudflare Pages using Wrangler (no direct GitHub integration).

## Prerequisites

- A Cloudflare account
- A Cloudflare API token with **Cloudflare Pages: Edit** permission

## Local Deploy with Wrangler

### Install Wrangler

```sh
pnpm add -g wrangler
wrangler login
```

### Build and Deploy

```sh
# From the repository root
pnpm --filter site build
wrangler pages deploy site/dist --project-name=hugios-web
```


### Deploy a Preview

```sh
wrangler pages deploy site/dist --project-name=hugios-web --branch=feature-branch
```

This produces a URL like `feature-branch.hugios-web.pages.dev`.

## GitHub Actions (CI/CD)

Automated deploys run on every push to `main` via `.github/workflows/deploy.yml`. This uses `cloudflare/wrangler-action` with an API token — Cloudflare never has direct access to the GitHub repo.

### Required Secrets

Add these in **GitHub > Settings > Secrets and variables > Actions**:

- `CLOUDFLARE_API_TOKEN` — Create at [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) with the **Cloudflare Pages: Edit** permission
- `CLOUDFLARE_ACCOUNT_ID` — Found on the Cloudflare dashboard overview page

## Custom Domain

1. In the Cloudflare dashboard, go to **Workers & Pages > hugios-web > Custom domains**
2. Click **Set up a custom domain** and enter your domain
3. Cloudflare automatically configures the DNS record (CNAME to `hugios-web.pages.dev`)

If the domain is already on Cloudflare DNS, it activates immediately. External domains require updating nameservers.

## Rollbacks

Cloudflare Pages keeps every deployment. To roll back:

1. Go to **Workers & Pages > hugios-web > Deployments**
2. Find the target deployment and click **Rollback to this deployment**

## Notes

- Astro's default output mode is `static`, which is what Cloudflare Pages expects. No adapter is needed.
- Build output lands in `site/dist/` by default.
- The previous deployment used IPFS via Pinata with Cloudflare DNS. That approach has been replaced by Cloudflare Pages.
