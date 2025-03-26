from django.urls import path, include
from django.contrib import admin

from django.conf.urls.static import static
from django.conf import settings

from projects.views import project_list
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('projects.urls')),
    path('', project_list, name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)