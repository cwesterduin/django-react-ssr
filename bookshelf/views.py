# adoption/views.py
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from .models import Book
from django.core import serializers

def index(req):
    books = list(Book.objects.all().values('name', 'author__name'))
    context = { "data": {"one": "Does it work?", "two": "I wonder.", "myColor": "pink", "books": books} }
    return render(req, 'home.html', context)


def about(req):
    return render(req, 'home.html')

def show(req, id):
    book = Book.objects.get(pk=id)
    context = { "data": {"book": str(book), "author": str(book.author)} }
    return render(req, 'home.html', context)
    