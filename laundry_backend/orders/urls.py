# orders/urls.py

from django.urls import path
from .views import place_order,get_all_orders
# from .views import login_user
# from .views import customer_signup




urlpatterns = [
    path("place-order/", place_order),
    path("all-orders/", get_all_orders),
    # path("login/", login_user),
    #  path("signup/", customer_signup),
]
