from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    # Delete image in file from admin
    def delete_queryset(self, request, queryset):
        for obj in queryset:
            obj.delete()