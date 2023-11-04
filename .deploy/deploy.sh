cd production-project
npm run build:prod

rm -rf /var/www/production-project/html
mv build /var/www/production-project/html