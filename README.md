# stas-website
Personal website with the function of uploading and demonstrating projects, with beautiful animations

⚠️ **Note:** Project is in active development. Some dependencies might be missing.

## Requirements
- Python 3.10+
- Node.js 16+
- npm 8+

## Backend Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Database setup
cd backend/
python manage.py makemigrations
python manage.py migrate

# Setting up SECRET_KEY
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
▸ Enter this in your .env: SECRET_KEY=...

## Frontend Setup
```bash
cd frontend/

# Install packages
npm install

# Development mode (SCSS watch + JS build)
npm run sass-watch & npm run build
```

## Launch Application
```bash
# Collect static files (for prodaction) (NOT WORKING)
python manage.py collectstatic

# Start server
python manage.py runserver
```

**Access:** http://localhost:8000

## Misc

You can create 'default_project_image.png' in backend/static/media/projects_images/
for projects that will not have an image uploaded.

## Troubleshooting
▸ Browser hard reload: Ctrl + Shift + R / Cmd + Shift + R
▸ Cache issues: python manage.py clear_cache
▸ Styles not loading? **Check:**
    -Is npm run sass-watch running
    -Is static build done
    -Are there any errors in the browser console