
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here. Esto crea todo el crud que necesitaremos
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
