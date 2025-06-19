from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from datetime import datetime

@api_view(['POST'])
def place_order(request):
    try:
        data = request.data

        # Safely parse pickup and delivery datetimes
        # pickup_dt = datetime.fromisoformat(data.get("pickup_datetime")) if data.get("pickup_datetime") else None
        # delivery_dt = datetime.fromisoformat(data.get("delivery_datetime")) if data.get("delivery_datetime") else None

        # Create the order document
        order = Order(
            name=data.get("name"),
            phone=data.get("phone"),
            email=data.get("email"),
            # pickup_address=data.get("pickup_address"),
            # pickup_datetime=pickup_dt,
            # delivery_address=data.get("delivery_address"),
            # delivery_datetime=delivery_dt,
            # clothes=data.get("clothes", {}),
            # services=data.get("services", []),
            # notes=data.get("notes"),
            # payment_mode=data.get("payment_mode"),
            # status="pending",
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
