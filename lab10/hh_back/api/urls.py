from django.urls import path
from . import views_fbv, views_cbv

urlpatterns = [
    path('companies/', views_fbv.company_list_create),
    path('companies/<int:id>/', views_fbv.company_detail_update_delete),
    
    path('vacancies/', views_cbv.VacancyListCreate.as_view()),
    path('vacancies/<int:pk>/', views_cbv.VacancyDetail.as_view()),
]
