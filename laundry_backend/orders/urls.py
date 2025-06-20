# orders/urls.py

from django.urls import path
from .views import place_order,get_all_orders
from .views import signup_user

urlpatterns = [
    path("place-order/", place_order),
    path("all-orders/", get_all_orders),
    path('signup/', signup_user),

]
