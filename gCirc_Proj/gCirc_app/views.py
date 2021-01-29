from django.shortcuts import render
from django.views.generic import View, TemplateView
import requests
# Create your views here.

class IndexView(TemplateView): 
    template_name = 'gCirc_app/gCirc_index.html'

    def get_context_data(self, **kwargs): 
        context = super().get_context_data(**kwargs)
        context['inject_me'] = 'Basic Injection'

        return context


class OneEditGameView(TemplateView): 
    template_name = 'gCirc_app/one_edit.html'

    