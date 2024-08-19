from rest_framework import viewsets
from .models import Shoe
from .serializers import ShoeSerializer



class ShoeViewSet(viewsets.ModelViewSet):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer

# Create your views here.

