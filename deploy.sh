#!/usr/bin/env bash

# ==============================================================================
# Voltoria AI — One-Click Production Deployment Script
# ==============================================================================

set -e

# ANSI Color Codes
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "\n${CYAN}====================================================${NC}"
echo -e "${CYAN}      VOLTORIA AI — PRODUCTION DEPLOYMENT START    ${NC}"
echo -e "${CYAN}====================================================${NC}\n"

# 1. Pull latest code from GitHub
echo -e "${YELLOW}>>> [1/6] Pulling latest code from Git (main)...${NC}"
git pull origin main

# 2. Install / update PHP composer dependencies
echo -e "${YELLOW}>>> [2/6] Optimizing Composer dependencies...${NC}"
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# 3. Run database migrations
echo -e "${YELLOW}>>> [3/6] Running database migrations...${NC}"
php artisan migrate --force

# 4. Clear and rebuild Laravel caches
echo -e "${YELLOW}>>> [4/6] Optimizing Laravel application caches...${NC}"
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# 5. Install NPM packages and build frontend assets
echo -e "${YELLOW}>>> [5/6] Building production frontend assets (Vite)...${NC}"
npm install
npm run build

# 6. Fix permissions for storage and bootstrap cache
echo -e "${YELLOW}>>> [6/6] Securing storage & cache permissions...${NC}"
chmod -R 775 storage bootstrap/cache 2>/dev/null || true

echo -e "\n${GREEN}====================================================${NC}"
echo -e "${GREEN}  ✓ VOLTORIA AI DEPLOYMENT COMPLETED SUCCESSFULLY!  ${NC}"
echo -e "${GREEN}====================================================${NC}\n"
