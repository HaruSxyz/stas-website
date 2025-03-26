from django import forms
from .models import Project

class ProjectForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, required=True)
    class Meta:
        model = Project
        fields = ['title', 'description', 'image', 'tools', 'category']
        widgets = {
            'tools': forms.TextInput(attrs={'placeholder': 'For example: Python, Django, PostgreSQL'}),
            'category': forms.Select(choices=Project.CATEGORY_CHOICES),
        }