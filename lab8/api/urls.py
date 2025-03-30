from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProductsList, like_product

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', CategoryProductsList.as_view(), name='category-products-list'),
    path('products/<int:pk>/like/', like_product, name='like-product'),
]
