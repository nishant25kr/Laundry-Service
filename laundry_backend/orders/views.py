from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from datetime import datetime

@api_view(['POST'])
def place_order(request):
    try:
        data = request.data
        pickup_dt = datetime.fromisoformat(data.get("pickup_datetime")) if data.get("pickup_datetime") else None
        delivery_dt = datetime.fromisoformat(data.get("delivery_datetime")) if data.get("delivery_datetime") else None


        # Create the order document
        order = Order(
            name=data.get("name"),
            phone=data.get("phone"),
            email=data.get("email"),
            pickup_address=data.get("pickup_address"),
            pickup_datetime=pickup_dt,
            delivery_address=data.get("delivery_address"),
            delivery_datetime=delivery_dt,
            clothes=data.get("clothes", {}),
            services=data.get("services", []),
            notes=data.get("notes"),
            payment_mode=data.get("payment_mode"),
            status="pending",
        )
        order.save()

        return Response({
            "message": "Order placed successfully",
            "order_id": str(order.id)
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        return Response({
            "error": str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)






@api_view(['GET'])
def get_all_orders(request):
    try:
        orders = Order.objects.all()
        order_list = []

        for order in orders:
            order_list.append({
                "id": str(order.id),
                "name": order.name,
                "phone": order.phone,
                "pickup_address": order.pickup_address,
                "pickup_datetime": order.pickup_datetime.isoformat() if order.pickup_datetime else None,
                "delivery_address": order.delivery_address,
                "delivery_datetime": order.delivery_datetime.isoformat() if order.delivery_datetime else None,
                "clothes": order.clothes,
                "services": order.services,
                "payment_mode": order.payment_mode,
                "status": order.status,
                "created_at": order.created_at.isoformat() if order.created_at else None,
            })

        return Response(order_list, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignupSerializer  # Ensure serializers.py exists and has SignupSerializer

@api_view(['POST'])
def signup_user(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# orders/views.py
# from .serializers import LoginSerializer

# @api_view(['POST'])
# def login_user(request):
#     serializer = LoginSerializer(data=request.data)
#     if serializer.is_valid():
#         return Response({
#             "message": "Login successful",
#             "user": serializer.validated_data
#         }, status=status.HTTP_200_OK)
#     return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)
