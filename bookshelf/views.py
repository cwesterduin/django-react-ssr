# adoption/views.py
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from .models import Book

def index(req):
    context = { "data": {"one": "Does it work?", "two": "I wonder.", "myColor": "pink"} }
    return render(req, 'home.html', context)

def show(req, id):
    book = Book.objects.get(pk=id)
    return HttpResponse(f'<h3>Book number {id}!</h3><p>{book.name} by {book.author}</p>')