from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsList(generics.ListAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)
@api_view(['POST'])
def like_product(request, pk):
    try:
        product = Product.objects.get(pk=pk)
        product.likes += 1
        product.save()
        return Response({'status': 'success', 'likes': product.likes})
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)
