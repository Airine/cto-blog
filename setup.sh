#!/bin/bash
# Setup script for CTO Blog
# Run this after cloning the repo

echo "Installing dependencies..."
npm install

echo "Adding shadcn/ui components..."
npx shadcn@latest add -y \
  accordion alert-dialog alert aspect-ratio avatar badge \
  breadcrumb button calendar card carousel chart checkbox \
  collapsible command context-menu dialog drawer dropdown-menu \
  empty field form hover-card input input-group input-otp \
  item kbd label menubar navigation-menu pagination popover \
  progress radio-group resizable scroll-area select separator \
  sheet sidebar skeleton slider sonner spinner switch table \
  tabs textarea toggle toggle-group tooltip

echo "Setup complete! Run 'npm run dev' to start development."
