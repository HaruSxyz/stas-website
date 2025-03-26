from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseForbidden
from projects.models import Project
from projects.forms import ProjectForm
from django.conf import settings

# Home Page (Project List)
def project_list(request):
    projects = Project.objects.all()
    return render(request, 'index.html', {'projects': projects})

# Project details page
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'projects/projects_details.html', {'project': project})

# Form for adding a new project
def add_project(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST, request.FILES)
        if form.is_valid():
            if form.cleaned_data['password'] != settings.PROJECT_UPLOAD_PASSWORD:
                return HttpResponseForbidden("Incorrect password")
            form.save()
            return redirect('project_list')
        else:
            print("Form errors:", form.errors)
    else:
        form = ProjectForm()
    return render(request, 'projects/add_project.html', {'form': form})