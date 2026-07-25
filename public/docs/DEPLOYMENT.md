# Deployment Guide - inudesu Website

## Quick Deploy Options

### Option 1: Vercel (Recommended - One-Click)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd /Users/jz/inudesu-website

# Deploy
vercel

# Follow the prompts
# Production URL will be generated automatically
```

**Advantages:**
- Zero configuration
- Automatic deployments from Git
- Global CDN
- Free tier available
- Environment management built-in

### Option 2: Netlify

```bash
# Build locally first
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

**Advantages:**
- Generous free tier
- Easy form handling
- CMS integration options
- Fast deployment

### Option 3: Docker + Self-Hosted

```dockerfile
# Create Dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build Docker image
docker build -t inudesu-website .

# Run container
docker run -p 3000:3000 inudesu-website
```

### Option 4: AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Connect GitHub repository
4. Select Next.js framework
5. Deploy

### Option 5: Traditional Server (Node.js)

```bash
# SSH into your server
ssh user@your-domain.com

# Clone repository
git clone https://github.com/your-org/inudesu-website.git
cd inudesu-website

# Install dependencies
npm install --legacy-peer-deps

# Build
npm run build

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start "npm start" --name inudesu-website

# Keep running on reboot
pm2 startup
pm2 save
```

## Pre-Deployment Checklist

### Content Updates
- [ ] Update team member names in Footer
- [ ] Add real GitHub repository link
- [ ] Add demo video URL
- [ ] Update contact email
- [ ] Customize use cases if needed

### Technical
- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check Open Graph preview

### SEO & Metadata
- [ ] Update `metadataBase` in `app/layout.tsx` with real domain
- [ ] Add real Open Graph image
- [ ] Verify favicon displays
- [ ] Check Google Search Console

### Performance
- [ ] Run Lighthouse audit
- [ ] Verify images are optimized
- [ ] Check bundle size
- [ ] Test on slow network

## Environment Variables (if needed)

Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://inudesu.xyz
NEXT_PUBLIC_API_URL=https://api.inudesu.xyz
```

## Domain Setup

### DNS Configuration

1. **For Vercel:**
   ```
   CNAME: cname.vercel-dns.com (auto-generated)
   ```

2. **For Netlify:**
   ```
   CNAME: your-app.netlify.com
   ```

3. **For self-hosted:**
   ```
   A Record: Your Server IP
   CNAME www: your-domain.com
   ```

### SSL Certificate

- Vercel: Automatic (included)
- Netlify: Automatic (included)
- Self-hosted: Use Let's Encrypt (certbot)

```bash
# Let's Encrypt on Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d inudesu.xyz -d www.inudesu.xyz
```

## Post-Deployment

### Monitor & Analytics

Add to Google Analytics (in `app/layout.tsx`):

```tsx
// Add to <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Performance Monitoring

Use:
- [Vercel Analytics](https://vercel.com/analytics)
- [Google Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Sentry](https://sentry.io/) for error tracking

## Common Issues & Solutions

### Issue: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Issue: "Port 3000 already in use"
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Issue: "Build times out"
- Increase build timeout in Vercel/Netlify settings
- Optimize images
- Remove unused dependencies

### Issue: "GSAP animations not smooth"
- Check device GPU acceleration
- Reduce particle count in ParticleBackground
- Test on different browsers

## Maintenance Schedule

### Weekly
- Monitor error logs
- Check performance metrics
- Review analytics

### Monthly
- Security updates
- Update dependencies (with testing)
- Backup configuration

### Quarterly
- Full performance audit
- Browser compatibility testing
- SEO check

## Rollback Procedure

### Vercel
```
Dashboard → Project → Deployments → Select previous → Redeploy
```

### Netlify
```
Site Settings → Deploys → Select version → Restore
```

### Git-based
```bash
git revert <commit-hash>
git push
# Trigger new deployment
```

## Git Workflow (Recommended)

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes
# Test locally: npm run dev

# Commit
git add .
git commit -m "feat: add new section"

# Push
git push origin feature/new-section

# Create pull request on GitHub
# After review, merge to main

# Main branch auto-deploys to production
```

## Team Collaboration

### Development Team
Each developer:
```bash
git clone https://github.com/org/inudesu-website.git
cd inudesu-website
npm install --legacy-peer-deps
npm run dev
```

### Code Review Process
1. Create feature branch
2. Push to GitHub
3. Create pull request
4. Request review (at least 1 person)
5. Merge after approval
6. Auto-deploy to production

### Access Control
- GitHub: Grant repo access to team members
- Vercel: Connect team, share project
- Domain: Use subdomain for staging

## Disaster Recovery

### Backup Strategy
```bash
# Daily backups
0 2 * * * cd /path/to/repo && git pull origin main > /dev/null 2>&1

# Weekly code archive
0 3 * * 0 tar -czf /backups/inudesu-$(date +\%Y\%m\%d).tar.gz /path/to/repo
```

### Restore from Backup
```bash
# From git
git checkout <commit-hash>
npm run build
npm start

# From archive
tar -xzf backup.tar.gz
npm install --legacy-peer-deps
npm run build
npm start
```

## Cost Estimation

| Platform | Cost | Best For |
|----------|------|----------|
| Vercel | Free tier / $20/mo | Startups, demos |
| Netlify | Free tier / $19/mo | Small to medium sites |
| AWS Amplify | Free tier / ~$5-50/mo | Scalable projects |
| Self-hosted VPS | $5-50/mo | Full control |
| Docker (AWS/GCP) | $10-100/mo | Container orchestration |

## Success Metrics

Track after deployment:
- Page load time < 2 seconds
- Lighthouse score > 90
- Mobile performance > 85
- No TypeScript errors
- All links working
- Forms submitting (when added)

---

**Ready to deploy?** Start with Vercel for the fastest, easiest path! 🚀
