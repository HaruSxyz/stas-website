from django.db import models
from django.conf import settings
import os

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('game', 'Game'),
        ('app', 'Application'),
        ('coming', 'Coming Soon'),
    ]

    title = models.CharField(max_length=50, verbose_name="Project name")
    description = models.TextField(verbose_name="Description")
    image = models.ImageField(upload_to='projects_images/', blank=True, null=True, default='projects_images/default_project_image.png', verbose_name="Project image")
    tools = models.CharField(max_length=255, verbose_name="Tools (comma separated)")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='coming', verbose_name="Category")

    def __str__(self):
        return self.title
    
    def delete(self, *args, **kwargs):
        if self.image and 'default_project_image.png' not in self.image.name:
            if os.path.isfile(self.image.path):
                os.remove(self.image.path)
        super().delete(*args, **kwargs)